fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(console.log);

document.querySelectorAll(".pref").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});
