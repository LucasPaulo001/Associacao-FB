//Funcionalidade do menu mobile/Lateral, ativação e fechamento
const menuLateral = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
function openMenu(){
    menuLateral.classList.add('ativeMenu');
}
closeMenu.addEventListener('click', () => {
    menuLateral.classList.remove('ativeMenu');
});