let cadena = prompt("Ingrese un texto");
let vocal = ["A", "E", "I", "O", "U"];
let cadMay = cadena.toUpperCase();
let pos;
let parar = false;
for(let i=0; i<cadMay.length; i++){
    
    let letra = cadena.substr(i,1);
    for(let j=0; j<vocal.length; j++){  
        if(vocal[j] == cadMay.charAt(i)){
            pos = i;
            document.write("La primera vocal se encuentra en la posicion: "+ pos);
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}