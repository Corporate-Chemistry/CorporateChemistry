document.querySelectorAll(".pref").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});

const preferencer = new URLSearchParams(window.location.search).get("category");
console.log("productliste loader...", preferencer);

let Produktliste = document.querySelector(".cards-container");

fetch(`https://dummyjson.com/users?limit=30`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(users) {
  console.log(users);
  const markup = users.users
    .map(
      (user) =>
        `<a href="profile.html?id=${user.id}" class="card">
        <img src="../imgs/emily.jpg" alt="emily" class="card-img" />
        <div class="card-info">
          <h3 class="card-name">
            ${user.firstName} <span class="age"> - ${user.age}</span>
          </h3>
          <div class="card-job">
            <img src="../imgs/mappe.svg" alt="mappe" width="23" height="19" class="mappe" />
            <p class="jobtitle">Job: ${user.company.title}</p>
          </div>
          <div class="card-actions">
            <button class="btn dislike">✖</button>
            <button class="btn like">➡</button>
          </div>
        </div>
      </a>`
    )
    .join("");
  console.log(markup);
  Produktliste.innerHTML = markup;
}
