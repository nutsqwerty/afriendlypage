document.addEventListener("DOMContentLoaded", () => {
    // UI Selectors
    const jar = document.getElementById("jar-container"); 
    const modal = document.getElementById("thought-modal");
    const modalText = document.getElementById("modal-thought-text");
    const nextLeafBtn = document.getElementById("btn-next-leaf");
    const closeBoxBtn = document.getElementById("btn-close-box");
    
    // Ambient Music Selectors
    const rainBtn = document.getElementById("btn-rain");
    const rainAudio = document.getElementById("audio-rain");

    // Click behavior to open the popup jar thought
    if (jar) {
        jar.addEventListener("click", () => {
            showRandomThought();
            if (modal) modal.style.display = "flex";
        });
    }

    // Pulls a random item string value from your thoughts collection list
    function showRandomThought() {
        if (modalText && typeof gentleThoughts !== 'undefined' && gentleThoughts.length > 0) {
            const randomIndex = Math.floor(Math.random() * gentleThoughts.length);
            modalText.innerText = gentleThoughts[randomIndex];
        }
    }

    // Modal action assignments
    if (nextLeafBtn) nextLeafBtn.addEventListener("click", showRandomThought);
    if (closeBoxBtn) {
        closeBoxBtn.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

    // Rain Audio Control Handler
    if (rainBtn && rainAudio) {
        rainBtn.addEventListener("click", () => {
            if (rainAudio.paused) {
                rainAudio.play().catch(err => console.log("Audio waiting for interaction: ", err));
                rainBtn.innerHTML = '<span>🌧️</span> gentle rain: on';
                rainBtn.style.background = "rgba(255, 183, 197, 0.5)";
            } else {
                rainAudio.pause();
                rainBtn.innerHTML = '<span>🌧️</span> gentle rain: off';
                rainBtn.style.background = "rgba(255, 255, 255, 0.5)";
            }
        });
    }

    // Generate Floating Background Cherry Blossom Petals Dynamically
    const petalsContainer = document.getElementById("petals-container");
    if (petalsContainer) {
        const petalCount = 25; // Number of petals falling simultaneously
        for (let i = 0; i < petalCount; i++) {
            createPetal(petalsContainer);
        }
    }

    function createPetal(container) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        
        // Randomize dimensions and spacing placements
        const size = Math.random() * 8 + 6; 
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.2}px`;
        petal.style.left = `${Math.random() * 100}%`;
        
        // Randomize fall speed velocities and delayed timings
        const duration = Math.random() * 6 + 6;
        const delay = Math.random() * -12;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        
        container.appendChild(petal);
    }
});
