const botao.addEventListener("click", function() {
  const nome = nomeInput.value;

  if (nome === "") {
    mensagem.textContent = "Por favor, digite seu nome!";
  } else {
    mensagem.textContent = "Olá, " + nome + "! Obrigada por clicar.";
  }
});