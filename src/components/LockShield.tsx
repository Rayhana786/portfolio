import React, { useMemo } from 'react';
import * as THREE from 'three';

export const LockShield: React.FC = () => {
  // Create a clean shield 2D shape for extrusion
  const shieldGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.65);
    shape.bezierCurveTo(0.4, 0.65, 0.6, 0.45, 0.6, 0.1);
    shape.bezierCurveTo(0.6, -0.3, 0.3, -0.65, 0, -0.85);
    shape.bezierCurveTo(-0.3, -0.65, -0.6, -0.3, -0.6, 0.1);
    shape.bezierCurveTo(-0.6, 0.45, -0.4, 0.65, 0, 0.65);

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.04,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
  }, []);

  return (
    <group position={[0, 1.35, 0]}>
      {/* Semi-transparent Emerald Shield Outline behind padlock */}
      <mesh
        geometry={shieldGeometry}
        position={[0, 0, -0.15]}
        scale={[0.9, 0.9, 0.9]}
      >
        <meshPhysicalMaterial
          color="#10B981"
          emissive="#10B981"
          emissiveIntensity={0.25}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.35}
          wireframe={false}
          clearcoat={0.5}
        />
      </mesh>

      {/* Small Emerald Padlock */}
      <group position={[0, -0.05, 0]}>
        {/* Padlock Body: Rounded box in emerald #10B981 */}
        <mesh position={[0, -0.12, 0]}>
          <boxGeometry args={[0.42, 0.36, 0.16]} />
          <meshStandardMaterial
            color="#064E3B"
            emissive="#10B981"
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>

        {/* Keyhole detail */}
        <mesh position={[0, -0.12, 0.09]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>

        {/* Shackle: Half Torus shackle */}
        <mesh position={[0, 0.08, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.13, 0.038, 16, 24, Math.PI]} />
          <meshStandardMaterial
            color="#34D399"
            emissive="#10B981"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.15}
          />
        </mesh>

        {/* Soft point light radiating from the lock */}
        <pointLight color="#10B981" intensity={1.5} distance={2.5} />
      </group>
    </group>
  );
};

export default LockShield;
