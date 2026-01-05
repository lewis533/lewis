// ===== LOCK SCREEN =====
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "daniella") {
    document.getElementById("lock").classList.remove("active");
    show("home");
    launchAnimations();
  } else {
    alert("Wrong code 💔 Try again!");
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

  // Clear input so you can add more files anytime
  fileInput.value = "";
});

// ===== BALLOONS & FLOWERS ANIMATION =====
function launchAnimations() {
  const balloonsDiv = document.querySelector(".balloons");
  const flowersDiv = document.querySelector(".flowers");

  // Create 10 balloons
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 90 + "%";
    balloon.style.animationDelay = Math.random() * 5 + "s";
    balloonsDiv.appendChild(balloon);
  }

  // Create 10 flowers
  for (let i = 0; i < 10; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 90 + "%";
    flower.style.animationDelay = Math.random() * 5 + "s";
    flowersDiv.appendChild(flower);
  }
}