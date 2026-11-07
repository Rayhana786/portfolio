
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

import {
  Layers,
  GraduationCap,
  ShieldCheck,
  Download,
} from 'lucide-react';

import { FadeIn } from '../components/FadeIn.tsx';
import { AnimatedText } from '../components/AnimatedText.tsx';
import { GhostButton } from '../components/GhostButton.tsx';
import { ContactButton } from '../components/ContactButton.tsx';

// ─────────────────────────────────────────────
// 3D CORNER OBJECTS
// ─────────────────────────────────────────────

type ObjectKind = 'code' | 'database' | 'layers' | 'shield';

interface CornerObjectProps {
  kind: ObjectKind;
  color: string;
}

function CodeObject({ color }: { color: string }) {
  const material = (
    <meshPhysicalMaterial
      color={color}
      metalness={0.65}
      roughness={0.22}
      clearcoat={1}
    />
  );

  return (
    <group>
      <RoundedBox args={[0.16, 0.68, 0.25]} radius={0.055} smoothness={5} position={[-0.37, 0.19, 0]} rotation={[0, 0, -0.65]}>
        {material}
      </RoundedBox>

      <RoundedBox args={[0.16, 0.68, 0.25]} radius={0.055} smoothness={5} position={[-0.37, -0.19, 0]} rotation={[0, 0, 0.65]}>
        {material}
      </RoundedBox>

      <RoundedBox args={[0.16, 0.68, 0.25]} radius={0.055} smoothness={5} position={[0.37, 0.19, 0]} rotation={[0, 0, 0.65]}>
        {material}
      </RoundedBox>

      <RoundedBox args={[0.16, 0.68, 0.25]} radius={0.055} smoothness={5} position={[0.37, -0.19, 0]} rotation={[0, 0, -0.65]}>
        {material}
      </RoundedBox>

      <RoundedBox args={[0.13, 1.05, 0.25]} radius={0.05} smoothness={5} rotation={[0, 0, 0.35]}>
        {material}
      </RoundedBox>
    </group>
  );
}

function DatabaseObject({ color }: { color: string }) {
  return (
    <group>
      {[-0.32, 0, 0.32].map((y, index) => (
        <mesh key={index} position={[0, y, 0]}>
          <cylinderGeometry args={[0.58, 0.58, 0.23, 48]} />
          <meshPhysicalMaterial
            color={color}
            metalness={0.65}
            roughness={0.23}
            clearcoat={1}
          />
        </mesh>
      ))}
    </group>
  );
}

function LayersObject({ color }: { color: string }) {
  return (
    <group>
      {[-0.34, 0, 0.34].map((y, index) => (
        <RoundedBox
          key={index}
          args={[1.05, 0.19, 0.78]}
          radius={0.09}
          smoothness={5}
          position={[index * 0.12 - 0.12, y, index * 0.08 - 0.08]}
          rotation={[0.12, -0.16, (index - 1) * 0.12]}
        >
          <meshPhysicalMaterial
            color={color}
            metalness={0.65}
            roughness={0.22}
            clearcoat={1}
          />
        </RoundedBox>
      ))}
    </group>
  );
}

function ShieldObject({ color }: { color: string }) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();

    shape.moveTo(0, 0.85);
    shape.lineTo(0.65, 0.62);
    shape.lineTo(0.58, -0.22);
    shape.quadraticCurveTo(0.42, -0.68, 0, -0.95);
    shape.quadraticCurveTo(-0.42, -0.68, -0.58, -0.22);
    shape.lineTo(-0.65, 0.62);
    shape.closePath();

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.055,
      bevelThickness: 0.055,
    });
  }, []);

  return (
    <mesh geometry={geometry} position={[0, 0, -0.1]}>
      <meshPhysicalMaterial
        color={color}
        metalness={0.55}
        roughness={0.2}
        clearcoat={1}
      />
    </mesh>
  );
}

