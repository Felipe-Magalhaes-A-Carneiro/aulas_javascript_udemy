let a = 7;
let b = 94;


// Troca de valores de forma correta (com o uso de um terceiro atribuidor):

let temp = a // Foi usado o "temp" (abreviação de temporário aqui), foi responsável como terceiro atribuidor.
a = b
b = temp //Sem o terceiro atribuidor, o resultador sempre ficará 94. Não é o resultado que você quer.

console.log ("Agora 'a' é: " + a)
console.log ("E 'b' agora é: " + b)

//Outra forma que dará certo:

//[a , b] = [b , a]