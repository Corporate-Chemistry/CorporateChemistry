document.querySelectorAll(".pref").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});
