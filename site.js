document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const jar = document.getElementById("jar-container"); 
    const modal = document.getElementById("thought-modal");
    const modalText = document.getElementById("modal-thought-text");
    const nextLeafBtn = document.getElementById("btn-next-leaf");
    const closeBoxBtn = document.getElementById("btn-close-box");
    
    // Audio Elements
    const rainBtn = document.getElementById("btn-rain");
    const rainAudio = document.getElementById("audio-rain");

    // Click behavior for interactive Jar graphic
    if (jar) {
        jar.addEventListener("click", () => {
            showRandomThought();
            if (modal) modal.style.display = "flex";
        });
    }

    // Mathematical randomization formula array look-up
    function showRandomThought() {
        if (modalText && typeof gentleThoughts !== 'undefined' && gentleThoughts.length > 0) {
            const randomIndex = Math.floor(Math.random() * gentleThoughts.length);
            modalText.innerText = gentleThoughts[randomIndex];
        }
    }

    // Leaf and closing button assignments
    if (nextLeafBtn) nextLeafBtn.addEventListener("click", showRandomThought);
    if (closeBoxBtn) {
        closeBoxBtn.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

    // Audio tracking switch logic toggle
    if (rainBtn && rainAudio) {
        rainBtn.addEventListener("click", () => {
            if (rainAudio.paused) {
                rainAudio.play().catch(err => console.log("Audio playback delayed: ", err));
                rainBtn.innerHTML = '<span class="icon">🌧️</span> gentle rain: on';
                rainBtn.style.background = "rgba(255, 183, 197, 0.6)";
            } else {
                rainAudio.pause();
                rainBtn.innerHTML = '<span class="icon">🌧️</span> gentle rain: off';
                rainBtn.style.background = "rgba(255, 255, 255, 0.4)";
            }
        });
    }
});
