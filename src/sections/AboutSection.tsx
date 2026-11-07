
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
// 3D OBJECTS
// ─────────────────────────────────────────────

type ObjectKind = 'code' | 'database' | 'layers' | 'shield';

interface CornerObjectProps {
  kind: ObjectKind;
  color: string;
}

function CodeObject({ color }: { color: string }) {
  return (
    <group>
      {[
        [-0.37, 0.19, -0.65],
        [-0.37, -0.19, 0.65],
        [0.37, 0.19, 0.65],
        [0.37, -0.19, -0.65],
      ].map((p, i) => (
        <RoundedBox
          key={i}
          args={[0.16, 0.68, 0.25]}
          radius={0.055}
          smoothness={5}
          position={[p[0], p[1], 0]}
          rotation={[0, 0, p[2]]}
        >
          <meshPhysicalMaterial
            color={color}
            metalness={0.65}
            roughness={0.22}
            clearcoat={1}
          />
        </RoundedBox>
      ))}

      <RoundedBox
        args={[0.13, 1.05, 0.25]}
        radius={0.05}
        smoothness={5}
        rotation={[0, 0, 0.35]}
      >
        <meshPhysicalMaterial color={color} metalness={0.65} roughness={0.22} clearcoat={1} />
      </RoundedBox>
    </group>
  );
}

function DatabaseObject({ color }: { color: string }) {
  return (
    <group>
      {[-0.32, 0, 0.32].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <cylinderGeometry args={[0.58, 0.58, 0.23, 48]} />
          <meshPhysicalMaterial color={color} metalness={0.65} roughness={0.23} clearcoat={1} />
        </mesh>
      ))}
    </group>
  );
}

