const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("gloveCanvas") });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D glove model
const loader = new THREE.GLTFLoader();
loader.load('gloveModel.glb', function (glove) {
    window.gloveModel = glove;
    scene.add(glove.scene);
});

// Handle user color changes
document.getElementById("lacingColor").addEventListener("input", function () {
    glove.scene.traverse(child => {
        if (child.isMesh && child.name === "lacing") {
            child.material.color.set(this.value);
        }
    });
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
