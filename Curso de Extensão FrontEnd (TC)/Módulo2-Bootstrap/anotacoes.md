# Bootstrap

## 1.0 - Preparatório para Bootstrap

## 1.1 - Apresentação

A documentação oficial define como conjunto de ferramentas de front-end poderoso, extensível e repleto de funcionalidades. w3 complete como css é o framework mais utilizado para estilização mobile first.

## 1.2 - Framework e Documentação

Framework são soluções prontas, que nos dá agilidade para desenvolver projetos, uma vez que não há necessidade de escrever os códigos do zero.

Ex: Dono de empresa de vendas de camisas;
Ao invés de ter uma plantação de algodão, uma fabrica para transformar o algodão bruto em tecido, logísticas,e etc. Ele só compra a camisa pronta e personaliza da forma que ele quer.

Um site pode ser construído do zero ou utilizar moldes prontos. Esses moldes estão nos framework de cada linguagem. Utilizado quando não hã necessidade de ter uma identificação visual própria, pois utilizará um padrão genérico. Para ganhar agilidade na construção abre-se mão de personalização.

![a](https://i.imgur.com/2VIisSg.png)

>Dica  
Pense no Bootstrap como um par de arquivos .css e .js com um número imenso de estilizações prontas para aplicar no seu site.

----

>Bibliografia

SEBRAE. O que é um site responsivo. 10 dez. 2013. Disponível em: <https://sebrae.com.br/sites/PortalSebrae/artigos/o-que-e-um-site-responsivo,4a6ad1eb00ad2410VgnVCM100000b272010aRCRD.> Acesso em: 8 ago. 2023.

 

TECNOBLOG. O que são frameworks?. 2021. Disponível em: <https://tecnoblog.net/responde/o-que-sao-frameworks/.> Acesso em: 8 ago. 2023.

## 1.3 - Responsividade e MobileFirst Desing

Hoje o acesso é por varios tipos de dispositivos, celular, telas de 4k, telas HD. Cada uma com sua dimensão.

Site responsivo se adapta automaticamente ao tela do dispositivo. garantindo que as informações sejam exibidas da forma desejada. Se você abrir um site e vir na cabeça "melhor abrir no pc" esse site não está tão responsivo quanto precisa ser.

![a](https://i.imgur.com/rYyc2uG.png)

![a](https://i.imgur.com/jcmnavv.png)

Muitos especialistas acreditam que a abordagem mais eficiente é o design mobile-first, ou seja, começar desenvolvendo para telas menores e depois ir adaptando, gradualmente, o conteúdo para telas maiores.

Há outro grupo que pensa diferente, construir do maior pro menor.

Bootstrap segue o Desing Mobile-First. Suas ferramentas podem ser ser utilizadas para além de restritamente responsividade.

>Referência Bibliográfica  

DINAMIZE. O que é mobile first e por que é importante no marketing digital?. Disponível em: <https://www.dinamize.com.br/blog/o-que-e-mobile-first/.> Acesso em: 16 ago. 2023. 

SEBRAE. O que é um site responsivo. 10 dez. 2013. Disponível em: <https://sebrae.com.br/sites/PortalSebrae/artigos/o-que-e-um-site-responsivo,4a6ad1eb00ad2410VgnVCM100000b272010aRCRD#:~:text=Sites%20responsivos%20s%C3%A3o%20aqueles%20que,telas%20de%20celulares%20e%20tablets.> Acesso em: 8 ago. 2023.

TECNOBLOG. O que são frameworks?. 2021. Disponível em: <https://tecnoblog.net/responde/o-que-sao-frameworks/.> Acesso em: 8 ago. 2023.

## 2.0 Primeiros passos em Bootstrap

## 2.1 - Instação (Vídeo Luis)

<https://getbootstrap.com/>

Ao add o link via cdn, já se muda.

## 2.2 - Classes Utilitário e Cores

Classes utilitárias possuem estilos gerais e podem ser aplicadas à maioria dos elementos HTML.

Bootstrap trabalha com um sistema de **oito cores** principais e as suas respectivas variações.

cores seguem um sistema baseado em função.
2 representam cores primárias e secundárias do layout.
4 representam feedback(sucesso, perigo, alerta e informação).
2 últimas representam os temas claro/escuro.

![a](https://i.imgur.com/FqITyPN.png)

Cada cor representa uma função. Essas cores podem ser aplicadas a distintos elementos usando os **nomes das suas funções** em inglês (por exemplo: primary, secondary, success etc.). A partir das atualizações mais recentes do Bootstrap, contam com duas variações: uma variação “sutil” e outra para efeitos de ênfase.

Para o uso apropriado de cores nos nossos sites, uma regra bastante comum é a do **60(principal)/30(secundário)/10(acentuação)**.

Podemos entender que as quatro cores designadas, para “sucesso”, “alerta”, “perigo” e “informação”, como as cores de "acentuação".

>Referência Bibliográfica  
BOOTSTRAP. Get started with Bootstrap. [.S.d]. Disponível em: <https://getbootstrap.com/docs/5.3/getting-started/introduction/.> Acesso em: 13. set. 2023.

<https://getbootstrap.com/docs/5.3/getting-started/introduction/>

Começar pelos `Utilities`

Termos são reduzidos , `m` se refere a margim, e `p` para padding. `t` para top, `b` para bottom.

![a](https://i.imgur.com/42c4MdH.png)

## 2.3 - Containers

Há 5 breakpoints por padrão e buscam atender 6 tamanhos de telas. Cada breakpoint tem um nome e uma abreveatura.

![a](https://i.imgur.com/Xq2O1Mp.png)

Embora extra small, também chamado de “extra pequeno”, seja o menor tamanho de tela considerado pelo Bootstrap tamanho máximo de **<576px**, ele não precisa de um breakpoint definido pelo framework, já que representa o primeiro tamanho por padrão do design mobile-first.O primeiro e menor breakpoint, portanto, é o small, que representa as telas “pequenas”.

Para melhor entendimento do breakpoint é melhor fazer uso do container, esse container nada mais é do que o PAI, pensado em **conter** os seus filhos.

aplicar a classe `.container` a qualquer elemento, teremos uma ideia inicial sobre como os breakpoints ajudam no desenvolvimento de sites responsivos.

Ter um site que se ajusta automático pode ser problema, pois suas dimensões afetam vários elementos. Nesse caso, é importante semrpe definir o `tamanho máximo` dos elementos.

![a](https://i.imgur.com/uYXH7bW.png)

![a](https://i.imgur.com/DmZpD8g.png)

![a](https://i.imgur.com/J4ALyVW.png)

>Referência Bibliografica

BOOTSTRAP. Data attributes. [S.d.]. Disponível em: <https://getbootstrap.com/docs/5.3/getting-started/javascript/#data-attributes.> Acesso em: 13. set. 2023.

## 3.0 Responsividade

Ao acessar uma página via smartphone e ela mostrar seu conteúdo em apenas uma coluna, devendo o usário deslizar pelo contéudo é uma característica da Responsividade. Telas pequenas costumam dispor de elementos de forma vertical, um abaixo do outro.

Um tablet, dois ou três elementos por linha.

Um notebook ou monitor, nelas exibimos quatro ou mais elementos em uma única linha, sem que fiquem apertados. Telas maiores, mais espaço costuma-se ter três ou mais elementos por linha. Dispostos um ao lado do outro.

![a](https://i.imgur.com/Nwpgqj1.png)

![a](https://i.imgur.com/lOomGBl.png)

## 3.1 - Sistema de 12 colunas

Muitos frameworks modernos adotam um sistema padrão de 12 colunas para definir a disposição de elementos. Uma das **vantagens** de usar 12 colunas como referência ao definir um layout responsivo *é o fato desse número ser divisível por dois, três e quatro.*

![a](https://i.imgur.com/VvMMy3g.png)

![a](https://i.imgur.com/jY5zQxS.png)

O sistema de 12 colunas facilita a distribuição equitativa de elementos em uma única linha.

## 3.2 - Bootstrap grid

O sistema de `grid` do BS combina conceitos de breakpoints, design mobile-firts e sistema 12 colunas. Para fazer isso, **usaremos** o elemento `container`, além de dois novos elementos: o `row` (“linha” em inglês) e o `column` (“coluna” em inglês).

![a](https://i.imgur.com/PJYQuaj.png)

![a](https://i.imgur.com/W1S2aOW.png)

>Referência bibliográfica

PACHECO, Andrea. Um guia completo sobre grids para design responsivo. UX Collective BR, 15 out. 2014. Disponível em: <https://brasil.uxdesign.cc/um-guia-completo-sobre-grids-para-design-responsivo-6b192fea0124.> Acesso em: 31 ago. 2023.

----

## 3.3 - Vídeo Grid - Luíz

O sistema de grid funciona com 3 classes: `container`, `row`, column(`col`)

container row e col vao espremer os itens que são colocados. Se for 3 divide-se a largura para os três. Se colocar 5 vai espremer os itens e seus conteúdos até dar na largura.
![a](https://i.imgur.com/mjh5EBI.png)

No primeiro, Cada noticia ocupa a largura máxima, no segundo, tablet, 3 colunas. No último Note/Monitor, seriam 4 itens.

![a](https://i.imgur.com/F7q1cfc.png)

Utilizando a idéia de desing mobilefirst, aplicaremos as notícias toda a largura possível, uma vez que partimos do tamanho do smartphone pra cima. Idependente da largura da viewport, notícia 1  ocupará toda a largura, uma vez que se tem como limite 12 unidades de colunas.(largúra máxima da tela INDEPENDENTE DO BREAKPOINT)


## 4.0 Componentes

## 5.0 Barra de navegação


