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

// closeGalery.addEventListener('click', (element) => {
//     if(element.target.id === 'closeGalery' || element.target.id === 'janelaGalery'){
//         galery.classList.remove('ativeGalery');
//         galeryChildren.classList.remove('ativeGalery');
//         console.log(element.target.id)
//     }
// });




