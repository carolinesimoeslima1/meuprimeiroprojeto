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
const idade = 20;
console.log(idade);

if (idade < 20) {
  console.log("Você é menor de idade.");
} else {
  console.log("Você é maior de idade.");
}
{
const habilidades = ["HTML", "CSS", "Git", "JavaScript"];
console.log(habilidades);
console.log(habilidades[0]);
}git 