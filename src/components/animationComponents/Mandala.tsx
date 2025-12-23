"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';



function useRobustTexture(candidates: string[]) {

  
  const { gl } = useThree();
  const [tex, setTex] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let mounted = true;
    const loader = new THREE.TextureLoader();

    (async () => {
      for (const url of candidates) {
        try {
          await new Promise<void>((resolve, reject) => {
            loader.load(
              url,
              (t) => {
                if (!mounted) return;

                // Basic texture tuning
                t.center.set(0.5, 0.5);
                t.rotation = 0;
                t.minFilter = THREE.LinearFilter;
                t.magFilter = THREE.LinearFilter;
                t.anisotropy = gl.capabilities?.getMaxAnisotropy?.() ?? 1;

                // Ensure texture is treated as RGBA and preserves alpha
                t.format = THREE.RGBAFormat;
                t.premultiplyAlpha = true;
                if ('colorSpace' in t) {
                  (t as any).colorSpace = THREE.SRGBColorSpace;
                }

                // If the source image doesn't contain an alpha channel, try to
                // remove solid white (or near-white) background by drawing into
                // a canvas and setting those pixels' alpha to 0.
                try {
                  const img = (t as any).image as HTMLImageElement | HTMLCanvasElement | undefined;
                  if (img && img.width && img.height) {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                      ctx.drawImage(img, 0, 0);
                      const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
                      const data = id.data;

                      // Detect if there's any non-opaque alpha present
                      let hasAlpha = false;
                      for (let i = 3; i < data.length; i += 4) {
                        if (data[i] < 255) { hasAlpha = true; break; }
                      }

                      if (!hasAlpha) {
                        // Convert near-white pixels to transparent
                        const threshold = 245; // tolerate slight compression artifacts
                        for (let i = 0; i < data.length; i += 4) {
                          const r = data[i], g = data[i + 1], b = data[i + 2];
                          if (r >= threshold && g >= threshold && b >= threshold) {
                            data[i + 3] = 0;
                          }
                        }

                        ctx.putImageData(id, 0, 0);

                        const newTex = new THREE.CanvasTexture(canvas);
                        newTex.needsUpdate = true;
                        newTex.format = THREE.RGBAFormat;
                        newTex.premultiplyAlpha = true;
                        newTex.minFilter = t.minFilter;
                        newTex.magFilter = t.magFilter;
                        newTex.anisotropy = t.anisotropy;
                        if ('colorSpace' in newTex) (newTex as any).colorSpace = (t as any).colorSpace;

                        setTex(newTex);
                        console.info('✅ Mandala texture loaded (white background removed):', url);
                        resolve();
                        return;
                      }
                    }
                  }
                } catch (e) {
                  // If anything goes wrong, fall back to the original texture
                  console.warn('⚠️ White-to-alpha conversion failed, using original texture', e);
                }

                // Default: use the loaded texture directly
                setTex(t);
                console.info('✅ Mandala texture loaded:', url);
                resolve();
              },
              undefined,
              (err) => {
                console.warn('❌ Texture failed:', url);
                reject(err);
              }
            );
          });
          return;
        } catch (_) {}
      }

      // Fallback gradient (transparent center)
      console.warn('📱 Using fallback mandala');
      if (!mounted) return;
      
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Radial gradient with transparent center
        const gradient = ctx.createRadialGradient(256, 256, 50, 256, 256, 256);
        gradient.addColorStop(0, 'rgba(243, 184, 134, 0.9)');
        gradient.addColorStop(0.3, 'rgba(232, 155, 124, 0.8)');
        gradient.addColorStop(0.7, 'rgba(212, 91, 74, 0.4)');
        gradient.addColorStop(1, 'rgba(212, 91, 74, 0)');
        
        ctx.fillStyle = gradient as CanvasGradient;
        ctx.fillRect(0, 0, 512, 512);
      }
      
      const fallback = new THREE.CanvasTexture(canvas);
      fallback.format = THREE.RGBAFormat;
      fallback.premultiplyAlpha = true;
      fallback.needsUpdate = true;
      if (mounted) setTex(fallback);
    })();

    return () => {
      mounted = false;
    };
  }, [candidates.join('|'), gl]);

  return tex;
}

function RotatingMandala() {
  const meshRef = useRef<THREE.Mesh | null>(null);
  
  const candidates = [
    '/images/mandala.png',
    '/images/mada.png',  // Your original filename
  ];

  const texture = useRobustTexture(candidates);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} frustumCulled={false}>
      <circleGeometry args={[2.8, 256]} /> {/* Higher segments for smooth edges */}
      <meshBasicMaterial 
        map={texture}
        transparent={true}
        alphaTest={0.1}        // ✅ Cuts off transparent pixels
        opacity={1.0}
        toneMapped={false}
        side={THREE.DoubleSide}
        depthWrite={false}     // ✅ Prevents z-fighting with background
      />
    </mesh>
  );
}

export default function MandalaCanvas() {
  return (
    <Canvas 
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }} 
      onCreated={({ gl }) => {
        // Ensure the draw buffer is cleared with a zero-alpha background
        gl.setClearColor(new THREE.Color(0x000000), 0);
      }}
      camera={{ position: [0, 0, 5], near: 0.1, far: 100 }}
      style={{ 
        position: 'absolute', 
        inset: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'none',
        background: 'transparent'
      }}
    >
      {/* Transparent scene background (handled via gl.clearColor) */}
      <ambientLight intensity={0.8} />
      <RotatingMandala />
    </Canvas>
  );
}
