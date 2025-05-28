let darkMode = false;
let musicOn = true;
let snowActive = false;
let rainActive = false;
let starsActive = false;

const body = document.getElementById("body");
const music = document.getElementById("background-music");

function toggleTheme() {
  darkMode = !darkMode;
  if (darkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

function toggleMusic() {
  musicOn = !musicOn;
  if (musicOn) {
    music.play();
    document.querySelector(".music-btn").innerText = "Matikan Musik";
  } else {
    music.pause();
    document.querySelector(".music-btn").innerText = "Hidupkan Musik";
  }
}

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Efek Salju
function toggleSnow() {
  snowActive = !snowActive;
  if (snowActive) {
    const snow = document.createElement("style");
    snow.id = "snow-effect";
    snow.innerHTML = `
      .snowflake { position: fixed; top: -10px; color: white; font-size: 1em; user-select: none; animation: fall linear infinite; }
      @keyframes fall { to { transform: translateY(100vh) rotate(360deg); opacity: 0; } }
    `;
    document.head.appendChild(snow);

    for (let i = 0; i < 50; i++) {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.innerText = "❄";
      flake.style.left = Math.random() * 100 + "vw";
      flake.style.animationDuration = 5 + Math.random() * 5 + "s";
      flake.style.fontSize = Math.random() * 20 + 10 + "px";
      flake.style.opacity = Math.random();
      document.body.appendChild(flake);
    }
  } else {
    document.getElementById("snow-effect")?.remove();
    document.querySelectorAll(".snowflake").forEach(el => el.remove());
  }
}

// Efek Hujan (bisa tambahkan)
function toggleRain() {
  alert("Efek hujan belum diimplementasikan.");
}

// Efek Bintang
function toggleStars() {
  starsActive = !starsActive;
  if (starsActive) {
    const star = document.createElement("style");
    star.id = "star-effect";
    star.innerHTML = `
      body::before {
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        background: url('https://www.transparenttextures.com/patterns/stars.png ');
        opacity: 0.1;
        z-index: -1;
      }
    `;
    document.head.appendChild(star);
  } else {
    document.getElementById("star-effect")?.remove();
  }
}

// Cuaca (contoh)
function toggleWeather() {
  alert("Fitur cuaca akan menampilkan info cuaca jika API disambungkan.");
}
