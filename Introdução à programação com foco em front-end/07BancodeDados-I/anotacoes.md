# 7 - BANCO DE DADOS I

## 7.1 - MÓDULO 01 - QUAL SERIA A MELHOR FORMA DE CARLOS ORGANIZAR ESSA BIBLIOTECA?

### 7.1.1 - Compreender conceitos básicos de Banco de dados (BD)

#### 7.1.1.1 - Banco de Dados

Os bancos de dados podem ser dados de cadastros, históricos de compras, de filmes vistos, de músicas tocadas etc. Dificilmente, há uma aplicação que não precise guardar algum tipo de informação.

Assim, o ``database``, ou ``banco de dados``, **é onde conseguimos guardar informações que fazem o nosso sistema funcionar.**

Um ``banco de dados`` **é definido como uma coleção de dados persistentes**, pois ele *continua armazenando os dados mesmo se a máquina em uso for desligada*.

>Diferente da Memória RAM, que perde os dados quando a máquina é encerrada.

1960, pela IBM, foi o primeiro banco de dados. Visava otimizar o armazenamento de dados que era feito através do [acesso sequencial](http://www.din.uem.br/~yandre/AEDEP/arquivo-sequencial.pdf) e do [arquivo de acesso direto](off)

Qualuer coisa que colete informações é um banco de dados.

Heuser (2009) define “dado” como sendo um **fato registrado do mundo real, que possui um significado implícito no contexto de domínio de aplicação.**

Um banco de dados é um **conjunto de dados inter-relacionados** (SILBERSCHATZ, 2006), podendo ser classificado como [relacional ou não relacional](off)

![a](https://i.imgur.com/gedHGHC.png)

#### 7.1.1.2 - Banco de Dados Relacional

Esse tipo de banco de dados possui os dados armazenados em tabelas **separadas**, sendo possível relacioná-las. Nos bancos relacionais, as tabelas e os dados *ocupam menos espaço e são mais eficientes*.

O modelo mais comum, o modelo relacional, classifica dados em tabelas, também **conhecidas como relações**, cada uma das quais consiste em colunas e linhas. *Cada coluna lista um atributo* da entidade em questão, como preço, código postal ou data de nascimento. **Juntos, os atributos em uma relação são chamados de domínio**. Um determinado atributo ou combinação de atributos é escolhido como uma ``chave primária`` que pode ser consultada em outras tabelas, **quando é chamada de chave estrangeira.**

Cada linha, também chamada de ``tupla``, *inclui dados sobre uma instância específica da entidade em questão*, como um determinado colaborador.

O modelo também explica os tipos de relações entre essas tabelas, incluindo relações ``uma para uma``, ``uma para muitas`` e ``muitas para muitas``.

![a](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/database/discovery/relational-model.svg)



#### 7.1.1.3 - Abstração de Dados

A abstração de dados garante uma visão intangível de um banco de dados para seu usuário.
Não importa para o usuário saber a maneira como esses dados estão armazenados, **o importante é tê-los disponíveis quando solicitados**.

Exitem 3 níveis de abstração de dados, de acordo com Silberschatz(2006)

1. **Físico**, é a abstração mais baixa, mostra **COMO SÃO ARMAZENADOS**.  
2. **Lógico**,  é de abstração intermediária, **mostra os DADOS ARMAZENADOS** no banco de dados **E AS RELAÇÕES existentes** entre eles.  
3. **Vizualização**, é o nível mais alto, apresenta a parte do banco de dados de **maior interesse para o usuário final.**  

#### 7.1.1.4 - Modelos de dados

Silberschatz (2006) diz que um **modelo de dados é uma coleção de ferramentas conceituais para descrever dados, relações de dados, semântica de dados e restrições de consistência**. Ou seja, um modelo de dados descreve a [estrutura lógica e física](https://www.lucidchart.com/pages/pt/o-que-e-um-modelo-de-banco-de-dados) de um banco de dados.

Para Elmasri (2008), existem *dois níveis* de modelos de dados:

1. **alto nível**, modelos de dados conceituais que *descrevem os dados como os usuários os percebem*;
2. **baixo nível**, modelos de dados físicos, *descrevem os detalhes de como os dados estão armazenados* no computador.

#### 7.1.1.5 - Sistema de Gerenciamento de Banco de Dados (SGBD)

É pelo SGBD que o usuário cria e manipula o BD.  

>O SGBD é um conjunto de softwares formado por um ou vários bancos de dados e possui aplicações capazes de manipular esses bancos.

Ele possui um [catálogo de dados](https://www.oracle.com/br/big-data/data-catalog/what-is-a-data-catalog/#:~:text=Simplificando%2C%20um%20cat%C3%A1logo%20de%20dados,descoberta%20e%20governan%C3%A7a%20de%20dados.) que tem uma descrição completa de como os dados estão armazenados. Essas informações recebem o nome de [metadados](https://new.safernet.org.br/content/o-que-s%C3%A3o-os-metadados#:~:text=Metadados%2C%20ou%20Metainforma%C3%A7%C3%A3o%2C%20s%C3%A3o%20dados,mais%20f%C3%A1cil%20a%20sua%20organiza%C3%A7%C3%A3o.).

O SGBD ainda *proporciona a separação* entre **programas e dados**. Assim, qualquer modificação feita na estrutura  não vai alterar o código fonte como era feito no processamento tradicional de arquivos, a estrutura é modificada **só no catálogo**, sem alterar o programa.

   .|VANTAGENS | DESVANTAGENS
----|----|----
SGBD | Controle de redundância, Compartilhamento de dados, restrição ao acesso não autorizado, padronização, redução do tempo de desenvolvimento de aplicações | **alto custo** de implementação, já que hardwares são necessários. Além disso, mão de obra, uma vez que demanda gerenciamento e manutanção.

>Leitura Complementar

[ALVES, Gustavo. O que é um banco de dados?. Dicas de programação, [s/d].] <https://dicasdeprogramacao.com.br/o-que-e-um-banco-de-dados/>

>Referência Bibliográfica

ELMASRI, Ramez E.; NAVATHE, Shamkant B. Sistemas de Banco de Dados. 4 ed. Boston: Pearson Addison-Wesley, 2008.

HEUSER, Carlos Alberto. Projeto de banco de dados. Vol. 4. Porto Alegre: Bookman Editora, 2009.

SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. Sistema de Banco de Dados. 5 ed. Rio de Janeiro: Campus, 2006.

#### 7.1.1.6 - Anotação Exercícios

1. Sobre a evolução dos mecanismos de armazenamento, quais foram os primeiros modelos de bancos de dados desenvolvidos?
   1. O modelo hierárquico e o modelo em redes.
      1. Resposta correta!O modelo hierárquico foi desenvolvido pelo Information Management System (IMS) e o modelo em redes pelo Comittee for Data Systems Language (CODASYL).
2. Assinale a alternativa que apresenta o nome do modelo de banco de dados introduzido por E.F. Codd em 1970, considerado padrão mundial e que possui seus dados armazenados em tabelas.
   1. Modelo relacional.
      1. Resposta correta!O modelo relacional é um padrão utilizado no mundo inteiro, armazena seus dados em tabelas e proporciona o relacionamento entre elas.
3. Os bancos de dados são coleções de registros armazenados em algum dispositivo. Eles possuem modelos, como o hierárquico, o em redes, o relacional e o Orientado a Objetos. Sobre esses modelos, assinale a resposta correta.
   1. O modelo relacional representa os dados como uma coleção de linhas e colunas organizadas dentro de uma tabela.
      1. Resposta correta!No banco de dados relacional, as tabelas e os registros são formados através de colunas e linhas.
4. O Sistema de Gerenciamento de Banco de Dados (SGBD) é um conjunto de programas que serve para gerir e manipular os bancos de dados. Identifique a alternativa que apresenta apenas SGBDs.
   1. Oracle, MySQL e SQL Server.
      1. Resposta correta!Resposta correta!
5. Na época do surgimento dos computadores, como os dados passaram a ser armazenados?
   1. Em armários, através de fichas de papel preenchidas.
      1. Resposta incorreta!Esse modo de armazenamento ocorria quando os computadores ainda não existiam.
   2. Em sistemas de armazenamentos sequenciais.
      1. Resposta correta!Isso mesmo! Nesse tipo de sistema, se houvessem cinquenta arquivos guardados, seria preciso passar por todos os quarenta e nove anteriores para acessar o 50º arquivo.

### 7.1.2 - Modelar banco dados relacionais: Conceito relacional, lógico e físico

#### 7.1.2.1 - Vídeo - Etapas da modelagem de banco de dados

**Modelagem** pode ser *dividida em duas etapas*.

1. Análise de Requisitos;
   1. Possível identificar os dados a serem armazenados no banco;
   2. Descarte dos dados não necessários;
2. Modelagem propriamente dita;
   1. Feita a partir do modelo entidade-relacionamento-``MER``;
      1. Utilizar o ``MER`` é importante para separar as informações necessárias na construção do banco, identificando diferentes tipos de dados e como eles se relacionam;
      2. Por meio do MER podemos construir o Diagrama entidade-relacionamento-``DER``
         1. ``DER``, apresenta **graficamente** a estrutura do banco de dados e sua relação com os elementos.
      3. ``MER`` também é composto por ``Atributos``, assim como ``Entidades`` e ``Relacionamentos``. Tem sua representação construída por **formas geométricas**
         1. RETÁNGULO - Entidades;
            1. identificar de acordo com a **existência no mundo real**.
               1. LÓGICA;
                  1. Ex: Dicíplica é lógica, pois não ocupa lugar no espaço.
               2. FÍSICA;
                  1. Ex: aluno e prof. são entidades físicas, porque são tangíveis e visíveis no mundo real.
            2. Os objetos das entidades ainda podem ser:
               1. FORTES;
                  1. Sua existência **independe** de outra entidade;
               2. FRACAS;
                  1. Sua existência **depende** de outra pra existir;
               3. ASSOSSIATIVAS;
                  1. Surgem quando existe a necessidade de associar uma entidade a um relacionamento.
            3. 
         2. CÍRCULOS - Atributos;
            1. Servem para caracterizar e escrever a entidade dentro de um **domínio**, e possuem algumas **funções**:
               1. Descritivas;
                  1. Nome ou cor;
               2. Nominativas;
                  1. Nome, código ou número;
               3. Referênciais;
                  1. CPF do cliente na venda;
            2. **Estrutura** dos atributos podem ser:
               1. Simples;
                  1. Apenas 1 atributo define a caracteristica da entidade;
               2. Composto;
                  1. São utilizados vários atributos para definir as informações da entidade.
         3. LOZANGULOS - Relacionamentos;
            1. identificar os relacionamentos entre elas:
               1. ``Um pra Um``;
                  1. As duas entidades envolvidas tem referência OBRIGATÓRIA a apenas uma unidade da outra.
                  ![a](https://i.imgur.com/AtLN9LC.jpg)
               2. ``Um pra Muitos``
                  1. Uma entidade pode fazer referência a **VÁRIAS unidades** da outra, enquanto essas só podem fazer referência a UMA.
                  ![A](https://i.imgur.com/n7BtQw2.jpg)
                  Observamos que Estado pode fazer referência a várias cidades, e cidades só podem fazer referência a um Estado.
               3. ``Muitos pra Muitos``
                  1. Uma entidade pode fazer referência a várias Unidades da outra e vice e versa;
                  ![a](https://i.imgur.com/4v6HfqJ.jpg)
                  Uma entidade funcionário pode participar mais de um projeto, assim como um projeto pode ter mais de um funcionários envolvido.

![A](https://i.imgur.com/4YkeYbx.jpg)

Bancos de dados relacionais são fundamentais na programação e também os mais utilizados.

#### 7.1.2.2 - Modelagem de BDs relacionais - Fases

>Fase inicial - Análise de requisitos

Nela, é **realizada a identificação dos requisitos que constam em um banco de dados**. Entrevistas são feitas e o minimundo é desenvolvido com a descrição textual geral do projeto.

**As regras de negócios desse documento devem ser identificadas para que as informações sejam bem executadas**, pois informações erradas afetam todo o projeto.

>Projeto conceitual

O projeto conceitual *tem base nas informações coletadas pela análise de requisitos*. Assim, um esquema é gerado, utilizando um modelo de dados conceitual de **alto nível**, o Modelo Entidade-Relacionamento (**MER**). Esse modelo é simplificado para aproximar a composição dos bancos de dados aos usuários, *facilitando a compreensão das informações*. Por isso, a representação dos dados armazenados não é tão relevante.

O MER é representado através de diagramas. As ``entidades`` são **retângulos**, os ``atributos`` são **elipses** e os ``relacionamentos`` são **losangos**.

Nesta etapa, os três tipos de relacionamentos de entidades são fundamentais, sendo delas:

* um para um (1, 1);
* um para muitos (1, n) ou muitos para um ou (n, 1);
* muitos para muitos (n, n);

>Entidade e atributos

A ``entidade`` pode ser definida como **um objeto do mundo real, concreto ou abstrato, com existência independente**.

Os ``atributos`` c**ompõem um conjunto particular de propriedades atreladas à entidade.**

>               ATENÇÃO:  
>Atributos são características das entidades.

![A](https://i.imgur.com/9AgIslO.jpg)

> Atributos

Eles podem ser classificados como:

* Atributo **simples** - não pode ser subdividido;
  * Ex: CPF, um funcionário tem esse atributo simples, pois esse atributo não pode ser dividido;
  ![a](https://i.imgur.com/UGG9wM4.jpg)
* Atributo **composto** - pode ser dividido em diversas partes, com significados independentes entre si;
  * Ex: para um funcionário, ele tem um atributo composto que é o endereço, que possuem subprodutos como cidade, estado, endereço, data da contratação;
  ![a](https://i.imgur.com/1ROa2G2.jpg)
* Atributo **monovalorado** - ou simplesmente valorado, só assume um valor em uma determinada instância;
  * Ex: Na entidade ``funcionário``, temos dois atributos, nome e data_contratação, que são atributos monovalorados, ou seja, cada um com um único valor.
  ![a](https://i.imgur.com/EZjkCvi.jpg)
* Atributo **multivalorado** - pode assumir diversos valores em uma mesma instância;
  * Entidade ``funcionário`` tem um abributo ``telefone``, ele é multivalorado, pois pode ter mais de um número de telefone cadastrado;
  ![a](https://i.imgur.com/86f1Slx.jpg)
* Atributo **derivado** - é gerado a partir de outro atributo.
  * Ex: entidade ``funcionário``, o atributo ``tempo_de_casa`` precisa do atributo ``data_contratação`` para calcular seu valor.

>Exemplo Projeto Conceitual (n, n) "muitos para muitos"

![a](https://i.imgur.com/eWIZr1A.jpg)

Neste exemplo, está sendo utilizado o relacionamento de entidades muitos para muitos, **pois temos (n, n) do lado direito da vírgula de cada entidade.**

**Toda tabela possui uma chave primária**, que se trata de um *identificador único*e **não pode ter mais de um valor**.

Neste caso, as chaves primárias são os atributos referenciais, que são o CPF do aluno e o código da disciplina. Isso porque cada aluno tem seu próprio CPF e cada disciplina tem um código para representá-la.

>Exemplo Projeto Conceitual (1, n) - "um para muitos"

![a](https://i.imgur.com/T2QJa4d.jpg)

Neste exemplo, está sendo utilizado o relacionamento de entidades um para muitos,**pois temos (1, n) do lado direito da vírgula de cada entidade**.

>Exemplo Projeto Conceitual (1, 1) - "um pra um"

![a](https://i.imgur.com/cqjWwaX.jpg)

Neste exemplo, está sendo utilizado o  relacionamento de entidades um para um, **pois temos (1, 1) do lado direito da vírgula de cada entidade**.

>Projeto Lógico

O projeto lógico **é uma etapa do processo do MER**. Nele, o *mapeamento do projeto conceitual é elaborado*.

A construção dos modelos internos é realizada detalhando tabelas, regras, relacionamentos, dados das colunas (tamanho e tipo), entre outros.

O projeto lógico **tem como resultado o esquema detalhado do banco de dados**.

![a](https://i.imgur.com/BQNITND.jpg)

>     Exemplo de Projeto Lógico

Aqui, temos a conversão do modelo conceitual um para muitos (1, n) para o modelo lógico. Neste modelo, cada entidade se torna uma tabela e seus atributos, os dados de cada tabela.

![a](https://i.imgur.com/ewPUID3.jpg)

Aqui, temos a conversão do modelo conceitual muitos para muitos **(n, n)** para o modelo lógico. Neste modelo, cada entidade se torna uma tabela, seus atributos se tornam os dados de cada tabela e o relacionamento se torna uma nova tabela.

![a](https://i.imgur.com/uR5OlLh.jpg)
Uma nova tabela é criada para que ocorra o relacionamento entre as outras tabelas. Por isso, **ela possui apenas as chaves estrangeiras.**


Aqui, temos a conversão do modelo conceitual um para um **(1,1)** para o modelo lógico. Neste modelo, todas as entidades se tornam uma única tabela, ou seja, ocorre uma união dos dados.

![a](https://i.imgur.com/59fEgW7.jpg)

**Não existe chave estrangeira** nesse tipo de tabela. Por isso, ela é considerada a mais simples.

>Projeto Físico

O projeto físico **está no nível mais baixo em relação ao usuário final.** Nessa etapa, são definidas:

* as estruturas de armazenamento,
* os índices e a organização de arquivos do banco de dados.

Ela é considerada a **parte final do projeto**,*pois apresenta a forma de armazenamento, as permissões de acesso ao usuário e os scripts para criação dos objetos, tabelas, colunas, visões, funções e entre outros*

A seguir veremos a conversão do modelo lógico um para muitos (1, n) para o modelo físico. Neste modelo, os dados são representados em linhas de código SQL, que são utilizadas para a criação das tabelas em um banco de dados.

![a](https://i.imgur.com/n4gfotR.jpg)

![a](https://i.imgur.com/vnIr34d.jpg)

>Bancos de Dados

Existem ferramentas on-line destinadas à criação de cada um desses modelos vistos. Uma dessas é o brModelo, que é simples e de fácil uso.

>Leitura Complementar

AULA 02 - Modelo de Entidade-Relacionamento (MER). Metrópole Digital, [s/d]. Disponível em:  <https://materialpublic.imd.ufrn.br/curso/disciplina/3/45/2/7>

>Referências Bibliográficas

ELMASRI, Ramez E.; NAVATHE, Shamkant B. Sistemas de Banco de Dados. 4 ed. São Paulo: Pearson Addison-Wesley, 2008.

SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. Sistema de Banco de Dados. 5 ed. Rio de Janeiro: Campus, 2006.

>ATENÇÃO, A CARDINALIDADE MÍNIMA(A ESQUERDA) DA NOTAÇÃO ``MIN MAX`` SÓ ACEITA ``ZERO`` OU ``UM``
Por exemplo: (0, 1) ou (1, n)  
**zero**: NÃO É OBRIGATÓRIO  
**1** : É OBRIGATÓRIO

#### 7.1.2.2 - Anotação exercício

1. Marque a alternativa correta sobre o conceito de Modelagem Entidade-Relacionamento.
   1. O Modelo Entidade-Relacionamento é um modelo de dados conceitual de alto nível.
      1. Resposta correta!Com esse tipo de modelagem, o usuário não precisa da representação dos dados e de como eles serão armazenados.
2. Sobre relacionamento um para um, marque a alternativa correta.
   1. Para cada registro da primeira tabela existe um correspondente na segunda tabela, e vice-versa.
      1. Resposta correta!No relacionamento um a um, os registros sempre terão o seu correspondente na outra tabela.
3. Qual é a importância da análise de requisitos no início de um projeto?
   1. A análise de requisitos identifica quais dados devem ser arquivados no banco de dados, evitando o armazenamento de informações redundantes.
      1. Resposta correta!Essa análise coleta dados indispensáveis para que o usuário possa solucionar problemas e alcançar objetivos.
4. Antes da implementação do banco de dados, algumas etapas de modelagem de dados são necessárias. Elas são importantes para a identificação de erros e, por isso, devem ser seguidas à risca. Marque a alternativa que identifica essas etapas.
   1. Modelagem Conceitual, Modelagem Lógica e Modelagem Física.
      1. Resposta correta!Um bom desenvolvedor não deve ignorar essas etapas.
5. Sobre os objetos do modelo entidade-relacionamento, marque a resposta correta.
   1. Uma entidade pode ser definida como um objeto do mundo real, um objeto concreto ou um abstrato, possuindo existência independente.
      1. Resposta correta!Entidade é o objeto básico tratado pelo Modelo ER.









