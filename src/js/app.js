import "../scss/app.scss";

// Description: Fetch only the first 10 pokemons
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  const handlePokemon = function(pokemonCollection) {
    pokemonCollection.results.forEach(pokemon => {
        
        const li = document.createElement('li');
        li.innerHTML = pokemon.name;

        ul.appendChild(li);
    });
  };

  const pokemonCollection = fetch(BASE_URL)
    .then(response => response.json())
    .then(handlePokemon)
    .catch(error => console.error(`Error: ${error}`));
});
