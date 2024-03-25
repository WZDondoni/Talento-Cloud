# 1 - API

## 1.1 - ENTENDER O QUE SÃO APIS E SUAS VANTAGENS

### 1.1.1 - INTRODUÇÃO À API

Para entender o conceito de API, vamos imaginar *os sites e sistemas que desenvolvemos como* **um mercado**. Assim, os consumidores chegam à nossa loja em busca de produtos diversos e nós, os responsáveis pelo estabelecimento, podemos organizá-los de formas diferentes. Por exemplo, é possível utilizar cartazes para orientar os consumidores, deixar de vender um produto específico para priorizar outro etc.

>Vamos praticar?
>Com a ajuda da analogia mencionada no slide anterior, entendemos que os mercados estão para os sites do mesmo modo que os consumidores estão para os: Usuários.
>Os usuários dos sites são os consumidores do mercado. Isso significa que, assim como ocorre nas páginas da internet, o usuário, ou seja, o consumidor, também interage com o ambiente, que aqui foi representado pelo site/mercado.

No caso das nossas lojas, **não somos os responsáveis pela fabricação dos produtos oferecidos**. Nossas prateleiras, estantes e geladeiras são *repletas de produtos que recebemos de um ou mais fornecedores*.

Nessa analogia:
*os responsáveis pela loja* **seriam os desenvolvedores front-end**,  *fornecedores* seriam os **desenvolvedores back-end**,
*produtos* seriam os **dados solicitados** pelo front-end, enviados pelo back-end e consumidos pelo usuário, conforme o esquema a seguir.

