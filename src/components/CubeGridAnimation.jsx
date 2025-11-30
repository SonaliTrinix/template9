import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CubeGridAnimation = () => {
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
    camera.position.z = 50;
    camera.position.y = 20;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create cube grid
    const cubes = [];
    const gridSize = 10;
    const spacing = 5;

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL((x + z) / (gridSize * 2), 0.8, 0.5),
          transparent: true,
          opacity: 0.6,
          wireframe: false
        });
        const cube = new THREE.Mesh(geometry, material);
        
        cube.position.x = (x - gridSize / 2) * spacing;
        cube.position.z = (z - gridSize / 2) * spacing;
        cube.position.y = 0;
        
        cube.userData = {
          originalY: 0,
          delay: (x + z) * 0.1
        };
        
        scene.add(cube);
        cubes.push(cube);
      }
    }

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      cubes.forEach((cube, index) => {
        const height = Math.sin(time * 2 + cube.userData.delay) * 5;
        cube.position.y = Math.max(0, height);
        cube.rotation.y += 0.01;
        
        // Color pulse
        const hue = ((time * 0.1) + cube.userData.delay * 0.1) % 1;
        cube.material.color.setHSL(hue, 0.8, 0.5);
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
      cubes.forEach(cube => {
        cube.geometry.dispose();
        cube.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

export default CubeGridAnimation;
