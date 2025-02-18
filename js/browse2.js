fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(console.log);

// Psuedo kode - Skal hente GENDER data fra index.html når man hopper fra index.html til browse.html

document.querySelectorAll(".pref").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});
