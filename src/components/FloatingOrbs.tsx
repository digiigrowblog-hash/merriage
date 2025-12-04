"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { useMemo, useRef, useState } from "react"

type HeartConfig = {
  id: number
  baseY: number
  speed: number
  delay: number
  color: string
}

const COLORS = ["#f3c871", "#f3b886", "#e89b7c", "#ffd7aa"]

function createWave(waveId: number): HeartConfig[] {
  const count = 3 + Math.floor(Math.random() * 3) // 3,4,5
  const hearts: HeartConfig[] = []
  for (let i = 0; i < count; i++) {
    hearts.push({
      id: waveId * 10 + i,
      baseY: -0.2 + Math.random() * 0.6,
      speed: 0.5 + Math.random() * 0.4, // controls vertical wobble, not travel time
      delay: Math.random() * 1.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    })
  }
  return hearts
}

function useHeartShape() {
  return useMemo(() => {
    const s = new THREE.Shape()
    const x = 0
    const y = 0
    s.moveTo(x, y + 0.5)
    s.bezierCurveTo(x - 0.5, y + 1.3, x - 1.4, y + 0.4, x, y - 0.4)
    s.bezierCurveTo(x + 1.4, y + 0.4, x + 0.5, y + 1.3, x, y + 0.5)
    return s
  }, [])
}

function HeartWave() {
  const shape = useHeartShape()
  const [waveId, setWaveId] = useState(0)
  const [hearts, setHearts] = useState<HeartConfig[]>(() => createWave(0))
  const t0Ref = useRef(0)

  useFrame(({ clock }) => {
    if (!t0Ref.current) t0Ref.current = clock.getElapsedTime()
    const t = clock.getElapsedTime() - t0Ref.current

    // one full left→right cycle duration
    const cycleDuration = 6 // seconds
    const progress = t / cycleDuration

    if (progress >= 1) {
      // new wave
      const nextWaveId = waveId + 1
      setWaveId(nextWaveId)
      setHearts(createWave(nextWaveId))
      t0Ref.current = clock.getElapsedTime()
    }
  })

  return (
    <>
      {hearts.map((h) => (
        <SingleHeart key={h.id} config={h} shape={shape} />
      ))}
    </>
  )
}

function SingleHeart({ config, shape }: { config: HeartConfig; shape: THREE.Shape }) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + config.delay
    const cycleDuration = 6
    const localT = t % cycleDuration
    const p = localT / cycleDuration // 0→1

    const x = -2 + p * 4 // -2 → 2
    const y = config.baseY + Math.sin(t * config.speed) * 0.15
    const rot = Math.sin(t * 0.8) * 0.2

    mesh.current.position.set(x, y, 0)
    mesh.current.rotation.z = rot
  })

  return (
    <mesh ref={mesh}>
      <extrudeGeometry
        args={[
          shape,
          { depth: 0.08, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 },
        ]}
      />
      <meshStandardMaterial
        color={config.color}
        emissive={config.color}
        emissiveIntensity={0.7}
        metalness={0.3}
        roughness={0.25}
      />
    </mesh>
  )
}

function Sparkles() {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(80 * 3)
    for (let i = 0; i < 80; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 4
      arr[i * 3 + 1] = Math.random() * 1 - 0.3
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.4
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!ref.current) return
    ;(ref.current.material as THREE.PointsMaterial).size =
      0.035 + Math.sin(t * 3) * 0.015
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
                  attach="attributes-position"
                  array={positions}
                  count={positions.length / 3}
                  itemSize={3} args={[]}        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffe3b5"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </points>
  )
}

export default function FloatingOrbs() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 3, 4]} intensity={1} />

      <HeartWave />
      <Sparkles />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  )
}
