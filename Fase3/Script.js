const imagens = ['foto1.webp', 'foto2.jpg', 'foto3.webp'];
let indiceAtual = 0;
let intervalo = setInterval(proximaImagem, 10000); // troca a cada 10s

function atualizarImagem() {
  const img = document.getElementById('carousel-image');
  img.src = imagens[indiceAtual];

  // Atualiza o estilo dos botões
  imagens.forEach((_, i) => {
    const botao = document.getElementById(`botao-${i}`);
    if (i === indiceAtual) {
      botao.classList.add('active');
    } else {
      botao.classList.remove('active');
    }
  });
}

function mudarImagem(indice) {
  indiceAtual = indice;
  atualizarImagem();
  reiniciarTemporizador();
}

function proximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
}

function voltarImagem() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
  reiniciarTemporizador();
}

function avancarImagem() {
  proximaImagem();
  reiniciarTemporizador();
}

function reiniciarTemporizador() {
  clearInterval(intervalo);
  intervalo = setInterval(proximaImagem, 10000);
}
