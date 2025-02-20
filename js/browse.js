document.addEventListener("DOMContentLoaded", () => {
  const filterSelects = document.querySelectorAll(".prefs select");
  const browseContainer = document.querySelector(".cards-container");

  // Get gender from URL parameters
  let pickedGender = new URLSearchParams(window.location.search).get("gender");
  console.log("browse loader...", pickedGender);

  function fetchUsers(filters) {
    let apiUrl = "https://dummyjson.com/users";

    // If gender is set in URL and NOT overridden by the dropdown, apply it
    if (pickedGender && !filters.gender) {
      filters.gender = pickedGender;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        let users = data.users || data; // Ensure compatibility with different API responses

        // Apply gender filter
        if (filters.gender) {
          if (filters.gender.toLowerCase() === "both") {
            // Skip filtering by gender if "both" is selected
          } else {
            users = users.filter(
              (user) =>
                user.gender.toLowerCase() === filters.gender.toLowerCase()
            );
          }
        }

        // Apply age filter
        if (filters.age) {
          const ageRanges = {
            "20|21|22|23|24|25|26|27|28|29": [20, 29],
            "30|31|32|33|34|35|36|37|38|39": [30, 39],
            "40|41|42|43|44|45|46|47|48|49": [40, 49],
          };
          let [minAge, maxAge] = ageRanges[filters.age];
          users = users.filter(
            (user) => user.age >= minAge && user.age <= maxAge
          );
        }

        // Apply height filter (with rounding to nearest integer)
        if (filters.height) {
          const heightRanges = {
            "150-159": [150, 159],
            "160-169": [160, 169],
            "170-179": [170, 179],
            "180-189": [180, 189],
            "190-199": [190, 199],
          };
          let [minHeight, maxHeight] = heightRanges[filters.height];

          users = users.filter((user) => {
            let userHeight = Math.round(user.height); // Round height to nearest integer
            return userHeight >= minHeight && userHeight <= maxHeight;
          });
        }

        // Apply weight filter (with rounding to nearest integer)
        if (filters.weight) {
          const weightRanges = {
            "50-59": [50, 59],
            "60-69": [60, 69],
            "70-79": [70, 79],
            "80-89": [80, 89],
            "90-99": [90, 99],
          };
          let [minWeight, maxWeight] = weightRanges[filters.weight];

          users = users.filter((user) => {
            let userWeight = Math.round(user.weight); // Round weight to nearest integer
            return userWeight >= minWeight && userWeight <= maxWeight;
          });
        }

        // Apply hair filter
        if (filters.hair && filters.hair !== "type") {
          users = users.filter(
            (user) =>
              user.hair.color.toLowerCase() === filters.hair.toLowerCase()
          );
        }

        // Apply eye color filter
        if (filters.eye && filters.eye !== "eye") {
          users = users.filter(
            (user) => user.eyeColor.toLowerCase() === filters.eye.toLowerCase()
          );
        }

        // Apply university filter
        if (filters.university && filters.university !== "university") {
          users = users.filter(
            (user) => user.university === filters.university
          );
        }

        // Apply job filter
        if (filters.job && filters.job !== "job") {
          users = users.filter((user) => user.company.title === filters.job);
        }

        // Apply coin filter
        if (filters.coin && filters.coin !== "coin") {
          users = users.filter((user) => user.crypto.coin === filters.coin);
        }

        // Apply state filter
        if (filters.state && filters.state !== "state") {
          users = users.filter((user) => user.address.state === filters.state);
        }

        // Apply city filter
        if (filters.city && filters.city !== "city") {
          users = users.filter((user) => user.address.city === filters.city);
        }

        showList(users);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }

  function showList(users) {
    if (!users.length) {
      browseContainer.innerHTML = "<p>No matches found.</p>";
      return;
    }

    const markup = users
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

    browseContainer.innerHTML = markup;
  }

  function handleFilterChange() {
    let filters = {};

    filterSelects.forEach((select) => {
      if (select.value && select.value !== select.options[0].value) {
        filters[select.classList[1]] = select.value;
      }
    });

    // If gender dropdown is used, update `pickedGender`
    if (filters.gender) {
      pickedGender = filters.gender; // Override URL parameter
    }

    fetchUsers(filters);
  }

  filterSelects.forEach((select) => {
    select.addEventListener("change", handleFilterChange);
  });

  fetchUsers({}); // Initial fetch with gender filter applied
});
