// Function to update the glove color
function updateGloveColor(part, color) {
    if (!window.gloveModel) return;

    // Traverse the 3D model to find the correct part
    window.gloveModel.scene.traverse(child => {
        if (child.isMesh && child.name === part) {
            child.material.color.set(color);
        }
    });
}

// Event listeners for color inputs
document.getElementById("lacingColor").addEventListener("input", function () {
    updateGloveColor("lacing", this.value);
});

document.getElementById("pocketColor").addEventListener("input", function () {
    updateGloveColor("pocket", this.value);
});

document.getElementById("leatherColor").addEventListener("input", function () {
    updateGloveColor("leather", this.value);
});
