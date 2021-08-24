let validar = true;
let cadena = "";
while(validar){
    let texto = prompt("Ingrese una cadena de texto");
    cadena += texto + " - ";
    validar = confirm("Presione cancelar para mostrar");
}
document.write(cadena);