const t1 = true; //Se o trabalho 01 for feito
const t2 = true; //Se o trabalho 02 for feito

let comprarTV50 = t1 && t2; //AND
console.log('Vamos comprar a TV de 50"? ' + comprarTV50);
//console.log('Vamos comprar a TV de 50"? ' , comprarTV50); AND - O uso da virgula também pode ser usada para concatenação, porém ela já adiciona um espaço antes da mesma.

let comprarTV32 = t1 !== t2; //XOR
console.log('Vamos comprar a TV de 32"? ' + comprarTV32);

let tomarsorvete = t1 || t2; //OR
console.log('Vamos comprar sorvete"? ' + tomarsorvete);

let ficarEmCasa = !tomarsorvete; //NOT
console.log('Vamos ficar em casa"? ' + !ficarEmCasa);