import data from "./data.js";

export const findPokemon = (idOrName, callback, timeout = 1000) => {
  console.log(`buscando pokemon "${idOrName}"`);
  setTimeout(() => {
    const result = data.find(
      (p) =>
        p.id === idOrName || p.name.toLowerCase() === idOrName.toLowerCase()
    );

    console.log(
      `pokemon "${idOrName}" ${result ? "encontrado" : "no encontrado"}`
    );

    callback(result);
  }, timeout);
};
