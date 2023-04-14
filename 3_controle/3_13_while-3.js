//Mais um exmplemplo de uso do While com "Uso Indeterminado de repetições":

const futuro = Date.now() + 1000; //"Date.now ()" é o horário exato atual em milissegundos apartir do dia 1 de janeiro de 1970, data usada pelo sistema operacioonal "Unix" (um dos primeiros).
let quantidade = 0; //1000 é de milissegundo ou 1 segundo. Ele irá mostrar a mudança em 1 milissegundo (provavelmente o JS levará esse tempo para ler isso também)
// a "quantidade" está determinando que o While não seja infinito

while (Date.now() < futuro) {
    quantidade++;
}

console.log(quantidade);