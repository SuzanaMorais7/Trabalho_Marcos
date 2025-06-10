// ===== CARROSSEL =====
const imagens = ['foto1.webp', 'foto2.jpg', 'foto3.webp'];
let indiceAtual = 0;
let intervalo = setInterval(proximaImagem, 10000);

function atualizarImagem() {
  const img = document.getElementById('carousel-image');
  img.src = imagens[indiceAtual];
  imagens.forEach((_, i) => {
    const botao = document.getElementById(`botao-${i}`);
    botao.classList.toggle('active', i === indiceAtual);
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

// ===== UC MANUAL =====
let ucs = JSON.parse(localStorage.getItem("ucs")) || [
  "Programação de soluções computacionais",
  "Modelagem de software",
  "Sistemas computacionais e segurança",
  "Ambientes e conectividade"
];

function salvarUCs() {
  localStorage.setItem("ucs", JSON.stringify(ucs));
}

function renderizarUCs() {
  const corpo = document.getElementById("lista-ucs");
  corpo.innerHTML = "";
  ucs.forEach((uc, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td><strong>UC:</strong></td>
      <td>
        ${uc}
        <button onclick="moverUC(${index}, -1)">⬆</button>
        <button onclick="moverUC(${index}, 1)">⬇</button>
        <button onclick="removerUC(${index})" title="Excluir">🗑️</button>
      </td>
    `;
    corpo.appendChild(linha);
  });
}

function inserirUC() {
  const novaUC = prompt("Digite o nome da nova UC:");
  if (novaUC) {
    ucs.push(novaUC);
    salvarUCs();
    renderizarUCs();
  }
}

function moverUC(index, direcao) {
  const novo = index + direcao;
  if (novo >= 0 && novo < ucs.length) {
    [ucs[index], ucs[novo]] = [ucs[novo], ucs[index]];
    salvarUCs();
    renderizarUCs();
  }
}

function removerUC(index) {
  if (confirm(`Deseja realmente remover a UC "${ucs[index]}"?`)) {
    ucs.splice(index, 1);
    salvarUCs();
    renderizarUCs();
  }
}

// ===== CPF VALIDATION =====
function validarCPF() {
  const campo = document.getElementById("cpf");
  const valor = campo.value;
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!regex.test(valor)) {
    alert("CPF inválido! Use o formato 000.000.000-00");
    return;
  }

  if (confirm(`Deseja realmente adicionar o CPF ${valor}?`)) {
    localStorage.setItem("cpf", valor);
    document.getElementById("cpf-container").innerHTML = `
      ${valor}
      <button onclick="removerCPF()" title="Remover CPF">🗑️</button>
    `;
  }
}

function removerCPF() {
  if (confirm("Deseja remover o CPF salvo?")) {
    localStorage.removeItem("cpf");
    document.getElementById("cpf-container").innerHTML = `
      <input type="text" id="cpf" placeholder="000.000.000-00" onblur="validarCPF()" />
    `;
  }
}

function carregarCPF() {
  const cpf = localStorage.getItem("cpf");
  if (cpf) {
    document.getElementById("cpf-container").innerHTML = `
      ${cpf}
      <button onclick="removerCPF()" title="Remover CPF">🗑️</button>
    `;
  }
}

// ===== PERFIL EXTRA =====
function adicionarInfo() {
  const input = document.getElementById("nova-info");
  const valor = input.value.trim();
  if (!valor) return;

  let infos = JSON.parse(localStorage.getItem("perfilExtra")) || [];
  infos.push(valor);
  localStorage.setItem("perfilExtra", JSON.stringify(infos));

  renderizarInfosExtras();
  input.value = "";
}

function removerInfo(index) {
  let infos = JSON.parse(localStorage.getItem("perfilExtra")) || [];
  if (confirm(`Deseja excluir a informação: "${infos[index]}"?`)) {
    infos.splice(index, 1);
    localStorage.setItem("perfilExtra", JSON.stringify(infos));
    renderizarInfosExtras();
  }
}

function renderizarInfosExtras() {
  const lista = document.getElementById("lista-perfil-container");
  lista.innerHTML = "";
  const infos = JSON.parse(localStorage.getItem("perfilExtra")) || [];
  infos.forEach((info, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${info}
      <button onclick="removerInfo(${index})" title="Excluir">🗑️</button>
    `;
    lista.appendChild(li);
  });
}

function carregarInfoExtra() {
  renderizarInfosExtras();
}

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
  renderizarUCs();
  carregarCPF();
  carregarInfoExtra();
});
