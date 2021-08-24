let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
let calculo;

while(confirm("Ingresar nuevo DNI?")){
    let dni = prompt("Ingrese el numero de DNI");
    if(isNaN(dni)){
        alert("Ingrese un numero valido");
    }else{
        if(dni >= 0 && dni <= 99999999){
            calculo = dni % 23;      
            console.log(letra[calculo]);    
        }else{
            alert("Ingrese un numero valido")
        }
    }  
}



