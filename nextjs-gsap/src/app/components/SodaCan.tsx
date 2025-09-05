"use client";

import { useGLTF } from "@react-three/drei";

export function SodaCan({ scale = 0.5, ...props }) {
  const { scene } = useGLTF("/models/simple_cola_can.glb");

  return (
    <primitive
      object={scene}
      scale={scale}
      rotation={[0, -Math.PI, 0]}
      {...props}
    />
  );
}
