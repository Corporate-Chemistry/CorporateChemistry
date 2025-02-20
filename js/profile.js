const profileId = new URLSearchParams(window.location.search).get("id");
console.log("profile loader...", profileId);

let profileCard = document.querySelector(".profile-main");

fetch(`https://dummyjson.com/users/${profileId}`)
  .then((response) => response.json())

  .then((data) => {
    profileCard.innerHTML = `
      <div class="grid_1-1">
        <img src="../imgs/profile${profileId}.webp" alt="Portrait" class="no-padding" />
        <div class="col">
          <h1>${data.firstName} - ${data.age}</h1>
          <div class="intro">
            <div class="flex-container">
              <img src="../svg/briefcase.svg" alt="Briefcase" />
              <p><span class="bold">Job:</span> ${data.company.title}</p>
            </div>
            <div class="flex-container">
              <img src="../svg/home.svg" alt="House" />
              <p><span class="bold">From:</span> ${data.address.city}, ${data.address.state}</p>
            </div>
            <div class="flex-container">
              <img src="../svg/university.svg" alt="Graduation cap" />
              <p><span class="bold">University:</span> ${data.university}</p>
            </div>
          </div>
          <h2>About</h2>
          <p>Adventurous, curious, and always up for a good conversation! Hello, I'm ${data.firstName} - a ${data.age}-years old ${data.gender}. I work as a ${data.company.title} at ${data.company.name} in the department of ${data.company.department}. I have a passion for discovering new places and learning something new every day. I studied at ${data.university}, where I had 4 great years. You'll often find me with a good cup of coffee in my hand working. If i sound like a match for you, please send me a message or match with me!</p>
          <div class="flex-container2">
            <a href="construction.html" class="cta">Match</a>
            <a href="construction.html" class="cta">Message</a>
          </div>
        </div>
      </div>
      <section class="more-info">
        <h2>More information</h2>
        <div class="grid_1-1 seecond-grid">
          <div class="col">
            <ul>
              <li><span class="bold">Birth date:</span> ${data.birthDate}</li>
              <li><span class="bold">Height:</span> ${data.height}</li>
              <li><span class="bold">Eye color:</span> ${data.eyeColor}</li>
              <li><span class="bold">Hair:</span> ${data.hair.color}, ${data.hair.type}</li>
               <li><span class="bold">Bloodtype:</span> ${data.bloodGroup}</li>
            </ul>
          </div>
          <div class="col">
            <ul>
             <li><span class="bold">From:</span> ${data.address.city}, ${data.address.state}</li>
              <li><span class="bold">University:</span> ${data.university}</li>
              <li><span class="bold">Company / Department:</span> ${data.company.name} / ${data.company.department}</li>
               <li><span class="bold">Title:</span> ${data.company.title}</li>
            </ul>
          </div>
        </div>
      </section>
        `;
  });
