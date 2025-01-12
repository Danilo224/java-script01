function verificar() {
   var data = new Date() 
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[Erro] verifique os dados e tente novamente')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number (fano.value)
      res.innerHTML = `idade calculada: ${idade}`
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      if (fsex[0].checked) {
         gênero = 'Homen'
         if (idade >= 0 && idade < 21 ) {
            //criança
            img.setAttribute('src','menino.png')  
         } else if (idade < 50) {
            //jovem
            img.setAttribute('src', 'rapaz.png')
         } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
         }
      } else if (fsex[1].checked) {
         gênero = 'Mulher'
         if (idade >= 0 && idade < 21 ) {
            //criança
            img.setAttribute('src','menina.png')  
         } else if (idade < 50) {
            //Moça
            img.setAttribute('src', 'moça.png')
         } else {
            //idosa
            img.setAttribute('src', 'idosa.png')
         }
         

      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
      
   }
}