


// inicio stilização form
const h2 = document.querySelector("h2")

h2.style.color = 'blue'
h2.style.fontSize = '40px'

const buttonForm = document.querySelector("button")


buttonForm.style.color = 'red'
buttonForm.style.fontWeight = '900'
buttonForm.style.borderRadius = '30px'
buttonForm.style.backgroundColor = '#5fe36a'

//usuario vermleho e aviso vermelho
//const userName = document.querySelector('#login-usuario')
//userName.classList.add('error')

//const errorMessagem = document.querySelector('.error-text')
//errorMessagem.classList.add('visible')



//usuário verde
//senha errada
const userName = document.querySelector('#login-usuario')
userName.classList.add('correct')

let passWord = document.querySelector('#login-senha')
passWord.classList.add('error')

let errorMessage = document.querySelectorAll('.error-text')
errorMessage[1].classList.add('visible')