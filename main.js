import * as THREE from 'three';

const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 5;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
