// //

const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then( function(response) {
      return response.json();
  })
  .then( function(jsonObject) {
      const prophets = jsonObject["prophets"]
      for(let i = 0; i < prophets.length; i++) {

          let card = document.createElement("section");
          let h2 = document.createElement("h2");
          let birthDate = document.createElement("p");
          let birthPlace = document.createElement("p");
          let portrait = document.createElement("img");
          let portraitAlt = prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order;

          h2.textContent = prophets[i].name + " " + prophets[i].lastname;
          birthDate.textContent = "Date of birth: " + prophets[i].birthdate;
          birthPlace.textContent = "Place of birth: " + prophets[i].birthplace;
          portrait.setAttribute("src", "https://via.placeholder.com/335x447");
          portrait.setAttribute("data-src", prophets[i].imageurl);
          portrait.setAttribute("alt", portraitAlt);
          
          card.appendChild(h2);
          card.appendChild(birthDate);
          card.appendChild(birthPlace);
          card.appendChild(portrait);

          document.querySelector("div.cards").appendChild(card);

      }
      // lazy load images // Thanks Timothy Johnson for the help with this code!
      let script = document.createElement('script');
      script.src = "js/lazyload.js";
      document.querySelector('head').appendChild(script);

  }); // end of fetch