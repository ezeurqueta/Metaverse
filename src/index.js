//Creating a new scene on three.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

//Camera and render configuration
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ); 

//Setting the lights for our scene
const ambient_light = new THREE.AmbientLight(0xbda355);
const directional_light = new THREE.DirectionalLight(0xffffff, 1);
ambient_light.add(directional_light);
scene.add(ambient_light);

//Setting up flat space of the metaverse
const geometry_space = new THREE.BoxGeometry(100,0.2, 50);
const material_space = new THREE.MeshPhongMaterial({color: 0xffffff});
const space = new THREE.Mesh(geometry_space, material_space);
scene.add(space);


//GeometryCube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//GeometryCone
const geometry_cone = new THREE.ConeGeometry( 5, 20, 32 );
const material_cone = new THREE.MeshPhongMaterial( {color: 0xed810a} );
const cone = new THREE.Mesh( geometry_cone, material_cone );
cone.position.set(-10, 5, 0);
scene.add( cone );

//GeometryKnot
const geometry_knot = new THREE.TorusKnotGeometry( 5, 1.5, 50, 8 );
const material_knot = new THREE.MeshPhongMaterial( { color: 0xeff986 } );
const Knot = new THREE.Mesh( geometry_knot, material_knot );
Knot.position.set(10, 5, 0);
scene.add( Knot );



camera.position.set(10, 5, 40);

function animate() {
    cube.rotation.x +=0.5;
    cone.rotation.x +=0.01;
    Knot.rotation.x +=0.001;
    //camera.position.z -= 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
