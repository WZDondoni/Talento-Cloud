# 1 Redes e Linux Essentials para AWS

## 1.1 - O que são redes, as principais topologias de redes, as redes sem fio e os principais tipos de transmissão sem fio.

O que são redes de computadores. Elas variam de tamanho, locais(casa ou escritório) ou globais(internet). Redes tem diferentes disposições de conexão, que são chamadas de **topologia de redes**.

Exemplo de topologia é do tipo **estrela**, todos os dispositivos estão conectados a um ponto central, se esse dispositivo falhar todos perdem a conexão.

As formas de transmissão são via cabo ou sem fio, onde o mais conhecido é o **wi-fi**, o qual se utiliza de frequências de rádio para transmitir dados a curtas distâncias. Outros tipos de redes sem fio são:

* Redes de celulares, usadas para comunicação de dispositivos móveis;
* Satélites, para sinais de longa distancia;
* Near Field Communication(NFC), utilizada para pagamentos móveis.

Todas essas tecnologias de redes são fundamentais.

### 1.1.1 - Techtrack - Satelites

* Formato, Utilizada para comunicação de longa distância.
* Distância, pode chegar a nível global.
* Exemplo 1, áreas remotas...
  * ✅✅Correto.
* Exemplo 2, Sistemas de navegação como Global Positioning System (GPS) são usados para fornecer informações de localização precisas.
  * ✅✅Correto.

## 1.2 - TCP/UDP/IP/VPN e arquitetura OSI

### 1.2.1 - Segurança e arquitetura Organização Internacional de Normalização-OSI

Existem vários protocolos de segurança de rede projetados para proteger a integridade, a confidencialidade e a disponibilidade dos dados em uma rede. Esses protocolos são usados para a autenticação, a criptografia, o controle de acesso, a detecção de intrusões, entre outras medidas de segurança.

>Informação é o ouro do século XXI e, por isso, deve estar muito bem segura.

### 1.2.2 - Como funciona os protocolos ?

A banda de Miguel realizará seu primeiro show internacional. Eles decidiram que querem levar os seus próprios instrumentos musicais e, para isso, precisam despachá-los no aeroporto. Lá, solicitam  a documentação que comprove que eles pertencem à banda, as suas notas fiscais, as passagens de avião, os passaportes e que sejam preenchidos documentos comprovando o envio para o país de destino. Após o pagamento da taxa, tudo está pronto para a viagem. Por causa dessa burocracia, Miguel está certo de que sua guitarra e os demais instrumentos chegarão ao mesmo destino que ele.

**Observando alguns pontos da história de Miguel**
Você já tinha parado para pensar em como o envio de um objeto é carregado de burocracias? A documentação comprobatória assegura que a guitarra pertence a Miguel e que deve chegar no local de destino ✅Correto.. O transporte deve ser feito adequadamente para a guitarra não se perder no caminho ou seja trocada por outro objeto. Isso também acontece com os dados na rede.

Autenticação | Criptografia | Controle de acesso
----|----|----
Documentos que **comprovam o pedido de envio e identificam** a guitarra como única. Em redes, seria o Internet Protocol Security (`IPsec`). | O **empacotamento da guitarra**, de forma a protegê-la de avarias na viagem. Isso também seria responsabilidade do `IPsec`. | Delimitar **quem poderá ter acesso aos instrumentos e ao seu manuseio**. Seriam as regras de Firewall baseadas no `TCP/UDP`.

### 1.2.3 - Principais protocolos de segurança

Protocolo | Funcionalidade
----|----
Transmission Control Protocol (TCP) | **Parte essencial** do modelo Transmission Control Protocol/Internet Protocol (TCP/IP), esse conjunto de protocolos é  **usado para a comunicação** na *internet e em muitas redes locais (LANs) e redes amplas (WANs)*.
User Datagram Protocol (UDP) | **Protocolo de transporte** que opera de forma mais simplificada e não orientada à conexão em comparação com o TCP. O **seu foco é  na transmissão eficiente de dados** sem a sobrecarga associada ao controle de fluxo e à confirmação de recebimento.
Internet Protocol Security (IP) | Oferece **autenticação e criptografia para o tráfego IP,** garantindo comunicações seguras entre redes e dispositivos. É *comumente usado em Virtual Private Networks (VPNs)*.

### 1.2.4 - Diferença entre TCP e UDP

TCP | UDP
---|---
**Solicita retransmissões** se necessário, garantindo que os dados cheguem na ordem correta. | Os **dados são transmitidos sem a necessidade de uma confirmação inicial**.
**Gerencia o fluxo de dados** entre o remetente e o receptor. | **Não fornece mecanismos de confirmação de recebimento ou retransmissão de pacotes**. Não há retransmissão automática.
**Divide os dados em segmentos menores antes da transmissão**. Em seguida, *remonta esses segmentos no destino para formar os dados originais*. | **Mais leve** em termos de processamento e consumo de recursos.

### 1.2.5 - Prática

1. Qual é o protocolo de segurança de rede que assegura a transferência de informações?
   1. Criptografia
      1. ❌Errado.
   2. Enlace.
      1. ❌Errado
   3. Autenticação.
      1. ✅✅Correto.
2. 

### 1.2.6 - Enviando e recebendo dados na rede

IP | TCP | UDP
----|----|----
**Protocola** o endereço de entrada e saída, além de **empacotar** e preparar os objetos para o despacho, tornando **impossível saber o que está dentro do pacote**. | Os objetos **podem ser separados e verificados** *em cada parada do aeroporto* e *das conexões do avião* se for escolhido o envio TCP. | No caso do UDP, *os instrumentos serão todos enviados juntos e sem **verificação** durante o percurso*, **somente no final**.

### 1.2.7 - IP

Todo aparelho é **identificado por um número de IP**. Ele é necessário para conectar a internet e, geralmente, é providenciado pelo roteador.

>o IP funciona assim como nos endereços, em que temos as informações de número, rua e bairro.

### 1.2.7 - VPN

É uma tecnologia que **permite criar uma conexão segura e criptografada entre dois dispositivos ou redes,** *mesmo que esses dispositivos estejam fisicamente separados e se comuniquem por meio de uma rede pública*, como a Internet.

>Aumenta a segurança e a privacidade das comunicações on-line.

