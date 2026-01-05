// LOCK SCREEN
function unlock() {
  const password = document.getElementById("password").value;
  if(password === "1234") {
    document.getElementById("lock").classList.remove("active");
    document.getElementById("home").classList.add("active");
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong code!");
  }
}

// NAVIGATION
function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// MEMORIES UPLOAD
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

fileInput.addEventListener("change", (e) => {
  gallery.innerHTML = ""; // Clear previous
  Array.from(e.target.files).forEach(file => {
    const url = URL.createObjectURL(file);
    if(file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = url;
      img.className = "mem-image";
      gallery.appendChild(img);
    } else if(file.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.src = url;
      video.controls = true;
      video.className = "mem-video";
      gallery.appendChild(video);
    }
  });
});

// FLOATING BALLOONS & FLOWERS
const animations = document.querySelector(".animations");
function createFloat() {
  const elem = document.createElement("div");
  elem.className = "float";
  elem.style.left = Math.random() * 100 + "vw";
  elem.style.animationDuration = (4 + Math.random() * 4) + "s";
  elem.innerText = Math.random() > 0.5 ? "🎈" : "💐";
  animations.appendChild(elem);
  setTimeout(() => animations.removeChild(elem), 8000);
}
setInterval(createFloat, 800);