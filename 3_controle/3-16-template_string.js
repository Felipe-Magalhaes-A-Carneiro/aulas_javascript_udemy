const j = 4;
const i = 2;

//Uso da concatenação já feita anteriormente com string de aspas duplas ou simples (úncia):
console.log("i = " + i + ", j= " + j);
console.log('i = ' + i + ', j= ' + j);

//Agora com uma forma alternativa de fazer o processo de leitura mais rápida sem concatenação:
console.log("Com o uso da crase: ");

console.log(`i = ${i} j= ${j}`); // Usando a crase " ` " (Para fazer: Shift + ´) do início ao fim
console.log(`1 + 2 = ${1 + 2}`); // O uso do ${} fará o JS dar prioridade na leitura.
console.log(`${Math.random()}`); // O uso da crase ( ` )para o ${} ser feito. 
