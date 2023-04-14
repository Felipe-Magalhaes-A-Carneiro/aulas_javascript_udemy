let quantidade = 0; //a variavel "quantidade" está determinando que o While não seja infinito


// Um exemplo de uso do While com "Uso Indeterminado de repetições":
// "Math.random()" é o comando do JS para que o mesmo "sorteei" uma número sendo dizima pediódica de 0 a 1

while (Math.random() < 0.97) { 
    quantidade++; //Operador aditivo, unário, postfix irá fazer com que "quantidade" passe por uma incrementação em sua contagem
} //Em outras palavras, pedi para o JS números que sejam menor que 0.97, e que ele me mostra quantas vezes ele sorteou um número assim.

console.log("Quantidade de vezes que ele encontrou um número menor que 0.97: " + quantidade); // Experimente faze-lo rodar várias vezes.