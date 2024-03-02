// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";
// import gsap from "gsap";
// // import { useGLTF } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const ThreeJSComponent = () => {
//   const canvasRef = useRef(null);
//   let isZPositive = false;
//   const colorObject = { color: "#ffcc00" };
//   let sphere;

//   useEffect(() => {
//     const loader = new GLTFLoader();

//     gsap.registerPlugin(ScrollTrigger);

//     // Canvas
//     const canvas = canvasRef.current;

//     // Scene
//     const scene = new THREE.Scene();

//     let jewel = null;

//     // Objects
//     // const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
//     loader.load("/public/headphones.glb", function (glb) {
//       jewel = glb.scene;

//       scene.add(glb.scene);

//       const jewelFolder = gui.addFolder("Jewel");
//       jewelFolder
//         .add(jewel.position, "x")
//         .min(-10)
//         .max(10)
//         .step(0.01)
//         .name("Position X");
//       jewelFolder
//         .add(jewel.position, "y")
//         .min(-7)
//         .max(7)
//         .step(0.01)
//         .name("Position Y");

//       jewelFolder
//         .add(jewel.position, "z")
//         .min(-12)
//         .max(7)
//         .step(0.01)
//         .name("Position Z");
//       jewelFolder
//         .add(jewel.rotation, "x")
//         .min(0)
//         .max(Math.PI * 2)
//         .step(0.01)
//         .name("Rotation X");
//       jewelFolder
//         .add(jewel.rotation, "y")
//         .min(0)
//         .max(Math.PI * 2)
//         .step(0.01)
//         .name("Rotation Y");
//       jewelFolder
//         .add(jewel.rotation, "z")
//         .min(0)
//         .max(Math.PI * 2)
//         .step(0.01)
//         .name("Rotation Z");

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: "section.animate",
//           start: "top bottom",
//           end: "bottom center",
//           markers: true,
//           scrub: true,
//         },
//       });

//       tl.to(jewel.position, {
//         x: 1.72,
//         // duration: 1,
//         z: -12,
//       });

//       tl.to(
//         jewel.rotation,
//         {
//           x: 1.53,
//           z: 1.37,
//           duration: 2,
//         },
//         "<"
//       );
//       tl.to(
//         jewel.position,
//         {
//           z: 0.36,
//         },
//         "-=.5"
//       );
//       tl.to(
//         jewel.scale,
//         {
//           x: 1,
//           y: 1,
//           z: 1,
//           duration: 3,
//         },
//         "-=.1"
//       );
//     });
//     // Materials
//     // const material = new THREE.MeshToonMaterial();
//     // material.color = new THREE.Color(0xffcc00);

//     // Mesh
//     // sphere = new THREE.Mesh(geometry, material);
//     // sphere.position.z = -3;
//     // scene.add(sphere);

//     // Lights
//     const pointLight = new THREE.PointLight(0xffffff, 1);
//     pointLight.position.x = 2;
//     pointLight.position.y = 3;
//     pointLight.position.z = 4;
//     scene.add(pointLight);

//     // Debug
//     const gui = new dat.GUI();
//     const ringFolder = gui.addFolder("Ring");
//     // ringFolder.add(sphere.position, "x").min(-7).max(7).step(0.01);
//     // ringFolder.add(sphere.position, "y").min(-3).max(3).step(0.01);
//     // ringFolder.add(sphere.position, "z").min(-3).max(3).step(0.01);

//     const canvasEl = canvas;
//     canvasEl.addEventListener("click", () => {
//       const targetZ = isZPositive ? -3 : 1.78;
//       const changeColor = isZPositive ? "#ffcc00" : "red";
//       gsap.to(sphere.position, {
//         z: targetZ,
//         duration: 2,
//         ease: "power3.inOut",
//       });
//       gsap.to(colorObject, {
//         color: changeColor,
//         duration: 2,
//         ease: "power3.inOut",
//         onUpdate: () => {
//           sphere.material.color.set(colorObject.color);
//         },
//       });
//       isZPositive = !isZPositive;
//     });

//     // Sizes
//     const sizes = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };

//     window.addEventListener("resize", () => {
//       // Update sizes
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;

//       // Update camera
//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();

//       // Update renderer
//       renderer.setSize(sizes.width, sizes.height);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     });

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       sizes.width / sizes.height,
//       0.1,
//       100
//     );
//     camera.position.x = 0;
//     camera.position.y = 0;
//     camera.position.z = 2;
//     scene.add(camera);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//       alpha: true,
//     });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     let baseY = 0;
//     let amplitude = 0.1;
//     let frequency = 2;

//     // Animate
//     const clock = new THREE.Clock();
//     const tick = () => {
//       const elapsedTime = clock.getElapsedTime();

//       if (jewel) {
//         let time = performance.now() * 0.001;
//         jewel.position.y = baseY + Math.sin(time * frequency) * amplitude;
//       }

//       // Update objects
//       // sphere.rotation.y = 0.5 * elapsedTime;

//       // Render
//       renderer.render(scene, camera);

//       // Call tick again on the next frame
//       window.requestAnimationFrame(tick);
//     };

//     tick();

//     return () => {
//       gui.destroy();
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="webgl" />;
// };

// export default ThreeJSComponent;
