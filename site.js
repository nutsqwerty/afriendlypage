document.addEventListener("DOMContentLoaded", () => {
    const jar = document.getElementById("jar-container"); 
    const modal = document.getElementById("thought-modal");
    const modalText = document.getElementById("modal-thought-text");
    const nextLeafBtn = document.getElementById("btn-next-leaf");
    const closeBoxBtn = document.getElementById("btn-close-box");

    if (jar) {
        jar.addEventListener("click", () => {
            showRandomThought();
            if (modal) modal.style.display = "flex";
        });
    }

    function showRandomThought() {
        if (modalText && typeof gentleThoughts !== 'undefined' && gentleThoughts.length > 0) {
            const randomIndex = Math.floor(Math.random() * gentleThoughts.length);
            modalText.innerText = gentleThoughts[randomIndex];
        }
    }

    if (nextLeafBtn) nextLeafBtn.addEventListener("click", showRandomThought);
    if (closeBoxBtn) {
        closeBoxBtn.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }
});
