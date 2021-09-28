/*const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1.5, 2 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 2;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement)


camera.position.z = 5

const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000, side: THREE.DoubleSide});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 1);
scene.add(light);

console.log(light);
console.log(planeGeometry);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //planeMesh.rotation.x += 0.01;
}



animate()
