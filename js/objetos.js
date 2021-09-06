let funkoIronMan = {
    nombre: 'Tony Stark',
    numSerie:'123fsd23',
    precio: 5000,
    version: 'end-game'
};

console.log(funkoIronMan);

document.write("Nombre: " + funkoIronMan.nombre);

document.write("Precio: $"+ funkoIronMan['precio']);

let claves = Object.keys(funkoIronMan);
console.log(claves.length);

for (let i=0; i<claves.length; i++){
    let claves = claves[i];
    document.write(`<br>${clave}: ${funkoIronMan[clave]}`);
}