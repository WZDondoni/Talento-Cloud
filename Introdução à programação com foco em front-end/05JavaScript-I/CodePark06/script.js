/* Acesse o site OneCompiler (link em anexo) e crie uma função que recebe dois números como parâmetros e imprime quatro frases no terminal (a partir de template strings) demonstrando as quatro operações básicas aplicadas a ambos números. Exemplo:

4 + 5 = 9
4 - 5 = -1
4 x 5 = 20
4 / 5 = 0.8  
*/

//LINK ONECOMPILER: https://onecompiler.com/javascript/3zpgmfdc2

function operacoes(num1, num2) {
    let resultadoSoma = num1 + num2;
    let resultadoSubtracao = num1 - num2;
    let resultadoMultiplicacao = num1 * num2;
    let resultadoDivisao = num1 / num2;

    return console.log
    (`
    OPERAÇÃO DE SOMA:
    1º número informado foi: ${num1}
    2º número informado foi: ${num2}
    -------------------------------------
    Resultado da Soma é: ${resultadoSoma}
    ======================================

    OPERAÇÃO DE SUBTRAÇÃO:
    1º número informado foi: ${num1}
    2º número informado foi: ${num2}
    -------------------------------------
    Resultado da Soma é: ${resultadoSubtracao}
    ======================================

    OPERAÇÃO DE MULTIPLICAÇÃO:
    1º número informado foi: ${num1}
    2º número informado foi: ${num2}
    -------------------------------------
    Resultado da Soma é: ${resultadoMultiplicacao}
    ======================================

    OPERAÇÃO DA DIVISÃO:
    1º número informado foi: ${num1}
    2º número informado foi: ${num2}
    -------------------------------------
    Resultado da Soma é: ${resultadoDivisao}
    ======================================


    
    `); 

}

let resultado = operacoes(4,5);


// RESPOSTA GABARITO
//     function imprimirOperacoes(a, b) {
//     console.log(`${a} + ${b} = ${a + b}`)
//     console.log(`${a} - ${b} = ${a - b}`)
//     console.log(`${a} x ${b} = ${a * b}`)
//     console.log(`${a} / ${b} = ${a / b}`)
//   }



