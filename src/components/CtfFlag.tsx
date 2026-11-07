import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CtfFlag: React.FC = () => {
  const flagRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (flagRef.current) {
      // Gentle sine-based waving rotation
      const t = clock.getElapsedTime();
      flagRef.current.rotation.y = Math.sin(t * 3) * 0.25;
    }
  });

  return (
    // Planted on the left corner edge of the top slab (position around x=-1.35, y=0.5, z=0.8)
    <group position={[-1.35, 0.55, 0.8]}>
      {/* Thin cylinder pole */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.9, 12]} />
        <meshStandardMaterial color="#D7E2EA" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Flag finial top sphere */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={0.5} />
      </mesh>

      {/* Waving emerald flag plane */}
      <mesh ref={flagRef} position={[0.22, 0.72, 0]}>
        <planeGeometry args={[0.42, 0.26]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#10B981"
          emissiveIntensity={0.3}
          side={THREE.DoubleSide}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
};

export default CtfFlag;
