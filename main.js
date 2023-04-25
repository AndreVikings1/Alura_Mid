function tocarSom(idtocar) {
   const elemento = document.querySelector(idtocar)

   if (elemento === null) {
        console.log('valor invalido')
   }
   if (elemento !== null && elemento.localName === 'audio') {
      elemento.play()
   }

}

const listaDeTeclas = document.querySelectorAll('.tecla') 


let contador = 0;
for (contador = 0; contador < listaDeTeclas.length; contador++){


    const tecla = listaDeTeclas[contador]  
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    
     tecla.onclick = function (event) {
        tocarSom(idAudio)
       
    }

    tecla.onkeydown = function (event) {
        
      if (event.code === 'Space' || event.code === 'Enter') {
        console.log('igual')
       }       
       
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }    
}
 