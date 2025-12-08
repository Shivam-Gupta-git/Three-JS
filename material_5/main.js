import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// create a scene.............................
const scene = new THREE.Scene();

// create a camera which determine what we'll see when we render the scene......................
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create a box geometru and a basic material and combine them into a mesh.....................
const geometry = new THREE.BoxGeometry(6, 3, 3);
const material = new THREE.MeshStandardMaterial ( { color: "red", roughness: .3, metalness: .3 } );
const cube = new THREE.Mesh( geometry, material );

// add a cube to the scene......................
scene.add( cube );

camera.position.z = 10;

// create a renderer and attach it to our document.......................
const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight; 
  camera.updateProjectionMatrix()
})

// AmbientLight......................
const AmbientLight = new THREE.AmbientLight( 0x404040, 3 ); // soft white light
scene.add( AmbientLight );

// DirectionalLight......................
const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
directionalLight.position.set(2, 2, 2)
scene.add( directionalLight );

// DirectionalLightHelper..................
const helper = new THREE.DirectionalLightHelper( directionalLight, 4 );
scene.add( helper );

// PointLight...................
const light = new THREE.PointLight( 0xffffff, 1, 10, 2 );
light.position.set( 1, -2, 1 );
scene.add( light );

// PointLightHelper....................
const pointLightHelper = new THREE.PointLightHelper( light, 0.3 );
scene.add( pointLightHelper );

// create orbit control and attech them to the camera and renderer's DOM element.......................
const controls = new OrbitControls( camera, renderer.domElement );

// Enable damping for smother control.......................
controls.enableDamping = true // use for element moving smooth
// controls.autoRotate = true // use for simple rotating
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