let edad=[];
let nombre=[];
for(let i=0; i<3; i++){
    edad[i] = parseInt(prompt("Ingrese la edad en la persona "+ (i+1)));
    nombre[i] = prompt("Ingrese el nombre para la persona "+ (i+1));
}
let edadAlta = Math.max(edad[0],edad[1],edad[2]);
let indice = edad.indexOf(edadAlta);
document.write("El nombre del mayor es: "+ nombre[indice]);
