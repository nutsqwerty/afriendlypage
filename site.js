document.addEventListener("DOMContentLoaded", () => {
    // Select the interactive elements using the precise IDs inside our index.html
    const jar = document.getElementById("jar-container"); 
    const modal = document.getElementById("thought-modal");
    const modalText = document.getElementById("modal-thought-text");
    const nextLeafBtn = document.getElementById("btn-next-leaf");
    const closeBoxBtn = document.getElementById("btn-close-box");

    // Click behavior for clicking the Jar graphic wrapper
    if (jar) {
        jar.addEventListener("click", () => {
            showRandomThought();
            if (modal) {
                modal.style.display = "flex"; // Changes layout display property from 'none' to visible
            }
        });
    }

    // Function to calculate a random index point from your thoughts collection array
    function showRandomThought() {
        if (modalText && typeof gentleThoughts !== 'undefined' && gentleThoughts.length > 0) {
            const randomIndex = Math.floor(Math.random() * gentleThoughts.length);
            modalText.innerText = gentleThoughts[randomIndex];
        }
    }

    // Interactive UI Button Handlers
    if (nextLeafBtn) {
        nextLeafBtn.addEventListener("click", showRandomThought);
    }
    
    if (closeBoxBtn) {
        closeBoxBtn.addEventListener("click", () => {
            if (modal) {
                modal.style.display = "none"; // Hides the modal container completely again
            }
        });
    }
});
