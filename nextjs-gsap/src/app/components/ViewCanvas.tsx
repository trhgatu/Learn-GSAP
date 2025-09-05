"use client";

import React from 'react'
import { Canvas } from '@react-three/fiber';
import { SodaCan } from '@/app/components/SodaCan';
import { Environment, Float } from '@react-three/drei';

const ViewCanvas = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 30,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{
        fov: 30,
      }}

    >
      <Float speed={1} rotationIntensity={2} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
        <SodaCan />
      </Float>
      <Environment files="/hdrs/qwantani_sunrise_puresky_2k.hdr" environmentIntensity={1.5} />
      <spotLight intensity={3} position={[1, 1, 1]} />
    </Canvas>
  )
}

export default ViewCanvas