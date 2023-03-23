/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const array = [];
   for (let key in objeto) {
      array.push([key,objeto[key]]);
   }
   return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const charCount = {};
   for (let i = 0; i < string.length; i++) { 
      const char = string[i]
      if (charCount[char]) {
         charCount[char]++;
      } else {
         charCount[char] = 1;
      }
   }
   
   const sortedCharCount = {};

   Object.keys(charCount)
   .sort()
   .forEach((key) => {
      sortedCharCount[key] = charCount[key];
   });

  return sortedCharCount;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let uppercase = '';
   let lowercase = '';
   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         uppercase += string[i];
      } else {
         lowercase += string[i];
      }
   }
   return uppercase + lowercase;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   // Dividimos la frase en palabras usando el método split
  // y las almacenamos en un array
  var palabras = frase.split(" ");
  var palabrasInvertidas = [];

  // Iteramos por cada palabra del array original
  for (var i = 0; i < palabras.length; i++) {
    // Invertimos cada palabra usando el método split, reverse y join
    // y la agregamos al nuevo array
    palabrasInvertidas.push(palabras[i].split("").reverse().join(""));
  }

  // Unimos las palabras invertidas en un nuevo string usando el método join
  var resultado = palabrasInvertidas.join(" ");

  // Devolvemos el resultado
  return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   // Convertimos el número en un string para poder invertirlo
  var numeroString = numero.toString();

  // Invertimos el string del número usando el método split, reverse y join
  var numeroInvertidoString = numeroString.split("").reverse().join("");

  // Convertimos el string invertido en un número
  var numeroInvertido = parseInt(numeroInvertidoString);

  // Comparamos el número original y el número invertido para ver si son iguales
  if (numero === numeroInvertido) {
    // Si son iguales, el número es capicúa
    return "Es capicua";
  } else {
    // Si no son iguales, el número no es capicúa
    return "No es capicua";
  }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/gi, '') //el metodo replace() remplaza las letras en el string con cadena vacia 
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b) { //funcion sort ordena los elementos del arreglo segun la logitud de los strings
      return a.length - b.length;
    });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const interseccion = []
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i]) && !interseccion.includes(array1[i])) {
         interseccion.push(array1[i]);
      }
   }
   return interseccion
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
