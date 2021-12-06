darkBtn = document.getElementById("toggle-blue-mode");

darkBtn.addEventListener("click", () => {
  if (darkBtn.checked) {
    document.documentElement.classList.add("blue");
  } else {
    document.documentElement.classList.remove("blue");
  }
});
