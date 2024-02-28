console.log("trabalhando com JSON");

//CRIANDO OBJETO LITERAL JS
const objetoJS = {
    nome: 'Luis',
    idade: 28,
    estrangeiro: true
}

console.log(typeof (objetoJS))

//CRIAR UMA FALSA STRING JSON

const falsastringjson = {
    "nome": "Luis",
    "idade": 28,
    "estrangeiro": true
}
//não é porque escreveu como json, que é json. objserve que é classificado como objeto abaixo.
console.log(typeof (falsastringjson))

//CRIANDO JSON DE VERDADE COM O USO DO STRINGFY
const stringJSON = JSON.stringify(objetoJS)
console.log(typeof (stringJSON))
console.log(stringJSON.nome)
//acima percebe "undefined", uma vez que vc esta´tentando acessar uma propriedade via dot dotation de um texto(string). Não entende como objeto e sim como string.


//observe que mudou de  objeto para string.

//tranformando JSON em Objeto novamente
const parsedJSON = JSON.parse(stringJSON)
console.log(parsedJSON)

console.log(parsedJSON.nome)
//acima acessamos a propriedade por conta da transformação..stringfy para mandar dados para outro sistema. Quem receber vai fazer o "parse" para transformar em objeto literal.