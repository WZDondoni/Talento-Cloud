""" numero_inteiro = 5
numero_float = 5.7
texto = "esse é um texto"
booleano = False

print("Este é um tipo")
print(type(numero_inteiro))

print("Este é um tipo")
print(type(numero_float))

print("Este é um tipo")
print(type(texto))

print("Este é um tipo")
print(type(booleano))


print("DEMONSTRANDO QUE NÃO HÁ NECESSIDADE DE DECLARAR O TIPO EM PYTHON")
variavel = 5
variavel = 5.7
variavel = "esse é um texto"
variavel = False

print("Este é o 1º tipo")
print(type(variavel))

print("Este é o 2º tipo")
print(type(variavel))

print("Este é o 3º tipo")
print(type(variavel))

print("Este é o 4º tipo")
print(type(variavel)) """

""" var = 9

print("Esta é a primeira aparição da variável")

print(var)

print("Esta é a segunda aparição da variável")

print(var)

print("Esta é a terceira aparição da variável")

print(var)

print("Esta é a quarta aparição da variável")

print(var)

print("E você só definiu o valor uma única vez") """



""" Problema: Crie um programa que #calcule# o #status de aprovação do aluno# a #partir da nota dele#. 
O código deve seguir as instruções:

nota menor que 4: ele está reprovado;

nota menor que 7: ele está em recuperação;

nota maior que 7: ele está aprovado.

Praticando
 """

""" nota = 4
if (nota <4):
    print("Reprovado")
elif(nota<=7):
    print("Em recuperação")
elif(nota>=7):
    print("Aprovado") """
    
    
       
""" Desenvolva um código que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:

A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas; E: Veículos com quatro rodas ou mais e com mais de 6000 kg. """


#melhor categoria pro usuário
quantidadeRodas = 1
pesoCarro = 5000
quantidadePessoas = 10

if (quantidadeRodas <= 3): 
    print("A")
elif (quantidadeRodas  >3) and (quantidadePessoas <=8)  and (pesoCarro <= 3500): 
    print("B")
elif (quantidadeRodas >4) and (pesoCarro >=3500) and (pesoCarro<= 6000):
    print("C")
else:
    print("D")




 