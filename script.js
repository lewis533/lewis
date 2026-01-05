// Unlock the app with the secret code
function unlock() {
  const pass = document.getElementById("password").value;

  if (pass === "daniella") { // Change this if you want a different secret
    document.getElementById("lock").classList.remove("active");
    show("home"); // Go to home screen
  } else {
    alert("Wrong code 💔 Try again!");
  }
}

// Show a specific screen (home, memories, or note)
function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}