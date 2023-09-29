# 5 - JAVASCRIPT I //ASSUNTO DO MÓDULO

## 5.1 - COMPREENDER A HISTÓRIA DO JAVASCRIPT E COMPREENDER SUAS FUNÇÕES BÁSICAS //NOME ACIMA DOS ICONES DA AULA ABAIXO DO NÚMERO

### 5.1.1 - História e função do JavaScrip//DOS TÍTULOS DO HYPERTEXTO

#### 5.1.1.1 - Origem da linguávem JavaScript

Em 1995, Brendan Eich (1961- ) criou a linguagem de programação JavaScript. Originalmente, ela era denominada "Live Script" pela empresa Netscape.
JS ou JavaEscript é o codenome para a implementação do ECMA Script.European Computer Manufacture's Association-ECMA; JavaScript não tem nada haver com Java. Tipagem fraca. Tipagem dinânico traz problemas. 2012 foi lançado pela Microsoft o TipeEscript, mais seguro.

O seu **objetivo inicia**l era validar formulários HTML, porém, atualmente, JavaScript é bastante utilizada pelo **client-side**, ou seja, *uma linguagem executada no computador do usuário.*

#### 5.1.1.2 - Função da Linguágem JavaScript

**principal função** da linguagem JavaScript é permitir ao programador *implementar itens mais complexos* em um site. Por exemplo:
>Imagine que você acessa um site, insere seus dados e clica no botão “calcular”. Então, ele calcula o seu Índice de Massa Corporal (IMC), retornando um valor no final. Essa tarefa foi uma função escrita em JavaScript.

#### 5.1.1.3 - Características

A linguagem JavaScript independe de plataforma, pois seus os comandos são interpretados pelo browser (navegador) do próprio usuário. Não fica atrelado ao sistema operacional. O seu navegador traduz para o seu sistema operacional. Com JavaScript, não é necessário fazer um código próprio para cada tipo de sistema.
Um exemplo prático é o que acontece com aplicativos de celular que são programados duas vezes: uma para funcionar no sistema iOS (Apple) e outra no Android (Google).

#### 5.1.1.4 - A trindade das linguagens Front-End

é composta pelas linguagens HTML, CSS e JavaScript. HTML é responsável pela estrutura da página, CSS, pela parte de edição da página e JavaScript, por toda a lógica envolvida na página web. Comparando com o corpo humano, **HTML é o esqueleto, CSS, a pele e JavaScript, o cérebro**.

### 5.1.2 - Identificar a finalidade da linguagem para o contexto web

javascript evoluiu tanto que funciona tanto no **Front-end** (lado cliente, executado na própria máquina do usuário)  quando no lado back-end (o codigo é rodado no servidor)

JS é uma linguagem de servidor, um amgiente de programar no servidor é o Node.js, pode executar programas fora de ordem ajudando na escalonação da aplicação.

2021 JS foi o mais utilizado, devido a linguagem pradrinizada e atualizada por meio da comunidade ativa de programadores, que criam bibliotecas. **JS não se limita a WEB**, Electron.js, possibilita criação de aplicação desktop. Código aberto.

#### 5.1.2.1 - A importância do JavaScript em navegadores

Os navegadores são softwares que servem para acessar páginas da internet escritas em HTML.

Antigamente, os sites não interagiam muito com o usuário. Eles eram estáticos e, quando tinham alguma interação, demoravam para enviar uma resposta. Já imaginou? Em Old Web Today você pode ver como os sites eram em diferentes navegadores.

A linguagem JavaScript foi desenvolvida para facilitar a comunicação e a interação, deixando a navegação mais rápida e fácil.

Uma das **características** da linguagem JavaScript é q**ue ela é leve e interpretada**. Ou seja, o código é executado e o valor é retornado imediatamente.

Dessa forma, ela tem uma etapa a menos quando comparada às linguagens compiladas, nas quais o código é agrupado e, depois, executado pelo computador.

Navegador executa o proprio script sem necessidade de compilação. Os navegadores mais modernos conseguem utilizar uma técnica de compilação chamada just-in-time. Ela melhora o desempenho, fazendo com que o código seja executado mais rapidamente, pois ele só é executado quando necessário, ou seja, apenas quando o usuário faz alguma ação no site.

A linguagem JavaScript foi criada para as demandas de front-end, mas, devido ao avanço da tecnologia e às novas necessidades, surgiu a ideia de utilizá-la para a comunicação com o servidor, utilizando o Node.js para a programação back-end.

