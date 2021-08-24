let cont = 0;
while(confirm("Quiere ingresar un numero?")){
    let num = prompt("Ingrese un numero");
    
    if(isNaN(num)){
        alert("ingrese un numero valido");
    }else{
        cont += 1;
    }  
}

document.write("La cantidad de numeros ingresados es: "+cont);
