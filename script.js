// Mostrar/ocultar senha
function toggleSenha() {
  const senha = document.getElementById("senha");
  senha.type = senha.type === "password" ? "text" : "password";
}

// Foco automático
window.onload = () => {
  document.getElementById("email").focus();
};

// Validação simples
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  // Simulação de login
  alert("Login realizado com sucesso!");
});
