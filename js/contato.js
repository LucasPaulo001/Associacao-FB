//Funcionalidade (abrir janela do mapa)
const janelaMap = document.getElementById('janelaMapa');
function openMap(){
    janelaMap.classList.add('ativeMap');
}
janelaMap.addEventListener('click', (element) => {
    if(element.target.id === 'janelaMapa' || element.target.id === 'close'){
        janelaMap.classList.remove('ativeMap');
    }
});

//Funcionalidades de estilo card de redes sociais
const social = document.getElementById('socialMedias');
const iconMedia = document.querySelectorAll('.iconMedia');
iconMedia.forEach((element) => {
    element.addEventListener('mouseenter', (rede) =>{
        console.log(rede.target.id);
        if(rede.target.id === 'whatsapp'){
            social.classList.add('styleWhats');
            social.classList.remove('styleInsta');
            social.classList.remove('styleFace');
            social.classList.remove('styleYoutube');
        }
        if(rede.target.id === 'instagram'){
            social.classList.add('styleInsta');
            social.classList.remove('styleWhats');
            social.classList.remove('styleFace');
            social.classList.remove('styleYoutube');
        }
        if(rede.target.id === 'facebook'){
            social.classList.add('styleFace');
            social.classList.remove('styleInsta');
            social.classList.remove('styleWhats');
            social.classList.remove('styleYoutube');
        }
        if(rede.target.id === 'youtube'){
            social.classList.add('styleYoutube');
            social.classList.remove('styleInsta');
            social.classList.remove('styleWhats');
            social.classList.remove('styleFace');
        }
    });
});
