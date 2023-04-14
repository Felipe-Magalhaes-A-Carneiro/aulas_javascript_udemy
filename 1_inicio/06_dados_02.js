//Cirando as variváveis com "let", ao invés do "var". OBS: É recomendado o uso do "let".
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(19.90 * 0.6); 
console.log(preco * (1 - desconto));
console.log(precoComDesconto);

let nome = "Caderno"; //Definindo um valor de texto a uma variável
let categoria = "Papelaria";

console.log("Nome: " + nome // String (texto)-> É uma sequência de símbolos (Números, ?, !, =, * e etc.).
+ ", Categoria: " + categoria // Uso do metodo de Concatenar/Concatenação: Uso de texto junto com o que vier depois.
+ ", Preço: " + preco 
+ ", Desconto: " + desconto); //Uma sentencia de código com múltiplas linhas.

