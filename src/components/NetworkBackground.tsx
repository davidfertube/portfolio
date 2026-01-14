'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NetworkBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8f7f4, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Particles (Nodes)
    const geometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const posArray = new Float32Array(particleCount * 3);
    
    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material
    const material = new THREE.PointsMaterial({
      size: 0.3,
      color: 0x1a1a1a, // Dark grey
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Lines geometry
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981, // Green accent
      transparent: true,
      opacity: 0.15,
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotation
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Dynamic connections
      // Note: Rebuilding geometry every frame is expensive, 
      // but for 100 particles it's negligible and creates the "active" effect
      const positions = particlesMesh.geometry.attributes.position.array;
      const linePositions = [];
      
      const worldPositions = [];
      for(let i = 0; i < particleCount; i++) {
        const x = positions[i*3];
        const y = positions[i*3+1];
        const z = positions[i*3+2];
        
        // Simple rotation transform roughly to match the mesh rotation
        // A proper implementation would use Vector3.applyMatrix4 but we keep it simple/fast
        worldPositions.push(new THREE.Vector3(x, y, z).applyEuler(particlesMesh.rotation));
      }

      for(let i = 0; i < particleCount; i++) {
        for(let j = i + 1; j < particleCount; j++) {
           const dist = worldPositions[i].distanceTo(worldPositions[j]);
           if(dist < 15) {
             linePositions.push(
               worldPositions[i].x, worldPositions[i].y, worldPositions[i].z,
               worldPositions[j].x, worldPositions[j].y, worldPositions[j].z
             );
           }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      
      // Remove old lines if any (hacky way, better to manage scene children)
      scene.children = scene.children.filter(child => child.type === 'Points');
      
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.6 }} />;
}
