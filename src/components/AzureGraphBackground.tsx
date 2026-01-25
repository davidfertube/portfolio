'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AzureGraphBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Scene setup
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Grayscale color palette (Bittensor-inspired)
        const colors = {
            primary: 0xffffff,      // White wireframe
            secondary: 0x888888,    // Gray accent
        };

        // Create large central sphere with wireframe
        const sphereRadius = 6;
        const sphereGeometry = new THREE.IcosahedronGeometry(sphereRadius, 2);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: colors.primary,
            transparent: true,
            opacity: 0.6,
            wireframe: true,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        // Inner glow sphere
        const innerGlowGeometry = new THREE.SphereGeometry(sphereRadius * 0.85, 32, 32);
        const innerGlowMaterial = new THREE.MeshBasicMaterial({
            color: colors.secondary,
            transparent: true,
            opacity: 0.08,
        });
        const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
        scene.add(innerGlow);

        // Second wireframe layer for depth
        const outerGeometry = new THREE.IcosahedronGeometry(sphereRadius * 1.15, 1);
        const outerMaterial = new THREE.MeshBasicMaterial({
            color: colors.secondary,
            transparent: true,
            opacity: 0.25,
            wireframe: true,
        });
        const outerSphere = new THREE.Mesh(outerGeometry, outerMaterial);
        scene.add(outerSphere);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = (event.clientY / window.innerHeight) * 2 - 1;
        };

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

            // Sphere rotation - base auto rotation
            sphere.rotation.x += 0.002;
            sphere.rotation.y += 0.003;

            // Outer sphere counter-rotation for visual interest
            outerSphere.rotation.x -= 0.001;
            outerSphere.rotation.y -= 0.002;

            // Mouse/touch influence
            sphere.rotation.x += mouseY * 0.01;
            sphere.rotation.y += mouseX * 0.01;
            outerSphere.rotation.x += mouseY * 0.005;
            outerSphere.rotation.y += mouseX * 0.005;

            // Breathing effect on inner glow
            const breathe = 1 + Math.sin(time * 1.5) * 0.05;
            innerGlow.scale.setScalar(breathe);

            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }

            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
}
