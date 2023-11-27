---
marp: true
transition: fade
author: Watiley Zanelato Dondoni
size: 16:9
description: Demonstração da Sprint V sobre banco de dados
footer: ![w:35](./img/github-logo-24.png) [  Link do Projeto Br Minerais](https://github.com/fabioabreu13/Nexa)  
header: Turma 02 - Grupo A <br> Anderson Rodrigues, Fábio Abreu, Itamar Maximo de Sena, Lucas Araújo,<br> Victor Hugo, Watiley Zanelato Dondoni.
---

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
   font-family: 'Poppins', sans-serif;
     }

    h1,h2 {
        color:black;
        font-weight: 800;
     }

     p {
        font-weight: 600;

     }

    footer {
        display:flex;
        align-items:center;
        color:black;
        font-size: 16px;
        font-weight: 800;
        text-decoration: none;
            }

    header {
        color:black;
        font-size: 16px;
        font-weight: 800;
    }
</style>

# Projeto Banco de Dados
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
![  bg right ](img/cloud-bkg.jpg)

---
## Construção do Banco de Dados
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

A construção do banco de dados foi realizada através do comando abaixo:

```SQL
CREATE DATABASE BR_Minerais;
```

---

## Construção das Entidades

As entidades foram construídas levando em conta o segmento da mineração, ficando assim em sinergia com o projeto do site. As entidades foram: Mina, Funcinário, Mineral e Produção.
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

![bg right w:90% drop-shadow:0,5px,10px,rgba(0,0,0,.4)](./img/DER.png)

---

## Relacionamentos

<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
1.	Uma Mina pode produzir vários Minerais (relacionamento 1 para muitos entre Mina e Mineral).
2.	Um Funcionário pode estar associado a várias Produções, mas cada Produção está associada a um único Funcionário (relacionamento muitos para um entre Funcionário e Produção).
3.	Uma Produção está associada a uma Mina e a um Mineral específicos (relacionamento muitos para um entre Produção e Mina/Mineral).

---

## Terceira Forma Normal 3FN
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
Dizer que as tabelas estão na Terceira Forma Normal (3FN) envolve demonstrar que:

1. Cada tabela tem uma chave primária única:
   1. Garanta que cada tabela tenha uma chave primária claramente identificada. Isso garante a identificação única de cada linha na tabela.

---

<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

2. Eliminação de dependências transitivas:
   1. Certifique-se de que não há dependências transitivas nos atributos. Por exemplo, se A -> B e B -> C, então A não deve depender de C.

3.	Atributos não chave dependem apenas da chave primária:
    1.	Todos os atributos não chave devem depender apenas da chave primária. Se houver atributos dependentes de outros atributos não chave, isso pode indicar uma violação da 3FN.

---

## Tabela Mina

<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
A chave primária é MinaID.
A tabela não possui dependências transitivas e os atributos não chave (Nome, Localização, Tipo de Minério) dependem diretamente da chave primária.

```SQL
CREATE TABLE mina(
mina_ID int AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
localizacao VARCHAR(50) NOT NULL,
tipo_minerio VARCHAR(50) NOT NULL
);
```

---

## Tabela Mineral
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
A chave primária é MineralID.
Não há dependências transitivas, e os atributos não chave (Nome, Tipo, Grau de Pureza) dependem diretamente da chave primária.

```SQL
CREATE TABLE mineral(
mineral_ID int AUTO_INCREMENT PRIMARY KEY,
nome_mineral VARCHAR(50) NOT NULL,
tipo VARCHAR(50) NOT NULL,
grau_pureza VARCHAR(50) NOT NULL,
FK_Mineral_MinaID INT NOT NULL,
CONSTRAINT FOREIGN KEY (FK_Mineral_MinaID)
REFERENCES mina (mina_ID)
);
```

---

## Tabela Funcionário
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
A chave primária é FuncionarioID.
Não há dependências transitivas, e os atributos não chave (Nome, Cargo, Salário, Departamento) dependem diretamente da chave primária.

```SQL
CREATE TABLE funcionario(
funcionario_ID int AUTO_INCREMENT PRIMARY KEY,
nome_funcionario VARCHAR(50) NOT NULL,
cargo VARCHAR(50) NOT NULL,
salario DOUBLE NOT NULL,
departamento VARCHAR(50) NOT NULL,
FK_Funcionario_MinaID INT NOT NULL,
CONSTRAINT FOREIGN KEY (FK_Funcionario_MinaID)
REFERENCES mina (mina_ID)
);
```

---

# Tabela Produção
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

A chave primária é ProducaoID.
Não há dependências transitivas, e os atributos não chave (Data, Hora e Quantidade Extraída) dependem diretamente da chave primária.

As chaves estrangeiras (FK_MinaID, FK_MineralID, FK_FuncionarioID) referenciam diretamente as chaves primárias nas tabelas Mina, Mineral e Funcionário, respectivamente.

