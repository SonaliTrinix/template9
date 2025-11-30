import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpiralAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create spiral particles
    const particles = [];
    const particleCount = 200;
    const radius = 20;
    const height = 60;

    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(i / particleCount, 0.8, 0.5),
        transparent: true,
        opacity: 0.8
      });
      const particle = new THREE.Mesh(geometry, material);
      
      const angle = (i / particleCount) * Math.PI * 8;
      const r = radius * (i / particleCount);
      const y = (i / particleCount) * height - height / 2;
      
      particle.position.x = Math.cos(angle) * r;
      particle.position.y = y;
      particle.position.z = Math.sin(angle) * r;
      
      particle.userData = {
        angle: angle,
        radius: r,
        index: i,
        originalY: y
      };
      
      scene.add(particle);
      particles.push(particle);
    }

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      particles.forEach((particle, index) => {
        const newAngle = particle.userData.angle + time;
        const r = particle.userData.radius;
        
        particle.position.x = Math.cos(newAngle) * r;
        particle.position.z = Math.sin(newAngle) * r;
        particle.position.y = particle.userData.originalY + Math.sin(time * 2 + index * 0.1) * 2;
        
        // Color cycle
        const hue = ((time * 0.1) + index / particleCount) % 1;
        particle.material.color.setHSL(hue, 0.8, 0.5);
        
        // Scale pulse
        const scale = 1 + Math.sin(time * 3 + index * 0.1) * 0.3;
        particle.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.forEach(particle => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

export default SpiralAnimation;
