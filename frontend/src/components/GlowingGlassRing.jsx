import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GlowingGlassRing({ className = '', isFullScreen = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 8.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Group to hold all ring elements
    const mainGroup = new THREE.Group();
    // Default initial tilt matching reference image
    mainGroup.rotation.x = 0.58;
    mainGroup.rotation.y = -0.42;
    mainGroup.rotation.z = 0.35;
    scene.add(mainGroup);

    // -------------------------------------------------------------
    // 1. Shaders & Materials for Glass Ring with Fresnel Glow
    // -------------------------------------------------------------
    const glassVertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vPosition = position;
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const glassFragmentShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      uniform float uTime;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Fresnel calculation
        float fresnel = pow(1.0 - abs(dot(viewDir, normal)), 2.8);
        float innerGlow = pow(abs(dot(viewDir, normal)), 3.5);

        // Dynamic iridescent color gradients (Cyan, Blue, Purple, Magenta)
        vec3 cyan = vec3(0.0, 0.85, 1.0);
        vec3 deepBlue = vec3(0.08, 0.25, 0.95);
        vec3 violet = vec3(0.58, 0.15, 0.98);
        vec3 electricPink = vec3(0.85, 0.2, 0.8);

        // Wave motion along UV
        float wave = sin(vUv.x * 12.0 + uTime * 1.5) * 0.5 + 0.5;
        float wave2 = cos(vUv.y * 6.0 - uTime * 0.8) * 0.5 + 0.5;

        vec3 ringColor = mix(cyan, violet, wave);
        ringColor = mix(ringColor, deepBlue, wave2 * 0.4);
        ringColor = mix(ringColor, electricPink, fresnel * 0.45);

        // Core transmission look
        vec3 finalColor = ringColor * (0.45 + fresnel * 1.6);
        finalColor += cyan * pow(fresnel, 4.0) * 0.8; // Edge specular shine

        // Specular highlight from virtual directional source
        vec3 lightDir = normalize(vec3(0.6, 1.0, 0.8));
        vec3 halfVec = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfVec), 0.0), 32.0);
        finalColor += vec3(1.0, 1.0, 1.0) * spec * 0.9;

        // Alpha transparency: glass translucent center with bright glowing rims
        float alpha = clamp(0.35 + fresnel * 0.65 + spec * 0.5, 0.0, 0.95);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const glassUniforms = {
      uTime: { value: 0 }
    };

    const glassMaterial = new THREE.ShaderMaterial({
      vertexShader: glassVertexShader,
      fragmentShader: glassFragmentShader,
      uniforms: glassUniforms,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    // Main Outer Glass Torus
    const mainTorusGeo = new THREE.TorusGeometry(2.3, 0.38, 48, 128);
    const mainTorus = new THREE.Mesh(mainTorusGeo, glassMaterial);
    mainGroup.add(mainTorus);

    // Secondary Inner Swirl Torus Layer (gives depth and liquid swirl lines)
    const innerTorusGeo = new THREE.TorusGeometry(2.28, 0.22, 32, 100);
    const innerMaterial = new THREE.ShaderMaterial({
      vertexShader: glassVertexShader,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        uniform float uTime;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, normal)), 2.0);
          
          vec3 glowCyan = vec3(0.0, 0.95, 1.0);
          vec3 glowViolet = vec3(0.7, 0.2, 1.0);
          float stripe = sin(vUv.x * 30.0 + uTime * 3.0);
          
          vec3 col = mix(glowCyan, glowViolet, stripe * 0.5 + 0.5);
          gl_FragColor = vec4(col, (0.2 + fresnel * 0.6) * 0.6);
        }
      `,
      uniforms: glassUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const innerTorus = new THREE.Mesh(innerTorusGeo, innerMaterial);
    mainGroup.add(innerTorus);

    // -------------------------------------------------------------
    // 2. Surrounding Orbital Wireframe / Spline Curves
    // -------------------------------------------------------------
    const orbitalGroup = new THREE.Group();
    mainGroup.add(orbitalGroup);

    const orbitLines = [];
    const orbitCount = 4;
    const orbitRadii = [
      { rx: 3.3, ry: 2.7, rotX: 0.2, rotY: 0.15, rotZ: 0.1, speed: 0.35, color: 0x00d2ff },
      { rx: 3.5, ry: 2.8, rotX: -0.25, rotY: -0.2, rotZ: -0.15, speed: -0.28, color: 0xa855f7 },
      { rx: 3.1, ry: 2.6, rotX: 0.15, rotY: -0.3, rotZ: 0.25, speed: 0.42, color: 0x38bdf8 },
      { rx: 3.7, ry: 2.9, rotX: -0.1, rotY: 0.3, rotZ: -0.05, speed: -0.22, color: 0x818cf8 }
    ];

    orbitRadii.forEach((orb) => {
      const curve = new THREE.EllipseCurve(
        0, 0,
        orb.rx, orb.ry,
        0, 2 * Math.PI,
        false,
        0
      );

      const points = curve.getPoints(120);
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, p.y, 0))
      );

      const orbitMaterial = new THREE.LineBasicMaterial({
        color: orb.color,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });

      const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
      orbitLine.rotation.x = orb.rotX;
      orbitLine.rotation.y = orb.rotY;
      orbitLine.rotation.z = orb.rotZ;

      orbitalGroup.add(orbitLine);
      orbitLines.push({ line: orbitLine, curve, speed: orb.speed });
    });

    // -------------------------------------------------------------
    // 3. Orbital Particles / Traveling Glow Beads
    // -------------------------------------------------------------
    const particleBeads = [];
    const beadGeo = new THREE.SphereGeometry(0.045, 12, 12);

    for (let i = 0; i < 7; i++) {
      const beadMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0xd946ef,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
      });
      const bead = new THREE.Mesh(beadGeo, beadMat);
      orbitalGroup.add(bead);

      particleBeads.push({
        mesh: bead,
        orbitIndex: i % orbitCount,
        progress: (i / 7) + 0.1
      });
    }

    // Background Subtle Particle Dust
    const dustCount = 80;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 8;
      dustPositions[i + 1] = (Math.random() - 0.5) * 8;
      dustPositions[i + 2] = (Math.random() - 0.5) * 5;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // -------------------------------------------------------------
    // 4. Lighting
    // -------------------------------------------------------------
    const cyanLight = new THREE.PointLight(0x00f0ff, 3.5, 15);
    cyanLight.position.set(-3, 2, 4);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x9333ea, 4.0, 15);
    purpleLight.position.set(3, -2, 3);
    scene.add(purpleLight);

    const ambientLight = new THREE.AmbientLight(0x0a1025, 2.0);
    scene.add(ambientLight);

    // -------------------------------------------------------------
    // 5. Responsive Resize Handler (Fixed Orientation, No Mouse Parallax)
    // -------------------------------------------------------------
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 500;
      const newH = container.clientHeight || 500;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', onResize);

    // -------------------------------------------------------------
    // 6. Animation Loop (Autonomous Smooth Rotation & Floating)
    // -------------------------------------------------------------
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      glassUniforms.uTime.value = elapsedTime;

      // Axial continuous rotation along its ring axis
      mainTorus.rotation.z += 0.006;
      innerTorus.rotation.z -= 0.008;

      // Subtle natural float hover physics
      mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      mainGroup.position.x = Math.cos(elapsedTime * 0.8) * 0.06;

      // Fixed canonical tilt matching approved reference (no mouse movement)
      mainGroup.rotation.x = 0.58;
      mainGroup.rotation.y = -0.42;
      mainGroup.rotation.z = 0.35;

      // Orbit lines rotation
      orbitLines.forEach((orb) => {
        orb.line.rotation.z += orb.speed * 0.01;
      });

      // Update traveling beads along their respective orbits
      particleBeads.forEach((bead) => {
        bead.progress = (bead.progress + 0.003) % 1.0;
        const orb = orbitLines[bead.orbitIndex];
        const pt = orb.curve.getPoint(bead.progress);
        const vec = new THREE.Vector3(pt.x, pt.y, 0);
        vec.applyEuler(orb.line.rotation);
        bead.mesh.position.copy(vec);
      });

      // Dust slight float
      dust.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------
    // Cleanup
    // -------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      mainTorusGeo.dispose();
      innerTorusGeo.dispose();
      glassMaterial.dispose();
      innerMaterial.dispose();
      beadGeo.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative flex items-center justify-center overflow-hidden pointer-events-none select-none ${
        isFullScreen ? 'fixed inset-0 w-full h-full bg-[#000000] z-50' : className
      }`}
      style={{ touchAction: 'none' }}
    />
  );
}
