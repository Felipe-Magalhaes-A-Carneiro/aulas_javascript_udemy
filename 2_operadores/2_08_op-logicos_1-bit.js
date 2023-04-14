//Operação lógica do tipo operação bit:

/*
Ao invés de utilizar dois simbolos para a operação lógica (ex: && que é AND)
o que dará TRUE or FALSE, utilize apenas um simbolo (Ex: & = 0 ou 1), 
assim o valor será 0 ou 1.
*/

let temDinheiro = false;
let estaEnsolarado = true;
let carroNaGaragem = true;

let resultadoAND = "#1 (AND) Vai para o shopping? "
resultadoAND += temDinheiro & estaEnsolarado; // operação lógica "AND" = && ou & para dar a resposta em 0 ou 1.

console.log(resultadoAND); 

let resultadoOR = "#2 (OR) Vai para o shopping? "
resultadoOR += temDinheiro | carroNaGaragem; // operação lógica "OR" = || ou | para dar a resposta em 0 ou 1.

console.log(resultadoOR);

console.log(true ^ false); //Simboleo de "Exclusivo" = ^ (só funciona em números binários: 0 ou 1)

//Obs: Veja o arquivo "2_08_op-logicos_1", para fazer em "operação lógica sem bit".