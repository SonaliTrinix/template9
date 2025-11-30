import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = ({ type = "particles" }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    mountRef.current.appendChild(renderer.domElement);

    let animationObjects = [];

    // HOME PAGE - Floating Particles
    if (type === "particles") {
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 1500;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.3,
        color: 0x1e40af,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(particlesMesh);
      animationObjects.push(particlesMesh);
      camera.position.z = 50;
    }

    // FEATURES PAGE - Floating Geometric Shapes
    else if (type === "geometrics") {
      const shapes = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.OctahedronGeometry(1.5),
        new THREE.TetrahedronGeometry(1.5),
        new THREE.IcosahedronGeometry(1.5),
        new THREE.TorusGeometry(1, 0.4, 16, 100),
      ];

      for (let i = 0; i < 20; i++) {
        const geometry = shapes[Math.floor(Math.random() * shapes.length)];
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(Math.random() * 0.1 + 0.85, 0.8, 0.5),
          transparent: true,
          opacity: 0.4,
          wireframe: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 80;
        mesh.position.y = (Math.random() - 0.5) * 80;
        mesh.position.z = (Math.random() - 0.5) * 80;

        mesh.userData = {
          rotationSpeedX: (Math.random() - 0.5) * 0.02,
          rotationSpeedY: (Math.random() - 0.5) * 0.02,
          floatSpeed: Math.random() * 0.02,
        };

        scene.add(mesh);
        animationObjects.push(mesh);
      }
      camera.position.z = 50;
    }

    // PRICING PAGE - Floating Spheres (Orbs)
    else if (type === "spheres") {
      for (let i = 0; i < 25; i++) {
        const size = Math.random() * 2 + 0.5;
        const sphereGeometry = new THREE.SphereGeometry(size, 32, 32);

        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.85 + Math.random() * 0.1, 0.8, 0.5),
          transparent: true,
          opacity: 0.3,
          wireframe: false,
        });

        const sphere = new THREE.Mesh(sphereGeometry, material);
        sphere.position.x = (Math.random() - 0.5) * 100;
        sphere.position.y = (Math.random() - 0.5) * 100;
        sphere.position.z = (Math.random() - 0.5) * 100;

        sphere.userData = {
          speedX: (Math.random() - 0.5) * 0.03,
          speedY: (Math.random() - 0.5) * 0.03,
          speedZ: (Math.random() - 0.5) * 0.02,
        };

        scene.add(sphere);
        animationObjects.push(sphere);
      }
      camera.position.z = 60;
    }

    // CONTACT PAGE - Rotating Rings
    else if (type === "rings") {
      for (let i = 0; i < 8; i++) {
        const ringGeometry = new THREE.TorusGeometry(5 + i * 3, 0.3, 16, 100);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.9 - i * 0.08, 0.8, 0.5),
          transparent: true,
          opacity: 0.4,
          side: THREE.DoubleSide,
        });

        const ring = new THREE.Mesh(ringGeometry, material);
        ring.position.z = -20 - i * 5;
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;

        ring.userData = {
          rotationSpeedX: 0.001 + i * 0.0003,
          rotationSpeedY: 0.002 + i * 0.0002,
          rotationSpeedZ: 0.0015 + i * 0.0001,
        };

        scene.add(ring);
        animationObjects.push(ring);
      }
      camera.position.z = 40;
    }

    // SIGNUP PAGE - Spiral DNA-like Helix
    else if (type === "helix") {
      const helixPoints = [];
      const radius = 10;
      const height = 60;
      const turns = 8;
      const pointsPerTurn = 50;

      for (let i = 0; i < turns * pointsPerTurn; i++) {
        const angle = (i / pointsPerTurn) * Math.PI * 2;
        const y = (i / (turns * pointsPerTurn)) * height - height / 2;

        // First helix strand
        const x1 = Math.cos(angle) * radius;
        const z1 = Math.sin(angle) * radius;

        const sphereGeometry1 = new THREE.SphereGeometry(0.3, 16, 16);
        const material1 = new THREE.MeshBasicMaterial({
          color: 0x1e40af,
          transparent: true,
          opacity: 0.7,
        });
        const sphere1 = new THREE.Mesh(sphereGeometry1, material1);
        sphere1.position.set(x1, y, z1);
        scene.add(sphere1);
        animationObjects.push(sphere1);

        // Second helix strand (opposite)
        const x2 = Math.cos(angle + Math.PI) * radius;
        const z2 = Math.sin(angle + Math.PI) * radius;

        const sphereGeometry2 = new THREE.SphereGeometry(0.3, 16, 16);
        const material2 = new THREE.MeshBasicMaterial({
          color: 0x0891b2,
          transparent: true,
          opacity: 0.7,
        });
        const sphere2 = new THREE.Mesh(sphereGeometry2, material2);
        sphere2.position.set(x2, y, z2);
        scene.add(sphere2);
        animationObjects.push(sphere2);
      }
      camera.position.z = 40;
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (type === "particles") {
        animationObjects[0].rotation.y += 0.0005;
        animationObjects[0].rotation.x += 0.0003;

        const positions =
          animationObjects[0].geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.005;
        }
        animationObjects[0].geometry.attributes.position.needsUpdate = true;
      } else if (type === "geometrics") {
        animationObjects.forEach((shape, index) => {
          shape.rotation.x += shape.userData.rotationSpeedX;
          shape.rotation.y += shape.userData.rotationSpeedY;
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        });
      } else if (type === "spheres") {
        animationObjects.forEach((sphere) => {
          sphere.position.x += sphere.userData.speedX;
          sphere.position.y += sphere.userData.speedY;
          sphere.position.z += sphere.userData.speedZ;

          if (Math.abs(sphere.position.x) > 50) sphere.userData.speedX *= -1;
          if (Math.abs(sphere.position.y) > 50) sphere.userData.speedY *= -1;
          if (Math.abs(sphere.position.z) > 50) sphere.userData.speedZ *= -1;
        });
      } else if (type === "rings") {
        animationObjects.forEach((ring) => {
          ring.rotation.x += ring.userData.rotationSpeedX;
          ring.rotation.y += ring.userData.rotationSpeedY;
          ring.rotation.z += ring.userData.rotationSpeedZ;
        });
      } else if (type === "helix") {
        const time = Date.now() * 0.0005;
        animationObjects.forEach((sphere, index) => {
          const originalY = sphere.position.y;
          sphere.rotation.y = time;

          // Rotate the entire helix
          const angle = time + index * 0.05;
          const distance = 10;
          sphere.position.x =
            Math.cos(angle) * distance * (index % 2 === 0 ? 1 : -1);
          sphere.position.z =
            Math.sin(angle) * distance * (index % 2 === 0 ? 1 : -1);
        });
      }

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

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      animationObjects.forEach((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose());
          } else {
            obj.material.dispose();
          }
        }
        scene.remove(obj);
      });

      if (renderer) {
        renderer.dispose();
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, [type]);

  return <div ref={mountRef} className="three-background" />;
};

export default ThreeBackground;
