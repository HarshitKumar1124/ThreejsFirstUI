import * as THREE from 'https://www.unpkg.com/three@0.126.1/build/three.module.js';
//import * as THREE from './three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();


renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const geometry=new THREE.PlaneGeometry();
const material=new THREE.MeshBasicMaterial({color:0x00ff00,wireframe:false});
const object=new THREE.Mesh(geometry,material);
scene.add(object);
camera.position.z=5;


const animate=()=>{
requestAnimationFrame(animate);
renderer.render(scene,camera);
}



