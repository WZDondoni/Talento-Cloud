# 6 - JAVA SCRIPT II

## 6.1 - MÓDULO 01

### 6.1.1 - Adicionar estilos com a propriedade .style

A linguagem JavaScript nos permite acessar e manipular diretamente a estilização de qualquer elemento capturado no DOM usando a propriedade **style**.

#### 6.1.1.1 SETUP DE ARQUIVOS

Para demonstrar a funcionalidade da propriedade style, usaremos um projeto simples com três arquivos como exemplo: index.HTML, style.css e script.js. O arquivo index.HTML segue o padrão da estrutura base HTML, ou seja, possui um único elemento dentro da tag ``<body></body>:``

```html
<div>

    Texto de exemplo

</div>

```

Além disso, dentro da tag ``<head></head>,`` incluímos outras para conectar o arquivo HTML com os arquivos style.css e script.js, que estão na mesma pasta que o index.HTML. Assim:

```html
<link rel="stylesheet" href="style.css">

<script src="script.js" defer></script>


```

O arquivo CSS tem um seletor para ``div`` com as seguintes regras de estilização:

```CSS
div {

  color: #C41818;

  font-size: 4rem;

}
```

Como temos o arquivo ``script.js`` vazio, é nele que aprenderemos a usar a propriedade ``style``.

Usando o código do exemplo anterior e abrindo nosso projeto no navegador com a extensão Live Server, veremos o texto desse modo:

