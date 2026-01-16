'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Node {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  mesh: THREE.Mesh;
  connections: number[];
  baseY: number;
  phase: number;
}

export default function AzureGraphBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = isMobile ? 45 : 35;
    camera.position.y = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
    mountRef.current.appendChild(renderer.domElement);

    // Azure color palette
    const colors = {
      primary: 0x0078d4,      // Azure Blue
      secondary: 0x50e6ff,    // Cyan accent
      tertiary: 0x773adc,     // Purple accent
      node: 0x0078d4,
      line: 0x0078d4,
      glow: 0x50e6ff
    };

    // Create hexagonal node geometry
    const createHexagonGeometry = (radius: number) => {
      const shape = new THREE.Shape();
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.closePath();
      
      const extrudeSettings = {
        depth: 0.15,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 2
      };
      
      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    // Node materials with glow effect
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: colors.primary,
      transparent: true,
      opacity: 0.9,
    });

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: colors.secondary,
      transparent: true,
      opacity: 0.3,
    });

    // Create nodes - fewer on mobile for performance
    const nodeCount = isMobile ? 20 : 35;
    const nodes: Node[] = [];
    const nodeGroup = new THREE.Group();

    // Create spherical distribution with varying distances
    for (let i = 0; i < nodeCount; i++) {
      // Spherical coordinates for more organic distribution
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      
      const radius = 8 + Math.random() * 12;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.6; // Flatten Y
      const z = radius * Math.cos(phi) * 0.8;

      // Create hexagonal node
      const size = 0.4 + Math.random() * 0.4;
      const hexGeometry = createHexagonGeometry(size);
      
      // Vary colors between Azure palette
      const colorChoice = Math.random();
      const material = nodeMaterial.clone();
      if (colorChoice > 0.7) material.color.setHex(colors.secondary);
      else if (colorChoice > 0.4) material.color.setHex(colors.tertiary);
      
      const node = new THREE.Mesh(hexGeometry, material);
      node.position.set(x, y, z);
      
      // Random rotation for visual interest
      node.rotation.x = Math.random() * Math.PI;
      node.rotation.y = Math.random() * Math.PI;
      
      // Add glow ring
      const glowGeometry = new THREE.RingGeometry(size * 1.2, size * 1.6, 6);
      const glow = new THREE.Mesh(glowGeometry, glowMaterial.clone());
      glow.position.copy(node.position);
      glow.lookAt(camera.position);
      nodeGroup.add(glow);
      
      nodeGroup.add(node);
      
      nodes.push({
        position: node.position.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        mesh: node,
        connections: [],
        baseY: y,
        phase: Math.random() * Math.PI * 2
      });
    }

    scene.add(nodeGroup);

    // Connection lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: colors.line,
      transparent: true,
      opacity: 0.25,
    });

    const connectionDistance = isMobile ? 10 : 12;
    
    // Pre-calculate connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < connectionDistance) {
          nodes[i].connections.push(j);
        }
      }
    }

    // Create line segments
    let linesMesh: THREE.LineSegments;
    
    const updateLines = () => {
      const linePositions: number[] = [];
      
      for (let i = 0; i < nodes.length; i++) {
        for (const j of nodes[i].connections) {
          const nodeA = nodes[i].mesh.position;
          const nodeB = nodes[j].mesh.position;
          
          linePositions.push(
            nodeA.x, nodeA.y, nodeA.z,
            nodeB.x, nodeB.y, nodeB.z
          );
        }
      }
      
      if (linesMesh) {
        scene.remove(linesMesh);
        linesMesh.geometry.dispose();
      }
      
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);
    };

    updateLines();

    // Add central focal point - Azure logo-inspired geometry
    const centerGeometry = new THREE.IcosahedronGeometry(2, 1);
    const centerMaterial = new THREE.MeshBasicMaterial({
      color: colors.primary,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const centerMesh = new THREE.Mesh(centerGeometry, centerMaterial);
    scene.add(centerMesh);

    // Inner glow sphere
    const innerGlowGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const innerGlowMaterial = new THREE.MeshBasicMaterial({
      color: colors.secondary,
      transparent: true,
      opacity: 0.15,
    });
    const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
    scene.add(innerGlow);

    // Data flow particles
    const particleCount = isMobile ? 50 : 100;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 5 + Math.random() * 15;
      
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
      
      particleSpeeds.push(0.5 + Math.random() * 1.5);
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: colors.secondary,
      size: isMobile ? 0.15 : 0.1,
      transparent: true,
      opacity: 0.6,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse interaction (desktop only)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    // Touch interaction for mobile
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseY = (event.touches[0].clientY / window.innerHeight) * 2 - 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Smooth camera rotation based on mouse/touch
      targetRotationX = mouseY * 0.2;
      targetRotationY = mouseX * 0.3;
      
      nodeGroup.rotation.x += (targetRotationX - nodeGroup.rotation.x) * 0.02;
      nodeGroup.rotation.y += (targetRotationY - nodeGroup.rotation.y) * 0.02;
      
      // Auto rotation
      nodeGroup.rotation.y += 0.001;

      // Animate center mesh
      centerMesh.rotation.x += 0.003;
      centerMesh.rotation.y += 0.005;
      innerGlow.scale.setScalar(1 + Math.sin(time * 2) * 0.1);

      // Animate nodes with floating motion
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.mesh.position.y = node.baseY + Math.sin(time + node.phase) * 0.3;
        node.mesh.rotation.z += 0.005;
      }

      // Animate data flow particles (orbiting motion)
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const x = positions[idx];
        const z = positions[idx + 2];
        const speed = particleSpeeds[i] * 0.002;
        
        // Rotate around Y axis
        positions[idx] = x * Math.cos(speed) - z * Math.sin(speed);
        positions[idx + 2] = x * Math.sin(speed) + z * Math.cos(speed);
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Update connection lines occasionally (not every frame for performance)
      if (Math.floor(time * 10) % 5 === 0) {
        updateLines();
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.position.z = width <= 768 ? 45 : 35;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        background: 'radial-gradient(ellipse at center, rgba(0, 120, 212, 0.03) 0%, transparent 70%)',
        touchAction: 'pan-y' // Allow scrolling on mobile
      }} 
    />
  );
}
