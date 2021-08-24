let edad = prompt("Ingrese su edad");

if(isNaN(edad)){
    console.log("No ingresó un numero valido");
}else{
    if(edad>18){
        console.log("Ya puede conducir");
    }else{
        console.log("No puede conducir");
    } 
}