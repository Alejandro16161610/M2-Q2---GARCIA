const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerHeight,window.innerWidth);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00FF00});
const cube = new THREE.Mesh(geometry,material);
cube.position.set(-1,0,0);
scene.add(cube);

const geometry2 = new THREE.ConeGeometry(0.7,1,10);
const material2 = new THREE.MeshBasicMaterial({color: 0xFF0000});
const cube2 = new THREE.Mesh(geometry2,material2);
cube2.position.set(-1,1.8,0);
scene.add(cube2);

const geometry3 = new THREE.CylinderGeometry(0.7,0.7,1);
const material3 = new THREE.MeshBasicMaterial({color: 0x0061FF});
const cube3 = new THREE.Mesh(geometry3,material3);
cube3.position.set(-1,-2,0);
scene.add(cube3);

const geometry4 = new THREE.TorusGeometry(0.6, 0.3, 12, 200);
const material4 = new THREE.MeshBasicMaterial({color: 0xFF00FF});
const cube4 = new THREE.Mesh(geometry4,material4);
cube4.position.set(1.2,-1,0);
scene.add(cube4);

const geometry5 = new THREE.SphereGeometry(0.7,50,50);
const material5 = new THREE.MeshBasicMaterial({color: 0x00FFFF});
const cube5 = new THREE.Mesh(geometry5,material5);
cube5.position.set(1.2,1,0);
scene.add(cube5);

camera.position.z = 5;

function animate()
{
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube2.rotation.x += 0.01;
	cube2.rotation.y += 0.01;
	cube3.rotation.x += 0.01;
	cube3.rotation.y += 0.01;
	cube4.rotation.x += 0.01;
	cube4.rotation.y += 0.01;
	cube5.rotation.x += 0.01;
	cube5.rotation.y += 0.01;
	renderer.render(scene,camera);
}

animate();