import data from "./data.js";

export const sortPokemons = (key, callback) => {
  const sortedData = [...data].sort((a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  );
  callback(sortedData);
};
