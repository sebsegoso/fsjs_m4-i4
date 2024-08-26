import { findPokemon } from "./pokemon.js";
import { sortPokemons } from "./sort.js";

findPokemon("Pikachu", console.log, 1000);

setTimeout(() => {
  console.log("ordenando pokemones por nombre");
  sortPokemons("name", (sortedPokemons) => {
    console.log(sortedPokemons);
  });

  setTimeout(() => {
    console.log("ordenando pokemones por id");
    sortPokemons("id", (sortedPokemons) => {
      console.log(sortedPokemons);
    });
  }, 2000);
}, 1500);

findPokemon("123", console.log, 5000);

