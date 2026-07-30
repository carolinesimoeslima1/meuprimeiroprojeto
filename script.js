const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");
const nomeInput = document.getElementById("nomeInput");

function validarNome(nome) {
  return nome.trim() !== "";
}

function exibirMensagem(nome) {
  if (validarNome(nome)) {
    mensagem.textContent = "Olá, " + nome + "! Obrigada por clicar.";
  } else {
    mensagem.textContent = "Por favor, digite seu nome!";
  }
}

botao.addEventListener("click", function() {
  const nome = nomeInput.value;
  exibirMensagem(nome);
});
const idade = 20;
console.log(idade);

if (idade < 20) {
  console.log("Você é menor de idade.");
} else {
  console.log("Você é maior de idade.");
}
const habilidades = ["HTML", "CSS", "Git", "JavaScript"];
console.log(habilidades);
console.log(habilidades[0]);
const listaHabilidades = document.getElementById("listaHabilidades");

for (let i = 0; i < habilidades.length; i++) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = habilidades[i];
  listaHabilidades.appendChild(card);
}