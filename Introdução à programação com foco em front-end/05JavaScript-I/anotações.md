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