![A](https://i.imgur.com/ByHpEdU.jpg))

#### 6.1.1.2 Manipulando estilos

Para mudar a cor do texto com JavaScript, primeiro devemos ir no nosso arquivo script.js, **capturar o elemento div do DOM** e, por fim, salvá-lo em uma variável. Para fazer isso, usamos a seguinte linha de código:

```JS

let div = document.querySelector("div");
```

Após isso, usamos o ``dot notation`` (notação de ponto) para acessar a propriedade style que salvamos.

Por exemplo, para acessar a propriedade color e atribuir um novo valor a ela, usamos o operador de atribuição “=”, seguido de uma string contendo o valor da propriedade. Veja o exemplo:

```js
let div = document.querySelector("div");

div.style.color = "blue"

```

![a](https://i.imgur.com/YxKhkGK.jpg)

>Remover atributos..
>atribuir a string vazia

![a](https://i.imgur.com/w4rOkTI.jpg)

#### 6.1.1.3 Sintaxe e convenções de escrita

Além dessas instruções, existe mais uma regra de sintaxe que deve ser respeitada quando usamos a propriedade style na linguagem JavaScript: a **convenção** de escrita [camelCase](https://coodesh.com/blog/dicionario/o-que-e-camelcase/#:~:text=Voc%C3%AA%20j%C3%A1%20ouviu%20falar%20em,com%20exce%C3%A7%C3%A3o%20do%20primeiro%20termo.)

![a](https://i.imgur.com/b7HDlqM.jpg)

>IMPORTANTE:
As propriedades do objeto “Style” **são escritas com uma única palavra e redigidas da mesma forma que as escreveríamos em um arquivo CSS**, por exemplo: color, margin, display etc. Contudo, as propriedades, que têm nomes com mais de uma palavra, **seguem padrões de escrita diferentes.**

Na **linguagem CSS**, as escrevemos usando a padronização **snake-case**, já na linguagem **JavaScript**, usamos a **camelCase**. Dessa forma, as propriedades como background-color vira backgroundColor e text-decoration vira textDecoration.

Para manipular o tamanho da fonte do nosso texto, vamos acessar a propriedade fontSize e atribuir um novo valor. Isso é feito da seguinte forma:

```JS

div.style.fontSize = "16px"

```

![a](https://i.imgur.com/oosx2Ak.jpg)

>É importante lembrar:
Que, nesse caso, a **convenção de escrita é uma regra de sintaxe**. Caso não a respeitemos, a linguagem JavaScript não interpretará o nosso código corretamente.

Leitura complementar
[HORA DE CODAR. Como usar JavaScript para mudar propriedades CSS. [S.d.].](https://horadecodar.com.br/2020/05/27/como-usar-javascript-para-mudar-propriedades-css/)

[JAVASCRIPT TUTORIAL. JavaScript Style. [S.d.].](https://www.javascripttutorial.net/javascript-dom/javascript-style/)

Referência Bibliográfica

[W3 SCHOOLS. HTML DOM Element style](https://www.w3schools.com/jsref/prop_html_style.asp)

#### 6.1.1.4 - Anotações Exercícios

1. Sintaxe correta pra acessar a cor de fundo de um elemento container?
   1. container.style.backgroundColor. Correto!Ao acessar as propriedades com nome de mais de uma palavras usamos a convenção de escrita camelCase.
2. Victor acessou um elemento do DOM e o salvou em uma variável chamada titulo. Como ele pode acessar a cor da fonte desse elemento com a linguagem JavaScript?
   1. titulo.style.color. Correto. Primeiro precisamos acesar a propriedade style doelemento, e depois alterar a propriedade pretendida.
3. Sintaxe correta pra definir margem 16px no formulário
   1. formulario.style.margin = "16px".Correto Atribuição `=`

### 6.1.2 - Manipular classes com a propriedade .classList

A propriedade **style** é útil **quando queremos realizar estilizações menores**, ou seja, quando vamos **manipular uma propriedade CSS por vez**.  

Porém, se quisermos **manipular várias propriedades de uma só vez**, é mais prático definir classes com várias regras de estilização e usar a linguagem JavaScript para manipular as classes que cada elemento inclui.

#### 6.1.2.1 - Setup de arquivos

Para demonstrar a propriedade classList, usaremos como exemplo um projeto simples com três arquivos: ``index.html``, ``style.css`` e ``script.js``.

O arquivo index.html segue o padrão de estrutura base da HTML, com um único elemento dentro da tag ``<body></body>``.

```js
<div class="borda-azul">

    Manipulando listas de classes

</div>

```

Além disso, dentro da tag ``<head></head>``, incluímos outras para conectar o arquivo HTML com os arquivos ``style.css`` e ``script.js``, que estão na mesma pasta que o arquivo ``index.html``.

```js
<link rel="stylesheet" href="style.css">

<script src="script.js" defer></script>

```

Já o arquivo CSS tem um seletor de elemento, o ``div``, e dois seletores de classe, ``.borda-azul`` e ``.texto-novo``. Veremos as estilizações para cada um deles.

```css
div {
  background-color: lightblue;
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}



.borda-azul {
  border: solid 4px darkblue;
}



.texto-novo {
  color: #dc143c;
  font-weight: 800;
}


```

Como o arquivo ``script.js`` está vazio, é nele que aprenderemos a usar a propriedade ``classList``.

![a](https://i.imgur.com/nxP6EeP.jpg)

### 6.1.3 - Verificando se um elemento tem uma classe

Para manipular **listas de classes** com JavaScript, primeiro devemos ir no arquivo script.js, capturar o elemento div do DOM e, por fim, salvá-lo em uma variável.

Para fazer isso, usamos a seguinte linha de código:

```js

let div = document.querySelector("div");
```

Após isso, use o ``dot notation`` para acessar a propriedade ``classList`` do elemento que acabamos de salvar. Essa propriedade é um [objeto](https://tableless.github.io/iniciantes/manual/js/objetos.html#:~:text=Em%20JavaScript%20praticamente%20qualquer%20tipo,o%20que%20chamamos%20de%20m%C3%A9todo.) com métodos, que também podemos acessar usando o ``dot notation``.

Agora, vamos usar o método ``contains()``. Ele **verifica se um elemento possui ou não uma determinada classe e retorna um valor booleano**.

O método ``contains()`` **recebe** como argumento uma **string** **com o nome da classe**. Dessa forma, o retorno será true se o elemento conter essa classe e, caso não a possua, será false.

Nesse exemplo, passaremos o valor ``borda-azul``, salvaremos o valor retornado pelo método em uma variável chamada ``incluiClasse`` e, por fim, usaremos a função ``console.log()`` para imprimir o resultado.

```js
let div = document.querySelector("div")
 

let incluiClasse = div.classList.contains("borda-azul")


console.log(incluiClasse);
```

Ao salvar as mudanças e verificar o terminal no navegador, devemos ver o valor ``true`` impresso, pois o nosso elemento possui a **classe** borda-azul.

>VALE LEMBRAR:
  > A string passada nos métodos da classList **é composta pelos nomes das classes**, não pelos seletores CSS. Portanto, não é necessário colocar um ponto antes do nome da classe, como faríamos com outros métodos, como ``.querySelector()``.

### 6.1.4 - Adicionando Classes

Para adicionar uma classe ao nosso elemento, vamos usar o método ``add()``. Ele recebe como argumento uma string com o nome da classe que queremos adicionar.

Nesse exemplo, adicionaremos a classe ``texto-novo``, que **irá alterar a cor e o peso da nossa fonte**.

```js

div.classList.add("texto-novo");

```

![a](https://i.imgur.com/U6pNwHv.jpg)

### 6.1.5 - Removendo Classes

Para remover classes de um elemento, basta seguir os exemplos anteriores, mas aplicando o método ``remove()``.

Dessa vez, removeremos a classe ``borda-azul``, passando ela como argumento do método.

```js
div.classList.add("texto-novo");

div.classList.remove("borda-azul");

```

![a](https://i.imgur.com/gEED4aW.jpg)

### 6.1.6 - Alterando classes

São comuns as situações onde queremos adicionar ou remover uma classe, mas **não temos certeza quais classes um elemento possui ou não**. Isso é devido à ``classList`` do elemento ter **sofrido muitas alterações** ou porque o ``site permite o usuário interagir``, adicionando ou removendo classes de um determinado elemento.

Para resolver isso, poderíamos **criar uma função que recebe um elemento e o nome de uma classe como parâmetros**. Assim, o bloco de código verificaria se o elemento possui ou não a respectiva classe usando o método ``contains()``. Além disso, usaria uma estrutura condicional para aplicar o método ``remove()`` caso o retorno seja true, ou ``add()`` se for ``false``.

Contudo, a linguagem JavaScript nos oferece um método que realiza todo esse processo de forma automática, o ``toggle()``.

![a](https://i.imgur.com/bdq5InP.jpg)

No momento, nosso elemento de exemplo perdeu a classe borda-azul. Então, se usarmos a função toggle() logo embaixo do bloco de código anterior, passando o nome da classe como variável, teremos o seguinte:

```js
div.classList.add("texto-novo");

div.classList.remove("borda-azul");

div.classList.toggle("borda-azul");

```

Após salvar as mudanças e voltar ao navegador, podemos ver que a classe foi novamente removida. Isso ocorre porque estamos retirando a classe com o método ``remove()``.

Além disso,**a primeira execução** do método ``toggle()`` verifica se o elemento possui a classe borda-azul. Após confirmar essa ausência, o método a **adiciona**. A segunda execução do método ``toggle()`` faz a mesma verificação, mas dessa vez o elemento possui a classe, então o método a **remove**.

>Material Complementar

[SILVÉRIO, Henrique, Manipulando classes com classList API. Henrique Silvério, 23 mar. 2014](http://henriquesilverio.github.io/javascript-e-jquery/manipulando-classes-com-classlist-api)

>Bibliografia

[JAVASCRIPT TUTORIAL. JavaScript classList. [S.d.]](https://www.javascripttutorial.net/javascript-dom/javascript-classlist/)

[W3 SCHOOLS. HTML DOM Element classList. [S.d.].](https://www.w3schools.com/jsref/prop_element_classlist.asp)

### 6.1.7 - Anotações Exercícios

1. Gabriel usou uma estrutura condicional para verificar se o elemento card possui a classe selecionada. Como Gabriel pode fazer isso sem deixar o código mais complexo?
   1. card.classList("selecionada" || ""); **Errado**! classList não é um método. Portanto, não podemos executalo como uma função.
   2. card.classList.toggle("selecionada"). Correto. O método ``toggle()`` faz, automaticamente, a verificação de uma classe.
2. Gabriel é programador e deseja verificar se o elemento inputEmail possui a classe input-invalido. Qual é o comando que ele deve usar para fazer isso?
   1. inputEmail.classList.contains("input-invlalido"). Correto. Método .``contains()``, da propriedade ``classList`` é uma função que recebe como argumento uma string com o nome da classe que se deseja verificar.
3. Agora, Gabriel deseja tirar a classe visible do elemento sideNavBar. Qual é o método que ele deve usar para isso?
   1. sideNavBar.classList.remove("visible"). Correto. o método ``remove()`` da propriedade ``classList`` nos permite eliminar uma classe de qualquer elemento.

## 6.2 - MÓDULO 02

### 6.2.1 - Função .addEventListener()

#### 6.2.1.1 - Anotações Exercícios

### 6.2.2 - Eventos do mouse

#### 6.2.2.1 - Anotações Exercícios

## 6.3 - MÓDULO 03

### 6.3.1 - Capturar informações do evento

#### 6.3.1.1 - Anotações Exercícios

## 6.4 - MÓDULO 04

### 6.4.1 - Eventos de teclado

#### 6.4.1.1 - Anotações Exercícios

## 6.5 - MÓDULO 05

### 6.5.1 - Funções preventDefault() e alert()

#### 6.5.1.1 - Anotações Exercícios

### 6.5.2 - Eventos onFocus, onBlur, onChange e onSubmit

#### 6.5.2.1 - Anotações Exercícios

## 6.6 - MÓDULO 06

### 6.6.1 - Validação de formulários II

### 6.6.2 - Revisão do módulo - JS II

#### 6.6.2.1 - Anotações Exercícios

#### 6.6.2.2 - Anotações Exercícios
