renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D glove model
loader.load('https://adamgrambergs.github.io/glove_model_3D/gloveModel1.glb', function (glove) {    
    console.log("Model loaded successfully!");
    scene.add(glove.scene);
}, undefined, function (error) {
    console.error("Error loading the model:", error);
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
