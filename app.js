// Set up the scene, camera, and renderer as global variables
let scene, camera, renderer, cube;

init();
animate();

// Sets up the scene
function init() {
    // Create a new scene
    scene = new THREE.Scene();
    
    // Set up the camera with a 75-degree field of view, aspect ratio matching the screen, and near and far clipping planes
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a WebGL renderer and set its width and height
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer's canvas to the body of the document
    document.body.appendChild(renderer.domElement);

    // Create a cube and add it to the scene
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 2;
}

// Runs the animation loop
function animate() {
    requestAnimationFrame(animate); // Request the next animation frame

    // Rotate the cube around its X and Y axes
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    // Render the scene and the camera
    renderer.render(scene, camera);
}
