let num = prompt("ingrese un numero");

while(num>0){  
    if(num<51){
        for(let i=num; i>0; i--){
            document.write(num);
        }
        document.write("<br/>");
        num--;
    }else{
        break;
    }  
}