
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

// Colors and materials
const white = "#F1F5F7";
const blue = "#A9D3E8";
const darkBlue = "#426F91";
const cyan = "#00E5FF";

function GlowStrip({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 0.035, 0.035]} />
      <meshStandardMaterial
        color={cyan}
        emissive={cyan}
        emissiveIntensity={3}
        toneMapped={false}
      />
    </mesh>
  );
}

// Main laboratory body
function LaboratoryBody() {
  return (
    <group>
      {/* Main body */}
      <RoundedBox
        args={[3.1, 1.65, 2.1]}
        radius={0.22}
        smoothness={5}
        position={[0, 0.05, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={white}
          roughness={0.3}
          metalness={0.45}
        />
      </RoundedBox>

      {/* Blue upper roof */}
      <RoundedBox
        args={[3.0, 0.28, 2.0]}
        radius={0.12}
        smoothness={5}
        position={[0, 1.0, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={blue}
          roughness={0.25}
          metalness={0.55}
        />
      </RoundedBox>

      {/* Top central module */}
      <RoundedBox
        args={[1.5, 0.36, 1.15]}
        radius={0.15}
        smoothness={5}
        position={[0, 1.28, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={white}
          roughness={0.25}
          metalness={0.5}
        />
      </RoundedBox>

      {/* Top cyan light */}
      <GlowStrip position={[0, 1.48, 0.12]} scale={[0.8, 1, 1]} />

      {/* Left blue side module */}
      <RoundedBox
        args={[0.55, 1.1, 1.8]}
        radius={0.16}
        smoothness={5}
        position={[-1.72, 0.1, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={blue}
          roughness={0.28}
          metalness={0.5}
        />
      </RoundedBox>

      {/* Right white side module */}
      <RoundedBox
        args={[0.48, 1.25, 1.75]}
        radius={0.16}
        smoothness={5}
        position={[1.72, 0.1, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={white}
          roughness={0.3}
          metalness={0.45}
        />
      </RoundedBox>

      {/* Front glass laboratory window */}
      <RoundedBox
        args={[1.45, 0.72, 0.045]}
        radius={0.1}
        smoothness={5}
        position={[0, 0.25, 1.075]}
      >
        <meshPhysicalMaterial
          color="#73CBEA"
          roughness={0.12}
          metalness={0.25}
          transparent
          opacity={0.72}
        />
      </RoundedBox>

      {/* Window frame */}
      <RoundedBox
        args={[1.62, 0.84, 0.035]}
        radius={0.12}
        smoothness={5}
        position={[0, 0.25, 1.04]}
      >
        <meshStandardMaterial
          color={darkBlue}
          roughness={0.25}
          metalness={0.6}
        />
      </RoundedBox>

      {/* Front window inset */}
      <RoundedBox
        args={[1.43, 0.66, 0.035]}
        radius={0.09}
        smoothness={5}
        position={[0, 0.25, 1.09]}
      >
        <meshPhysicalMaterial
          color="#9BEAFF"
          roughness={0.15}
          metalness={0.2}
          transparent
          opacity={0.75}
        />
      </RoundedBox>

      {/* Inner laboratory equipment visible through window */}
      <RoundedBox
        args={[0.32, 0.42, 0.09]}
        radius={0.06}
        smoothness={4}
        position={[-0.38, 0.22, 1.14]}
      >
        <meshStandardMaterial
          color="#DDF8FF"
          emissive={cyan}
          emissiveIntensity={0.35}
        />
      </RoundedBox>

      <RoundedBox
        args={[0.32, 0.42, 0.09]}
        radius={0.06}
        smoothness={4}
        position={[0.38, 0.22, 1.14]}
      >
        <meshStandardMaterial
          color="#DDF8FF"
          emissive={cyan}
          emissiveIntensity={0.35}
        />
      </RoundedBox>

      {/* Front lower panel */}
      <RoundedBox
        args={[2.1, 0.32, 0.08]}
        radius={0.07}
        smoothness={4}
        position={[0, -0.55, 1.06]}
      >
        <meshStandardMaterial
          color="#D4E6EF"
          roughness={0.35}
          metalness={0.45}
        />
      </RoundedBox>

      {/* Cyan front details */}
      <GlowStrip position={[0, -0.55, 1.12]} scale={[0.9, 1, 1]} />

      {/* Side lights */}
      <GlowStrip
        position={[-1.72, 0.12, 0.93]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.65, 1, 1]}
      />

      <GlowStrip
        position={[1.72, 0.12, 0.9]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.65, 1, 1]}
      />

      {/* Circular side ventilation ports */}
      {[-1, 1].map((side) => (
        <group
          key={side}
          position={[side * 1.98, 0.2, 0.2]}
          rotation={[0, side * Math.PI / 2, 0]}
        >
          <mesh>
            <cylinderGeometry args={[0.2, 0.2, 0.06, 32]} />
            <meshStandardMaterial
              color={darkBlue}
              metalness={0.7}
              roughness={0.25}
            />
          </mesh>

          <mesh position={[0, 0, 0.04]}>
            <cylinderGeometry args={[0.13, 0.13, 0.065, 32]} />
            <meshStandardMaterial
              color={cyan}
              emissive={cyan}
              emissiveIntensity={1.8}
            />
          </mesh>
        </group>
      ))}

      {/* Base platform */}
      <RoundedBox
        args={[3.5, 0.22, 2.35]}
        radius={0.14}
        smoothness={5}
        position={[0, -0.9, 0]}
        castShadow
      >
        <meshStandardMaterial
          color="#789CB2"
          roughness={0.3}
          metalness={0.65}
        />
      </RoundedBox>

      {/* White bottom base */}
      <RoundedBox
        args={[3.25, 0.18, 2.2]}
        radius={0.1}
        smoothness={5}
        position={[0, -0.73, 0]}
      >
        <meshStandardMaterial
          color={white}
          roughness={0.3}
          metalness={0.5}
        />
      </RoundedBox>

      {/* Bottom cyan accent */}
      <GlowStrip
        position={[0, -0.96, 1.12]}
        scale={[2.5, 1, 1]}
      />

      {/* Small top antenna / sensor */}
      <mesh position={[1.05, 1.48, -0.45]}>
        <cylinderGeometry args={[0.07, 0.09, 0.15, 16]} />
        <meshStandardMaterial color={darkBlue} metalness={0.7} />
      </mesh>

      <mesh position={[1.05, 1.59, -0.45]}>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial
          color={cyan}
          emissive={cyan}
          emissiveIntensity={2.5}
        />
      </mesh>
    </group>
  );
}

// Floating small decorative particles
function OrbitingParticles() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={ref}>
      {[
        [2.3, 0.7, 0.8],
        [-2.3, 0.4, -0.8],
        [1.8, 1.7, -1],
        [-1.9, -0.5, 0.8],
      ].map((position, index) => (
        <mesh
          key={index}
          position={position as [number, number, number]}
          rotation={[0.4, 0.3, 0.2]}
        >
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? cyan : blue}
            emissive={cyan}
            emissiveIntensity={0.6}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main animated laboratory
function LaboratoryScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
  if (!groupRef.current) return;

  const targetX = pointer.y * 0.18;
  const targetZ = -pointer.x * 0.15;

  groupRef.current.rotation.x = THREE.MathUtils.damp(
    groupRef.current.rotation.x,
    targetX,
    3,
    delta
  );

  groupRef.current.rotation.z = THREE.MathUtils.damp(
    groupRef.current.rotation.z,
    targetZ,
    3,
    delta
  );
});

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.08}
      floatIntensity={0.25}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={groupRef} scale={0.95}>
        <LaboratoryBody />
        <OrbitingParticles />

        {/* Glowing rings underneath */}
        <mesh
          position={[0, -1.07, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[1.65, 1.95, 64]} />
          <meshBasicMaterial
            color={cyan}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh
          position={[0, -1.065, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[1.25, 1.4, 64]} />
          <meshBasicMaterial
            color={blue}
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Exported Hero component
const HeroScene3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[480px]">
      <Canvas
        camera={{ position: [4.2, 2.8, 6.5], fov: 36 }}
        dpr={[1, 1.5]}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
          castShadow
        />

        <pointLight
          position={[4, 3, 3]}
          color={cyan}
          intensity={2.5}
          distance={10}
        />

        <pointLight
          position={[-4, 2, -2]}
          color={blue}
          intensity={2}
          distance={10}
        />

        <pointLight
          position={[0, -1, 4]}
          color="#FFFFFF"
          intensity={1.5}
          distance={8}
        />

        <LaboratoryScene />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
