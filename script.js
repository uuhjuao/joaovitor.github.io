// FORMULÁRIO
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.includes("@")) {
    alert("Email inválido!");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  form.reset();
});


// DARK MODE
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleTheme");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggle.innerHTML = "☀️ Modo Claro";
    } else {
      toggle.innerHTML = "🌙 Modo Escuro";
    }
  });
});