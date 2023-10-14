//CRIANDO OBJETO 
		let subtotalInfo = {
		  quantidade: 1,
		  valor: 11.66,
		};
//CRIANDO VARIÁVEL VALOR DO PRODUTO
		//simulando um recebimento do backend.
		let valorProduto01 = 11.66
		
//CAPTURANDO NO DOM
	//textos subtotal itens e valor
		let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
		let valorSubtotal = document.getElementById("valor-subtotal");
	
	//input quantidade
		let quantidadeProduto01 = document.getElementById("quantidade-produto-01")
	
	//botão +
		let btnAdd = document.getElementById("btn-adicionar-produto-01")

	//botão -
		let btnRemov = document.getElementById("btn-subtrair-produto-01")
	
	//
		


//CRIANDO FUNÇÃO ATUALIZAR DOM
	//Textos subtotal itens e valor
		function atualizarSubtotalDom(){
			quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
			valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);

		}
atualizarSubtotalDom() //já executar ao carregar a página, para não ficar valor zero nos item.
	
//MANIPULANDO
		//criando função somaUm
			function somaUm(){
				// add 1 ao input  pelo value
					quantidadeProduto01.value = Number(	quantidadeProduto01.value) + 1

				//add 1 ao subtotal - manipualando o objeto subtotal
					subtotalInfo.quantidade = subtotalInfo.quantidade + 1 //nesse momento, é alterado, mas não é atualizado no DOM. Precisa ser enviado ao DOM o valor.
				
				// add valor do produto ao subtotal (antes foi definido uma variável `valorProduto01`) pois se ficar `subtotalInfo.valor + subtaltalInfo.valor a variável receberá o total, e na proxima adição não sera 2 de quantidade e sim + 11 sobre os 22`
					subtotalInfo.valor = subtotalInfo.valor + valorProduto01
					// `toFixed` limita a casa, mas o seu resultado é uma estring com casa decimal. só usado na hora de atualizar o DOM via função.




				//atualizar o DOM via função, essa função deve ser a última coisa da função.
					atualizarSubtotalDom()
								
				
			}
		
		//criando função subtraiUm
			function subtraiUm(){
				quantidadeProduto01.value = Number(	quantidadeProduto01.value) - 1;
				
				//subtrai 1 ao subtotal - manipualando o objeto subtotal
					subtotalInfo.quantidade = subtotalInfo.quantidade - 1 //nesse momento, é alterado, mas não é atualizado no DOM. Precisa ser enviado ao DOM o valor.
				
				// subtrai valor do produto ao subtotal (antes foi definido uma variável `valorProduto01`) pois se ficar `subtotalInfo.valor + subtaltalInfo.valor a variável receberá o total, e na proxima adição não sera 2 de quantidade e sim + 11 sobre os 22`
				subtotalInfo.valor = subtotalInfo.valor - valorProduto01
				// `toFixed` limita a casa, mas o seu resultado é uma estring com casa decimal. só usado na hora de atualizar o DOM via função.


				//atualizar o DOM via função
					atualizarSubtotalDom()
			}

//EVENTOS
			//adicionando evento botao +
			btnAdd.addEventListener("click", somaUm)
			
			//adicionando evento botão -
			btnRemov.addEventListener("click", subtraiUm)
			
			//enviar valor input para objeto
			
			
			

			
			


			



