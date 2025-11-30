import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const WaveAnimation = () => {
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
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create wave grid
    const geometry = new THREE.PlaneGeometry(80, 80, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1e40af,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 3;
    scene.add(plane);

    // Store original positions
    const positions = geometry.attributes.position;
    const originalPositions = [];
    for (let i = 0; i < positions.count; i++) {
      originalPositions.push({
        x: positions.getX(i),
        y: positions.getY(i),
        z: positions.getZ(i),
      });
    }

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      for (let i = 0; i < positions.count; i++) {
        const original = originalPositions[i];
        const wave =
          Math.sin(original.x * 0.5 + time) *
          Math.cos(original.y * 0.5 + time) *
          2;
        positions.setZ(i, wave);
      }
      positions.needsUpdate = true;

      plane.rotation.z += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

export default WaveAnimation;
