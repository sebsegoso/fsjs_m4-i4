## APRENDIZAJE ESPERADO 4

Utilizar elementos de programación asíncrona para resolver un problema simple
distinguiendo los diversos mecanismos para su implementación acorde al lenguaje
JavaScript.

## OBJETIVO DEL EJERCICIO

El/la estudiante debe entender el concepto de asincronía en JavaScript. Describir el
funcionamiento del Event Loop para entender la programación asíncrona y comprender el
uso de los callback.

## PROBLEMA

Crear un programa con JavaScript mediante el uso de funciones con Callback y el método
`setTimeout`, que permita mostrar los datos de un Pokemon de acuerdo con el nombre o el
número de identificación o ID. La salida debe ser por consola

```javascript
const data = [
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
];
```

## REQUERIMIENTOS

1. Crear todo el código usando ES6. (2 puntos)
2. Utilizar el método `setTimeOut`. (2 puntos)
3. Implementar una función que ordene los resultados por id o nombre utilizando un
   callback (4 puntos)

4. Implementar con modularidad (3 puntos)
5. Hacer uso de Webpack. (3 puntos)
