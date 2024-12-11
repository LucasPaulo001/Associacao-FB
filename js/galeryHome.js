//Funcionamento das janelas da galeria

//Festas Juninas
const galery = document.getElementById('janelaGalery');
function openJunineGalery(){
    galery.classList.add('ativeGalery');
}

//Dia das crianças
const galeryChildren = document.getElementById('janelaCrianca');
function openGaleryChildren(){
    galeryChildren.classList.add('ativeGalery');
}

//Janela de trabalhos
const janelaTrab = document.getElementById('janelaTrab')
function openGaleryWork(){
    janelaTrab.classList.add('ativeGalery')
}

//Fechamento da janela externa 
janelaTrab.addEventListener('click', (element) => {
    if(element.target.id === 'closeGalery'){
        janelaTrab.classList.remove('ativeGalery')
    }
})

//Funcionamento da galeria de imagens - trabalhos
const galeryWork = document.getElementById('galeryWork')
const closeImg = document.getElementById('closeImg')
const imgPreview = document.querySelectorAll('.imgPreview')

//Percorrendo as imagens para a abertura
imgPreview.forEach((img) => {
    const open = document.getElementById('open')
    const localImg = document.getElementById('localImg')
    
    img.addEventListener('click', (element) => {
        console.log(element.target)
        open.classList.add('ativeImg')
        
        localImg.innerHTML = `
        <span class="material-symbols-outlined close" id="closeImg">
                close
        </span>
        <img src="${element.target.getAttribute('data-local')}"></img>`
        console.log(element.target.getAttribute('data-local'))
    })
    //Evento de fechamento
    galeryWork.addEventListener('click', (element) => {
        if(element.target.id === 'closeImg'){
            open.classList.remove('ativeImg')
        }
    })
})

//Evento para fechar as janelas
const btnCloseWindow = document.querySelectorAll('.btnCloseGalery');
btnCloseWindow.forEach((buttom) => {
    buttom.addEventListener('click', (element) => {
        if(element.target.id === 'closeGalery'){
            galery.classList.remove('ativeGalery');
            galeryChildren.classList.remove('ativeGalery');
        }
    });
});