![a](https://i.imgur.com/GJl841L.png) ![a](https://i.imgur.com/ULJzNd7.png)

>Dica💡
>>Imagine que você está desenvolvendo um site de filmes. Você receberá os dados das obras (título, diretor(a), ano de lançamento etc.) do back-end e, como desenvolvedor front-end, poderá exibir essas informações de diversas formas para o usuário: em formato de tabela, carrossel de imagens, linha do tempo e mais.

Geralmente, em uma loja, existe a figura do **representante comercial**. É esse o responsável que buscamos, por exemplo, *quando desejamos consultar a lista dos produtos oferecidos pelo fornecedor*, identificar os detalhes de um produto específico ou realizar uma encomenda.

Agora, vamos relacionar a figura do **representante comercial** com o mundo do desenvolvimento. Em uma analogia, *o responsável pela comunicação entre dois sistemas será chamado*, nesse contexto, de **API**, sigla de Application Programming Interface.

Outro exemplo.  
Se estivermos desenvolvendo um site em formato de rede social, por exemplo, **os dados dos usuários, assim como as suas postagens e os comentários, ficarão salvos em um banco de dados**.

O `back-end` será *responsável por administrar e organizar esses dados* de forma que faça sentido. O `front-end`, por sua vez, será *responsável por exibir essas informações aos usuários*. Por fim, a `API` será *responsável pela comunicação* **entre** o **front-end e o back-end**.

>Refletir 🤔  
>Quando interagimos em qualquer rede social, cada requisição feita precisa de uma resposta para certas questões, como, por exemplo: qual postagem o usuário acessou? quais comentários estão relacionados a ela? o usuário tem autorização para ver a postagem? se ele quiser adicionar um comentário, para onde o nosso site precisará enviar essas informações? além disso, as informações deverão ser enviadas em qual formato? *A API receberá, então, essas requisições do front-end. Depois, consultará o back-end e encaminhará uma resposta de volta para o front-end*.

O que é API? <https://www.youtube.com/watch?v=3LHSyha0xN0>

API é um mini sistema que faz a ponte(intermediário), para acessar um sistema maior.

>Referência Bibliográfica

CURSOSPM3. O que é “API – Application Programming Interface”. Disponível em: <https://www.cursospm3.com.br/glossario/api-application-programming-interface/>

FABRO, Clara. O que é API e para que serve? Cinco perguntas e respostas. TechTudo, 15 jun. 2020. Disponível em: <https://www.techtudo.com.br/listas/2020/06/o-que-e-api-e-para-que-serve-cinco-perguntas-e-respostas.ghtml>

Ao acessar um site e ele dar a opção de se inscrever no site utilizando as contas do Gmail ou Facebook, esse site está consumindo API do Google e da Meta.

Ao procurar um produto num site de ofertas e esse site mostra produtos da Amazom e da Saraiva, esse site está consumindo API desses sites.

É desenvolvido uma página HTML padrão "em branco", e  essa página é preenchida com os dados retornados pela API.

### 1.1.2 - Anotação Exercício

1. Assinale a alternativa que apresenta um exemplo de possível uso de API.
   1. Utilizar a conta do Facebook para criar um usuário em um site de compras de móveis.
      1. Resposta correta! É isso aí! Ao fazer isso, é provável que o site de compras faça uma requisição à API do Facebook para validar o usuário.

2. Considerando que uma loja é como um site e que os desenvolvedores back-end são como seus fornecedores, qual é a opção que, nesse caso, representa os desenvolvedores front-end?
   1. Responsáveis pela loja.
      1. Resposta correta! Isso mesmo! Os responsáveis pela loja organizam os produtos recebidos pelos fornecedores da mesma forma que os desenvolvedores front-end exibem os dados recebidos do back-end.

3. Qual é o papel de uma API na relação entre front-end e back-end?
   1. Receber requisições do front-end e encaminhar as respostas do back-end.
      1. Resposta correta! Muito bem! A API faz a ponte entre o front-end e o back-end, recebendo requisições e consultando o back-end para, em seguida, retornar as respostas para o front-end.

## 1.2 - ENTENDER O FORMATO JSON E SUAS VANTAGENS

### 1.2.1 - Introdução ao JSON

Quando trabalhamos com desenvolvimento web, as duas estruturas mais **utilizadas para armazenar e organizar grandes volumes de dados** são os a*rrays e os objetos literais*.

Se quisermos salvar os dados de só um aluno, é possível a criação de um objeto com a estrutura apresentada ao lado.

![a](https://i.imgur.com/3tpoGv1.jpg)

Se quisermos salvar os dados de vários alunos, podemos criar um array em que os elementos são objetos que contêm as informações de cada um deles.

![a](https://i.imgur.com/rjeKLGh.jpg)

>VAMOS PRATICAR?

Embora a estrutura de dados seja leve e prática quando trabalhamos com JavaScript, nem todas as linguagens de programação conseguem replicar estruturas semelhantes. Essa afirmação é:

(X)V

Em Python, por exemplo, não há uma estrutura simplificada para objetos literais. Por esse motivo, foi criado JSON, que significa JavaScript Object Notation, ou Notação de Objetos JavaScript.

>DICA

Pense em **JSON** *como as sinalizações de trânsito.* Independente da língua do país, as pessoas reconhecem um octágono vermelho como “PARE” e o desenho de um avião como “aeroporto”. Da mesma forma, desenvolvedores de diferentes línguas compreendem estruturas de dados em formato JSON, mesmo que não trabalhem com JavaScript.

<https://www.devmedia.com.br/o-que-e-json/23166>

>REFLETIR

*Quase todas* as estrutura de dados *podem ser organizada* em **arrays**, **objetos literais** ou em uma **mistura de ambos**

Estrutura|Exemplo
----|----
*Array de objetos*|Uma lista **em que cada elemento** é um **objeto** que representa um movimento de extrato bancário: [{data: '2022-10-16', tipo: 'débito', quantidade: 80.00},{data: '2022-10-19', tipo: 'crédito', quantidade: 120.00}]
*Objeto de arrays*| **Um objeto** em que **cada chave** representa uma turma que possui uma lista de nomes como valor:{turma01: ["Pedro", "Andrés", "Carla", "Marlene"], turma02: ["Betânia", "Cristian", "Paulo", "Solange"]

>Referência bibliográfica

AFINAL, o que é JSON e para que ele serve? Descubra agora! RockContent, [s.d]. Disponível em: <https://rockcontent.com/br/blog/json/> Acesso em: 2 ago. 2023.

CÓDIGO FONTE TV. JSON//Dicionário do Programador. 12 nov. 2018. Disponível em:
<https://www.youtube.com/watch?v=P81dE-tkaaA>
Acesso em: 2 ago. 2023.

### 1.2.2 - ESTRUTURA + MÉTODOS: STRINGIFY E PARSE

Falando de ESTRUTURA, de início, vamos comparar os mesmos dados salvos em um objeto literal de JavaScript e em uma string JSON, para que possamos entender melhor as semelhanças e diferenças entre os formatos.

![a](https://i.imgur.com/wRBLI39.jpg)

Da mesma forma que ocorre com os objetos literais, quando trabalhamos com a JSON também **utilizamos chaves para definir os objetos** e **colchetes para definir os arrays**. Os dados são salvos em pares propriedade-valor e separados por vírgulas. JSON nos permite salvar dados do tipo string, number, boolean e null.

Nas diferenças, ao trabalharmos **com o formato JSON, não podemos utilizar aspas simples**, **apenas as duplas**. Além disso, o nome de cada propriedade também precisa ser escrito entre aspas duplas.

>Vamos praticar?

As strings JSON nos permitem estruturar dados apenas como um objeto literal JavaScript.

(x)F

O formato JSON nos permite utilizar a estrutura de **objetos literais**, mas também de **arrays** (ou vetores) para organizar nossos dados. Podemos, inclusive, **aninhar** os objetos e os arrays, ou seja, criar objetos cujas chaves **guardam arrays como valores**. **É possível, ainda, criar arrays em que cada elemento da lista é um objeto.**

>Métodos stringify e parse  
 Apesar de JSON ser uma estrutura  semelhante aos objetos literais em JavaScript, ela é uma sintaxe independente de linguagem. Por esse motivo, quando trabalhamos com **JavaScript**, também precisamos de formas para gerar e interpretar as strings JSON. Nesse caso, utilizamos os métodos nativos `stringify()` para **gerar** as strings JSON e `parse()` para **ler** as strings JSON.

```json
json.parse()
json.stringify()

```

#### 1.2.2.1 - STRINGFY()

O metodo `stringify()` permite **converter** os objetos e os arrays em *stirngsJSON*, possibilitando passar o array ou o objeto diretamente como argumento. Além disso, também há a **possibilidade de salvá-lo em uma variável** e passá-la como argumento.

```js
//Array de objetos literais
const produtos = [
   {nome: 'leite', preco: 6.99, marca: 'Tirol'}
   {nome: 'suco', preco: 8.99, marca: 'Prats'}
]

//Método stringify() para converter o array numa string JSON
const stringJSON = JSON.stringify(produtos)

//imprimunis a variável contendo a string JSON
console.log(stringJSON)

//Resultado do console.log
[{“nome”:”leite”, “preco”:6.99,”marca”:”Tirol”},{“nome”:”suco”,”preco”:8.99,”marca”:”Prats}]

```

#### 1.2.2.2 - PARSE()

O método `parse()` já é utilizado para converter as stringsJSON em arrays ou em objetos literais no JavaScript, precisamos do método `parse()`. Novamente, assim como no método `stringify()`, é preciso passar a variável que contém a string JSON como argumento da função.

```js
//Método parse() para converter a string JSON num array ou objeto literal
const arrayJS = JSON.parse(stringJSON)

//Imprimimos a variável contendo o retorno do método parse()
console.log(arrayJS)

//Rsultado impressão
[
{“nome”:”leite”, “preco”:6.99,”marca”:”Tirol”},
{“nome”:”suco”,”preco”:8.99,”marca”:”Prats}
]

```

>Dica
Em uma string JSON, **toda vírgula** indica que uma nova chave ou valor virá em seguida. Caso um sistema tente traduzir essa string para um objeto ou um array, ele provavelmente não saberá o que fazer, pois não encontrará a chave ou valor esperado após a vírgula perdida.

<https://jsonlint.com/>

```JS

{
  id: 7864,
  produto: 'forno',
  marcas: ['Electrolux', 'Brastemp', 'Oster'],
  idLojas: [45, 67, 129, 228],
}
 ```

Transformar o objeto literal acima e JSON

```JSON

{
    "id": "7864",
    "produto": "forno",
    "marcas": [
        "Electrolux",
        "Brastemp",
        "Oster"
    ],
    "idLojas": [
        "45",
        "67",
        "129",
        "228"
    ]
}
```

AFINAL, o que é JSON e para que ele serve? Descubra agora! RockContent, [s.d]. Disponível em: <https://rockcontent.com/br/blog/json/> Acesso em: 2 ago. 2023.

CÓDIGO FONTE TV. JSON//Dicionário do Programador. 12 nov. 2018. Disponível em:
<https://www.youtube.com/watch?v=P81dE-tkaaA.>
Acesso em: 2 ago. 2023.

### 1.2.3 - VÍDEOS LUÍS

Pasta JSON
Criando uma estrutura index e script e realizando inserções de objetos literais e transformando-os em JSON e retornando para objeto.

### 1.2.4 - EXERCÍCIO

1. Por qual outro nome são chamados os dados em formato JSON?
   1. String JSON. Isso mesmo! Os arquivos em formato JSON guardam, essencialmente, uma string de texto, portanto, chamamos eles de strings JSON.

2. Sistemas desenvolvidos em quais linguagens de programação conseguem gerar e interpretar strings JSON?
   1. A maioria das linguagens de programação atuais consegue gerar e interpretar JSON. Exatamente! Mesmo que nem sempre de forma nativa, a maioria das linguagens de programação hoje em dia conta com bibliotecas específicas para gerar e ler strings JSON.

3. Além de usar apenas aspas duplas para representar dados do tipo string, qual é a outra grande diferença entre objetos literais no JS e strings JSON?
   1. As chaves dos objetos também precisam ser escritas entre aspas. Muito bem! Em uma string JSON, diferente de um objeto literal no JavaScript, cada chave precisa, necessariamente, ser escrita entre aspas.

## 1.3 - ENTENDER UM PADRÃO DE ARQUITETURA WEB

### 1.3.1 - Modelo Cliente Servidor

O modelo cliente-servidor nada mais é do que **uma forma de comunicaçã**o em que clientes, como navegadores web, aplicativos de celular, smartwatch e afins, **solicitam recursos** a um servidor.

Nesse caso, os **clientes precisam**, então, enviar **requisições** em que são especificados os tipos de recursos necessitados. Os servidores, por sua vez, analisam as requisições recebidas e **enviam respostas**

![a](https://i.imgur.com/m5DOihd.jpg)

>Vamos praticar?  
   >No Modelo cliente servidor, quem envia a requisição?
   Resposta:Cliente.  
   Correto! As requisições são enviadas pelo cliente. Já o servidor, por outro lado, é o responsável por enviar as respostas para essas requisições.

### 1.3.2 - Estrutura de uma requisição

Como desenvolvedores front-end, devemos saber como utilizar as APIs, o que significa que é preciso que saibamos como **fazer as requisições**. Existem alguns protocolos de API que podemos usar, como o **SOAP** e a **RPC WebSocket**, mas não entraremos em detalhes sobre eles nesta aula. Ainda assim, usaremos como exemplo uma estrutura muito popular no desenvolvimento web atual: as **REST API**, também chamadas de APIs RESTful.

Quando fazemos requisições para uma **REST API**, precisamos *enviar algumas informações,* como um **URL** e um **método HTTP**. Além disso, podemos definir um `header` (cabeçalho) com alguns metadados. *Exemplo* disso é o *token de autorização, que existe para que o servidor valide se o cliente possui ou não permissão para acessar o recurso solicitado.*

Dependendo do **tipo de requisição**, ainda podemos incluir um `body` ou `data`, também chamado de corpo da requisição. Isso **é comum quando** a **requisição envolve criar ou atualizar informações no banco de dados**, como, por exemplo, a alteração de senha de determinado usuário.

>Vamos praticar?  
   >Qual das opções abaixo é um tipo de informação geralmente enviada no header (ou cabeçalho) da requisição? **Token de autorização.** Isso mesmo! Por questões de segurança, os tokens de validação geralmente são definidos no header da requisição, também chamado de cabeçalho. Contudo, vale apontar que cada API é desenvolvida de uma forma, ou seja, podem existir APIs que solicitem que o token de validação seja enviado, por exemplo, no própria URL.

Pausa para Refletir.
>Refletir

Lembrar quais são as partes de uma requisição, o que cada uma faz, quais devem ser definidas na hora de realizar requisições e quais dependem do tipo da requisição feita pode ser um pouco complicado no começo, por isso, utilize o quadro abaixo quando necessitar de ajuda.

![a](https://i.imgur.com/2SBUTMS.jpg)

>Saiba mais

<https://www.controle.net/faq/cliente-servidor-uma-estrutura-para-a-computacao-centralizada>

>REferrência Bibliográfica

COSTA, Matheus B. O que é HTTP?. Canal Tech, 31 maio 2021. Disponível em: <https://canaltech.com.br/internet/o-que-e-http/>. Acesso em: 2 ago. 2023

CONCEITO DE. Cliente-servidor. Disponível em: <https://conceito.de/cliente-servidor>. Acesso em: 2 ago. 2023.

ARVALHO, Gustavo. Status HTTP: Tudo sobre os 33 códigos HTTP. Home Host, 27 jun. 2023. Disponível em: <https://www.homehost.com.br/blog/internet/status-http-o-que-sao-codigos-de-resposta/>. Acesso em: 2 ago. 2023.

GASPAR, Larissa. Protocolo HTTP: entenda o que é e para que serve. Blog HostGator, 15 jun. 2021. Disponível em: <https://www.hostgator.com.br/blog/o-que-e-protocolo-http/>. Acesso em: 2 ago. 2023.

### 1.3.3 - Aprender a se comunicar com outros sistemas

Seria um caos se quem enviasse a correspondência definisse a maneira com que a correspondência seria enviada. Assim foi realizado o protocolo de envio dos correios, onde se padronizar como se deve realizar o envio da correspondência, fazendo uso do CEP, endereço. Assim como a dimensão e peso da embalagem são realizadas altereções na forma de se enviar essa encomenda.

Também funciona assim na web via uso do Hyper Text Transference Protocol-HTTP.

Você se lembra da analogia do mercado? Pois é! Agora, vamos imaginar que, ao fazer uma requisição, é **como se pedíssemos a um amigo para comprar manteiga para fazermos um bolo.**
Embora seja esperado que a pessoa retorne com o item solicitado, diversos imprevistos podem acontecer. Por exemplo, o amigo pode chegar ao mercado e perceber que a manteiga acabou. Pode ser, ainda, que o endereço que você passou seja de um açougue que nunca vendeu manteiga ou até mesmo que o seu colega chegou muito tarde e encontrou o mercado fechado.

>Vamos praticar?
   >Quando fazemos requisições, existem apenas dois resultados possíveis. Essa afirmação é…
   Falsa. Isso mesmo! **Uma requisição pode ter diversos tipos de resultados**, não apenas dois. Podemos descobrir que **não possuímos autorização** para acessar um recurso, que esse **recurso não está mais no lugar onde procuramos** ou que o **próprio lugar não funciona mais**, por exemplo. São muitas opções!  

#### 1.3.3.1 - Repetição

Da mesma forma, quando fazemos uma requisição via web, o servidor encaminha uma resposta que pode conter diversas informações, mas **uma das mais importantes é o status de resposta (ou, em inglês, status codes**). Esses status são **números de três dígitos** *agrupados em classes* que representam, de modo geral, o caráter da resposta. Vejamos um exemplo a seguir.

![a](https://i.imgur.com/DcucP9A.jpg)

>Vamos praticar?  
Os status de resposta da classe 2XX são associados com respostas positivas à nossa requisição, como, por exemplo, o recurso encontrado, o recurso atualizado etc. Resposta: Verdadeiro.Isso mesmo! As duas classes de código mais comuns são a classe 4XX e a classe 2XX. A primeira representa um erro na requisição ou, em outras palavras, uma resposta negativa, enquanto a segunda corresponde a uma requisição processada corretamente, ou seja, uma resposta positiva.  
  
**Reflexão**: Qual resposta parece mais útil:  

“não conseguimos enviar o recurso, pois você não tem autorização para acessá-lo” ou “não enviamos o recurso”?  
O s**tatus do código** nem sempre é interessante para os usuários, mas **é muito importante para os desenvolvedores!** Ele nos ajuda a entender melhor o(s) motivo(s) de um código não funcionar da forma esperada, nos permitindo resolver os problemas de forma ágil.

#### 1.3.3.2 - Postman

Existem softwares que permitem testar as APIs de forma rápida e eficiente. Embora sejam geralmente utilizados por desenvolvedores back-end, podem ser úteis também para desenvolvedores front-end. Nesse curso, faremos uso do Postman. Baixe o instalador no link e aprenda a usá-lo com nossa videoaula!

<https://www.postman.com/downloads/>

>Saiba mais
<https://www.homehost.com.br/blog/internet/status-http-o-que-sao-codigos-de-resposta/>

A seguir algumas referências

>Referências

CANALTECH. O que é HTTP?. 31 maio 2021. Disponível em: <https://canaltech.com.br/internet/o-que-e-http/>. Acesso em: 3 ago. 2023.

CONCEITO.DE. Conceito de Cliente-servidor. 1 nov. 2019. Disponível em: <https://conceito.de/cliente-servidor>. Acesso em: 3 ago. 2023.

HOMEHOST. Status HTTP: Tudo sobre os 33 códigos HTTP. 27 jun. 2023. Disponível em: <https://www.homehost.com.br/blog/internet/status-http-o-que-sao-codigos-de-resposta/>. Acesso em: 3 ago. 2023.

HOSTGATOR. Protocolo HTTP: entenda o que é e para que serve. 15 jun. 2021. Disponível em: <https://www.hostgator.com.br/blog/o-que-e-protocolo-http/>. Acesso em: 3 ago. 2023.

### 1.3.4 - FAZER REQUISIÇÕES A APIS GRATUITAS

#### 1.2.4.1 - Vídeos Luis - Postman

Documentação de APIS, deveriam ser obrigatórias, onde são descritas todas as informações necessárias para consumir a API.

Na documentação, é mandatório procurar a URL de requisição. Nem sempre a URL da API é a mesma do site da API.

#### 1.2.4.2 - Requisições via Postman - GET

Utilizando API SliptDevice

![a](https://i.imgur.com/JY8fhho.jpg)

Utilizando API ReqRes

Muitas vezes as API havera um link chamado Swagger, é uma ferramenta que serve pra criar API e suas documentações padrões. Nela há várias informações sobre a API como demonstrado na imagem.

![a](https://i.imgur.com/qtXvIJP.jpg)

![a](https://i.imgur.com/eWkKKfk.jpg)

#### 1.2.4.2 - Requisições via Postman - POST

Post é necessário além da URL, é necessário um "corpo", pois está sendo criado dados no servidor, será enviado algum dado para ser saldo ou gerado.

Será utilizado ReqRes para criar usuário.

No método post, nesse caso da API ReqRes, observa-se que é utilizado o parâmetro `users` tanto para listar usuários quanto para criar usuários. O que muda é o método. `GET` para listar, `POST` para criar. É algo normal no ambiente de desenvolvimento onde várias ações podem ter o mesmo parâmetro.

![A](https://i.imgur.com/Q4a0gIp.jpg)

## 1.4 - FAZER REQUISIÇÕES GET MAIS DETALHADAS

### 1.4.1 - Parâmetro de rota

Imagine que você está acessando a API de um mercado e que deseja receber a lista de produtos que vendem. Qual é o método ou tipo de requisição que deve ser feito? `GET`, uma vez que quando queremos **solicitar acesso a algum recurso**, como uma lista de produtos, utilizamos o método GET.

Ótimo! Imagine fazer uma requisição GET ao URL <https://www.loja/produtos> e receber uma string JSON com a lista de produtos. Nela, você encontra **o item mouse e busca mais informações sobre ele, como a marca, o valor, se está disponível em estoque etc**. Contudo, a resposta da API só mostra o nome e a ID de cada produto. Como é possível resolver esse problema?

Pois é, fazer uma rota GET diferente para cada produto certamente acabaria gerando uma lista imensa de rotas: loja/mouse, loja/teclado, loja/monitor e mais!

Esse é um cenário muito comum, então o que fazer? **Para começar, consultamos uma lista de registros**, seja ela de produtos, usuários, matrículas, endereços ou outros. Em seguida, **acessamos um registro específico dessa lista**, utilizando uma solução comum: *acessando a mesma rota e passando uma ou mais informações extras para definir o recurso específico que buscamos acessar, geralmente o id*. Assim, fazemos a primeira requisição, vemos que o mouse possui o id 18 e realizamos uma segunda requisição à mesma rota, adicionando o id da seguinte forma: <https://www.loja/produtos/18.>
Nesse tipo de requisição em que reaproveitamos uma mesma rota e passamos informações mais específicas separadas por uma barra (/), c**hamamos as informações extras de parâmetros da rota**.

>Dica  
>Você pode pensar nesse tipo de rota como semelhante ao acesso de uma pasta denominada “produtos” e que nela contém um arquivo de nome “18”. Para encontrá-la, você faria exatamente como no explorador de pastas do Windows ou do Mac.
![a](https://i.imgur.com/R7tWApx.jpg)
<hhttps://blog.rocketseat.com.br/tipos-de-parametros-nas-requisicoes-rest/>

---
>Bibliografia
SILVESTRE, Guilherme. O Básico: Express - Rotas. Dev.to. 16 mar. 2022. Disponível em: <https://dev.to/gabrielhsilvestre/o-basico-express-rotas-4i70>. Acesso em: 3 ago. 2023.

---

### 1.4.2 - Query strings

Imagine que você não **quer acessar** um produto específico, mas, sim, **a lista de todos os produtos de uma mesma marca.** Você também pode desejar, talvez, uma lista contendo todos os produtos com preço inferior a R$ 50,00. Será possível fazer isso ainda aproveitando uma mesma rota? É aqui que entram as **query strings**!

As query strings geralmente são utilizadas para realizar buscas mais específicas, definindo uma ou mais características do(s) recurso(s) procurados. Para definir uma query string, devemos **adicionar** um sinal de interrogação (`?`) **no final de uma rota,** seguido por uma estrutura “`chave=valor`”, como em <https://www.loja/produtos?marca=logitech.>

Ao fazer isso, esperamos que a API nos retorne uma lista filtrada apenas com produtos da marca Logitech. Se quisermos filtrar essa lista de produtos para exibir apenas os valores abaixo de R$ 50,00, **podemos concatenar mais termos de busca,** separando cada par chave-valor com um E comercial (`&`). Desse modo, o URL ficaria assim: <https://www.loja/produtos?marca=logitech&precoMax=50.>

Vale lembrar que o ``nome de cada chave`` permitida **é definido previamente pela API** e pelo **back-end.** Isso significa que *podemos enviar quantos pares chave-valor quisermos*,**mas apenas aqueles reconhecidos pela API** afetarão a busca.

Além disso, o nome de cada chave **é case sensitive**, o que significa sensível a letras minúsculas e maiúsculas. Se a API espera uma chave `precoMax`, mas digitamos precomax, esse trecho da query string **não será reconhecido.**

>Dica!  
>Encontramos exemplos de query string em quase todos os sites que tenham ferramenta de busca.
![a](https://i.imgur.com/FBRYQZt.jpg)

---

### 1.4.3 - Parâmetros de rota

Qual é símbolo que deve ser utilizado para concatenar pares “chave=valor” em uma query string? `&`. Legal! Para concatenar pares “chave=valor” em uma query string, utilizamos o `E comercial`, também chamado de `ampersand` (`&`). Dessa forma, podemos incluir quantos pares “chave=valor” precisarmos em um único URL.

>Saiba mais
<https://programadorviking.com.br/javascript-como-ler-query-string-da-url-guia-pratico/>

---

>Bibliografia

SILVESTRE, Guilherme. O Básico: Express - Rotas. Dev.to. 16 mar. 2022. Disponível em: <https://dev.to/gabrielhsilvestre/o-basico-express-rotas-4i70.> Acesso em: 3 ago. 2023.

---

### 1.4.4 - Vídeos Luís

Query Strings, deixa mais refinado a busca através pela url.

![a](https://i.imgur.com/XgQaJ5r.jpg)

Para se realizar o filtro de uma lista de informação usamos as QueryString incluindos ela na url, antes informando o `?` e depois pares de chave valor.

![a](https://i.imgur.com/5x0yGgu.jpg)

Uma das vantagens de tralahar com Query String é poder passar vários argumentos chave:valor no mesmo caminho. A quantidade que a API permitir e os argumentos que ele permitir.

![a](https://i.imgur.com/278eISI.jpg)

## 1.5 - ENTENDER O CONCEITO E AS VANTANGES DO ASSINCRONISMO

Sincrono, é quando só se passa para uma próxima etapa se completar a anterior. Assincronismo, é quando se completa mais de uma etapa ao mesmo tempo, mesmo não tendo completado ela. É o exemplo do bolo que se esquece de comprar limão para cobertura. Se eu parar de fazer o bolo pra comprar limão e depois voltar e completar a massa do bolo é Sincrono. Se eu enquanto preparo o bolo pedir pra alguém comprar limão, seria o Assincrono, pois não deixo de fazer a etapa mesmo faltando limão.

### 1.5.1 - Promises

O último conceito que devemos compreender antes de trabalhar com o assincronismo é o de *promises*, que significa **“promessas”** em português.

Pense nas promises como se fossem um cupom que vale um picolé. De vez em quando, podemos até pensar que sim, mas ter um cupom não é a mesma coisa que ter um picolé em si, certo?

Na verdade, pode ser que, ao tentarmos trocar o cupom na loja, nos digam que todos os picolés da marca estão esgotados. Há, ainda, a possibilidade da loja não participar da promoção ou até mesmo do cupom ter passado do prazo de validade

>Vamos praticar?
Ter um cupom que vale por um produto é, na prática, o mesmo que ter o produto em si. Falso. Parabéns! Um cupom não é necessariamente uma garantia do produto que ele representa. Como mencionado anteriormente, existem diversas possibilidades de cenários nos quais tentamos trocar o cupom pelo produto prometido, mas não conseguimos.

Pois é, as funções que fazem requisições assíncronas funcionam da mesma forma. Imagine só uma função que faz uma requisição assíncrona, retornando os dados de um cliente para salvá-los em uma variável chamada clienteBanco.

```JS
const clienteBanco = requisicaoAssincrona()

```

Podemos pensar que o valor salvo em clienteBanco foi os dados do cliente, mas o que salvamos, na verdade, foi uma `promise`, o equivalente ao cupom do picolé. Isso quer dizer que *a requisição pode, de fato, retornar os dados do cliente, mas pode, também, retornar um erro avisando que o cliente não foi encontrado ou que o usuário não possui permissão para acessar os dados do cliente etc.*

Sendo assim, dizemos que uma promise **pode ser resolvida** ou **rejeitada**. Quando a promessa é **resolvida**, *ela retorna o recurso solicitado*. Já quando a promessa é **rejeitada**, *retorna um código de erro*.

>Vamos praticar?  
As promises podem ser resolvidas, mas também podem ser… Rejeitadas..Você está indo muito bem! Dizemos que uma promise é resolvida quando a requisição é tratada com sucesso, o que geralmente retorna um status da classe 2XX. Ela é considerada rejeitada quando a requisição não retorna com a resposta esperada.

---

>Referência bibliográfica

DEVMEDIA. JavaScript: Promise. [s.d.]. Disponível em: <https://www.devmedia.com.br/javascript-promise/41205.> Acesso em: 3 ago. 2023.

COSTA, Cassio. O que é Programação Assíncrona e como utilizá-la?. SoftPlan, 29 set. 2022. Disponível em: <https://www.softplan.com.br/tech-writers/o-que-e-programacao-assincrona-e-como-utiliza-la/.> Acesso em: 3 ago. 2023.

### 1.5.1 - Exemplos de assincronismo

Existem **duas** situações comuns nas quais podemos perceber as vantagens do assincronismo no desenvolvimento web.

Em **primeiro** lugar, *podemos citar sites com recursos externos muito pesados*, como vídeos.

Ao optar por uma abordagem assíncrona, o resto da página não precisa esperar o recurso terminar de carregar para exibir os outros dados, como o canal e o título do vídeo, as notificações do usuário, os vídeos relacionados etc.

![a](https://i.imgur.com/5nkyu1R.jpg)

Em **segundo** lugar, trabalhar com um código assíncrono **nos permite carregar e recarregar recursos específicos, sem a necessidade de carregar todo o site** novamente.

Exemplo:  
Imagine o seguinte: você digita "hom" em uma barra de busca de filmes e o site inteiro carrega novamente para mostrar resultados que começam com “hom”. Você continua digitando "homem" e o site inteiro é carregado mais uma vez, mostrando os novos resultados.

Ao trabalhar com as `funções assíncronas`,**conseguimos recarregar apenas a parte do site que exibe os resultados da busca**. Assim, *não há a necessidade de carregar, novamente, os recursos que não dependem desse elemento externo.*

>Vamos praticar?  
Funções assíncronas nos permitem recarregar as partes de um site que dependem de recursos externos, sem que toda a página precise ser carregada novamente. Verdadeiro. Correto! Uma das duas principais vantagens de implementar o assincronismo nos nossos projetos **é que as partes as mais leves ou independentes de um site** `carregam primeiro`, enquanto as partes que dependem de recursos externos carregam depois. Tudo isso ocorre sem a necessidade de recarregar a página inteira.

---

>Dica!
Assincronismo é como cozinhar! Nós não precisamos esperar o arroz ficar pronto para começar cozinhar o feijão, podemos realizar ambas as tarefas em paralelo.

---

Como você pode ver, o assincronismo é um conceito simples que pode ser aplicado em diversas áreas do mundo da programação.

>Referência bibliográfica

DEVMEDIA. JavaScript: promise. [S.d.]. Disponível em: <https://www.devmedia.com.br/javascript-promise/41205.> Acesso em: 03 ago. 2023.

SOFTPLAN. O que é programação assíncrona e como utilizá-la?. 19 set. 2022. Disponível em: <https://www.softplan.com.br/tech-writers/o-que-e-programacao-assincrona-e-como-utiliza-la/.> Acesso em: 3 ago. 2023.

## 1.6 - REQUISIÇÕES ASSINCRONAS EM JS

### 1.6.1 - Conhecer a estrurura e uso da Fetch API

Entender Asynchronous JavaScript and XML-AJAX fica mais fácil de compreender quando se sabe sobre assincronismo. Pois ele é um conjunto de técncas no desenvolvimento web. Essas técnicas nos **permitem enviar e processar requisições de forma assíncrona.**

Hoje o JSON tomou o lugar do XML, porém o conceito ainda continua.
**AJAX** **nao é uma linguágem de programação**, *mas um conceito relacionado a assincronismo*

#### 1.6.1.1 - Fetch API:Requisição simples

Existe mais de uma forma de implementar os conceitos do AJAX ao desenvolver um site. A seguir, veremos uma das mais conhecidas: a Fetch API.

A `Fetch API` é uma **API nativa da JavaScript** e que pode ser utilizada facilmente sem a instalação de nenhum terceiro.

As requisições mais simples que podemos fazer são as do tipo GET sem nenhum tipo de cabeçalho definido. Para fazer esse tipo de requisição com a API Fetch, começamos usando a função fetch() em um arquivo JavaScript. Em seguida, passamos como argumento o URL para o qual desejamos fazer uma requisição.

```JS
fetch('https://random-data-api.com/api/v2/users')
```

Como visto em um momento anterior, a função fetch() **não vai retornar o recurso** que estamos tentando acessar, **mas a resposta do servidor**. Essa informação terá dados como, por exemplo, o header e o código HTTP.

>Vamos praticar?
Fetch API, é uma ferramenta popular para consumir APIs com JavaScript. Para usa-la é preciso primeiro instala-la em nosso projeto. Falso. Correto! A Fetch API é uma API **nativa**da JavaScript. Isso quer dizer que **não é necessário fazer nenhum tipo de instalação para usá-la** quando trabalhamos com a linguagem de programação JavaScript.

Precisamos, então, utilizar o método `then()`, que *recebe como argumento* uma **função** responsável por converter a resposta do servidor que está em formato JSON para um **objeto** ou um **array** `JavaScript`. Esse método pode ser encadeado diretamente à função `fetch()`, retornando uma promise.

```JS
fetch('https://random-data-api.com/api/v2/users')
.then(response => response.json())

```

Já que **o retorno do método then() é uma promessa** que pode ou não conter o recurso solicitado, precisamos encadear um segundo then(). No caso da promise ser resolvida, ele receberá os dados solicitados. Aqui, é possível utilizar e manipular esses dados da forma que quisermos. Nesse caso, vamos apenas imprimi-los no terminal.

```JS
fetch('https://random-data-api.com/api/v2/users')
.then(response => response.json())
.then(data => console.log(data))

```

>Vamos praticar?  

Quando usamos a Fetch API, quantos métodos then() precisamos encadear para poder acessar o recurso solicitado no caso da promise ser resolvida? Dois. Isso mesmo! Quando fazemos a requisição via Fetch API, **devemos sempre lembrar de encadear dois métodos .then( ) nela**. *O **primeiro** será responsável por converter a resposta do servidor do formato JSON para um array ou um objeto literal JavaScript*. *O **segundo** será responsável por lidar com os dados do recurso solicitado em si*.

---

>Dica  
then em inglês significa "depois" ou "em seguida".  Pense nele como uma forma de dizer ao nosso código "faz isso aqui e, na sequência, faz isso aí".

---

>Referênias bibliográficas

HOSTINGER TUTORIAIS. O que é AJAX e como funciona?. 19 maio 2023. Disponível em: <https://www.hostinger.com.br/tutoriais/o-que-e-ajax.> Acesso em: 4 ago. 2023.

SHAIKH, Reem. Is AJAX getting replaced by fetch API()?. Medium, 8 mar. 2022. Disponível em: <https://medium.com/@reemshakes/is-ajax-getting-replaced-by-fetch-api-55207234793f#:~:text=The%20Fetch%20API%2C%20is%20a,the%20official%20Fetch%20API%20Standard.> Acesso em: 4 ago. 2023.

DEVMEDIA. JavaScript: Fetch. [S.d.]. Disponível em: <https://www.devmedia.com.br/javascript-fetch/41206.> Acesso em: 4 ago. 2023.

RANDOM DATA API. V2 Documentation. [S.d.]. Disponível em: <https://random-data-api.com/documentation.> Acesso em: 4 ago. 2023.

REQRES. Home. [S.d.]. Disponível em: <https://reqres.in/.> Acesso em: 4 ago. 2023.

#### 1.6.1.2 - Fetch API:Requisição completa

Para definirmos um método HTTP diferente, assim como o cabeçalho, o corpo da requisição e qualquer outra informação da nossa requisição, precisamos passar um objeto como segundo argumento na função fetch():

```JS

fetch('https://reqres.in/api/users', {})


```

>Vamos praticar?  
Vamos simular a criação de um novo usuário. Qual é o método HTTP que devemos usar para fazer isso? `POST`. Correto! **Para criar** novos registros, o método HTTP mais apropriado é o POST.

**O primeiro que precisamos definir é o método da requisição**. Para fazer isso, incluímos a chave “method” com o valor “POST”.

```JS

fetch('https://reqres.in/api/users', {
   method: 'POST',
})


```

Ao criar um registro, é preciso **sempre enviar o corpo da requisição**. Ela contém os dados que pretendemos criar, que são, nesse caso, os dados do usuário.

Para isso, adicionamos a chave `body` e o valor estruturado da forma que a API externa espera receber as informações. Nesse caso, sabemos que ela aguarda receber um objeto com apenas duas informações: o nome e o emprego do usuário.

```JS

fetch('https://reqres.in/api/users', {
   method: 'POST',
   body: {
      name: 'House',
      job: 'doctor'
   },
   headers: {
      "Authorization":"API Key çakdjfaçdjfaçsldkfjaçsldfj",
      "Content-Type":"application/json"
   }
})

 


```

Nesse caso em particular, isso já seria tudo o que é necessário para conseguirmos fazer a nossa requisição; contudo, a maioria das APIs **pede algum tipo de autenticação para requisições desse tipo.** Também pode ser necessário definir *o formato no qual estamos enviando os dados* (por exemplo, JSON ou XML). Ambos precisam ser definidos nos `headers` (ou cabeçalhos) da nossa requisição, ficando mais ou menos como no exemplo a seguir.

**Embora estejamos criando um registro** e não solicitando, **o servidor nos mandará uma resposta** avisando se a requisição foi atendida com sucesso ou não, isto é, se o usuário foi criado. Por esse motivo, **ainda é necessário encadear ambos os métodos then()** para interpretar a resposta do servidor, como no exemplo a seguir.

```JS

fetch('https://reqres.in/api/users', {
   method: 'POST',
   body: {
      name: 'House',
      job: 'doctor'
   },
   headers: {
      "Authorization":"API Key çakdjfaçdjfaçsldkfjaçsldfj",
      "Content-Type":"application/json"
   }
})

.then((response) => response.json())
.then((data) => console.log(data));


```

>Vamos praticar?  
Quando fazemos requisições do tipo "POST", não esperamos que o servidor retorne nenhum tipo de dado, portanto, não é necessário encadear dois métodos .then( ) à requisição. `Falso`. Muito bem! Mesmo *se não estivermos solicitando acesso a um recurso*, sempre precisamos saber se a nossa requisição foi tratada com sucesso ou não. Além disso, quando usamos o método "POST", o servidor pode nos mandar informações sobre o recurso que foi criado, tais como o seu id ou a data e hora exata em que foi adicionado ao banco de dados. Por esse motivo, **é sempre importante usar o método .then( ) para interpretar a resposta do servidor.**

---

>Referência bibliográfica

HOSTINGER TUTORIAIS. O que é AJAX e como funciona?. 19 maio 2023. Disponível em: <https://www.hostinger.com.br/tutoriais/o-que-e-ajax.> Acesso em: 4 ago. 2023.

SHAIKH, Reem. Is AJAX getting replaced by fetch API()?. Medium, 8 mar. 2022. Disponível em: <https://medium.com/@reemshakes/is-ajax-getting-replaced-by-fetch-api-55207234793f#:~:text=The%20Fetch%20API%2C%20is%20a,the%20official%20Fetch%20API%20Standard.> Acesso em: 4 ago. 2023.

DEVMEDIA. JavaScript: Fetch. [S.d.]. Disponível em: <https://www.devmedia.com.br/javascript-fetch/41206.> Acesso em: 4 ago. 2023.

RANDOM DATA API. V2 Documentation. [S.d.]. Disponível em:<https://random-data-api.com/documentation.> Acesso em: 4 ago. 2023.

REQRES. Home. [S.d.]. Disponível em: <https://reqres.in/.> Acesso em: 4 ago. 2023.

---

>Material complementar: Fetch API

<https://drive.google.com/file/d/10GLOQhPUvPHMW2kuqGTiMhM3lhJrqntb/view>

#### 1.6.1.2 - Fetch API: Lidando com erros

Sabemos que quando usamos a função fetch(), devemos encadear o método then() para tratar o recurso solicitado. Contudo, caso o servidor não responda enviando o dado pedido, a segunda chamada do método then() não conseguirá manipular os dados recebidos da forma esperada.

>Vamos praticar?  
O segundo dos dois métodos .then( ) encadeados em uma requisição via Fetch API sempre será executado, independentemente da resposta do servidor. Resposta:Falso. Correto! O segundo método .then( ) que incluímos em uma requisição feita com o Fetch API *é o responsável por tratar os dados recebidos do servidor quando a nossa requisição é atendida com sucesso.* Caso a requisição fosse rejeitada, não haveria os dados necessários para tratar e, portanto, a Fetch API não executaria o segundo método .then( ) para evitar possíveis problemas.

Nesses casos, também podemos usar o método catch(), que nos permite **definir um comportamento, caso a promise seja rejeitada,** e pode ser encadeado depois do segundo then().

```JS
fetch('https://random-data-api.com/api/v2/users')
   .then(response => response.json())
   .then( data => console.log())
   .cath()


```

O método catch() recebe como argumento uma função que será executada caso a **promessa seja rejeitada**. Essa função, por sua vez, tem um parâmetro que representa a resposta do servidor, que frequentemente pode conter uma mensagem de erro explicando o porquê da requisição ter sido rejeitada. Por esse motivo, é comum imprimirmos a resposta no terminal.

```JS
fetch('https://random-data-api.com/api/v2/users')
   .then(response => response.json())
   .then( data => console.log())
   .cath(error => console.log(error))


```

>Dica  
Vale lembrar que, da mesma forma que podemos manipular o recurso recebido e processado do servidor no segundo bloco then(), também podemos lidar com o erro da forma que acharmos mais pertinente no bloco catch(). A*lém de imprimir a mensagem do erro no terminal, também é possível exibir um alerta no navegador, notificar o usuário sobre a impossibilidade de realizar a requisição, redirecioná-lo para uma outra parte do site* etc.

---

>Vamos praticar?
Qual é o método que devemos encadear depois do segundo .then( ) para lidar com as requisições quando a nossa promise for rejeitada? Resposta:cath(). Muito bem! O método que a Fetch API nos oferece para lidar com promises rejeitadas é o .catch( ).

Nos próximos vídeos, usaremos a Fetch API para consumir duas APIs gratuitas, fazendo requisições do tipo GET e POST e manipulando os dados recebidos por ambas no contexto de desenvolvimento web. Veremos, também, uma forma simples de lidar com as promessas rejeitadas e como incluir cabeçalhos com dados de autenticação em nossas requisições.

>Referênia Bibliográfica

HOSTINGER TUTORIAIS. O que é AJAX e como funciona?. 19 maio 2023. Disponível em: <https://www.hostinger.com.br/tutoriais/o-que-e-ajax.> Acesso em: 4 ago. 2023.

SHAIKH, Reem. Is AJAX getting replaced by fetch API()?. Medium, 8 mar. 2022. Disponível em: <https://medium.com/@reemshakes/is-ajax-getting-replaced-by-fetch-api-55207234793f#:~:text=The%20Fetch%20API%2C%20is%20a,the%20official%20Fetch%20API%20Standard.> Acesso em: 4 ago. 2023.

DEVMEDIA. JavaScript: Fetch. [S.d.]. Disponível em: <https://www.devmedia.com.br/javascript-fetch/41206.> Acesso em: 4 ago. 2023.

RANDOM DATA API. V2 Documentation. [S.d.]. Disponível em: <https://random-data-api.com/documentation.> Acesso em: 4 ago. 2023.

REQRES. Home. [S.d.]. Disponível em: <https://reqres.in/.> Acesso em: 4 ago. 2023.

### 1.6.2 - Solicitar dados - REQUISIÇÕES DO TIPO GET

Vídeos Luis.

Abrir arquivo fetch_api
fetch faz a ponte entre JS e as API.

Requisições do tipo GET não precisamos enviar nenhum dado para o servidor para receber a resposta, pois sempre solicitam informação. Podemos enviar complementos, como query strings, etc.

Requisições do tipo POST, estamos querendo CRIAR algum tipo de dados, e TEMOS QUE ENVIAR ALGO. No body. RAW, é o dado cru, nós que iremos informar do zero ele.

![a](https://i.imgur.com/cPsG7Av.jpg)

![a](https://i.imgur.com/IjnEM2a.jpg)

lembrar que o botão do formulário tem um comportamento padrão que é de enviar os dados digitados para a url ao clicar nele.

![a](https://i.imgur.com/Md6vxxt.jpg)

ao gerar o posto a primeira coisa é evitar o comportamento padrão do botao enviar do formulário.

no fetch deve-se add o segundo parâmetro que ´o método.
além do método ou body tem que ter o cabeçalho informando

```JS

headers: {
      "Content-Type": "application/json"
      //informando A api que receberá uma ARQUIVO EM FORMATO JSON.

    },
    body: {
      body: jsonBody
      //receberá o título e o corpo da mensagem que estão salvos na constante postTitle e postBody.



      //   }
    }


    const jsonBody = JSON.stringify({
    titulo: postTitle.value,
    mensagem: postBody.value
  })
  

```

a interatividade será quando clicado no botão
lembrar que o botão do formulário tem um comportamento padrão que é de enviar os dados digitados para a url ao clicar nele
uma função antes da fnção gerar post tem que ser exeutada para quebrar o comportamento padrão do botão enviar no formulário

Segundo bloco `.then` é tudo que acontece quando a requisição temsucesso.

```js
postContainer.appendChild(post) // ao inserir o mais recente é o último.
postContainer.preprend(post) // ao inserir o posto o mais recente fica na parte de cima

```

### 1.6.3 - Enviar dados - REQUISIÇÕES DO TIPO POST

<https://jsonplaceholder.typicode.com>

Rotas da API //EndPoints
![A](https://i.imgur.com/yekAXnl.jpg)

`/posts` é o complemento da URL base.

