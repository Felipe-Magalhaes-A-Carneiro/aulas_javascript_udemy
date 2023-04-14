const a = 8;
const b = 4;
const operacao = "y"; // + - * /

const resultado = operacao === "+" ? a + b 
    : operacao === "-" ? a - b 
    : operacao === "*" ? a * b : a / b; 
    //Leia-se da seguinte maneira: "Se 'operação' for estritamente igual a '*', o que fará ele ser (True) então, faça a * b, caso o contrário, se não for (false) então faça a / b"

console.log(resultado);