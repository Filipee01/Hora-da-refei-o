function carregar() {
  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas, ${getmessage(hora)} `

  if (hora >= 5 && hora < 12) {
    img.src = 'assets/cafe-manha.png'
  }
  if (hora >= 12 && hora <= 15) {
    img.src = 'assets/almoco.png'
  }
  if (hora >= 19 && hora <= 20) {
    img.src = 'assets/jantar-1.png'
  }
  if (hora < 5) {
    img.src = 'assets/proibido.png'
  }
  if (hora > 15 && hora <= 18) {
    img.src = 'assets/proibido.png'
  } else if (hora > 20) {
    img.src = 'assets/proibido.png'
  }
}

function getmessage(hora) {
  if (hora >= 5 && hora < 12) {
    return 'café da manhã'
  }
  if (hora >= 12 && hora <= 15) {
    return 'almoço'
  }
  if (hora >= 19 && hora <= 20) {
    return 'jantar'
  }
  if (hora < 5) {
    return 'não é hora de comer!'
  }
  if (hora > 15 && hora <= 18) {
    return 'não é hora de comer!'
  } else if (hora > 20) {
    return 'não é hora de comer!'
  }
}