---
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
```SQL
CREATE TABLE producao(
producao_ID int AUTO_INCREMENT PRIMARY KEY,
data VARCHAR(10) NOT NULL,
hora VARCHAR(8) NOT NULL,
quant_extraida DOUBLE NOT NULL,
departamento VARCHAR(50) NOT NULL,
FK_MinaID INT NOT NULL,
FK_MineralID INT NOT NULL,
FK_FuncionarioID INT NOT NULL,
CONSTRAINT FOREIGN KEY (FK_MinaID)
REFERENCES mina (mina_ID),
CONSTRAINT FOREIGN KEY (FK_MineralID)
REFERENCES mineral (mineral_ID),
CONSTRAINT FOREIGN KEY (FK_FuncionarioID)
REFERENCES funcionario (funcionario_ID)
);
```

---

## Inserindo os dados - Tabela Mina
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
```SQL
INSERT INTO mina (nome, localizacao, tipo_minerio) VALUES ('Teste A','teste local 01',
'minerio de ferro');
INSERT INTO mina (nome, localizacao, tipo_minerio) VALUES ('Teste B','teste local 02',
'calcopirita');
INSERT INTO mina (nome, localizacao, tipo_minerio) VALUES ('Teste C','teste local 03',
'bauxita');
```

---
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

## Inserindo os dados - Tabela Mineral

```SQL
INSERT INTO mineral (nome_mineral, tipo, grau_pureza, FK_Mineral_MinaID) VALUES
('ferro','2', 'media', 1);
INSERT INTO mineral (nome_mineral, tipo, grau_pureza, FK_Mineral_MinaID) VALUES
('cobre','1', 'Alta', 2);
INSERT INTO mineral (nome_mineral, tipo, grau_pureza, FK_Mineral_MinaID) VALUES
('Aluminio','1', 'Alta', 3);
```

---

## Inserindo os dados - Tabela Funcionários

<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
```SQL
INSERT INTO funcionario (nome_funcionario, cargo, salario, departamento, 
FK_Funcionario_MinaID) VALUES ('Alfa','minerador Chefe', 3000, 'mineracao', 1);
INSERT INTO funcionario (nome_funcionario, cargo, salario, departamento, 
FK_Funcionario_MinaID) VALUES ('Beta','minerador Chefe', 3002, 'mineracao', 2);
INSERT INTO funcionario (nome_funcionario, cargo, salario, departamento, 
FK_Funcionario_MinaID) VALUES ('Gama','minerador Chefe', 3001, 'mineracao', 3);
INSERT INTO funcionario (nome_funcionario, cargo, salario, departamento, 
FK_Funcionario_MinaID) VALUES ('Gama Teste','minerador', 2000, 'mineracao', 2);
INSERT INTO funcionario (nome_funcionario, cargo, salario, departamento, 
FK_Funcionario_MinaID) VALUES ('Beta Teste','minerador', 2002, 'mineracao', 1);
INSERT INTO funcionario (nome_funcionario, cargo, salario, departamento, 
FK_Funcionario_MinaID) VALUES ('Alfa Teste','minerador', 2001, 'mineracao', 3);

```

---

<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
## Inserindo os dados - Tabela Produção

```SQL
INSERT INTO producao (data, hora, quant_extraida, departamento, FK_MinaID,
FK_MineralID, FK_FuncionarioID) VALUES ('01-08-2023','08:00hs', 3100, 'M3',1, 1, 1);
INSERT INTO producao (data, hora, quant_extraida, departamento, FK_MinaID,
FK_MineralID, FK_FuncionarioID) VALUES ('02-08-2023','09:00hs', 30002, 'M2',2, 2, 2);
INSERT INTO producao (data, hora, quant_extraida, departamento, FK_MinaID,
FK_MineralID, FK_FuncionarioID) VALUES ('03-09-2023','10:00hs', 30003, 'M3',3, 3, 3);
```

---

## Realizando consultas
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->
### select * from mina

![w:100% drop-shadow:0,5px,10px,rgba(0,0,0,.4)](img/select_from_Mina.png)

---
### select * from mineral
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

![w:100% drop-shadow:0,5px,10px,rgba(0,0,0,.4) ](img/select_from_Mineral.png)

---
### select * from funcionario
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

![w:100% drop-shadow:0,5px,10px,rgba(0,0,0,.4)](img/select_from_Funcionarios.png)

---

### select * from producao
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

![w:100% drop-shadow:0,5px,10px,rgba(0,0,0,.4)](img/select_from_Producao.png)

---

### Inner Join
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

```SQL
SELECT * FROM producao
INNER JOIN mina
ON producao.FK_MinaID = mina.mina_ID
RIGHT JOIN funcionario
ON funcionario.FK_Funcionario_MinaID = mina.mina_ID
WHERE producao.producao_ID = 2;
```

![a drop-shadow:0,5px,10px,rgba(0,0,0,.4)](img/select_from_Producao--Inner_Mina--RigthJoin--Funcionario_Where-Producao.jpeg)

---
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

```SQL
SELECT * FROM producao
INNER JOIN mina
ON producao.FK_MinaID = mina.mina_ID
RIGHT JOIN funcionario
ON funcionario.FK_Funcionario_MinaID = mina.mina_ID
WHERE producao.producao_ID = 2 AND funcionario.cargo = 'minerador Chefe';

```

![a drop-shadow:0,5px,10px,rgba(0,0,0,.4)](img/select_from_Producao--Inner_Mina--RigthJoin--Funcionario--where_prod-funcionario.jpeg)

---

# 🎉Obrigado :smile: 
<!-- _backgroundImage: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); -->

slides criados com auxíio da extensão [Marp for VSCode](https://marp.app)