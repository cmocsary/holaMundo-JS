let texto = prompt("Ingrese el texto");

for(let i = 0; i<texto.length; i++){
    document.write(texto.substr(i,1)+"-");
}
