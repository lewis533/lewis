// ===== LOCK SCREEN =====
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "daniella") { // secret code
    document.getElementById("lock").classList.remove("active");
    show("home");
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
const fileInput = document.querySelector("#memories input");
const memoriesDiv = document.getElementById("memories");

fileInput.addEventListener("change", function() {
  // Reset memories section but keep the heading
  memoriesDiv.innerHTML = "<h2> Memories</h2>";

  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(e) {
      let media;
      if (file.type.startsWith("image/")) {
        media = document.createElement("img");
        media.src = e.target.result;
        media.style.maxWidth = "100%";
        media.style.borderRadius = "12px";
        media.style.margin = "10px 0";
      } else if (file.type.startsWith("video/")) {
        media = document.createElement("video");
        media.src = e.target.result;
        media.controls = true;
        media.style.maxWidth = "100%";
        media.style.borderRadius = "12px";
        media.style.margin = "10px 0";
      }
      memoriesDiv.appendChild(media);
    };

    reader.readAsDataURL(file);
  }
});