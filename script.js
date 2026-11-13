
const enterBtn = document.getElementById("enterBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

enterBtn.addEventListener("click", () => {
    playMusic();

    opening.style.transition = "opacity 1s ease";
    opening.style.opacity = "0";

    setTimeout(() => {
        opening.style.display = "none";
        mainContent.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, 1000);

});


// INTERAKSI SURAT

const envelope = document.getElementById("envelope");
const letterBtn = document.getElementById("letterBtn");

letterBtn.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        letterBtn.innerHTML = "Close the letter ♡";
    } else {
        letterBtn.innerHTML = "Open the letter ♡";
    }

});

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        letterBtn.innerHTML = "Close the letter ♡";
    } else {
        letterBtn.innerHTML = "Open the letter ♡";
    }

});


// BACKGROUND MUSIC

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

bgMusic.volume = 0.4;

// Fungsi memutar musik
async function playMusic() {
    try {
        await bgMusic.play();

        musicBtn.innerHTML = "♫ MUSIC ON";
        musicBtn.classList.add("playing");

    } catch (error) {
        console.log("Musik belum bisa diputar:", error);
    }
}

// Tombol musik ON/OFF
musicBtn.addEventListener("click", async () => {

    if (bgMusic.paused) {
        await playMusic();
    } else {
        bgMusic.pause();

        musicBtn.innerHTML = "♫ MUSIC OFF";
        musicBtn.classList.remove("playing");
    }

});
