"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Grid } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// Custom Cyber Grid with Pulsing Lines
const CyberGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!gridRef.current) return;
    // Slow, constant kinetic drift
    gridRef.current.position.z = (state.clock.elapsedTime * 0.4) % 2;
  });

  return (
    <group ref={gridRef}>
      <Grid 
        infiniteGrid 
        fadeDistance={50} 
        fadeStrength={10} 
        sectionSize={2.5} 
        sectionColor="#00e5ff" 
        sectionThickness={2} 
        cellSize={1.2} 
        cellColor="#0052FF" 
        cellThickness={1}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -2.5, 0]}
      />
    </group>
  );
};

// Data Streams / Falling Bits
const DataStreams = () => {
  const count = 40;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = Math.random() * 40;
      const z = (Math.random() - 0.5) * 40;
      const speed = 0.05 + Math.random() * 0.15;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      p.y -= p.speed;
      if (p.y < -20) p.y = 20;
      dummy.position.set(p.x, p.y, p.z);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[0.02, 0.5, 0.02]} />
      <meshBasicMaterial color="#00e5ff" transparent opacity={0.6} />
    </instancedMesh>
  );
};

// Subtle Starfield for Depth
const SubtleStarfield = () => {
  const ref = useRef<THREE.Points>(null);
  const stars = useMemo(() => {
    const temp = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
       temp[i*3] = (Math.random() - 0.5) * 80;
       temp[i*3+1] = (Math.random() - 0.5) * 80;
       temp[i*3+2] = (Math.random() - 0.5) * 120 - 60;
    }
    return temp;
  }, []);

  return (
    <Points ref={ref} positions={stars} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#88ccff"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

export const Scene = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#06080d] overflow-hidden">
      <Canvas camera={{ position: [0, 4, 15], fov: 55 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 15, 0]} intensity={3} color="#00e5ff" />
        <pointLight position={[10, 0, 10]} intensity={2} color="#0052FF" />
        
        <Suspense fallback={null}>
           <CyberGrid />
           <DataStreams />
           <SubtleStarfield />
        </Suspense>
      </Canvas>
      
      {/* VANGUARD VIGNETTE: Focal Point Concentration */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(6,8,13,0.9)_100%)]" />

      {/* ATMOSPHERIC NOISE (Subtle Vanguard detail) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-[2] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      {/* HORIZON GLOW */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#00e5ff]/10 to-transparent pointer-events-none z-[1]" />
    </div>
  );
};
