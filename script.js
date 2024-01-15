function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  // Agendar para o próximo minuto
    setTimeout(() => {
        atualizarHoraCadaMinuto();
    }, (60 - segundos) * 1000);
}

// Executar a função a primeira vez
atualizarHoraCadaMinuto();


  msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.<br>`;

  if (hora >= 0 && hora < 12) {
    img.src = "manha3.png";
    document.body.style.background = "#cab58d";
    msg.innerHTML += `Tenha um bom dia!`;
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde3.png";
    document.body.style.background = "#bf8d8f";
    msg.innerHTML += `Tenha uma boa tarde!`;
  } else {
    img.src = "noite3.png";
    document.body.style.background = "#c6ccd3";
    msg.innerHTML += `Tenha uma boa noite!`;
  }
}
