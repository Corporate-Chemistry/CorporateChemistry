document.querySelectorAll(".pref").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});

/*get gender*/
const pickedGender = new URLSearchParams(window.location.search).get("gender");
console.log("browse loader...", pickedGender);

/*info på browse*/
let browse = document.querySelector(".cards-container");
let fetchUrl;

if (pickedGender === null) {
  fetchUrl = `https://dummyjson.com/users`;
  console.log("fetchurl er ", fetchUrl);
} else {
  fetchUrl = `https://dummyjson.com/users/filter?key=gender&value=${pickedGender}&limit=22`;
  console.log("fetchurl er ", fetchUrl);
}

fetch(fetchUrl)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(users) {
  console.log(users);
  const markup = users.users
    .map(
      (user) =>
        `<a href="profile.html?id=${user.id}" class="card">
        <img src="../imgs/profile${user.id}.webp" alt="Portræt" class="card-img" />
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
  browse.innerHTML = markup;
}
