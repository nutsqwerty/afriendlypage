document.addEventListener("DOMContentLoaded", () => {
    // Popup Modal Logic
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

    // Audio Logic
    const rainBtn = document.getElementById("btn-rain");
    const rainAudio = document.getElementById("audio-rain");

    if (rainBtn && rainAudio) {
        rainBtn.addEventListener("click", () => {
            if (rainAudio.paused) {
                rainAudio.play();
                rainBtn.innerHTML = '<span>🌧️</span> gentle rain: on';
                rainBtn.style.background = "rgba(255, 183, 197, 0.8)";
            } else {
                rainAudio.pause();
                rainBtn.innerHTML = '<span>🌧️</span> gentle rain: off';
                rainBtn.style.background = "rgba(255, 255, 255, 0.4)";
            }
        });
    }

    // Falling Petals Generator
    const petalsContainer = document.getElementById("petals-container");
    if (petalsContainer) {
        for (let i = 0; i < 30; i++) {
            const petal = document.createElement("div");
            petal.classList.add("petal");
            
            // Random size, start position, animation duration, and delay
            const size = Math.random() * 6 + 6; 
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.2}px`;
            petal.style.left = `${Math.random() * 100}vw`;
            petal.style.animationDuration = `${Math.random() * 5 + 7}s`;
            petal.style.animationDelay = `${Math.random() * -15}s`;
            
            petalsContainer.appendChild(petal);
        }
    }
});
