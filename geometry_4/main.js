import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// create a scene.............................
const scene = new THREE.Scene();

// create a camera which determine what we'll see when we render the scene......................
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create a box geometru and a basic material and combine them into a mesh.....................
// const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // box geometry
const geometry = new THREE.CylinderGeometry( 2, 2, 2, 10, 10, true ); // cylandric geometric
// const geometry = new THREE.SphereGeometry( 15, 32, 16 ); // SphereGeometry
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
const cube = new THREE.Mesh( geometry, material );

// add a cube to the scene......................
scene.add( cube );

camera.position.z = 5;

// create a renderer and attach it to our document.......................
const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight; 
  camera.updateProjectionMatrix()
})

// create orbit control and attech them to the camera and renderer's DOM element.......................
const controls = new OrbitControls( camera, renderer.domElement );

// Enable damping for smother control.......................
controls.enableDamping = true // use for element moving smooth
controls.autoRotate = true // use for simple rotating
controls.autoRotateSpeed = 10.0 // use for controling rotating speed
controls.enableZoom = true // use for enableZoom functionality
controls.dampingFactor = 0.01 

function animate() {
  window.requestAnimationFrame(animate)
  renderer.render( scene, camera );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  controls.update();
}

animate()