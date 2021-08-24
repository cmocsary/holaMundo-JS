let cadena = prompt("Ingrese una frase");
let vocales=["A", "E", "I", "O", "U"];
let cont=0;
for(let i=0; i < cadena.length; i++){

    let letra = cadena.substr(i,1);
    
    for(let j=0; j<5; j++){     
        
        if(letra.toUpperCase() == vocales[j]){   
            cont += 1;
        }
    }
}
console.log(cont);