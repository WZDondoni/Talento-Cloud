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
