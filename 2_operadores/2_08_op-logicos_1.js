let temDinheiro = true;
let estaEnsolarado = false;
let carroNaGaragem = true;

// operação lógica "AND" = &&
let resultadoAND = "Situação N#1 (AND) Vai para o shopping? "
resultadoAND += temDinheiro && estaEnsolarado; 

console.log(resultadoAND); 
//=================================

// operação lógica "OR" = ||
let resultadoOR = "Situação N#2 (OR) Vai para o Shopping? "
resultadoOR += temDinheiro || carroNaGaragem; 

console.log(resultadoOR);
//=================================

//operação lógica "XOR" (exclusividade)= ^ .
//Obs: Só funciona em cima de números binários

console.log(true ^ false); 
//=================================

//operação lógica (unário) "NOT"= ! (antes do valor) .
console.log("Para o resultado ser falso: " + !true);
console.log("Para o resultado ser verdadeiro: " + !false);

//Obs: Veja o arquivo "2_08_op-logicos_1-bit", para fazer em "operação bit".