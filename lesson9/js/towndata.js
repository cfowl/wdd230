// //

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then( function(response) {
      return response.json();
  })
  .then( function(jsonObject) {
      const towns = jsonObject["towns"]
      for(let i = 0; i < towns.length; i++) {
          if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {

              let card = document.createElement("section");
              let h3 = document.createElement("h3");
              let townMotto = document.createElement("p");
              let yearFounded = document.createElement("p");
              let population = document.createElement("p");
              let annualRainfall = document.createElement("p");
              let townImage = document.createElement("img");

              h3.textContent = `${towns[i].name}, Idaho`;
              townMotto.textContent = towns[i].motto;
              townMotto.setAttribute("class", "town-motto");
              yearFounded.textContent = `Founded in ${towns[i].yearFounded}`;
              population.textContent = `Population: ${towns[i].currentPopulation}`;
              annualRainfall.textContent = `Annual Rainfall: ${towns[i].averageRainfall}"`;
              townImage.src = `images/${towns[i].photo}`;
              townImage.alt = `Image Related to the Beautiful Town of ${towns[i].name}, Idaho`;
              townImage.setAttribute("class", "town-img");

              infoDiv = document.createElement("div");
              infoDiv.setAttribute("class", "info-div");

              infoDiv.appendChild(yearFounded);
              infoDiv.appendChild(population);
              infoDiv.appendChild(annualRainfall);
                
              card.appendChild(h3);
              card.appendChild(townMotto);
              card.appendChild(townImage);
              card.appendChild(infoDiv);

              document.querySelector("div.town-info").appendChild(card);
        }

      }
    //   // lazy load images // Thanks Timothy Johnson for the help with this code!
    //   let script = document.createElement('script');
    //   script.src = "js/lazyload.js";
    //   document.querySelector('head').appendChild(script);

  }); // end of fetch