document.addEventListener("DOMContentLoaded", () => {
    // UI Connections
    const jar = document.getElementById("jar-container"); 
    const modal = document.getElementById("thought-modal");
    const modalText = document.getElementById("modal-thought-text");
    const nextLeafBtn = document.getElementById("btn-next-leaf");
    const closeBoxBtn = document.getElementById("btn-close-box");
    
    // Audio Connections
    const rainBtn = document.getElementById("btn-rain");
    const rainAudio = document.getElementById("audio-rain");

    // Click trigger for the jar graphic
    if (jar) {
        jar.addEventListener("click", () => {
            showRandomThought();
            if (modal) modal.style.display = "flex";
        });
    }

    // Pulls a dynamic random thought from your thoughts list array
    function showRandomThought() {
        if (modalText && typeof gentleThoughts !== 'undefined' && gentleThoughts.length > 0) {
            const randomIndex = Math.floor(Math.random() * gentleThoughts.length);
            modalText.innerText = gentleThoughts[randomIndex];
        }
    }

    // Modal control actions
    if (nextLeafBtn) nextLeafBtn.addEventListener("click", showRandomThought);
    if (closeBoxBtn) {
        closeBoxBtn.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

    // Background Audio On/Off controls toggle switch
    if (rainBtn && rainAudio) {
        rainBtn.addEventListener("click", () => {
            if (rainAudio.paused) {
                rainAudio.play().catch(err => console.log("Audio playback interaction delayed: ", err));
                rainBtn.innerHTML = '<span class="icon">🌧️</span> gentle rain: on';
                rainBtn.style.background = "rgba(255, 183, 197, 0.6)";
            } else {
                rainAudio.paused;
                rainBtn.innerHTML = '<span class="icon">🌧️</span> gentle rain: off';
                rainBtn.style.background = "rgba(255, 255, 255, 0.4)";
            }
        });
    }
});
