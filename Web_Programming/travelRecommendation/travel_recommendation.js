

function search() {
  const phrase = document.getElementById('search').value;
  if (phrase) {
    fetch('./travel_recommendation_api.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(dat => {
        const container = document.getElementById('search-result');
        container.replaceChildren();

        let regex = new RegExp(phrase, 'ig');

        dat.countries.forEach(country => {
          country.cities.forEach(city => {
            if (city.name.match(regex) || city.description.match(regex)) {
              container.innerHTML += `<p>${city.name}</p>`;
              container.innerHTML += `<p>${city.description}</p>`;
            }
          })
        });

      })
      .catch(err => console.log(err));
  }
}

function clear() {
  const container = document.getElementById('search-result');
  const search = document.getElementById('search');

  container.replaceChildren();
  search.replaceChildren();
}

const search_button = document.getElementById('search_button');
const clear_button = document.getElementById('clear');

clear_button.addEventListener('click', clear);
search_button.addEventListener('click', search);
