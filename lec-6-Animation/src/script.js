import * as THREE from "three";
import gsap from "gsap";
console.log(gsap);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//Animation

//  * 1st approach : Time
// let time = Date.now();

// const tick = () => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;
//   console.log(deltaTime);
//   // Update the object : but this way animation will vary from pc to pc
//   //   mesh.rotation.y += 0.01;
//   //   mesh.rotation.z += 0.01;
//   //   mesh.rotation.x += 0.01;
//   //  Solution to above problem
//   mesh.rotation.y += 0.001 * deltaTime;
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// 2nd Approach : Clock

// const clock = new THREE.Clock();
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   //Update Object
//   //   mesh.rotation.y = elapsedTime * Math.PI * 2; // 2 rotaions per sec

//   //   mesh.position.y = Math.cos(elapsedTime);
//   //   mesh.position.x = Math.sin(elapsedTime);

//   //   Move camera instead of mesh
//   camera.position.x = Math.sin(elapsedTime);
//   camera.position.y = Math.cos(elapsedTime);
//   camera.lookAt(mesh.position);

//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// tick();

// Approach 3 : GSAP Library

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
