import React, { useRef } from 'react';
import { Edges, Html } from '@react-three/drei';
import * as THREE from 'three';

interface StackTowerProps {
  showLabels?: boolean;
}

export const StackTower: React.FC<StackTowerProps> = ({ showLabels = true }) => {
  const slabSize: [number, number, number] = [3.2, 0.22, 2.2];

  return (
    <group position={[0, -0.4, 0]}>
      {/* 1. TOP SLAB: Frontend (Cyan #00E5FF), rotation +0.14 rad (~8 deg) */}
      <group position={[0, 0.75, 0]} rotation={[0, 0.14, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={slabSize} />
          <meshPhysicalMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.12}
            metalness={0.6}
            roughness={0.2}
            transparent
            opacity={0.88}
            transmission={0.25}
            ior={1.4}
            clearcoat={0.6}
          />
          <Edges color="#00E5FF" threshold={15} lineWidth={1.5} />
        </mesh>

        {showLabels && (
          <Html position={[2.2, 0, 0]} center distanceFactor={10} className="pointer-events-none select-none">
            <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded bg-black/60 border border-[#00E5FF]/40 text-[#00E5FF]">
              Frontend
            </span>
          </Html>
        )}
      </group>

      {/* 2. MIDDLE SLAB: Backend (Violet #7C3AED), rotation 0 rad */}
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={slabSize} />
          <meshPhysicalMaterial
            color="#7C3AED"
            emissive="#7C3AED"
            emissiveIntensity={0.15}
            metalness={0.6}
            roughness={0.2}
            transparent
            opacity={0.88}
            transmission={0.25}
            ior={1.4}
            clearcoat={0.6}
          />
          <Edges color="#A78BFA" threshold={15} lineWidth={1.5} />
        </mesh>

        {showLabels && (
          <Html position={[2.2, 0, 0]} center distanceFactor={10} className="pointer-events-none select-none">
            <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded bg-black/60 border border-[#7C3AED]/40 text-[#A78BFA]">
              Backend
            </span>
          </Html>
        )}
      </group>

      {/* 3. BOTTOM SLAB: Database (Light Blue #38BDF8), rotation -0.14 rad (~-8 deg) */}
      <group position={[0, -0.75, 0]} rotation={[0, -0.14, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={slabSize} />
          <meshPhysicalMaterial
            color="#38BDF8"
            emissive="#38BDF8"
            emissiveIntensity={0.12}
            metalness={0.6}
            roughness={0.2}
            transparent
            opacity={0.88}
            transmission={0.25}
            ior={1.4}
            clearcoat={0.6}
          />
          <Edges color="#38BDF8" threshold={15} lineWidth={1.5} />
        </mesh>

        {showLabels && (
          <Html position={[2.2, 0, 0]} center distanceFactor={10} className="pointer-events-none select-none">
            <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded bg-black/60 border border-[#38BDF8]/40 text-[#38BDF8]">
              Database
            </span>
          </Html>
        )}
      </group>
    </group>
  );
};

export default StackTower;
