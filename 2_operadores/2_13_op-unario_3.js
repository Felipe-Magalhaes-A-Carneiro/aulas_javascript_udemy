console.log(!false); //Uso da negação (!) antes do valor
console.log(!true);
console.log("====================");


console.log(!!true); // Uso de "duas negações", fará ele ser verdadeiro. Ex:1
console.log(!!false); // Uso de "duas negações", fará ele ser verdadeiro.Ex:2
console.log(!!"Texto"); // // O mesmo serve para um texto por exemplo; Agora, o JS entende que "Texto" sempre será TRUE

console.log(!!1); // NOTA: 1 é TRUE por natureza
console.log(!!-1); // NOTA: -1 que é FALSE torna-se TRUE por influência do !!
console.log(!!0);
console.log(!!-0.000001);
