var cadena = prompt("Ingrese un texto");
var numeroVocales = cadena.match(/[aeiou]/gi).length;

console.log("El numero de vocales es: "+ numeroVocales);