let nota = 9.5;
console.log("Aplicação do 'if' com operadores e valores" + "\nResultado: ")

if (nota >= 9.0 && nota <= 10.0) { //Utilize a operador lógico AND (&&) para determinar um limite de ação para cada 'if'
    console.log("Conceito A: entre 9,0 e 10,0");
}
if (nota >= 7 && nota <= 8.9) { // Se utilizar a operador lógico OR (||) dará uma série de influências de 'if's um sobre o outro.
    console.log("Conceito B: entre 7,0 e 8,9");
}
if (nota >= 5 && nota <= 6.9) {
    console.log("Conceito C: entre 5,0 e 6,9");
}
if (nota > 4.5 && nota <= 4.9) {
    console.log("Conceito D: entre 4,5 e 4,9");
}
if (nota <= 4.5 && nota >= 0) {
    console.log("Conceito F: abaixo de 4,5");
}