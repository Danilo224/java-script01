function carregar () {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem') 
var data = new Date()
//var hora = data.getHours()
var hora = 16
msg.innerHTML = `Agora sao ${hora} horas`
if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'manha.png'
    document.body.style.background = '#cdc3a5'
} else if (hora >= 12 && hora <=18) {
    //Boa tarde!
    img.src = 'tarde.png'
    document.body.style.background = '#ac833d'
} else {
    //Boa noite!
    img.src = 'noite.png'
    document.body.style.background = '#a081bb'
}


}
