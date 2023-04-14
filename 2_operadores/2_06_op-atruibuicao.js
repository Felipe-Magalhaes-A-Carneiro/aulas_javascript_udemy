// Aula sobre o uso de atribuição e seus diferentes usos:

let x = 10;
x = x + 6;
x = x - 1;

// O que foi feito acima também pode ser feito usando os Operadores de Atribuição:

let y = 10;             // Uma vez que a variável foi definida e atribuida:
y += 6; // += atribuitiva aditiva
y -= 1; // -= atribuitiva subtrativa
y *= 2; // *= atribuitiva multiplicativa
y /= 4; // *= atribuitiva divisiva
y %= 2; // *= atribuitiva modular

console.log("O valor de x agora é: " + x);
console.log("O valor de y agora é: " + y);