![a](https://i.imgur.com/qckbn3F.jpg)

Front-end é a parte visual do site, onde conseguimos interagir, como botões, gráficos, entre outros.

Back-end é o código por trás da aplicação e que faz a comunicação com os servidores e os bancos de dados.

**HTML** funciona como o **esqueleto do site**, **CSS** como um**a roupa** (insere cores, fontes etc.) e a linguagem **JavaScript** serve **para provocar interações ou respostas**.

A JS é uma linguagem interpretada, pois não precisa do passo de compilação.

Uma barra de navegação interativa é um exemplo do uso do JavaScript, quando o usuário passa o mouse por cima de uma categoria com subcategorias (ex. Cursos) *Uma nova barra de navegação flutuante* é exibida logo embaixo da sua respectiva categoria. Este navegação flutuante, por sua vez, pode exibir uma segunda barra de navegação flutuante, posicionada ao lado da opção que "gerou ela", quando o mouse é passado por cima de um opção com outras "sub-opções" (ex. Cursos de aprimoramento). </br>
Quando o mouse muda de posição para outra opção, a primeira barra de navegação flutuante some da página antes de uma nova navegação flutuante ser exibida, evitando sempre a sobreposição de barras de navegação. Além disso, se o mouse "sair de cima" de qualquer navegação flutuante, ou qualquer categoria que possua subcategorias, toda a "cadeia de barras de navegação" some também.</br>
Embora seja possível mudar a opacidade de um elemento ou inclusive remover ele da página, de acordo com a interação do mouse, usando apenas CSS, esta é uma "reação" que aplicamos a um único elemento. Gerar mudanças no site, como por exemplo manipular elementos distintos daquele com o qual o mouse (ou o usuário) está interagindo não é um comportamento que podemos implementar usando apenas HTML e CSS.

### 5.1.3 - Diferenciar os ambientes existentes para desenvolvimento em JavaScript

#### 5.1.3.1 - IDE's

Integral Development Environment-IDE, é um ambiente de desenvolvimento **com várias ferramentas que auxiliam** o programador na criação de seus códigos. Elas **são vinculadas a uma linguagem** , gerando acesso a várias funções específicas.

#### 5.1.3.2 - Editores de código

Diferente das IDEs, os editores de código-fonte são ambientes de desenvolvimento que **NÃO** estão focados em uma linguagem específica.

Podem usar mais de uma linguágem, e /ou serem modificadas. É um editor de texto com superfunções.

#### 5.1.3.3 - Como montar o seu ambiente?

A dpender das suas necessidades(qual linguagem /qual complexidade).

[10 melhores editores online para JavaScript]<https://educationecosystem.com/blog/10-melhores-editores-online-para-javascript/>

[Lista de Plugins e Configurar JavaScrip VSCode]<https://www.rtancman.com.br/javascript/configurar-vscode-para-javascript.html>

[10 ótimas extensões VSCode]<https://desenvolvimentoparaweb.com/javascript/visual-studio-code-javascript-extensoes-plugins/>

[Escreva limpo usando Pretier e ESLint]<https://medium.com/@pgivens/write-cleaner-code-using-prettier-and-eslint-in-vscode-d04f63805dcd>

CSS Peak, lista os stilos aplicados em cada classe ou id sem ter que ir a folha de estilos procurar. Só segurar  Controle e passar o mouse por cima.

### 5.1.4 - VARIÁVEIS EM JS

#### 5.1.4.1 - Tipos de variáveis

Aceita todos os anteiores. Deve-se informar o tipo, ao contrario do Python que já analisa o tipo sozinho. Pode-se usar array também

#### 5.1.4.2 - Declaração de variáveis

Para declarar uma variável em JS **precisamos de 4 elementos:**

- A palavra reservada para o tipo da variável (var, let ou const)

- O nome da variável (ex. “num”)

- O operador de atribuição (’=’)

- O valor a ser atribuído (ex. 5)

```JS
 var num = 5;

```

>Obs. No JS é uma boa prática colocar um ponto e vírgula ‘;’ no final de cada linha de código, mais ou menos como um ponto final no fim de cada frase em português.

#### 5.1.4.3 - Var, Let e Const

Quais são as diferenças **entre os três tipos de variáveis no JS**, e como sabemos quando usar cada um deles? De forma breve, **‘var’** foi a primeira palavra reservada para declarar variáveis no JS, porém, *ela caiu em desuso*.  

Qual é então a diferença entre **‘let’** e **‘const’**? O termo const vem de “constante”, e *usamos ele para guardar valores que não poderão ser alterados após sua declaração.* No exemplo a seguir, tentamos atribuir um novo valor a uma constante, mas o sistema mostrará uma mensagem de erro.

```js

const num = 5;

num = 10;

```

// Será disparada uma mensagem de erro, avisando que

// não podemos atribuir um novo valor a uma constante

Em contrapartida, valores salvos em variáveis do tipo **let** *podem ser alterados após sua declaração*:

```js

let num = 5;

num = 10;

console.log(num);

// Imprimirá o valor 10 no terminal


```

>Atenção!
>A função **console.log()** funciona da mesma forma que a **função print() em Python**. Entraremos em mais detalhe sobre o usso desse e outras funções nos próximos conteúdos.
>Atenção!!
>Atribuir valor é diferente de declarar a variável novamente. Para declarar usamos **var**, **let**, **const**.

[Diferença const var e let ]<https://youtu.be/ZOx7iTnBqFQ>

var e let, tem uma diferença de escopo, var é escopo global, independente de onde é declarada ele funciona em toda a estrutura, **let só funciona dentro do bloco onde foi declarada**.

O escopo do const é igual ao do let, porém com a peculiaridade de que constantes não tem seu valor alterado.

[var, let e const – Qual é a diferença?]<https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/>

> Conteúdo abaixo tirado da página acima.

--------

**VAR**, escopo é global quando uma variável var é declarada fora de uma função. Isso significa que qualquer variável que seja declarada com var fora de um bloco de função pode ser utilizada na janela inteira.

Variáveis de var podem ser declaradas de novo e atualizadas
Isso significa que é possível fazer o seguinte dentro do mesmo escopo e não gerar um erro:

```js

var greeter = "hey hi";
var greeter = "say Hello instead";

```

Um dos recursos que surgiu com o ES2015-ES6 foi a adoção de `let` e `const`. Antes era só `var`  

Declarações com var tem escopo global ou escopo de função/local.

 **escopo é global** quando uma variável var é declarada fora de uma função. Isso significa que qualquer variável que seja declarada com var fora de um bloco de função pode ser utilizada na janela inteira. **var tem escopo de função** quando é declarado dentro de uma função

**Variáveis de var** *podem ser declaradas de novo e atualizadas*.

```js
    var greeter = "hey hi";
    var greeter = "say Hello instead";

#ou

    var greeter = "hey hi";
    greeter = "say Hello instead";

```

**Hoisting de var**
Hoisting é um mecanismo do JavaScript que faz com que as *declarações* de variáveis e de funções sejam *movidas para o topo* de seu escopo antes da execução do código.

```js

    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    console.log(greeter) // o resultado será "say Hello instead"
    

```

Assim, já que **times > 3** retorna true, greeter é redefinido como "say Hello instead". Embora isso não seja um problema se você quer, conscientemente, que greeter possa ser redefinido, passará a ser um problema quando você não perceber que uma variável greeter já havia sido definida antes.

Se você já usou greeter em outras partes do seu código, pode se surpreender com o resultado que vai obter. Isso provavelmente causará vários bugs no seu código. É por isso que let e const são necessários.

--------

**LET** é, agora, a forma preferida de declaração de variáveis. Não é uma surpresa, já que ele é uma melhoria às declarações com var. Ele também resolve o problema de var do qual acabamos de tratar. Vamos ver a razão disso.

**let tem escopo de bloco**, Um bloco é uma porção de código cercado por `{}`. Um bloco vive dentro dessas chaves. Tudo o que estiver cercado por chaves é um bloco.

Assim, uma variável declarada com let em um bloco estará disponível apenas dentro daquele bloco. Vamos explicar isso com um exemplo:

```JS
   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// dirá "say Hello instead"
    }
   console.log(hello) // hello não está definido


```

Vemos que o uso de `hello` fora de seu bloco (as chaves dentro das quais a variável foi definida) retorna um erro. Isso ocorre porque as variáveis de let têm escopo de bloco.

**let pode ser atualizado, mas não declarado novamente**, Assim como var,  uma variável declarada com let pode ser atualizada dentro de seu escopo. *Diferente de var, no entanto, uma variável let não pode ser declarada novamente dentro de seu escopo.* O código a seguir funciona:

```JS
    let greeting = "say Hi";
    greeting = "say Hello instead";

//Este outro código, no entanto, retornará um erro:
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // erro: identificador 'greeting' já foi declarado

//Porém, se a mesma variável for definida em escopos diferentes, não haverá erro:
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // retornará "say Hello instead"
    }
    console.log(greeting); // retornará "say Hi"


```

Por que isso não retorna um erro? Porque as duas instâncias **são tratadas como variáveis diferentes, já que são de escopos diferentes.**

Este fato torna o let uma escolha melhor do que var. Ao usar let, você não precisa se preocupar se usou o nome para uma variável antes, já que a variável existe somente dentro daquele escopo.

Além disso, como uma variável não pode ser declarada mais de uma vez dentro de um escopo, o problema que ocorre com var  que discutimos antes não acontece.

**Hoisting de let**
Assim como as declarações com var, as feitas com let também sofrem o hoisting para o topo.  
>Diferentemente de var, porém, que é inicializado como undefined, a palavra-chave let não é inicializada. Assim, se você tentar usar uma variável let antes de sua declaração, terá um Reference Error.

**Const**
Variáveis declaradas com const mantêm valores constantes. Declarações com const compartilham algumas semelhanças com as declarações com let.

**Declarações com const têm escopo de bloco**
Assim como as declarações de let, as declarações de const somente podem ser acessadas dentro do bloco onde foram declaradas.

**const não pode ser atualizado nem declarado novamente**
Isso significa que o valor de uma variável declarada com const se mantém o mesmo dentro do escopo. Ela não pode ser atualizada nem declarada novamente. Desse modo, se declararmos uma variável com const, isso não será possível:

```JS

    const greeting = "say Hi";
    greeting = "say Hello instead";// erro: atribuição a uma variável constante. 
//O código abaixo também não:

    const greeting = "say Hi";
    const greeting = "say Hello instead";// erro: identificador 'greeting' já foi declarado

```

>Cada declaração com const, portanto, deve ser inicializada no momento da declaração.

Esse comportamento **é bastante diferente quando falamos de objetos declarados com const**. Embora um objeto declarado com const não possa ser atualizado, **é possível atualizar as propriedades desse objeto**. Assim, podemos declarar um objeto com const dessa forma:

```JS
    const greeting = {
        message: "say Hi",
        times: 4
    }
//Não será possível fazer isso:

    greeting = {
        words: "Hello",
        number: "five"
    } // erro:  atribuição a uma variável constante.
//Será possível, contudo, fazer isso:

    greeting.message = "say Hello instead";
//Isso atualizará o valor de greeting.message sem retornar erros.

```

**Hoisting de const**, assim como as declarações de ``let``, as de ``const`` **sofrem o hoisting para o topo** do escopo, **mas não são inicializadas.**

Bem, caso você não tenha visto as diferenças, aqui estão:

- As declarações de ``var`` tem escopo global ou de função, enquanto as declarações de ``let`` e de ``const`` têm escopo de bloco.
- variáveis de `var` podem ser atualizadas e declaradas novamente dentro de seu escopo. As variáveis de `let` podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de `const` não podem ser atualizadas nem declaradas novamente.
- Todas elas passam por hoisting para o topo de seu escopo. Porém, enquanto variáveis com `var` são inicializadas com undefined, as variáveis com `let` e `const` não são inicializadas.
- Enquanto `var` e `let` podem ser declaradas sem ser inicializadas, `const` precisa da inicialização durante a declaração.

## 5.2 - OPERADORES EM JS

### 5.2.1 - Operadores em JS

Os **operadores aritméticos**(soma, subtração, multiplicação, divisão e módulo) e **relacionais** (maior, menor, maior ou igual, menor ou igual) **são exatamente iguais em JS e Python**.

#### 5.2.1.1 - Operadores aritméticos

Operação | Operador
---------|:---------:
Soma | +
Subtração | -
Multiplicação | *
Divisão | /
Módulo | %
Maior que | >
Menor que  | <
Maior ou igual que | >=
Menor ou igual que |<=

#### 5.2.1.1 - Operadores lógicos

Operação | Operador (Python) | Operador (JS)
---------|:---------:|-------
Conjunção | and | &&
Disjunção | or | &#124;&#124;
Negação | not ou ! | !

```js

(10 > 5) && (2 >= 7)

// O resultado é 'false'

 

(10 > 5) || (2 >= 7)

// O resultado é 'true'

 

!(10 > 5)

// O resultado é 'false'

```

[REIS, Ricardo. Operadores Lógicos (Logial Operators) JavaScripts]<https://ricardo-reis.medium.com/operadores-l%C3%B3gicos-logical-operators-b0687819d1a5>

[Dev Aprender. Javascript Tutorial 14 - Operadores Lógicos (Operadores)]<https://www.youtube.com/watch?v=Vhw8AaiSUjU>

### 5.2.2 - ESTRUTURAS CONDICIONAIS EM JS

#### 5.2.2.1 - Estruturas Condicionais em JS

Para escrever estruturas condicionais em JS precisamos de:

- Pelo menos uma palavra reservada (**if**, **else**)
- Uma condição a ser testada entre parênteses (ex. (3 > 1);)
- Um bloco de código a ser exectuado entre chaves ‘{ }’

```JS

let nota = 9;

 

if(nota >= 8){

    console.log("Ótimo trabalho!");

}


```

>Observação.
>Já que as chaves determinam o começo e fim do bloco de código a ser exectutado, a indentação do bloco não é obrigatória mas ainda é uma boa prática, que visa facilitar a leitura do código.

Para definirmos blocos de código a serem executados caso a condição não for verdadeira, usamos a palavra reservada **else** e as chaves, porém, não é mais necessário o uso de parênteses:

```JS

let nota = 7;

 

if(nota >= 8){

    console.log("Ótimo trabalho!");

} else {

    console.log("Precisa melhorar");

}

```

definir **duas ou mais condições** a serem avaliadas, usamos a junção de ambas as palavras definidas (else if), um par de parênteses com a nova condição, e o bloco de código a ser exectuado entre chaves. Vale lembrar que **nosso código será lido de cima para baixo,** portanto, *a ordem em que as condições são escritas faz diferença*, e o bloco de código **else precisa sempre ser o último**:

``` JS

let nota = 6;

 

if(nota >= 8){

    console.log("Ótimo trabalho!");

} else if(nota >= 6){

    console.log("Bom trabalho");

} else {

    console.log("Precisa melhorar");

}

```

#### 5.2.2.2 - Condicionais e booleanos em JS

As condições das nossas estruturas condicionais podem incluir números (como nos exemplos anteriores), incluir strings:

```JS

let meuInstrumento = "violão";

 

if (meuInstrumento == "piano"){

    console.log("Você é um pianista!");

} else {

    console.log("Você não é um pianista");

}

 

// Imprimirá 'false' pois meuInstrumento não é 'piano'


let finDeSemana = false;

 

if(finDeSemana == true){

    console.log("Vai descansar!");

} else {

    console.log("Temos que trabalhar");

}

 

// Imprimirá 'Temos que trabalhar'




```

javaScript nos permite escrever a condição entre parênteses (finDeSemana == true) de uma **forma mais simples:** apenas colocando o nome da variável.

```JS

let finDeSemana = false;

 

if(finDeSemana){

    console.log("Vai descansar!");

} else {

    console.log("Temos que trabalhar");

}

 

// Imprimirá 'Temos que trabalhar'

```

Sempre que trabalhamos com variáveis que guardam valores booleanos em JS podemos verificar sua “veracidade” apenas chamando o nome da variável. Já se quisermos verificar se o valor do booleano é falso, podemos usar o operador de negação (!) antes do nome da variável:

```JS

let finDeSemana = false;

 

if(!finDeSemana){

    console.log("Temos que trabalhar.");

} else {

    console.log("Vai descansar!");

}

 

// Imprimirá 'Temos que trabalhar'

```

Perceba que como agora o primeiro bloco condicional está verificando se a variável finDeSemana é falsa, a mensagem impressa é o que fazer num dia de semana. Já como o segundo bloco de código (no else) que é executado caso finDeSemana for verdadeiro, imprime agora a mensagem relativa ao final de semana. Para efeitos práticos, este código funciona exatamente igual aos dois códigos anteriores. Este é um exemplo de como podemos chegar no mesmo resultado escrevendo algoritmos e códigos distintos

[MDN Web Docs. Tomando decisões no seu código ]<https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals>

[DevMedia. JavaScript if/else: criando scripts com estruturas condicionais]<https://www.youtube.com/watch?v=8UXQ6S0KURk>

## 5.3 - LOOPS EM JS

### 5.3.1 - Loops

Há várias, porém o **for** será estudado. Ele precisa de três parâmetros. Permite usar variável dinâmica dentro do bloco.

A estrutura inicial para escrever um for loop em JS consiste da palavra reservada **for**, os parâmetros do loop entre parênteses, e o código a ser executado entre chaves.

```js

for(/*Parâmetros do loop*/ ){

    // Código a ser executado "em loop"

}

```

### 5.3.1.1 - Sintaxe do "for loop"

Dentro dos parênteses escreveremos os três parâmetros necessários, separados por ponto e vírgula.

- **Variável contadora**

   Declaramos uma variável e um valor inicial para ela

   É comum definir o nome da variável como ‘i’ de ‘índice’

   Exemplo: let i = 0;

- **Condição de parada**

  Expressão avaliada antes do inicio de cada repetição

  Quando a expressão for avaliada como falsa a estrutura de repetição chega ao fim

  Exemplo: i < 10;

- **Incremento ou decremento**

  Determina o aumento ou decremento a ser aplicado à variável contadora no fim de cada repetição

  JavaScript nos fornece a seguiet sintaxe simplificada para adicionar 1 à variável: i++

  Esta sintaxe simplificada é equivalente a: (i = i + 1). Isto é, atribuir à variável ‘i’ o “valor atual dela mais um”

Aplicando os três parâmetros à nossa estrutura inicial, chegamos no seguinte código:

```JS

for(let i = 0; i < 10; i++){

    console.log(i);

}
```

No exemplo anterior, nosso código imprimirá os números do 0 ao 9, pois a condição de parada é a variável contadora ser menor que o número 10.

### 5.3.1.2 - Percorrer um array

Podemos usar os for loop para percorrer arrays da mesma forma que o fazemos em Python. A principal diferença é o uso da propriedade length do array. Length (do inglês “cumprimento”) é uma propriedade que nos retorna a quantidade de elementos num array. Para usar ele **basta chamar a variável que guarda o array**, seguida de um ponto ‘.’, e a palavra reservada **length**.

```JS
let letras = ['a', 'b', 'c'];

 

console.log(letras.length);

// Imprimirá '3' pois o array 'letras' tem três elementos
```

Podemos usar a propriedade length **para percorrer arrays** em JS sem nos preocupar pela quantidade de elementos. Para fazer isso, devemos inclui-lo como condição de parada do nosso for loop da seguinte forma:

```JS

let letras = ['a', 'b', 'c'];

 

for(let i = 0; i < letras.length; i++){

    console.log(letras[i]);

}

 

// Imprimirá 'a', 'b', e 'c'


```

estamos usando a variável dinâmica ‘i’ para acessar cada elemento do array, chamando o array (neste caso, letras) seguido da variável contadora entre colchetes. Isto é equivalente a imprimir “letras[0]” na primeira volta, “letras[1]” na segunda volta, e “letras[2]” na terceira e última volta.

[Estrutura de repetição - Percorrer um Array]<https://youtu.be/wiUUASSieOE>

Percorrendo um Array usando como parâmetro o tamanho do array.
![a](https://i.imgur.com/CiEr6Ma.jpg)

[MDN Web Docs]<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for>

[Curso JavaScript #21 - for (estrutura de repetição - loop)]<https://www.youtube.com/watch?v=wiUUASSieOE>

[Exercício-CodePark03]<https://onecompiler.com/javascript/3znt73w2g>

>Comentários ao exercício  

Em primeiro lugar, definimos a estrutura do 'for loop' para acessar cada um dos elementos do array, usando o cumprimento de numerosDaSorte como condição de parada. Assim, dentro do bloco de código que será executado entre as chaves podemos acessar de forma dinâmica cada um dos elementos do array usando a variável contadora como índice (ex. numerosDaSorte[i]).  

Em segundo lugar, usamos uma estrutura condicional com as palavras reservadas 'if', 'else if', e 'else'. Cada uma com seu respectivo bloco de código a ser executado, imprimido uma das três possíveis frases para cada número. Na condição do 'if' verificamos se o número é par, usando o operador módulo (ex. num % 2 == 0), e usamos o operador de conjunção '&&' para verificar se o número é também menor do que 50. Já no bloco 'else if' verificamos apenas se o número é menor do que 50.

Finalmente, como sabemos que todos os números que não passarem nos dois testes lógicos são necessariamente menores do que 50 e, como neste caso não precisamos fazer nenhuma outra avaliação para os números menores do que 50, usamos o bloco 'else' para imprimir a última frase.

## 5.3 - FUNÇÕESS EM JS

### 5.3.1 - Funções em Java Script

podem ou não receber argumentos
elas podem ter um return
podem incluir todos os conceitos estudados previamente dentro de seus blocos de código (arrays, declaração de variáveis, estruturas condicionais, estruturas de repetição, e até outras funções!).

### 5.3.1.1 - Funções regulares

Declaração:

- A palavra reservada ‘function’
- O nome da função
- Parênteses para receber parâmetros (mesmo se não for receber, é necessário escrevê-los)
- Chaves com o bloco de código a ser executado quando a função for chamada
  
```JS


function cumprimentar(){

    console.log("Boas-vindas!")

}

 

cumprimentar();

// Imprimirá "Boas-vindas!"

function multiplicar(num1, num2){

    return (num1 * num2);

}

 

multiplicar(3, 7);

// Imprimirá 21, que é o resultado de (3 * 7)

```

>lembre-se
Lembra que **para executar o bloco de código de qualquer função é necessário declarar ela**, e depois chamá-la, escrevendo apenas o nome da função seguida de parênteses (com argumentos, caso precisar deles).

[Funções JavaScript]<https://youtu.be/mc3TKp2XzhI>

>Comentários ao vídeo

![a](https://i.imgur.com/C3U3V6r.png)

Funções são ações executadas assim que são chamadas, ou em decorrência de algum evento;
Funções podem receber parâmetros e retornar resultado;

![a](https://i.imgur.com/SBeWChv.png)

Pode haver mais de uma declaração de return dentro de uma `funcition` porém só pode retorna apenas uma.

Deve-se incluir a função dentro de uma varíavel para ser "chamada" e executada.

![a](https://i.imgur.com/FPANo3V.png)

![a](https://i.imgur.com/JzBG1kp.png)

![a](https://i.imgur.com/2r9xxl5.png)

>Atenção!
Ficar esperto quando se informa que haverá por exemplo dois parâmetros e só é informado 1.
O output será NaN (Not a Nunber)
Pra resolver isso, colocasse =0 ao lado do parâmetro dizendo que se ele não for informado terá valor zero.

![a](https://i.imgur.com/V9lREdF.png)

Pode-se incluir uma Função dentro de uma varíavel(FUNÇÕES ANONIMAS)

![a](https://i.imgur.com/jNZjfE4.png)

Calculando um fatorial

![a](https://i.imgur.com/i1skZ0d.png)

Pode-se fazer a mesma coisa usando RECURSÃO (Quando uma função chama outra função)

![a](https://i.imgur.com/U51PDl0.png)

o fatorial de 5 é 5x4x3x2x1, assim como pode ser 5xfatorial de 4

a função criada está chamando ela mesma dentro dela.

### 5.3.1.2 - Funções anônimas

Estas funções **não possuem um nome quando declaradas**, e são geralmente atribuídas a uma variável que guarda a função como seu valor.

```JS
// Função regular
 //preicsa da palavra reservada `function`. Parâmetros entre parênteses e separados por virgula. E precisa de `return`
function somar(a, b){

    return (a + b);

}

 

// Função anônima - Essas funções NÃO TEM um nome definido entre a palavra reservada "function" e o par de parênteses. Mas podem ser atribuidas a uma variável.

const adicionar = function(a, b){

    return (a + b);

}

const somar = function(a, b){

    return (a + b);

}


somar(5, 9);

// Imprimirá 14, que é o resultado de (5 + 9)
//Para chamar uma função anônima, basta chamar o nome da variável que a guarda, seguida de um par de parênteses (com argumentos, caso precisar deles)
```

### 5.3.1.3 - Arrow functions (opcional)

JavaScript nos fornece mais um  tipo, mais moderna das funções anônimas. Pensadas em simplificar. Escritas numa única linha de código.

```JS

// Função anônima declarada de forma tradicional

const seguinteNum = function(n){

    return (n + 1);

}

 

// Arrow function

const proximoNum = (n) => {

    return (n + 1)

}
//A **primeira** diferença que percebemos é que **não precisamos da palavra reservada **function****. A **segunda** diferença, é que  *escrevemos* “uma seta gorda” com os símbolos ‘=’ e ‘>’ **entre os parâmetros e o bloco de código**


// Arrow function (MAIS SIMPLIFICADA)

const proximoNum = n => return (n + 1)
//percebeMOS mais duas mudanças. Em primeiro lugar, quando temos um único parâmetro, não precisamos dos parênteses na hora de declarar a arrow function. Em segundo lugar, quando escrevemos o bloco de código na mesma linha em que temos a seta da arrow function, não precisamos das chaves para encapsular o bloco de código a ser executado


// Arrow function (SIMPLIFICADO DO SIMPLIFICADO)

const proximoNum = n => (n + 1)

//Da mesma forma que com as chaves, quando temos o bloco de código na mesma linha de código que a seta não precisamos do return

const vezesCinco = num => num*5
//não precisamos da palavra reservada "function", por ser uma arrow. Por ter apenas um parâmetro não precisamos de parênteses. E podemos dispensar as chaves e o return por estar tudo escrito numa única linha.



```

>RESUMO

CONDIÇÃO (para uso) | SIMPLIFICAÇÃO
:----|:----
nehuma | Não usar a palavra reservada **function**
nenhuma | Incluir uma **seta gorda** `=>` entre os parâmetros entre parênteses
Um único parâmetro | Não precisamos encapsular o parâmetro entre **parênteses**
Bloco de código na mesma linha que os parâmetros e a "seta" | Não precisamos das **chaves**, nem da palavra reservada **return**

>VALE LEMBRAR  
> O uso de arrow functions é completamente opcional. É perfeitamente possível escrever as mesmas funções de forma anônima, ou de forma regular. Contudo, o uso das arrow function tem ficado muito popular entre a comunidade de desenvolvedores de JS, e por isso é importante sabermos pelo menos reconhece-las e interpretá-las.

![Arrow Function x Function](https://i.imgur.com/zrYspqI.png)<https://youtu.be/S5Mn0qQzJ-0>

>Comentários ao vídeo
>Af, aparitr do ES6, são SEMPRE funções ANÔNIMAS. Trata o `this` de uma forma totalmente diferente.

tudo após a fatArrow é assumido como `return`;
quando tem mais de uma função tem que colocar as chaves;

ArrowFunctions redefinen o `this`, this no normal é definido onde é chamado.
nos Arrows, é definido no local que é criado. //é isso que entendi.

>Material Complementar

[Funções no JavaScript]<https://encontreseucodigo.com.br/aprenda-javascript/aprenda-funcoes-no-javascript/>

[Curso em Vídeo. Funções - Curso JavaScript #16]<https://www.youtube.com/watch?v=mc3TKp2XzhI>

[Arrow Functions vs. Functions em JavaScript]<https://www.youtube.com/watch?v=S5Mn0qQzJ-0>

### 5.3.2 - Conexão com HTML

Existem duas formas de inserir código JavaScript nas nossas páginas web:

1. usando uma **tag específica** para JS no arquivo HTML.
   1. `<script></script>`, tudo inscrito entre essas tags devem seguir as regras de sintaxe.
2. criando um **arquivo separado** com todos nossos códigos JS, e depois “conectar” esse arquivo com nosso arquivo HTML.
   1. Usamos o mesmo método do CSS(criar um arquivo separado e conectalo ao html via link).
      1. Primeiro, temos as tags de abertura e fechamento `<script> </script>` sem conteúdo algum entre delas, pois não estaremos usando elas para escrever código JS, e sim para conectar nosso arquivo HTML com um arquivo de extensão .js
      2. Depois, incluímos o atributo `src=””` que vem de “source” (“origem” em inglês), que recebe uma string com a rota para nosso arquivo JS. Neste caso, a string começa com um ponto e barra ‘./’ indicando que procuraremos pelo arquivo na mesma pasta onde está o arquivo HTML, e depois da barra incluímos o nome do arquivo, resultando em: `src=”./script.js”`
      3. Finalmente, incluímos o atributo `defer`, que faz com que o navegador *execute o arquivo JS apenas depois que o arquivo HTML tenha sido baixado e analisado.*

A ordem em que os arquivos são executados **pode não parecer importante** neste momento, porém, nas próximas aulas entenderemos melhor a importância do atributo “defer” e de carregar nosso código JavaScript depois do conteúdo HTML.

[TableLess. Inserindo JS]<https://tableless.github.io/iniciantes/manual/js/inserindo-js.html>

[W3Schools. HTML `<script>` defer Attribute]<https://www.w3schools.com/tags/att_script_defer.asp.>

## 5.4 - SELETORES DOM EM JS

## 5.5 - INNERTEXT E INNERHTML

## 5.6 - REVISÃO DE JAVASCRIPT I

##
