let a = 1;

a = a + 1; // Op. Binário "infix" (o operador que está ENTRE dois operandos)
a += 1;
a++;  // Op. Unário ++ responsável pela incrementação no operando "a" de (+ 1)
++a; // Op. Unário ++ , inverso. Não mudará oo fato de adicionará o (+ 1), mas a ordem define se será prefix ou postfix, da seguinte maneira:

a--; // Ex. de Op. unário "prefix" (o operador que está DEPOIS do operando)
--a; // Ex. de Op. unário "postfix" (o operador que está ANTES operando)

console.log(a);