function LayersObject({ color }: { color: string }) {
  return (
    <group>
      {[-0.34, 0, 0.34].map((y, i) => (
        <RoundedBox
          key={i}
          args={[1.05, 0.19, 0.78]}
          radius={0.09}
          smoothness={5}
          position={[i * 0.12 - 0.12, y, i * 0.08 - 0.08]}
          rotation={[0.12, -0.16, (i - 1) * 0.12]}
        >
          <meshPhysicalMaterial color={color} metalness={0.65} roughness={0.22} clearcoat={1} />
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
      <meshPhysicalMaterial color={color} metalness={0.55} roughness={0.2} clearcoat={1} />
    </mesh>
  );
}

function CornerObject({ kind, color }: CornerObjectProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!groupRef.current) return;

    const group = groupRef.current;

    group.rotation.x = THREE.MathUtils.damp(
      group.rotation.x, pointer.y * 0.22, 4, delta
    );

    group.rotation.y = THREE.MathUtils.damp(
      group.rotation.y, pointer.x * 0.3, 4, delta
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
    <div className="w-14 h-14 min-[400px]:w-16 min-[400px]:h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: 'low-power',
        }}
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
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    });
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
      className="
        relative isolate w-full min-h-screen
        flex flex-col items-center justify-center
        px-4 min-[400px]:px-5 sm:px-8 lg:px-12
        py-20 sm:py-24 lg:py-16
        bg-[#0C0C0C]
        overflow-hidden
        select-none
      "
    >

      {/* 3D DECORATIONS */}

      <div className="absolute top-[5%] left-[2%] sm:top-[8%] sm:left-[4%] lg:top-[8%] lg:left-[5%] z-0 pointer-events-none opacity-70 sm:opacity-90">
        <FadeIn delay={0.1} x={-40} y={0} duration={0.9}>
          <ThreeDIcon kind="code" color="#00E5FF" />
        </FadeIn>
      </div>

      <div className="absolute bottom-[5%] left-[2%] sm:bottom-[8%] sm:left-[4%] lg:bottom-[8%] lg:left-[5%] z-0 pointer-events-none opacity-70 sm:opacity-90">
        <FadeIn delay={0.25} x={-40} y={0} duration={0.9}>
          <ThreeDIcon kind="database" color="#38BDF8" />
        </FadeIn>
      </div>

      <div className="absolute top-[5%] right-[2%] sm:top-[8%] sm:right-[4%] lg:top-[8%] lg:right-[5%] z-0 pointer-events-none opacity-70 sm:opacity-90">
        <FadeIn delay={0.15} x={40} y={0} duration={0.9}>
          <ThreeDIcon kind="layers" color="#7C3AED" />
        </FadeIn>
      </div>

      <div className="absolute bottom-[5%] right-[2%] sm:bottom-[8%] sm:right-[4%] lg:bottom-[8%] lg:right-[5%] z-0 pointer-events-none opacity-70 sm:opacity-90">
        <FadeIn delay={0.3} x={40} y={0} duration={0.9}>
          <ThreeDIcon kind="shield" color="#10B981" />
        </FadeIn>
      </div>

      {/* MAIN CONTENT */}

      <div className="
        relative z-10
        w-full max-w-[1440px] mx-auto
        flex flex-col items-center justify-center
        text-center
        gap-8 sm:gap-10 lg:gap-12
        xl:gap-14
      ">

        {/* HEADING */}

        <FadeIn delay={0} y={40}>
          <h2
            className="
              hero-heading font-black uppercase
              leading-[0.9] tracking-tight
              text-center
            "
            style={{
              fontSize: 'clamp(3rem, 10vw, 150px)',
            }}
          >
            About me
          </h2>
        </FadeIn>

        {/* DESCRIPTION */}

        <div className="w-full max-w-3xl px-3 sm:px-6">
          <AnimatedText
            maxWidth="760px"
            text="I'm a Computer Science Engineering student at ESI Sidi Bel Abbès, focused on full-stack development. I enjoy building complete digital products: clean interfaces, solid backend systems, and databases that solve real problems. I'm also a cybersecurity student, curious about how systems work and how they can be made more secure, so I'm exploring ethical hacking and CTF challenges on the side. Let's build something great together!"
          />
        </div>

        {/* INFORMATION CARDS */}

        <FadeIn delay={0.2} y={30} className="w-full">
          <div className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 sm:gap-5 lg:gap-6
            w-full text-left
          ">

            {/* FULL STACK */}

            <div className="
              group min-w-0 min-h-[190px]
              rounded-2xl sm:rounded-3xl
              border border-[#D7E2EA]/20
              bg-[#121212]/90 backdrop-blur-sm
              p-5 sm:p-6 lg:p-7
              flex flex-col justify-between
              hover:border-[#00E5FF]/50
              hover:-translate-y-1
              transition-all duration-300 shadow-lg
            ">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-5">
                <Layers size={23} />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold uppercase text-[#D7E2EA] tracking-wide mb-3">
                  Full-Stack Focus
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                  Building responsive client interfaces with React, backed by Node.js &amp; Express APIs and structured databases.
                </p>
              </div>
            </div>

            {/* CYBERSECURITY */}

            <div className="
              group min-w-0 min-h-[190px]
              rounded-2xl sm:rounded-3xl
              border border-[#D7E2EA]/20
              bg-[#121212]/90 backdrop-blur-sm
              p-5 sm:p-6 lg:p-7
              flex flex-col justify-between
              hover:border-[#7C3AED]/50
              hover:-translate-y-1
              transition-all duration-300 shadow-lg
            ">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#7C3AED]/10 text-[#A78BFA] flex items-center justify-center mb-5">
                <GraduationCap size={23} />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold uppercase text-[#D7E2EA] tracking-wide mb-3">
                  Cybersecurity Studies
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                  Studying Cybersecurity at ESI Sidi Bel Abbès, exploring networking, artificial intelligence, software development, and system security.
                </p>
              </div>
            </div>

            {/* SECURITY */}

            <div className="
              group min-w-0 min-h-[190px]
              rounded-2xl sm:rounded-3xl
              border border-[#10B981]/30
              bg-[#0E1513]/90 backdrop-blur-sm
              p-5 sm:p-6 lg:p-7
              flex flex-col justify-between
              hover:border-[#10B981]/60
              hover:-translate-y-1
              transition-all duration-300 shadow-lg
              sm:col-span-2 lg:col-span-1
            ">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mb-5">
                <ShieldCheck size={23} />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold uppercase text-[#10B981] tracking-wide mb-3">
                  Security Curious
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                  Learning defense mechanisms, hands-on CTF problem solving, and understanding how to write secure code.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* ACTION BUTTONS */}

        <FadeIn delay={0.3} y={20}>
          <div className="
            flex flex-col min-[420px]:flex-row
            flex-wrap items-center justify-center
            gap-4 sm:gap-5
            w-full
          ">
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
