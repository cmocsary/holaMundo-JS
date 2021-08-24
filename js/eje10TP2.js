let filas = prompt("Ingrese la cantidad de filas");
let columnas = prompt("Ingrese la cantidad de columnas");
let num = 1;
for(let i=0; i<filas; i++){
    for(let j=0; j< columnas; j++){
        document.write(" "+ (num++) +" ");
    }
    document.write("</br>");
}
