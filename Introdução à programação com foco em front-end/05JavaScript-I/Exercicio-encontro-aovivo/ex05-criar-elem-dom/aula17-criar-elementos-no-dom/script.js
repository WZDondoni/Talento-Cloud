const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]

//CRIAR ELEMENTO
const article = document.createElement('article')

//POPULAR ELEMENTO
article.id = "article-01"
article.innerHTML = 
`
      <h3>Pop Vegan</h3>
      <p class="subtitulo">Comida vegana para todos!</p>
      <div class="data">06/07/2022</div>
      <p>Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)
      </p>

`
//ADICIONANDO NA DOM
const main = document.querySelector('main')
main.appendChild(article)






//CRIAR ELEMENTO
const article2 = document.createElement('article')
//POPULAR ELEMENTO
article2.id = "article-02"
article2.innerHTML = 
`
      <h3>Make Hommus. Not War</h3>
      <p class="subtitulo">Só delivery, para curtir em casa!</p>
      <div class="data">18/08/2022</div>
      <p>Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina.
      </p>

`
//ADICIONAR NA DOM
const main2 = document.querySelector('main')
main2.appendChild(article2)




//CRIAR ELEMENTO
const article3 = document.createElement('article')
//POPULAR ELEMENTO
article3.id = "article-03"
article3.innerHTML = 
`
      <h3>${arrayPostagens[1].titulo}</h3>
      <p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
      <div class="data">${arrayPostagens[1].data}</div>
      <p>${arrayPostagens[1].texto}</p>

`
//ADICIONAR NA DOM
const main3 = document.querySelector('main')
main2.appendChild(article3)


//CRIAR ELEMENTO
const article4 = document.createElement('article')
//POPULAR