[Como funciona a VPN](https://www.youtube.com/watch?v=yCWNRzoQGis)

5 principais usos do VPN:

1. **Criptografia**, Encriptogragar os dados uma vez que nem todos os sites são http**S**, e os aplicativos são caixas pretas e não se sabe o que fazem com os dados.
2. **Liberações de restrições geográficas**, onde se pode alterar localidade, caso esteja em um país onde é proibido acessar determinado site, ao se fazer o uso vc se habilita.
3. **Anonimato e privacidade**, Use redes públicas com segurança. 
   1. Esteja fora da fiscalização Estatal.
   2. Use transferência P2P, uma vez que são proibidas.

[Network Topologies](https://www.youtube.com/watch?v=zbqrNg4C98U)

Star topology 
![a](https://i.imgur.com/zt2l1eL.png)
Se um pc parar os outros seguram o problema

Ring topology
![a](https://i.imgur.com/UUOaU0N.png)
Antiga e não mais utilizada.Se um dos pcs pararem ou quebrar o cabo toda a rede se compromete.

Bus topology
![a](https://i.imgur.com/r2630cc.png)
Antiga e não mais utilizada. Todos conectgados via um baco coaxial atra´ves de um conector BNC. 

Mesh topology
![a](https://i.imgur.com/MlrCqny.png)
Todos os pcs são interligados entre si numa teia. Se uma conexão falha mesmo assim há comunicação. Problema é o custo cará. Internet é um exemplo de rede Mesh.
![a](https://i.imgur.com/of99KbO.png)

Wireless Topology

Ad hoc
![a](https://i.imgur.com/SxlmIHa.png)
Diretamente conectados sem um dispositivos entre eles.

Wireless Mesh Topology
![a](https://i.imgur.com/2bEkjPX.png)
Utiliza-se a comunicação entre roteadores ao inves de cabos. Mesmo falhando um ponto, ele se comunicam com outros por serem muito redundantes.

### 1.2.8 - Prática

1. Qual é o protocolo que se assemelha ao processo de envio direto e sem verificação da guitarra de Miguel?
   1. UDP
      1. ✅✅Correto.

### 1.2.9 - VPN e internet

Enquanto na internet os computadores estão interligados através dos servidores e data centers, como as ruas de uma cidade, as `VPNs` criam a possibilidade de **“condomínios fechados”**, em que as ruas *só podem ser acessadas por quem é autorizado naquele domínio*.

>VPNs podem ocultar seu endereço IP real, protegendo a sua privacidade on-line.

### 1.2.10 - Vamos Praticar

1. Qual das opções abaixo se assemelha mais ao uso de uma VPN no caso do envio da guitarra de Miguel?
   1. Enviar através de um avisão particular
      1. ✅✅Correto..

### 1.2.11 - Arquitetura OSI

**Estudo de caso**
A guitarra de Miguel parece que está segura e que vai chegar até o local de destino do músico. Porém, ela não será o único objeto a ser enviado e existem vários tipos de pacote que serão enviados com ela.

Nesse caso, os **protocolos asseguram o envio dos pacotes com segurança.** Porém, como são determinados os envios dos diferente tipos de dados nas diferentes redes existentes?

A arquitetura OSI (Open Systems Interconnection) é um modelo de referência que descreve como os diferentes protocolos de rede interagem e se comunicam para permitir a comunicação entre sistemas de computadores em uma rede. Ela foi desenvolvida pela **ISO** (International Organization for Standardization) na década de **1980** e é **dividida em sete camadas**, cada uma com funções específicas.

>O modelo OSI facilita a compreensão e a padronização das redes de computadores.

OSI MODEL | TCP/IP MODEL
----|----
APLICATION | APLICATION
PRESENTATION | TRANSPORT
SESSION | INTERNET
TRANSPORT | NETWORK ACESS
NETWORK |
DATA LINK |
PHYSICAL |

### 1.2.12 - As sete camadas da Arquitetura OSI

1. *Camada física* (physical layer)
   1. Imagine dois computadores **conectados por um cabo** ethernet. Os sinais elétricos viajam através desse cabo para **transmitir dados** entre os computadores.
2. *Camada de enlace de dados* (data link layer)
   1. O computador A está enviando um arquivo para o computador B na mesma rede local. Essa camada **adiciona cabeçalhos e endereços MAC** aos pacotes de dados para **identificar** os dispositivos envolvidos.
3. *Camada de rede* (network layer)
   1. Imagine que você está enviando um e-mail para um amigo. A camada de rede **determina o melhor caminho** para os pacotes viajarem pela internet até o servidor de e-mail do seu amigo.
4. *Camada de transporte* (transport layer)
   1. A camada de transporte **divide o arquivo** em segmentos menores, numerando e transmitindo individualmente. No destino, a camada de transporte **remonta** os segmentos para reconstruir o arquivo completo. O protocolo TCP pode ser usado nessa parte.
5. *Camada de sessão* (session layer)
   1. Suponha que você esteja em uma videoconferência on-line com colegas de trabalho. A camada de sessão estabelece a conexão entre os computadores dos participantes para que compartilhem áudio e vídeo.
6. *Camada de apresentação* (presentation layer)
   1. Se você estiver compartilhando um arquivo de apresentação em um serviço de videoconferência, a camada de apresentação pode garantir que o arquivo seja **convertido** para um **formato compatível** e exibido adequadamente para todos os participantes.
7. *Camada de Aplicação* (Application Layer)
   1. Imagine que você esteja navegando em um site usando um navegador da web. A camada de aplicação **fornece a interface** que permite a você **interagir** com o site, exibir imagens e assim por diante.

### 1.2.13 - OSI e o Estudo de Caso, os instrumentos da banca

1. Camada Física,
   1. Os instrumentos são colocados na esteira para despacho.
2. Enlace,
   1. É adicionado o endereço de remetente e destinatário.
3. Rede,
   1. Os operadores escolhem o melhor caminho para o envio até o destinatário.
4. Transporte,
   1. Os instrumentos são separados no avião e reunidos na chegada ao destino.
5. Sessão,
   1. Os aviões se comunicam durante o voo para garantir que cheguem aos seus destinos.
6. Apresentação,
   1. Os instrumentos estão empacotados igualmente para que possam ser recebidos no destino.
7. Aplicação,
   1. Miguel e a banda chegam ao seu destino e se dirigem para a área de despacho. Depois, assinam os documentos finais e recebem os seus instrumentos.

### 1.2.14 - Vamos praticar

1. Qual das camadas é a usada para que pessoas utilizem aplicações web e interajam umas com as outras na internet?
   1. Aplicação
      1. ✅✅Correto..

>Material Complementar

[Vídeo no YouTube Network Topologies (Star, Bus, Ring, Mesh, Ad hoc, Infrastructure, & Wireless Mesh Topology), do canal Powercert Animated Videos (14 nov. 2018)](https://www.youtube.com/watch?v=zbqrNg4C98U&ab_channel=PowerCertAnimatedVideos)

[Vídeo no YouTube Network Types: LAN, WAN, PAN, CAN, MAN, SAN, WLAN, do canal Powercert Animated Videos](https://www.youtube.com/watch?v=4_zSIXb7tLQ&ab_channel=PowerCertAnimatedVideos)

[Vídeo no YouTube O que é uma VPN e como ela funciona?, do canal NordVPN (25 set. 2021)](https://www.youtube.com/watch?v=KtUlOb5z5xs&ab_channel=NordVPN)

[Matéria Qual a diferença entre o modelo OSI e o TCP/IP?, de Nathália Oliveira (16 set. 2020).](https://dev.to/nfo94/qual-a-diferenca-entre-o-modelo-osi-e-o-tcp-ip-17oi)

>Referência Bibliográficas

STALLINGS, William. Redes e Sistemas de Comunicação de Dados: Arquitetura, Protocolos e Padrões. 8 ed. São Paulo: Pearson, 2007.

TANENBAUM, Andrew S. Redes de Computadores. 5 ed. São Paulo: Grupo Gen - LTC, 2011.

GARCIA, Flávio E. S.; GARCIA, Gabriela L. Protocolos de Redes: Guia de Sobrevivência. São Paulo: Novatec Editora, 2011.

KUROSE, James F.; ROSS, Keith W. Redes de Computadores e a Internet: Uma Abordagem Top-Down. 6 ed. São Paulo: Pearson, 2013.

### 1.2.15 - Techtrack

* Arquitetura de redes - Camada de sessão
  * Funcionalidades, 
    * Estabelece, gerencia e encerra sessões de comunicação entre dois dispositivos.
      * ✅Correto.
  * Características,
    * Controla o diálogo entre os aplicativos, garantindo a sincronização adequada e a recuperação em caso de falha.
      * ✅Correto.
  * Exemplo 1
    * Estabelecimento de uma sessão de videoconferência entre duas ou mais pessoas.
      * ✅Correto.
  * Exemplo 2
    * Entrar em um jogo on-line com outros jogadores e compartilhar a mesma sessão.
      * ✅Correto.

## 1.3 - Simladores de redes

Musicos precisam de cabos aparelhos e instrumentos. porém a falta deles podem baixar simuladores no notebook pra testar.
No mundo das redes também há os simulares, para aprendizdo teste de segurança e etc.
Cisco Packet Tracer;
Graphical Network Simulator 3;

Os estudos ocorrerão com o Cisco Packet Tracer,k onde pode-se simular redes locais e globais e testalos; 

## 1.4 - Cisco Packet Tracer

É uma ferramenta de simulação de rede desenvolvida pela empresa Cisco Systems e que permite aos usuários criar, visualizar e testar redes em um ambiente virtual.

O Cisco Packet Tracer é frequentemente usado para fins educacionais, de treinamento e aprendizado prático de redes de computadores.

![a](https://i.imgur.com/MO19qZf.png)

Acesse [site oficial da Cisco Networking](https://www.netacad.com/pt-br) faça o login e crie uma conta.

Baixe [CiscoPacketTracer](https://gni-prod-resources.s3.us-west-1.amazonaws.com/resources/Packet%20Tracer%20Resources/PT%20Desktop/v8.2.1/CiscoPacketTracer_821_Windows_64bit.exe?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARZL5T7RSO6LJ5HVZ%2F20231122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231122T140129Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=4fb7a3302f45582717546bd94c8fc81cb81b7da377e5318a9c18a36ae375a920)

### 1.4.1 - Exercício prático

Vamos criar uma conexão simples entre dois dispositivos usando o Cisco Packet Tracer. Para isso, faremos uma topologia com um roteador e um switch e vamos configurar um endereço IP em cada dispositivo para que eles possam se comunicar.

![a](https://i.imgur.com/IX5bA4S.png)

![a](https://i.imgur.com/WJqkdAa.png)

![a](https://i.imgur.com/POBPVtc.png)

![a](https://i.imgur.com/lvRz7vP.png)

![a](https://i.imgur.com/iT7wOIh.png)

![a](https://i.imgur.com/EKJAa9A.png)

[Vídeo Configuração de uma Rede Simples com Roteador no Packet Tracer da Cisco, de Giovane Barcelos (13 abr. 2018)](https://www.youtube.com/watch?v=_WhOG24EVVc)

[Aula Introdução ao Cisco Packet Tracer, da Cisco Networking Academy.](https://edisciplinas.usp.br/pluginfile.php/7636631/mod_resource/content/1/atualizado-%20Apresentac%CC%A7a%CC%83o%20Cisco%20Packet%20Tracer.pdf)

[Cursos de Rede, da Cisco Networking Academy](https://www.netacad.com/pt-br/courses/networking)

[MARCOS COZATTI. Configurando uma rede (Roteador, Switch Cisco). YouTube, 5 maio 2021](https://www.youtube.com/watch?v=U-fWzSZL8qs)

[VÁGNER LUÍS MENEGOTTO. Configuração básica de roteador no packet tracer. ](https://www.youtube.com/watch?v=M_ICLwuP8NQ)

## 1.5 - SOs de rede

O que são os sistemas operacionais?

Um sistema operacional (SO) é um software fundamental que atua como intermediário entre os usuários e o hardware de um computador.

Ele fornece uma interface para interagir com o sistema, gerencia recursos do computador (como processadores, memória, dispositivos de entrada e saída) e oferece serviços essenciais para a execução de programas de aplicativos.

>Controla e coordena as operações de hardware e software.

**Estudo de Caso**
A banda de Miguel precisa fazer o transporte dos seus instrumentos de uma cidade para outra. Como eles já perderam outros instrumentos, precisam se atentar em escolher uma empresa que tenha carros apropriados e saiba fazer esse transporte adequadamente.

Existem usos específicos de sistemas, assim como no caso de carros e as empresas de envio.

Os sistemas operacionais **exclusivos para servidores são projetados para atender às demandas de redes corporativas,** data centers e serviços on-line. Eles oferecem recursos aprimorados de desempenho, *escalabilidade*, confiabilidade e segurança para lidar **com cargas de trabalho mais intensivas** e complexas.

>A distinção entre sistemas operacionais está relacionada às necessidades e funções específicas dos ambientes.

![a](https://i.imgur.com/91JeVnF.png)

1. Gerenciamento de recursos avançados
Os servidores precisam **alocar recursos**, como CPU, memória e armazenamento, **de forma eficiente** para atender diversas solicitações simultâneas.

2. Confiabilidade
Os servidores **precisam estar sempre disponíveis**. Por isso, *são projetados com recursos de redundância*, recuperação de falhas e tolerância a falhas para minimizar o tempo de inatividade.

3. Segurança
Devido à natureza sensível das informações armazenadas e processadas, os servidores **podem ter recursos avançados de segurança para proteger os dados contra ameaças**.

4. Gerenciamento remoto
Muitas vezes, os administradores de TI precisam gerenciar servidores de forma remota. Portanto, sistemas operacionais de servidor, frequentemente, **oferecem ferramentas de gerenciamento e administração remota**.

5. Suporte a aplicações empresariais
Muitos sistemas operacionais de servidor **vêm com suporte integrado para aplicativos empresariais,** como bancos de dados, serviços de diretório e servidores web.

6. Gerenciamento remoto
Muitas vezes, os administradores de TI precisam gerenciar servidores de forma remota. Portanto, sistemas operacionais de servidor, frequentemente,**oferecem ferramentas de gerenciamento e administração remota**.

7. Suporte a aplicações empresariais
Muitos sistemas operacionais de servidor vêm com **suporte integrado para aplicativos empresariais**, como bancos de dados, serviços de diretório e servidores web.

[Diferença entre Sos comuns e servidores](https://www.meupositivo.com.br/panoramapositivo/sistema-operacional-de-servidor/)

### 1.5.1 - Vamos praticar

1. Quais são os recursos aprimorados que um sistema operacional projetado para servidor oferece?
   1. *Escalabilidade*, confiança e desempenho

Exemplos de SOs para servidores

![a](https://icongr.am/simple/cisco.svg?size=50&color=currentColor&colored=false)  
Cisco IOS (Internetwork Operating System)  

**Utilizado em dispositivos de rede da Cisco**, como roteadores e switches, o IOS oferece uma interface de linha de comando (CLI) para configuração e gerenciamento avançado de dispositivos de rede.

![a](https://icongr.am/devicon/windows8-original.svg?size=50&color=currentColor)  
Windows Server  

As versões do Windows Server **são frequentemente usadas** para configurar e gerenciar redes corporativas. Elas oferecem recursos específicos para funções de servidor, como Active Directory, DHCP, DNS e muito mais.

![a](https://icongr.am/devicon/linux-plain.svg?size=50&color=currentColor)  
Linux

Diversas distribuições Linux, como CentOS, Ubuntu Server e Red Hat Enterprise Linux, **são amplamente usadas para configurar servidores** e roteadores em ambientes de rede. Ferramentas como iptables, Netfilter e Quagga podem ser usadas para gerenciamento de firewall e roteamento.

![a](https://icongr.am/simple/freebsd.svg?size=50&color=currentColor&colored=false)  
FreeBSD

Este sistema operacional Unix-like é **valorizado devido a  sua estabilidade e segurança**, sendo usado para configurar servidores de rede e firewalls.

### 1.5.2 - Vamos praticar

1. Qual é a característica que tem relação com a confiabilidade?
   1. Redundância, recuperação de falhas e tolerância a falhas.
      1. Correto

>Leitura Complementar

[Vídeo no YouTube WINDOWS É O SISTEMA MAIS USADO EM SERVIDORES NO BRASIL?, do canal Diolinux (26 abr. 2016).](https://www.youtube.com/watch?v=zXSYB9QSDnA&ab_channel=Diolinux)

[Post Qual o melhor sistema operacional para servidores?, de Lucas Tavares no site Melhores Hospedagem](https://www.melhoreshospedagem.com/melhor-sistema-operacional-para-servidores/)


[Post Linux ou Windows 11: qual é o melhor sistema operacional?, de Matheus Rocha da Silva no site TecMundo (9 fev. 2023)](https://www.tecmundo.com.br/software/260359-linux-windows-11-melhor-sistema-operacional.htm)

>Referências Bibliográficas

TANENBAUM, Andrew S.; BOS, Herbert. Sistemas Operacionais Modernos. 4. ed. São Paulo: Pearson, 2016.

SILBERSCHATZ, Abraham; GALVIN, Peter B.; GAGNE, Greg. Sistemas Operacionais: conceitos e aplicações. 8. ed. Rio de Janeiro: Campus, 2001.

NEGUS, Christopher. Linux - A Bíblia: o mais abrangente e definitivo guia sobre Linux. 8. ed. Rio de Janeiro: Alta Books, 2014.

MACHADO, Francis B.; MAIA, Luiz Paulo. Introdução a Sistemas Operacionais. São Paulo: LTC, 1992.

## 2.1 - Conceitos de nuvem. / Servidores e dados na nuvem.

Computação em nuvem, são as musicas online, assim como suas fotos que tiram do celular e estão disponíveis no seu computador. Tudo acontece através de plataformas que utilizam a tecnologia de cloud computing.

Nuvem, é um conceito onde é fornecido ao interessado armazenamento, processamento de dados, servidores e aplicativos. On-demand

**Infrastructure As A Service-IAAS**, infraestrutura como serviço. Criar ambientes virtuais através de máquinas virtuais armazenamento e redes. Os usuários têm mais controle sobre a configuração e administração dos recursos em comparação com os modelos SaaS e PaaS. Alguns exemplos de IaaS são `Amazon EC2`, Microsoft Azure Virtual Machines e Google Compute Engine.

**Platform As A Service-PAAS**, plataforma como serviço. Oferece uma plataforma de desenvolvimento completa com linguagens de programação, bibliotecas, ferrametas e ambientes de execução. As ferramentas de desenvolvimento, os ambientes de execução e os recursos de *escalabilidade* são fornecidos pelo provedor de nuvem. Alguns exemplos são o Google App Engine, o Microsoft Azure App Service e o Heroku

**Software As A Service-SAAS**, Sofware como serviço. Forcecem aplicativos como serviços, podendo ser diretamente acessado sem precisar instalar ou fazer manutenção. Exemplos populares de SaaS são os serviços de e-mail, como o Gmail, plataformas de colaboração, como o Microsoft Office 365, e aplicativos de gerenciamento de relacionamento com o cliente (CRM), como o Salesforce.

### 1.2.1 - Utilizando a nuvem

Os servidores na nuvem e o armazenamento de dados na nuvem são conceitos centrais na computação em nuvem. Eles *envolvem a **disponibilização de recursos** de computação e armazenamento **através da internet**.*

>O armazenamento de dados na nuvem oferece *escalabilidade*, redundância e acessibilidade global.

### 1.2.2 - Servidores na nuvem

Em vez de ter servidores físicos localizados em um data center específico, os `servidores na nuvem` **são hospedados em infraestruturas de nuvem** fornecidas por provedores como a Amazon Web Services (AWS), o Microsoft Azure, a Google Cloud Platform (GCP) e outros.

Esses provedores oferecem uma variedade de serviços, incluindo máquinas virtuais, contêineres e funções serverless.

### 1.2.3 - Benefícios dos servidores na nuvem

Os **servidores na nuvem** *permitem que empresas e indivíduos tenham acesso flexível a recursos computacionais sob demanda*. Isso significa que você **pode dimensionar** os seus servidores para cima ou para baixo conforme as suas necessidades e **pagar apenas pelo que usa**, `evitando` a **complexidade e os custos associados à manutenção** de servidores físicos.

>Antes disso, as empresas precisavam criar os seus próprios servidores.

### 1.2.4 - Armazenamento de dados na nuvem

O armazenamento de dados na nuvem envolve a **hospedagem e o gerenciamento de dados** em servidores remotos fornecidos pelos provedores de nuvem. Isso permite que você armazene, **acesse e gerencie dados de forma eficiente e escalável**.

>Existem diferentes tipos de serviços de armazenamento na nuvem.

### 1.2.5 - Vamos praticar

1. Qual é um dos benefícios dos servidores em nuvem?
   1. Permitir o acesso flexível aos recursos computacionais
      1. Correto

### 1.2.6 - Diferentes tipos de serviços de armazenamento

**Armazenamento de objetos**  
Ideal para armazenar grandes volumes de dados não estruturados, como imagens, vídeos e backups. Exemplos: ``Amazon S3``, Google Cloud Storage e Azure Blob Storage.

**Bancos de dados na nuvem**  
Oferecem soluções de banco de dados gerenciadas que permitem *armazenar e consultar dados de forma eficiente*. Exemplos: `Amazon RDS`, Google Cloud SQL e Azure SQL Database.

**Armazenamento em bloco**  
Oferece *volumes de armazenamento persistentes* que podem ser conectados a máquinas virtuais. Exemplos: `Amazon EBS` e Google Cloud Persistent Disk.

**Armazenamento em arquivos**  
Fornece sistemas de arquivos distribuídos que *permitem compartilhar arquivos entre várias instâncias de máquinas virtuais*. Exemplos: `Amazon EFS` e Google Cloud Filestore

### 1.2.7 - Modelos de computação em nuvem

Os **modelos de computação em nuvem descrevem** *como os recursos de computação são entregues e consumidos em um ambiente de nuvem*. Existem três modelos principais de computação em nuvem e cada um oferece diferentes níveis de controle e responsabilidade para os usuários.

Esses modelos são conhecidos como os "serviços da nuvem".

### 1.2.8 - Estudo de caso MusicVille

>História  
>
>Há muito tempo, em uma pequena cidade chamada Musicville, havia uma loja de discos chamada Radar Love. Essa loja tinha uma coleção incrível, mas estava enfrentando desafios em atrair clientes e gerenciar as suas operações.  
>
>Certo dia, a proprietária da loja de discos, Clara, teve uma ideia brilhante. Ela ouviu falar sobre a computação em nuvem e como ela poderia modernizar os seus negócios. Então, Clara decidiu embarcar nessa jornada de transformação.

#### 1.2.8.1 - Modernizando a Radar Love com a nuvem

Primeiro, Clara optou por usar o modelo `SaaS` para **implementar um sistema de gerenciamento de vendas e um estoque na nuvem**. Ela escolheu um aplicativo de **PDV baseado em nuvem,** que permitia aos funcionários processar as transações com facilidade e **monitorar o estoque em tempo real**.

>Agora, a loja pode oferecer um atendimento mais rápido e eficiente aos clientes.

#### 1.2.8.2 - Vendendo on-line

Em seguida, Clara adotou o modelo `PaaS` para expandir as suas operações on-line. Ela **construiu um site** de comércio eletrônico, que permite aos clientes comprar discos pela Internet. Assim, ela **usou uma plataforma de desenvolvimento na nuvem.**

>Clara criou um site atraente e personalizado sem a necessidade de se preocupar com a infraestrutura de hospedagem.

#### 1.2.8.3 - Crescendo em vendas

À medida que a loja ganhava mais popularidade on-line, Clara enfrentou o desafio de *escalabilidade*. Por isso, ela decidiu adotar o modelo `IaaS` **para lidar com o aumento do tráfego**.

Clara configurou instâncias de máquinas virtuais na nuvem para lidar com os picos de demanda, garantindo que o site permanecesse rápido e acessível mesmo durante as promoções e os eventos de venda.

>Esses modelos são conhecidos como os "serviços da nuvem".

### 1.2.9 - Vamos praticar

1. Qual é um dos benefícios associado ao uso de um modelo PaaS para a loja Radar Love?
   1. Criar um site atraente e personalizado.
      1. Correto

>Leitura Complementar

[Post O que é computação em nuvem?, da AWS. Disponível](https://aws.amazon.com/pt/what-is-cloud-computing/)

[Post Computação em Nuvem: conceito e benefícios, da PUCRS Online (26 jan. 2021).](https://online.pucrs.br/blog/public/computacao-em-nuvem-conceito-e-beneficios)

[Vídeo do YouTube Computação em Nuvem (Cloud Computing), do canal Léo Matos (7 jan. 2023).](https://www.youtube.com/watch?v=e3rQ373LnC0)

>Referências bibliográficas

ERI, Thomas; PUTTINI, Ricardo; MAHMOOD, Zaigham. Cloud Computing: Concepts, Technology & Architecture.  Londres: Prentice Hall, 2013.

DOBSON, Jamie; GLENOW, Michelle; REZNIK, Pini. Cloud Native Transformation: Practical Patterns for Innovation. Sebastopol: O'Reilly Media, 2019.

VELTE, Anthony T; VELTE, Toby J; ELSENPETER, Robert. Cloud Computing: A Practical Approach. Nova Iorque: McGraw-Hill/Osborne Media, 2009.

### 1.2.10 - Anotações Exercício

1. A empresa DataVault está com problemas de **capacidade de armazenamento** para os seus dados crescentes e está explorando opções de armazenamento na nuvem para lidar com isso. Qual é o benefício mais relevante que essa empresa pode obter ao adotar o armazenamento de dados na nuvem?
   1. *Escalabilidade* para atender ao crescimento dos dados.
      1. ✅Resposta correta! Isso mesmo! A *escalabilidade* para atender ao crescimento dos dados é um dos principais benefícios do armazenamento de dados na nuvem.

2. A empresa Tech Innovations está planejando lançar um novo aplicativo de gerenciamento de tarefas e considera usar serviços em nuvem **para hospedar o aplicativo**. Qual é o modelo de serviço em nuvem que *permitiria a essa empresa focar no desenvolvimento do aplicativo enquanto o provedor de nuvem gerencia a infraestrutura subjacente*?
   1. Infraestrutura como Serviço (IaaS).
      1. ❌Resposta incorreta! O modelo `IaaS` oferece controle sobre a infraestrutura, o que pode exigir mais gerenciamento por parte da empresa.
   2. Plataforma como serviço (PaaS).
      1. ✅Resposta correta!Isso mesmo! O modelo PaaS oferece uma plataforma completa de desenvolvimento, permitindo que a empresa se concentre no aplicativo enquanto o provedor gerencia a infraestrutura.

3. A empresa GlobeTech decidiu **migrar os seus aplicativos internos para a nuvem** para melhorar a flexibilidade e a acessibilidade dos seus funcionários que trabalham remotamente. Qual é o modelo de computação em nuvem que essa empresa deve usar para essa migração?
   1. Software como Serviço (SaaS).
      1. ❌Resposta incorreta!O modelo SaaS se refere aos aplicativos fornecidos como serviço, não necessariamente à migração de aplicativos internos.
   2. Infraestrutura como Serviço (IaaS).
      1. ✅Resposta correta!Isso mesmo! O modelo IaaS permite que a empresa migre os seus aplicativos internos para a nuvem. Assim, mantendo maior controle sobre a infraestrutura.

4. A empresa SecureData está preocupada com a segurança dos seus dados se adotar o armazenamento em nuvem e quer saber como podem protegê-los. Qual é a medida que deve ser considerada para melhorar essa segurança?
   1. Implementar a criptografia dos dados antes de enviá-los para a nuvem.
      1. ✅Resposta correta! Muito bem! Implementar a criptografia dos dados antes de enviá-los para a nuvem é uma medida de segurança recomendada para protegê-los.

5. Em um ambiente de negócios em constante crescimento, a empresa TechSolutions deseja **otimizar a sua infraestrutura de TI.** Eles estão considerando adotar a computação em nuvem para atender às suas necessidades de ***escalabilidade* e eficiência**. Qual é a principal vantagem da computação em nuvem?
   1. Flexibilidade para dimensionar recursos sob demanda.
      1. ✅Resposta correta! Isso mesmo! A flexibilidade para dimensionar recursos sob demanda é uma das principais vantagens da computação em nuvem, permitindo que as empresas ajustem a sua capacidade conforme for necessário.

## 2.2 - Armazenamento em nuvem vs. local. / Computação na nuvem.

A computação em nuvem e a **computação local** (ou `on-premise`) divergem em vários aspectos. Elas diferem desde a forma como os recursos de TI são provisionados até as vantagens e desvantagens de cada abordagem.

>Muitas vezes, as organizações optam por uma abordagem híbrida.

**Nuvem**, os *recursos de TI*, como servidores, armazenamento e software, são hospedados em data centers remotos mantidos por provedores de nuvem.  
Os recursos podem ser acessados remotamente de qualquer lugar, desde que tenha uma conexão à internet. Isso proporciona flexibilidade e mobilidade.

**Local**, os *recursos de TI* são hospedados nas instalações físicas da organização, exigindo a compra, a manutenção e o gerenciamento de hardware e infraestrutura próprios.  
O acesso aos recursos pode ser restrito às instalações físicas da organização, tornando acesso remoto mais limitado.

**Nuvem**, a *escalabilidade* é facilitada, permitindo que os recursos sejam dimensionados para cima ou para baixo conforme a demanda, sendo útil para lidar, especialmente, com picos de tráfego.  
Os custos estão associados ao uso dos recursos, permitindo que as organizações paguem apenas pelo que consomem, o que pode ser mais econômico a curto prazo.

**Local**, a *escalabilidade* pode ser mais complexa e demorada, exigindo investimentos em hardware adicional para aumentar a capacidade.  
Os custos incluem aquisição, manutenção, atualizações e espaço físico, podendo ser mais altos a longo prazo.

**Nuvem**, Geralmente, os provedores de nuvem gerenciam as *manutenções* e atualizações de hardware e software, liberando os usuários dessas tarefas.  
A *segurança* depende do provedor de nuvem, que, geralmente, oferece medidas de segurança avançadas. Porém, a confiança em terceiros deve ser um fator a ser considerado.

**Local**, A *manutenção* e as atualizações são de responsabilidade da organização, o que pode exigir mais recursos e tempo.

A *segurança* é controlada pela organização, que pode implementar as suas próprias políticas e práticas de segurança.

**Nuvem**, os usuários têm menos *controle* sobre a infraestrutura física, pois os recursos são gerenciados pelo provedor da nuvem.

**Local**, a organização tem *controle* direto sobre a sua infraestrutura, permitindo personalização e configurações específicas.

### 2.2.1 - Vamos praticar

1. O que podemos afirmar ao comparar a computação em nuvem com a local?
   1. Os recursos devem ser acessados remotamente
      1. Correto

>DICA  
>Ambos os modelos têm os seus prós e contras. Assim, **a escolha** entre a computação em nuvem ou a local **dependerá das necessidades e dos objetivos específicos da organização**.

### 2.2.2 - Computação em nuvem

A computação em nuvem, também conhecida como cloud computing, refere-se a um modelo de fornecimento de serviços de computação pela internet.

Em vez de depender de recursos físicos locais, como servidores e infraestrutura de rede, esse tipo de computação permite que indivíduos e empresas acessem e utilizem recursos de TI sob demanda a partir de provedores de nuvem.

>O armazenamento em nuvem **é apenas uma das ferramentas** da computação em nuvem.

### 2.2.3 - Exemplos práticos de computação em nuvem

1. **Armazenamento de arquivos e backup**
   1. Empresas e indivíduos podem armazenar seus arquivos, documentos e backups na nuvem, permitindo o acesso de qualquer lugar com uma conexão à internet. Alguns exemplos são o uso do Google Drive, Dropbox e Microsoft OneDrive para armazenar e compartilhar arquivos.

2. **Aplicativos de colaboração**
   1. Ferramentas de produtividade, como o Microsoft 365 e o Google Workspace, permitem a colaboração em tempo real em documentos, planilhas e apresentações diretamente na nuvem. Várias pessoas podem editar o mesmo documento simultaneamente e de locais diferentes.

3. **Hospedagem de sites e aplicativos**
   1. Empresas podem hospedar seus sites, blogs e aplicativos na nuvem para garantir disponibilidade e escalabilidade. Plataformas como o `Amazon Web Services (AWS)` e o Microsoft Azure oferecem esses serviços de hospedagem.

4. **Processamento e análise de dados**
   1. Grandes quantidades de dados podem ser processadas e analisadas na nuvem, permitindo a execução de tarefas intensivas em recursos sem a necessidade de hardware local poderoso. Serviços como o `Amazon S3` e o Google BigQuery são exemplos disso.

5. **Internet das Coisas (IoT)**
   1. Dispositivos IoT podem enviar dados para a nuvem para análise e armazenamento. Por exemplo, sensores em uma fazenda podem coletar dados da umidade do solo e transmiti-los para a nuvem, possibilitando que os agricultores monitorem as condições e tomem decisões com base neles.

### 2.2.4 - Vamos praticar

   1. O que podemos afirmar sobre a computação em nuvem ?
      1. Podemos armazenar arquivos, documentoe e backups
   2. O que podemos afirmar em relação à computação em nuvem?
      1. Os dados podem ser enviados de qualquer lugar para a nuvem

>Leitura Complementar

[Post Local vs. nuvem, no site da Dell Technologies.](https://www.dell.com/pt-br/dt/learn/cloud/on-premise-vs-cloud.htm)  

[Post On-premise vs Cloud computing: quais as diferenças?, do site Claranet](https://br.claranet.com/blog/on-premise-vs-cloud-computing-quais-as-diferencas)  

[Post On-premise vs cloud: comparativo de todos os recursos para encontrar o melhor para o seu negócio, do site TOTVS (15 fev. 2023).](https://www.totvs.com/blog/erp/on-premise-vs-cloud/)

>Referências Bibliográficas

ERI, Thomas; PUTTINI, Ricardo; MAHMOOD, Zaigham. Cloud Computing: Concepts, Technology & Architecture.  Londres: Prentice Hall, 2013.

DOBSON, Jamie; GLENOW, Michelle; REZNIK, Pini. Cloud Native Transformation: Practical Patterns for Innovation. Sebastopol: O'Reilly Media, 2019.

VELTE, Anthony T; VELTE, Toby J; ELSENPETER, Robert. Cloud Computing: A Practical Approach. Nova Iorque: McGraw-Hill/Osborne Media, 2009.

### 2.2.5 - Anotação Exercicio

1. A empresa SecureTech está preocupada com o controle dos seus dados e com a privacidade dos clientes ao avaliar opções de armazenamento. Em relação ao *controle de dados no armazenamento local*, assinale a alternativa correta.

   1. No armazenamento local, a organização mantém total controle sobre a segurança e a privacidade dos dados.
      1. ✅ Resposta correta! Isso mesmo! No armazenamento local, a organização tem controle total sobre a segurança e a privacidade dos dados, o que pode ser crucial para manter a conformidade regulatória.

2. A empresa CostSaver está analisando os custos envolvidos no armazenamento em nuvem e no armazenamento local para tomar uma decisão econômica. Qual é a diferença nos custos associados ao armazenamento em nuvem e ao armazenamento local?
   1. No armazenamento em nuvem, os custos estão geralmente associados ao uso real dos recursos, evitando investimentos iniciais.
      1. ✅ Resposta correta!Isso mesmo! No armazenamento em nuvem, os custos estão relacionados ao uso real dos recursos, permitindo uma abordagem mais flexível e econômica.

3. A empresa TechSolutions está buscando maneiras de melhorar o seu **ambiente de armazenamento** de dados e está explorando os *benefícios do armazenamento em nuvem*. Qual é uma vantagem **significativa** do armazenamento em nuvem em comparação com o armazenamento local?
   1. Acesso remoto aos dados de qualquer lugar com conexão à internet.
      1. ✅ Resposta correta! Muito bem! Uma das principais vantagens do armazenamento em nuvem é a capacidade de acessar os dados de qualquer lugar com conexão à internet.

4. A empresa DataStore está considerando opções de **armazenamento para os seus dados** empresariais e avaliando os *benefícios do armazenamento em nuvem* em comparação com o local. Sobre a comparação entre esses dois tipos de armazenamento, assinale a alternativa correta.
   1. A segurança no armazenamento em nuvem é sempre superior à do armazenamento local, devido aos altos padrões de segurança dos provedores.
      1. ❌ Resposta Errada! A segurança pode variar entre os tipos de armazenamento e ambos têm medidas de segurança que devem ser consideradas.
   2. O armazenamento local oferece escalabilidade flexível, permitindo aumentar a capacidade rapidamente conforme a demanda, ao contrário do armazenamento em nuvem.
      1. ❌ Resposta Errada! Na verdade, no armazenamento em nuvem, os dados são mantidos em data centers remotos. Já no armazenamento local, os dados ficam nas instalações físicas da organização.
   3. No armazenamento em nuvem, os dados são mantidos nas instalações físicas da organização, enquanto, no armazenamento local, os dados são hospedados em data centers remotos.
      1. ❌ Resposta Errada! Na verdade, no armazenamento em nuvem, os dados são mantidos em data centers remotos. Já no armazenamento local, os dados ficam nas instalações físicas da organização.
   4. Geralmente, o armazenamento em nuvem requer investimentos iniciais significativos em hardware e infraestrutura, enquanto o armazenamento local oferece custos baseados no uso real dos recursos.
      1. ✅ Resposta correta!Isso mesmo! O armazenamento em nuvem, muitas vezes, envolve custos baseados no uso real dos recursos, evitando investimentos iniciais significativos. Já o armazenamento local pode exigir esses investimentos.

5. `ATENÇÃO: QUESTÃO COM ERRO NA FORMULAÇÃO:`A empresa CyberShield está analisando **a segurança dos dados** ao decidir entre o armazenamento em nuvem ou o local. Em relação à segurança dos dados nos dois tipos de armazenamento, assinale a alternativa correta.
   1. A segurança nos dados não é afetada pelo local de armazenamento, pois depende das medidas de segurança implementadas.
      1. ✅ Resposta correta! Isso mesmo! A segurança varia em ambos os modelos e depende das medidas implementadas, não sendo exclusiva de um ou outro.

## 2.3 - AWS HISTÓRIA E FERRAMETAS

Permitir a fluides de informação e serviços, providos por meio dos recursos de redes e de Nuvem.

O AWS oferece através da internet ferramentas para os negócios. Um desses serviços é o Elastic Compute Cloud-EC2, esse serviço **permite criar máquinas virtuais escaláveis** para computação, esses computadores executarão possíveis cargas de trabalho temporárias variáveis,  assim como executar um determinado aplicativo.

Seria como se uma loja de instrumentos musicais pudesse ajustar a quantidade de instrumentos pelo tamanho do show, em tempo real.

## 2.4 - LINUX DO AMAZON EC2: INSTALAÇÃO E CONFIGURAÇÃO

O que é o Linux da Amazon?
A Amazon Web Services (**AWS) oferece uma distribuição Linux própria** chamada **Amazon Linux**. Então, `Amazon Linux AMI` *é uma imagem de máquina virtual otimizada para ser executada na infraestrutura da AWS.*

Ele foi *projetado para fornecer um ambiente de computação eficiente e confiável para aplicativos em nuvem*. Por isso, ele é usado, principalmente, **como base para** instâncias Elastic Compute Cloud (**EC2**) na AWS.

>O Amazon Linux AMI e o Amazon Linux 2 são duas das principais **variantes** dessa distribuição.

### 2.4.1 - Utilizando EC2 Linux

Acesse o Console de gerenciamento da AWS através do link: <https://aws.amazon.com/pt/console/>

Para isso será **necessário ter uma conta da AWS.** Caso ainda não possua, você deverá criar uma antes de começar.

![a](https://i.imgur.com/rKq5FLX.png)  No Console da AWS, pesquise por EC2 na barra de pesquisa ou navegue até Serviços e selecione a opção EC2 sob a seção Computação.

![a](https://i.imgur.com/XdbdbVE.png)

Na página do serviço EC2, clique em Instâncias no painel de navegação esquerdo.

Clique em Launch Instances (Iniciar instâncias) para criar uma nova instância.

![a](https://i.imgur.com/fyPjPyX.png)

Você *pode adicionar tags* para identificar e categorizar as suas instâncias. Isso é opcional, mas é útil para a organização.

Dê o nome de `Meu servidor Web` e siga para o próximo passo.

![a](https://i.imgur.com/UyAHyyl.png)

Escolha uma **Imagem de Máquina Virtual-AMI** com base no sistema operacional que deseja usar (por exemplo, Amazon Linux, Ubuntu, CentOS etc.).

Selecione a *AMI Amazon Linux* e siga para o próximo passo.

![a](https://i.imgur.com/aakInqF.png)

Selecione o tipo de instância que melhor atende às suas necessidades em termos de CPU, memória e recursos.

>Uma sugestão é escolher a **versão gratuita t2.micro**.

![A](https://i.imgur.com/q5QllsA.png)

As **chaves são usadas para acessar a instância via SSH.**

Crie uma nova chave com o nome ChaveAWSEC2. Depois, clique no botão Criar par de chaves.

![a](https://i.imgur.com/rbweezD.png)

Configure as opções da instância, como o número de instâncias que deseja iniciar, as configurações de rede etc.

Selecione para criar um novo grupo de segurança e permitir os tráfegos SSH e HTTPS.

![a](https://i.imgur.com/PhB2zJH.png)

Configure o armazenamento da instância, como o tamanho e o tipo de volume: 8 (GB) e gp3 (SSD).

![a](https://i.imgur.com/6IKftFt.png)

Revise todas as configurações da instância para garantir que estejam corretas.

Clique em **Launch** para executar a instância.

![a](https://i.imgur.com/TpJHbB0.png)

Aguarde até que a instância esteja em estado **Running** (Executando) na página de instâncias do painel EC2. Após selecioná-la, clique em **Conectar** para iniciá-la diretamente no navegador.

![a](https://i.imgur.com/7Gvahbu.png)

Preste atenção às configurações:
* ID de Instância,
* Endereço IP e,
* Nome de usuário.

>Esses dados serão usados para a conexão.

Clique em **Conectar** para abrir o console da instância criada.

![a](https://i.imgur.com/UG3EkBj.png)

O sistema será **inicializado no formato de um console** semelhante ao da imagem. Para se conectar diretamente no computador, abra o seu terminal (no caso de um sistema Linux ou macOS) ou use um programa como o PuTTY (no caso do Windows) para se conectar à instância via SSH.

>Abra o propompt de comando e se conecte ao servidor.

![a](https://i.imgur.com/0gdYWOs.png)

Use o comando SSH com o par de chaves escolhido para se conectar à instância. Por exemplo:
 ssh -i /caminho/para/sua/ChaveAWSEC2.pem ec2-user@seu-endereço-de-ip
Confirme a identidade da chave digitando `yes` e clicando `enter`. Com isso, o sistema estará conectado e pronto para ser utilizado na sua máquina.

>Interrompendo a instância

![a](https://i.imgur.com/BEAPW1u.png)

Agora que aprendemos a criar uma instância, **precisamos interrompê-la** **para não gerar custos adicionais.** Para isso, volte a página de Instância, selecione a instância criada e, em Estado da instância, selecione Interromper instância.

>POSSÍVEIS ERROS DE CONEXÃO VIA SSH

![A](https://i.imgur.com/d3ydpMF.png)

Verifique se você está usando a *chave privada correta* e, também, as *permissões da chave*, pois ela deve ser acessível apenas pelo proprietário. Use `chmod 400` para configurar as permissões corretas. Além disso, confira se o *grupo de segurança da instância* **permite o tráfego SSH na porta 22**.

>Falha na inicialização da máquina virtual

![a](https://i.imgur.com/lDoMC6a.png)

Revise a configuração da instância, incluindo a imagem, o tipo de instância, o grupo de segurança e as permissões da chave. Também, consulte os logs de inicialização no Console da AWS para obter informações detalhadas sobre a falha. Pode ser necessário substituir a instância se houver problemas graves.

>Problemas de armazenamento

![a](https://i.imgur.com/g4ESioD.png)

Verifique se o grupo de segurança da instância permite o tráfego necessário. Certifique-se de que a instância tem uma IP pública se você precisar de conectividade com a internet. Se a instância estiver em uma Virtual Private Cloud (VPC), verifique as configurações de roteamento e subnet.

>Leitura Complementar

[Post Iniciando sua trajetória na nuvem de forma descomplicada, de Marilia Britto no site da Amazon Web Services (3 set. 2020).](https://aws.amazon.com/pt/blogs/aws-brasil/iniciando-sua-trajetoria-na-nuvem-de-forma-descomplicada/)

[Curso Linux Essentials for Amazon Web Services, de Avinash Thipparthi para a Udemy.](https://www.udemy.com/course/linuxwithavinash/)

>Referências Bibliográficas

ERI, Thomas; PUTTINI, Ricardo; MAHMOOD, Zaigham. Cloud Computing: Concepts, Technology & Architecture.  Londres: Prentice Hall, 2013.

DOBSON, Jamie; GLENOW, Michelle; REZNIK, Pini. Cloud Native Transformation: Practical Patterns for Innovation. Sebastopol: O'Reilly Media, 2019.

VELTE, Anthony T; VELTE, Toby J; ELSENPETER, Robert. Cloud Computing: A Practical Approach. Nova Iorque: McGraw-Hill/Osborne Media, 2009.

THIPPARTHI, Avinash. Linux Essentials for Amazon Web Services. UDEMY. Disponível em: <https://www.udemy.com/course/linuxwithavinash/>. Acesso em: 28 ago. 2023.

## 2.5 - COMANDOS BÁSICOS

Os **comandos no Linux** *formam a base* para:

* a administração,
* a operação e,
* a personalização de sistemas.

Com eles, os usuários podem realizar uma ampla variedade de tarefas e garantir o funcionamento eficiente dos sistemas baseados em Linux.

>Os comandos desempenham um papel fundamental na interação e na administração desse ambiente. Abaixo a importâncias dos comendos:

1. Controle e gerenciamento do sistema

2. Automação de tarefas

3. Acesso remoto

4. Personalização e configuração

5. Solução de problemas

### 2.5.1 - Exercício Prático

Nós já vimos como as redes e a computação em nuvem funcionam, além de como criar instâncias em AWS EC2.

Agora, como podemos usar tudo isso para manipular e utilizar seus recursos de nuvem?

Entrar na AWS e iniciar a instancia anteriormente criada.

Conectar a instância via SSH

>Lembre:se de que após criar a máquina virtual, deve-se conectar a ela.

### 2.5.2 - Atualizar os pacotes da versão linux do Amazon

Use os seguintes comandos para atualizar os pacotes do sistema:

```aw
sudo yum update    # Para Amazon Linux e distribuições baseadas em Red Hat

sudo apt update    # Para distribuições baseadas em Debian/Ubuntu
```

### 2.5.3 - Instalar pacotes

```aw
sudo yum install nome-do-pacote    # Para Amazon Linux e distribuições baseadas em Red Hat
sudo apt install nome-do-pacote    # Para distribuições baseadas em Debian/Ubuntu
```

![a](https://i.imgur.com/skQJwCr.png)

### 2.5.4 - Criar diretórios

Use `mkdir` para criar diretórios e `touch` para criar arquivos vazios. Por exemplo:

![a](https://i.imgur.com/dXLbvDA.png)

```aw
mkdir pasta1

touch arquivo1
```

### 2.5.5 - Navegar pelo sistema de arquivos

Use o comando `ls` para listar o conteúdo.

![a](https://i.imgur.com/12fbt8T.png)

Use o comando `cd` para mudar de diretório, por exemplo `cd nomedapasta` para avançar para um diretório que está dentro da pasta atual e `cd enderecocompleto` para ir a qualquer diretório da instância.

Já o comando `pwd` é usado para mostrar o diretório atual.

### 2.5.6 - Copiar, Mover e excluir arquivos

![a](https://i.imgur.com/nUhSzXU.png)

Use o comando `cp` para **copiar**, por exemplo `cp nomedooriginal nomedacopia`.

O comando `mv` é usado para **mover** o conteúdo, por exemplo `mv nome destino`.

Você pode usar o comando `rm` para **excluir** arquivos por meio de `rm nome`.

![a](https://i.imgur.com/BQnc7iS.png)

Você pode usar editores de texto, como nano, vim ou emacs, para **editar arquivos**.  
Por exemplo, entre na pasta1 e use o comando `nano arquivo2`.
Dentro do arquivo, digite *Hello, world!*  
Para sair do editor, use as teclas `Ctrl e X`

### 2.5.7 - Visualizar o conteúdo de um arquivo

![a](https://i.imgur.com/Uqf6Alc.png)

Use o comando `cat` ou `less` para **visualizar o conteúdo** de um arquivo. Exemplo: `cat nomedoarquivo`.

>Atenção, no caso do `less`, será aberto um visualizador de arquivos. Para sair dele, digite `Q`.

### 2.5.8 - Verificar utilização de disco

![a](https://i.imgur.com/50VPPpR.png)

Use o comando `df -h` para verificar o **espaço em disco** disponível.

### 2.5.9 - Verificar uso da memória

![a](https://i.imgur.com/82xJYut.png)

Use o comando `free -h` para verificar o **uso de memória**.

### 2.5.10 - Visualizar a utilização de recurso em tempo real

E o comando `top` para monitorar os processos e recursos de CPU em tempo real. Lembre-se de usar a tecla `Q` para **sair da visualização**.

![a](https://i.imgur.com/bAo9SS8.png)

### 2.5.11 - Possíveis **Erros**: permissão

![a](https://i.imgur.com/b6MiGIR.png)

Caso você tente executar um comando e receba uma mensagem de erro *Permissão negada*, utilize o comando `sudo` antes de executá-lo como superusuário. Certifique-se de que sua conta de usuário tenha as permissões apropriadas para a ação.

Se usar o comando `sudo yum remove git`, ele removerá o git como superusuário, passando sobre a necessidade de permissão.

### 2.5.12 - Possíveis **Erros**: comando não encontrado ou sintaxe errada

Sempre verifique se o comando está no PATH (caminho) correto e instalado na instância. Além disso, confira se ele foi digitado com a sintaxe correta.

Neste exemplo abaixo, o comando `sudo install git` falhou porque ficou faltando o comando `yum` antes do `install`. Em caso de dúvidas, utilize o comando help para mais informações sobre o erro.

![a](https://i.imgur.com/pJ1mt3i.png)

### 2.5.13 - Possíveis **Erros**: Recursos Insuficientes

Evite comandos que consomem muitos recursos em instâncias com recursos limitados.

Considere redimensionar a instância para uma com mais recursos.

![a](https://i.imgur.com/wjGkZk0.png)

### 2.5.14 - Ajuda e documentação

![a](https://i.imgur.com/7clnrO9.png)

O comando `man` exibe o manual (documentação) de um comando específico. Por exemplo: `man ls`.

![a](https://i.imgur.com/I8EMRZi.png)

Na dúvida, utilize o comando `info` para exibir uma lista com todos os principais comandos disponíveis. Para sair da listagem, clique nas teclas `CTRL e C`.

### 2.5.15 Vamos praticar ?

1. Qual comando lista arquivos no linux ?
   1. ls
      1. Correto!

>Leitura Complementar

[Post Iniciando sua trajetória na nuvem de forma descomplicada, de Marilia Brito no site da AWS (3 set. 2020)] Disponível em: <https://aws.amazon.com/pt/blogs/aws-brasil/iniciando-sua-trajetoria-na-nuvem-de-forma-descomplicada/>.  

[Curso Linux Essentials for Amazon Web Services, de Avinash Thipparti para a Udemy]. Disponível em:  
 <https://www.udemy.com/course/linuxwithavinash/>. 

[Post Encontrar e instalar pacotes de software em uma instância do Amazon Linux, no site da AWS]. Disponível em: <https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/find-install-software.html>  

>Referências Bibliográficas

ERI, Thomas; PUTTINI, Ricardo; MAHMOOD, Zaigham. Cloud Computing: Concepts, Technology & Architecture.  Londres: Prentice Hall, 2013.

DOBSON, Jamie; GLENOW, Michelle; REZNIK, Pini. Cloud Native Transformation: Practical Patterns for Innovation. Sebastopol: O'Reilly Media, 2019.

VELTE, Anthony T; VELTE, Toby J; ELSENPETER, Robert. Cloud Computing: A Practical Approach. Nova Iorque: McGraw-Hill/Osborne Media, 2009.

THIPPARTHI, Avinash. Linux Essentials for Amazon Web Services. UDEMY. Disponível em:  
<https://www.udemy.com/course/linuxwithavinash/>

VELTE, Anthony T; VELTE, Toby J; ELSENPETER, Robert. Cloud Computing: A Practical Approach. Nova Iorque: McGraw-Hill/Osborne Media, 2009.

THIPPARTHI, Avinash. Linux Essentials for Amazon Web Services. UDEMY. Disponível em:  
 <https://www.udemy.com/course/linuxwithavinash/>

## 2.5 - PRATICAS RECOMENDADAS PARA USO DA NUVEM

Práttica para aprimorar o conhecimento. Testando as novas ferramentas.

O máximo do benefício será absorvida atraves das boas prática.

A primeira boa prática é :

1. **Realizar um planejamento adqueado**. O que inclui:
   1. Estratégia de carga,
   2. Metas,
   3. Requisitos,
   4. Segurança
   5. Complice,

2. Escolher um **Modelo de serviço** adequado:
   1. Infraestrutura,
   2. Plataforma,
   3. Software,

3. No quesito **Segurança**, importante aprender práticas como de :
   1. Controle de acesso,
   2. Autenticação,
   3. Autorização,
   4. Criptografia

4. Na **Arquitetura de Nuvem-Nativa**, é fundamental o entendimento de :
   1. Escalabilidade automática,
   2. Tolerância a falhas,

5. **Automatização e orquestração dos recursos da nuvem** é fundamental usar ferramentas para:
   1. Provisionar,
   2. Gerenciar,
   3. Provisionar tais recursos.  

Exemplo:
Uma banda vai fazer um show e com isso ela precisa se preocupar com muitos detalhes, por exemplo o espaço para o público. Essa questão se encaixaria como a **Estratégia de Cargas**

O grupo também precisa cuidar da segurança, limitando o acesso a apenas quem tiver o ingresso. Para isso deve-se contratar pessoas para administrar esse controle. Esse se encaixa no **Complice**

Tudo muda com o tempo, sempre se atualizando com novas estratégias, pois o mundo é dinâmico.

## 2.5.1 - Anotações Exercícios

1. Moisés é um administrador de sistemas responsável por *manter a integridade dos dados* em uma instância Amazon EC2 com Amazon Linux. A **segurança e a recuperação de dados** são as suas prioridades. Qual prática é recomendada para realizar backups de dados em uma instância Amazon EC2?
   1. Utilizar snapshots de volumes Amazon EBS para criar backups incrementais.
      1. ✅Correto! Isso mesmo! Snapshots de volumes Amazon EBS permitem criar cópias de segurança incrementais, sendo uma prática recomendada.

2. Luciano é um administrador de sistemas e está configurando uma nova instância Amazon EC2 com Amazon Linux. A prioridade dele é **garantir que a instância seja segura desde o início**. Qual prática de segurança é recomendada ao configurar uma instância Amazon EC2 com Amazon Linux?
   1. Configurar os grupos de segurança para controlar o tráfego de rede.
      1. ✅Correto!Isso mesmo! Configurar os grupos de segurança é uma prática essencial para controlar o tráfego de entrada e saída da instância.

3. Isso mesmo! Helena está trabalhando em um projeto e *precisa adicionar espaço de armazenamento a uma instância Amazon EC2* com Amazon Linux para armazenar dados importantes. Qual é o serviço da Amazon Web Services que **permite adicionar volumes de armazenamento** a uma instância Amazon EC2?
   1. Amazon EBS.
      1. ✅Correto! Muito bem! O Amazon Elastic Block Store (**EBS**) permite adicionar volumes de armazenamento a instâncias EC2.

4. Isabel está configurando uma instância Amazon EC2 com Amazon Linux para um projeto de desenvolvimento. Para isso, *ela precisa instalar um ambiente Python*, mas **qual é o comando** que ela deve usar **para instalar** o interpretador **Python** no **Amazon Linux**?
   1. yum install python3
      1. ✅Correto! Isso mesmo! No Amazon Linux, use o comando `yum install python3` para instalar o Python.

5. João está conectado a uma instância Amazon EC2 com Amazon Linux via SSH e precisa navegar pelos diretórios para acessar um arquivo específico. Qual é o comando que ele deve usar para acessar um diretório?
   1. cd
      1. ✅Correto! Isso mesmo! O comando cd é usado para mudar de diretório, possibilitando acessar outro através de seu endereço.




 

 



