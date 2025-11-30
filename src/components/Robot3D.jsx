import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Robot3D = () => {
  const mountRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const robotRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lighting for cute look
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4a9eff, 2);
    pointLight1.position.set(8, 8, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0891b2, 1.5);
    pointLight2.position.set(-8, -5, 8);
    scene.add(pointLight2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 5, -10);
    scene.add(rimLight);

    // Create Cute Robot
    const robot = new THREE.Group();
    robotRef.current = robot;

    // Material colors
    const blueColor = 0x3b82f6;
    const darkBlueColor = 0x1e40af;
    const tealColor = 0x0891b2;
    const lightBlueColor = 0x60a5fa;

    // HEAD - Large rounded sphere
    const headGeometry = new THREE.SphereGeometry(2.2, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({
      color: blueColor,
      shininess: 100,
      specular: 0x4a9eff,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 3.5;
    head.scale.set(1, 0.9, 1); // Slightly flatten for cute look
    head.name = "head";
    robot.add(head);

    // VISOR/FACE SCREEN - Dark glass-like surface
    const visorGeometry = new THREE.SphereGeometry(
      2.1,
      32,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.6
    );
    const visorMaterial = new THREE.MeshPhongMaterial({
      color: 0x0a1929,
      shininess: 150,
      transparent: true,
      opacity: 0.95,
      specular: 0x60a5fa,
    });
    const visor = new THREE.Mesh(visorGeometry, visorMaterial);
    visor.position.y = 3.5;
    visor.position.z = 0.3;
    visor.scale.set(1, 0.9, 1);
    robot.add(visor);

    // CUTE EYES - Simple curved lines (using torus segments)
    const eyeCurveGeometry = new THREE.TorusGeometry(
      0.5,
      0.08,
      16,
      100,
      Math.PI
    );
    const eyeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });

    const leftEye = new THREE.Mesh(eyeCurveGeometry, eyeMaterial);
    leftEye.position.set(-0.7, 3.8, 2);
    leftEye.rotation.z = Math.PI;
    leftEye.name = "leftEye";
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeCurveGeometry, eyeMaterial);
    rightEye.position.set(0.7, 3.8, 2);
    rightEye.rotation.z = Math.PI;
    rightEye.name = "rightEye";
    robot.add(rightEye);

    // SMILE - Cute curved smile
    const smileGeometry = new THREE.TorusGeometry(0.8, 0.1, 16, 100, Math.PI);
    const smileMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, 2.8, 2);
    smile.name = "smile";
    robot.add(smile);

    // HEADPHONES/EARS - Pink rounded cylinders
    const earGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.4, 32);
    const earMaterial = new THREE.MeshPhongMaterial({
      color: pinkColor,
      shininess: 80,
    });

    const leftEar = new THREE.Mesh(earGeometry, earMaterial);
    leftEar.position.set(-2.5, 3.5, 0);
    leftEar.rotation.z = Math.PI / 2;
    robot.add(leftEar);

    const rightEar = new THREE.Mesh(earGeometry, earMaterial);
    rightEar.position.set(2.5, 3.5, 0);
    rightEar.rotation.z = Math.PI / 2;
    robot.add(rightEar);

    // Ear inner blue circles
    const earInnerGeometry = new THREE.CircleGeometry(0.35, 32);
    const earInnerMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
    });

    const leftEarInner = new THREE.Mesh(earInnerGeometry, earInnerMaterial);
    leftEarInner.position.set(-2.7, 3.5, 0);
    leftEarInner.rotation.y = -Math.PI / 2;
    robot.add(leftEarInner);

    const rightEarInner = new THREE.Mesh(earInnerGeometry, earInnerMaterial);
    rightEarInner.position.set(2.7, 3.5, 0);
    rightEarInner.rotation.y = Math.PI / 2;
    robot.add(rightEarInner);

    // ANTENNA - Small rounded top
    const antennaBaseGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.8, 16);
    const antennaMaterial = new THREE.MeshPhongMaterial({ color: blueColor });
    const antennaBase = new THREE.Mesh(antennaBaseGeometry, antennaMaterial);
    antennaBase.position.y = 5.3;
    robot.add(antennaBase);

    const antennaBallGeometry = new THREE.SphereGeometry(0.35, 16, 16);
    const antennaBallMaterial = new THREE.MeshPhongMaterial({
      color: lightBlueColor,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.4,
    });
    const antennaBall = new THREE.Mesh(
      antennaBallGeometry,
      antennaBallMaterial
    );
    antennaBall.position.y = 5.9;
    antennaBall.name = "antennaBall";
    robot.add(antennaBall);

    // BODY - Rounded cube shape
    const bodyGeometry = new THREE.BoxGeometry(3, 3.5, 2);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: darkBlueColor,
      shininess: 90,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0;
    body.name = "body";

    // Round the body edges
    bodyGeometry.parameters = {
      width: 3,
      height: 3.5,
      depth: 2,
      radiusTop: 0.3,
      radiusBottom: 0.3,
    };
    robot.add(body);

    // CHEST CIRCLE - Pink glowing circle
    const chestCircleGeometry = new THREE.CircleGeometry(0.7, 32);
    const chestCircleMaterial = new THREE.MeshBasicMaterial({
      color: pinkColor,
      transparent: true,
      opacity: 0.9,
    });
    const chestCircle = new THREE.Mesh(
      chestCircleGeometry,
      chestCircleMaterial
    );
    chestCircle.position.set(0, 0.3, 1.01);
    chestCircle.name = "chestCircle";
    robot.add(chestCircle);

    // Inner glow ring
    const chestGlowGeometry = new THREE.RingGeometry(0.5, 0.65, 32);
    const chestGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const chestGlow = new THREE.Mesh(chestGlowGeometry, chestGlowMaterial);
    chestGlow.position.set(0, 0.3, 1.02);
    chestGlow.name = "chestGlow";
    robot.add(chestGlow);

    // ARMS - Rounded cylinders
    const armGeometry = new THREE.CapsuleGeometry(0.4, 2, 16, 32);
    const armMaterial = new THREE.MeshPhongMaterial({
      color: blueColor,
      shininess: 90,
    });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-2, 0.3, 0);
    leftArm.rotation.z = Math.PI / 6;
    leftArm.name = "leftArm";
    robot.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(2, 0.3, 0);
    rightArm.rotation.z = -Math.PI / 6;
    rightArm.name = "rightArm";
    robot.add(rightArm);

    // HANDS - Cute rounded hands
    const handGeometry = new THREE.SphereGeometry(0.55, 16, 16);
    const handMaterial = new THREE.MeshPhongMaterial({
      color: darkBlueColor,
      shininess: 100,
    });

    const leftHand = new THREE.Mesh(handGeometry, handMaterial);
    leftHand.position.set(-2.4, -1.5, 0);
    leftHand.scale.set(1, 0.8, 0.8);
    robot.add(leftHand);

    const rightHand = new THREE.Mesh(handGeometry, handMaterial);
    rightHand.position.set(2.4, -1.5, 0);
    rightHand.scale.set(1, 0.8, 0.8);
    rightHand.name = "rightHand";
    robot.add(rightHand);

    // LOWER BODY - Rounded bottom
    const lowerBodyGeometry = new THREE.CapsuleGeometry(1.2, 1.5, 16, 32);
    const lowerBodyMaterial = new THREE.MeshPhongMaterial({
      color: blueColor,
      shininess: 90,
    });
    const lowerBody = new THREE.Mesh(lowerBodyGeometry, lowerBodyMaterial);
    lowerBody.position.y = -2.5;
    robot.add(lowerBody);

    scene.add(robot);

    // Mouse interaction
    const handleMouseMove = (event) => {
      const rect = mountRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      mousePosition.current = {
        x: (x / rect.width) * 2 - 1,
        y: -(y / rect.height) * 2 + 1,
      };
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
    };

    const container = mountRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Get references to animated parts
    const headMesh = robot.children.find((child) => child.name === "head");
    const leftArmMesh = robot.children.find(
      (child) => child.name === "leftArm"
    );
    const rightArmMesh = robot.children.find(
      (child) => child.name === "rightArm"
    );
    const antennaBallMesh = robot.children.find(
      (child) => child.name === "antennaBall"
    );
    const chestCircleMesh = robot.children.find(
      (child) => child.name === "chestCircle"
    );
    const chestGlowMesh = robot.children.find(
      (child) => child.name === "chestGlow"
    );
    const smileMesh = robot.children.find((child) => child.name === "smile");
    const leftEyeMesh = robot.children.find(
      (child) => child.name === "leftEye"
    );
    const rightEyeMesh = robot.children.find(
      (child) => child.name === "rightEye"
    );
    const rightHandMesh = robot.children.find(
      (child) => child.name === "rightHand"
    );

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (robotRef.current) {
        const time = Date.now() * 0.001;

        if (isHovering.current) {
          // Active tracking on hover
          const targetRotationY = mousePosition.current.x * 0.6;
          const targetRotationX = mousePosition.current.y * 0.4;

          robotRef.current.rotation.y +=
            (targetRotationY - robotRef.current.rotation.y) * 0.1;
          robotRef.current.rotation.x +=
            (targetRotationX - robotRef.current.rotation.x) * 0.08;

          // Head follows cursor
          if (headMesh) {
            headMesh.rotation.y +=
              (mousePosition.current.x * 0.4 - headMesh.rotation.y) * 0.15;
            headMesh.rotation.x +=
              (-mousePosition.current.y * 0.25 - headMesh.rotation.x) * 0.15;
          }

          // Arms wave
          if (leftArmMesh) {
            leftArmMesh.rotation.z =
              Math.PI / 6 +
              Math.sin(time * 3) * 0.3 +
              mousePosition.current.x * 0.2;
          }
          if (rightArmMesh) {
            rightArmMesh.rotation.z =
              -Math.PI / 6 -
              Math.sin(time * 3) * 0.3 -
              mousePosition.current.x * 0.2;
          }

          // Right hand waves
          if (rightHandMesh) {
            rightHandMesh.rotation.z = Math.sin(time * 4) * 0.5;
          }

          // Happy bouncing
          robotRef.current.position.y = Math.sin(time * 3) * 0.5;

          // Antenna bounces
          if (antennaBallMesh) {
            antennaBallMesh.position.y = 5.9 + Math.sin(time * 5) * 0.3;
            antennaBallMesh.material.emissiveIntensity =
              0.6 + Math.sin(time * 4) * 0.3;
          }

          // Chest glows
          if (chestCircleMesh && chestGlowMesh) {
            const glowIntensity = 0.9 + Math.sin(time * 4) * 0.1;
            chestCircleMesh.material.opacity = glowIntensity;
            chestGlowMesh.scale.set(
              1 + Math.sin(time * 4) * 0.15,
              1 + Math.sin(time * 4) * 0.15,
              1
            );
          }

          // Smile gets bigger
          if (smileMesh) {
            smileMesh.scale.set(1.1, 1.1, 1.1);
          }
        } else {
          // Gentle idle animation
          robotRef.current.rotation.y +=
            (0 - robotRef.current.rotation.y) * 0.05;
          robotRef.current.rotation.x +=
            (0 - robotRef.current.rotation.x) * 0.05;

          if (headMesh) {
            headMesh.rotation.y +=
              (Math.sin(time * 0.5) * 0.1 - headMesh.rotation.y) * 0.05;
            headMesh.rotation.x += (0 - headMesh.rotation.x) * 0.05;
          }

          if (leftArmMesh) {
            leftArmMesh.rotation.z = Math.PI / 6 + Math.sin(time) * 0.1;
          }
          if (rightArmMesh) {
            rightArmMesh.rotation.z = -Math.PI / 6 - Math.sin(time) * 0.1;
          }

          if (rightHandMesh) {
            rightHandMesh.rotation.z += (0 - rightHandMesh.rotation.z) * 0.05;
          }

          // Gentle breathing
          robotRef.current.position.y = Math.sin(time) * 0.2;

          if (antennaBallMesh) {
            antennaBallMesh.position.y = 5.9;
            antennaBallMesh.material.emissiveIntensity =
              0.4 + Math.sin(time * 2) * 0.2;
          }

          if (chestCircleMesh && chestGlowMesh) {
            chestCircleMesh.material.opacity = 0.9;
            chestGlowMesh.scale.set(1, 1, 1);
          }

          if (smileMesh) {
            smileMesh.scale.set(1, 1, 1);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
    />
  );
};

export default Robot3D;
