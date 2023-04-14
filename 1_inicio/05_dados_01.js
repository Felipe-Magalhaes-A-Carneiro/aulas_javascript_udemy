//Uso de "var" ou "let" você poderá criar variáveis ao seu gosto (conhecido como tipagem fraca do JS):

var nome = "Caneta"; //Utilizar o sinal de atribuição (=) dará valor para a sua variável.
var quantidade = 10;
var preco = 6.4; // É recomendado não utilizar acensutação nas variáveis, apenas nos textos (Strings).
var imposto = 1.5;
let precoFinal = preco + imposto; //Ex de criação de variável atribuindo outras variáveis ja criada no mesmo arquivo

// Uma vez devidamente definidos, as variaveis podem ser mencionadas na sentença e o JS irá usar a atribuição dada por você:

console.log(nome);
console.log(quantidade); //OBS: Um número inteiro é conhecido como "Valores inteiros".
console.log(preco);
console.log(imposto);
console.log(precoFinal);

