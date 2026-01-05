// ===== LOCK SCREEN =====
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "daniella") {
    document.getElementById("lock").classList.remove("active");
    show("home");

    // Start floating balloons/flowers
    launchAnimations();

    // Play background music
    const music = document.getElementById("bgMusic");
    music.volume = 0.4;
    music.play().catch(() => console.log("Music will start after user interacts."));
  } else {
    alert("Wrong code  Try again!");
  }
}

// ===== NAVIGATION =====
function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// ===== MEMORIES FILE DISPLAY =====
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

fileInput.addEventListener("change", function() {
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(e) {
      let media;
      if (file.type.startsWith("image/")) {
        media = document.createElement("img");
        media.src = e.target.result;
      } else if (file.type.startsWith("video/")) {
        media = document.createElement("video");
        media.src = e.target.result;
        media.controls = true;
      }
      media.style.maxWidth = "100%";
      media.style.borderRadius = "12px";
      media.style.margin = "10px 0";
      gallery.appendChild(media);
    };

    reader.readAsDataURL(file);
  }

  // Clear input to allow unlimited uploads
  fileInput.value = "";
});

// ===== FLOATING BALLOONS & FLOWERS =====
function launchAnimations() {
  const container = document.querySelector(".animations");
  container.innerHTML = "";

  const emojis = ["",""];
  const total = 20;

  for (let i = 0; i < total; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.position = "absolute";
    span.style.fontSize = Math.random() * 30 + 20 + "px"; // 20–50px
    span.style.left = Math.random() * 90 + "%";
    span.style.bottom = "-50px";
    span.style.opacity = Math.random() * 0.7 + 0.3;
    span.style.animation = `floatUp ${5 + Math.random() * 5}s linear infinite`;
    container.appendChild(span);
  }
}