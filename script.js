// recuperando o elemento HTML atravez do DOM

const labelNome = document.querySelector('#labelNome')
const imgLogo = document.getElementById('imgLogo')

let nome = prompt('Digite o seu nome:')

labelNome.innerText = nome


const images = ['html.png', 
                'css.png',
                'js.png']


let proximaImagem = 0

imgLogo.addEventListener('click', () =>{
  proximaImagem++

  if(proximaImagem == images.length){
    proximaImagem = 0
  }
  
 // console.log(proximaImagem)
imgLogo.src = 'img/' + images[proximaImagem] 
})







