//https://random-data-api.com/documentation
// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById("btn-usuario");
const usuariosContainer = document.getElementById("usuarios-container");
const helperTextUsuario = document.getElementById("helper-text-usuario");

// 2. Funções
// function gerarUsuario() {
//   // const resposta = fetch('https://random-data-api.com/api/v2/users')
//   // console.log(resposta)

//   // const tratamentoResposta = resposta.then((res) => {
//   //     console.log(res)
//   //     return res.json() //ao invés de usar o parse.

//   // })

//   // tratamentoResposta.then((data) => {
//   //     console.log(data)
//   // })

//   //todo esse código acima pode ser escrito da forma abaixo.

//   helperTextUsuario.innerText = "Carregando..."; //

//   fetch("https://random-data-api.com/api/v2/users")
//     .then((res) => res.json())
//     .then((data) => {
//       //criando o elemento para ser add na section.
//       const usuario = document.createElement("div");

//       //abaixo o uso de template string para manipular o elemento adicionando a div criada uma imagem e um nome
//       usuario.innerHTML =
//            `
//             <img src="${data.avatar}" />
//             <span><strong>Username:</strong> ${data.username}
            
//            `;
//       //antes de add ao dom, devemos dar um stilo ao 'usuario'abort
//       usuario.classList.add("usuario");
//       //stilizado na folha de stilos

//       //adicionando o elemento div ao DOM, após criar e manipular.
//       usuariosContainer.appendChild(usuario);
//       helperTextUsuario.innerText = ""; //tirar a menagem "Carregando..."
//       //a limpeza do helpertext ficou aqui porque é no segundo bloco que SE OCORRE COM SUCESSO O PEDIDO, após realizada a obtanção da informação o mensagem de "Carregando" pode sumir.
      
//     })
    
//     //tratando erro
//     //A promessa ser regeitada deve ser tratada pelo .cath
//     .catch((error) => {
//         alert("Não foi possível concluir a inclusão do novo usuário")
//         helperTextUsuario.innerText = "Não foi possível gerar um usuário.";
//         helperTextUsuario.innerText = "";
//         console.log(error);
//     });
// }

function gerarUsuario() {
  const resposta = fetch('https://random-data-api.com/api/v2/users')
  console.log(resposta);
}


// 3. Eventos
btnUsuario.addEventListener("click", gerarUsuario);






// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const btnPost = document.getElementById('btn-post')
const postContainer = document.getElementById('posts-container')
const helperTextPost = document.getElementById('helper-text-post')


// 2. Funções
function gerarPost(evento) { 

	helperTextPost.innerText = ''
	evento.preventDefault()
	
	const jsonBody = JSON.stringify({
		titulo: postTitle.value,
		mensagem: postBody.value
		
	})
	
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: jsonBody
	
	})
		
		.then(res => res.json())
		.then(data => {
			
			console.log(data);
			const post = document.createElement('div')
			post.classList.add('postagem')
			post.innerHTML = `
				<h3>${data.id} - ${data.titulo}</h3>
				<p>${data.mensagem}</p>
			`
			postContainer.appendChild(post)

			//limpar form
			postTitle.value = ''
			postBody.value = ''
			alert('Postagem foi um sucesso!')

			
		})
		.catch((err) => {
			console.log(err)
			helperTextPost.innerText = 'Não foi possível gerar a postagem :('
			
		})
	

	

}

// 3. Eventos

btnPost.addEventListener('click', (evento) => gerarPost(evento))