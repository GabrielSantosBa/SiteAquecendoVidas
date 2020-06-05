
//Function Efeito Maquina de escrever no title Principal

function typeWriter(texto){

    let textArray = texto.innerHTML.split('')   
    
        texto.innerHTML = '';   
    
    textArray.forEach((letra, i) => {
        setTimeout(() => {
            texto.innerHTML += letra;
        }, 155 * i)
    })
}

let title_h1 = document.querySelector('.title_header')

typeWriter(title_h1)


   
