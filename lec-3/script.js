import * as THREE from "three";

// console.log(THREE);
//Scene
const scene = new THREE.Scene();

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const sphere = new THREE.SphereGeometry(1.5, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Size
const sizes = {
  width: 800,
  height: 600,
};
//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = 0.75;
camera.position.y = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});

// renderer.setSize(sizes.width, sizes.height);
renderer.setSize(800, 600);
renderer.render(scene, camera);
