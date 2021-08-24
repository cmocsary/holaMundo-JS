let num = prompt("ingrese un numero");
let limite = 0;
while(num>0){
    if(num<51){
        num--;
        for(let i=0; i<limite+1; i++){
            document.write(i+1);
        }
        document.write("</br>")
        limite++;
    }else{
        break;
    }
}