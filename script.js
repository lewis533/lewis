// ===== LOCK SCREEN =====
function unlock() {
  const password = document.getElementById("password").value;
  if(password === "1234") { // your secret code
    document.getElementById("lock").classList.remove("active");
    document.querySelector("#home").classList.add("active");
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong code!");
  }
}

// ===== SCREEN NAVIGATION =====
function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// ===== UPLOAD MULTIPLE PHOTOS & VIDEOS =====
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

if(fileInput) {
  fileInput.addEventListener("change", (e) => {
    gallery.innerHTML = ""; // clear previous items
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
}

// ===== FLOATING BALLOONS & FLOWERS =====
const animations = document.querySelector(".animations");

function createFloat() {
  const floatElem = document.createElement("div");
  floatElem.className = "float";
  floatElem.style.left = Math.random()*100 + "vw";
  floatElem.style.animationDuration = 4 + Math.random()*4 + "s";
  floatElem.innerText = Math.random() > 0.5 ? "" : "";
  animations.appendChild(floatElem);
  setTimeout(() => animations.removeChild(floatElem), 8000);
}

setInterval(createFloat, 800);