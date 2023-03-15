//Creating a new scene on three.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

//Camera and render configuration
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ); 

//Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//Setting the lights for our scene
const ambient_light = new THREE.AmbientLight(0x404040);
const directional_light = new THREE.DirectionalLight(0x00ff00, 1);
ambient_light.add(directional_light);
scene.add(ambient_light);

function animate() {
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.1;
    cube.rotation.z +=0.1;
    //camera.position.z -= 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
