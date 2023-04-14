const nota = 9;

if (nota >= 9) //Obs: Como existem duas linhas para o "if" agir, ele só irá comandar a linha 4. O "if" apenas agi na primeira 'coisa 'que virá em seguinda!
    console.log("Você passou!"); // Para alterar isso, utilize blocos de código.
    console.log("Parabéns! (Essa linha não será afetada pelo 'if' se não estiver em um bloco de códigos)"); 

//Corriginho o problema da seguinte mandeira:

if (nota >= 8) {    // O uso das 'chaves', fará o "if" agir sobre todas as linhas dentro da mesma
    console.log("Você passou! (Com chaves)"); 
    console.log("Parabéns! (Com chaves)"); 
}

console.log("Fim!");