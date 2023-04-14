// Fazendo o desafio da Aula "87. Desafio if" no curso; e arquivo "3_03_if-4-desafio", pasta "controle".
const nota = 3.9;
let resultado;

if (nota >= 9.0 && nota <= 10.0) {
    resultado = "A nota está em 'A': Valor entre 9.0 e 10.0";
} else if (nota >= 7.0 && nota <= 8.9) {
    resultado = "A nota está em 'B': Valor entre 7.0 e 8.9";
} else if (nota >= 5.0 && nota <= 6.9) {
    resultado = "A nota está em 'C': Valor entre 5.0 e 6.9";
} else if (nota >= 4.5 && nota <= 4.9) {
    resultado = "A nota está em 'D': Valor entre 4.5 e 4.9";
} else {
    resultado = "A nota está em 'E': Valor está abaixo de 4.5";
}

console.log(resultado);