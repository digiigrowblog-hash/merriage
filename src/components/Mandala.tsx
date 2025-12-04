'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera, useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingMandala() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/images/manda.png'); // export mandala PNG with transparent bg

  // smoother texture + proper center for rotation
  texture.center.set(0.5, 0.5);
  texture.rotation = 0;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z += delta * 0.3; // smooth, slow rotation
  });

  return (
    <mesh ref={meshRef}>
      {/* circle geometry so it feels like a round mandala */}
      <circleGeometry args={[1.4, 128]} />
      <meshBasicMaterial
        map={texture}
        transparent
        toneMapped={false}
      />
    </mesh>
  );
}

export default function MandalaCanvas() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none', // allow clicks through to hero content
      }}
    >
      {/* 2D-like camera so it feels flat in the UI */}
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={200} />
      <RotatingMandala />
    </Canvas>
  );
}
