const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");
const nomeInput = document.getElementById("nomeInput");

botao.addEventListener("click", function() {
  const nome = nomeInput.value;
  mensagem.textContent = "Olá, " + nome + "! Obrigada por clicar.";
});