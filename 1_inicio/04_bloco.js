// Um exemplo de bloco de códigos:

// Bloco de códigos:
{ 
    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
}

{ // Uma cadeia de comandos continuaram a funcionar mesmo em outro bloco:
    console.log("Passo #04");
    console.log("Passo #05");
}

// Um exemplo de comportamento de "chaves" (bloco de códigos) inserido em outras chaves. OBS: Cores diferentes servem de indicação
{
    {
        {
            {
                console.log("Passo #06"); /*Repare que cada chave possui cores 
                diferentes conforme ela for fechada.*/
            }
        }
    }
}
