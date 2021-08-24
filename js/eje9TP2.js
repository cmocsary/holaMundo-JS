for(i=0; i<500; i++){
    let cont = 0;
    if((i+1)%4 == 0){
        document.write(i+1 + " (multiplo de 4)</br>");
    }else if((i+1)%9 == 0){
        document.write(i+1 + " (multiplo de 9)</br>");
    }else{
        document.write(i+1+"</br>");
    }
    if(cont == 5){
        document.write("---------------------</br>");
        cont=0;
    }
    cont++;
}