function CornerObject({ kind, color }: CornerObjectProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!groupRef.current) return;

    const group = groupRef.current;

    group.rotation.x = THREE.MathUtils.damp(
      group.rotation.x,
      pointer.y * 0.22,
      4,
      delta
    );

    group.rotation.y = THREE.MathUtils.damp(
      group.rotation.y,
      pointer.x * 0.3,
      4,
      delta
    );

    group.rotation.z += delta * 0.12;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={groupRef}>
        {kind === 'code' && <CodeObject color={color} />}
        {kind === 'database' && <DatabaseObject color={color} />}
        {kind === 'layers' && <LayersObject color={color} />}
        {kind === 'shield' && <ShieldObject color={color} />}
      </group>
    </Float>
  );
}

function ThreeDIcon({ kind, color }: CornerObjectProps) {
  return (
    <div className="w-28 h-28">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.5} />
        <pointLight position={[-3, -2, 3]} intensity={1.5} color={color} />

        <CornerObject kind={kind} color={color} />
      </Canvas>
    </div>
  );
}

// ─────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────

export const AboutSection: React.FC = () => {

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCvClick = () => {
    const link = document.createElement('a');
    link.href = '/projects/CV_raihana.pdf';
    link.download = 'CV_raihana.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Top-left: 3D Code */}
      <div className="hidden lg:block absolute top-[10%] left-[5%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <ThreeDIcon kind="code" color="#00E5FF" />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D Database */}
      <div className="hidden lg:block absolute bottom-[12%] left-[6%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <ThreeDIcon kind="database" color="#38BDF8" />
        </FadeIn>
      </div>

      {/* Top-right: 3D Layers */}
      <div className="hidden lg:block absolute top-[10%] right-[5%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <ThreeDIcon kind="layers" color="#7C3AED" />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D Shield */}
      <div className="hidden lg:block absolute bottom-[12%] right-[6%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <ThreeDIcon kind="shield" color="#10B981" />
        </FadeIn>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-10 sm:space-y-12">

        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          maxWidth="640px"
          text="I'm a Computer Science Engineering student at ESI Sidi Bel Abbès, focused on full-stack development. I enjoy building complete digital products: clean interfaces, solid backend systems, and databases that solve real problems. I'm also a cybersecurity student, curious about how systems work and how they can be made more secure, so I'm exploring ethical hacking and CTF challenges on the side. Let's build something great together!"
        />

        <FadeIn delay={0.2} y={30} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full text-left">

            {/* Full-Stack Focus */}
            <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#121212]/80 p-6 flex flex-col justify-between hover:border-[#00E5FF]/40 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase text-[#D7E2EA] tracking-wide mb-1">
                  Full-Stack Focus
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                  Building responsive client interfaces with React, backed by Node.js &amp; Express APIs and structured databases.
                </p>
              </div>
            </div>

            {/* Cybersecurity Studies */}
            <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#121212]/80 p-6 flex flex-col justify-between hover:border-[#7C3AED]/40 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 text-[#A78BFA] flex items-center justify-center mb-4">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase text-[#D7E2EA] tracking-wide mb-1">
                  Cybersecurity Studies
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                  Studying Cybersecurity at ESI Sidi Bel Abbès, exploring networking, artificial intelligence, software development, and system security.
                </p>
              </div>
            </div>

            {/* Security Curious */}
            <div className="rounded-3xl border border-[#10B981]/30 bg-[#0E1513]/80 p-6 flex flex-col justify-between hover:border-[#10B981]/60 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase text-[#10B981] tracking-wide mb-1">
                  Security Curious
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                  Learning defense mechanisms, hands-on CTF problem solving, and understanding how to write secure code.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* Contact and CV Buttons */}
        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ContactButton
              onClick={handleContactClick}
              label="Contact Me"
            />

            <GhostButton
              onClick={handleCvClick}
              icon={<Download size={16} />}
              label="Download CV"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AboutSection;
