'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ── Particle System ──────────────────────────────
function Particles({ count = 500, mouse }: { count?: number; mouse: { x: number; y: number } }) {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Update mouse ref for smooth tracking
  mouseRef.current = mouse;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return [pos, vel];
  }, [count]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const geometry = mesh.current.geometry;
    const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    const time = state.clock.elapsedTime;
    const mx = mouseRef.current.x * 0.5;
    const my = mouseRef.current.y * 0.5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Base movement
      posArray[i3] += velocities[i3] + Math.sin(time * 0.2 + i) * 0.001;
      posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.15 + i) * 0.001;
      posArray[i3 + 2] += velocities[i3 + 2];

      // Mouse influence (subtle parallax)
      posArray[i3] += mx * 0.0002;
      posArray[i3 + 1] += my * 0.0002;

      // Boundaries — wrap around
      if (posArray[i3] > 10) posArray[i3] = -10;
      if (posArray[i3] < -10) posArray[i3] = 10;
      if (posArray[i3 + 1] > 10) posArray[i3 + 1] = -10;
      if (posArray[i3 + 1] < -10) posArray[i3 + 1] = 10;
      if (posArray[i3 + 2] > 5) posArray[i3 + 2] = -5;
      if (posArray[i3 + 2] < -5) posArray[i3 + 2] = 5;
    }

    posAttr.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00E5FF"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ── Floating Geometric Shapes ────────────────────
function FloatingShape({
  position,
  rotation,
  scale,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * speed;
    mesh.current.rotation.x = rotation[0] + t * 0.3;
    mesh.current.rotation.y = rotation[1] + t * 0.2;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.08}
        wireframe
      />
    </mesh>
  );
}

// ── Main Scene ───────────────────────────────────
function Scene({ mouse, particleCount }: { mouse: { x: number; y: number }; particleCount: number }) {
  return (
    <>
      <Particles count={particleCount} mouse={mouse} />
      <FloatingShape position={[-4, 2, -3]} rotation={[0.5, 0.3, 0]} scale={1.5} color="#00E5FF" speed={0.5} />
      <FloatingShape position={[3, -1, -2]} rotation={[0.2, 0.7, 0]} scale={1.2} color="#7B61FF" speed={0.7} />
      <FloatingShape position={[5, 3, -4]} rotation={[0.8, 0.1, 0]} scale={0.8} color="#00E5FF" speed={0.3} />
      <FloatingShape position={[-3, -2, -5]} rotation={[0.3, 0.5, 0]} scale={1.0} color="#7B61FF" speed={0.6} />
    </>
  );
}

// ── Exported Canvas ──────────────────────────────
export default function ParticleCanvas({ mouse }: { mouse: { x: number; y: number } }) {
  const [particleCount, setParticleCount] = useState(400);

  useEffect(() => {
    // Reduce particles on mobile for better performance
    const isMobile = window.innerWidth < 768;
    setParticleCount(isMobile ? 150 : 400);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene mouse={mouse} particleCount={particleCount} />
      </Canvas>
    </div>
  );
}
