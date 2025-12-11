'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

/**
 * Robust texture loader:
 * - tries multiple candidate URLs
 * - logs progress
 * - returns a fallback texture on failure
 */
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
                // configure texture for modern three (r152+)
                try {
                  t.center.set(0.5, 0.5);
                  t.rotation = 0;
                  t.minFilter = THREE.LinearFilter;
                  t.magFilter = THREE.LinearFilter;
              
                  if (THREE.SRGBColorSpace) t.colorSpace = (THREE as any).SRGBColorSpace;
                  const maxAniso = gl.capabilities?.getMaxAnisotropy?.() ?? 1;
                  t.anisotropy = maxAniso;
                } catch (e) {
                  console.warn('Texture config warning', e);
                }
                setTex(t);
                console.info('Loaded mandala texture from:', url);
                resolve();
              },
              undefined,
              (err) => {
                console.warn('TextureLoader failed for', url, err);
                reject(err);
              }
            );
          });
          // stop trying more once one URL succeeds
          return;
        } catch (_) {
          // try next candidate
        }
      }

      // all candidates failed -> create 1x1 fallback texture so scene still renders
      console.error('All texture candidates failed:', candidates);
      if (!mounted) return;
      const size1 = document.createElement('canvas');
      size1.width = 1;
      size1.height = 1;
      const ctx = size1.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 1, 1);
      }
      const fallback = new THREE.CanvasTexture(size1);
      fallback.needsUpdate = true;
      setTex(fallback);
    })();

    return () => {
      mounted = false;
    };
  }, [candidates.join('|'), gl]);

  return tex;
}

function RotatingMandala() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  // Candidate URLs to try (order matters)
  // 1) public folder typical path
  // 2) with NEXT_PUBLIC_BASE_PATH if you use basePath (set this env var in runtime if needed)
  // 3) a src-relative path (sometimes used when bundler emits asset)
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim();
  const candidates = [
    '/images/mada.png',
    basePath ? `${basePath}/images/mada.png` : '',
    '/src/images/mada.png',
    '/assets/images/mada.png',
  ].filter(Boolean);

  const texture = useRobustTexture(candidates);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z += delta * 0.3;
  });

  return (
    <mesh ref={meshRef} frustumCulled={false}>
      <circleGeometry args={[1.4, 128]} />
      <meshBasicMaterial map={texture ?? undefined} transparent toneMapped={false} />
    </mesh>
  );
}

export default function MandalaCanvas() {
  return (
    <Canvas gl={{ antialias: true, alpha: true }} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <OrthographicCamera makeDefault position={[0, 0, 10]} />
      <RotatingMandala />
    </Canvas>
  );
}
