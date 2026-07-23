const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");
const nomeInput = document.getElementById("nomeInput");

botao.addEventListener("click", function() {
  const nome = nomeInput.value;

  if (nome === "") {
    mensagem.textContent = "Por favor, digite seu nome!";
  } else {
    mensagem.textContent = "Olá, " + nome + "! Obrigada por clicar.";
  }
});
const idade = Number(prompt("Qual é a sua idade?"));
if (idade < 20) {
  alert("Você é menor de idade.");
} else {
  alert("Você é maior de idade.");
}