// Trocar telas
function mostrar(tela) {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("esqueci").classList.add("hidden");

  document.getElementById(tela).classList.remove("hidden");
}

// =========================
// CADASTRAR USUÁRIO
// =========================
function cadastrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("cadEmail").value;
  const senha = document.getElementById("cadSenha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se já existe
  const existe = usuarios.find(u => u.email === email);

  if (existe) {
    alert("Esse e-mail já está cadastrado!");
    return;
  }

  // Salva usuário
  usuarios.push({ nome, email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Conta criada com sucesso!");
  mostrar("login");
}

// =========================
// LOGIN REAL
// =========================
function login() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    alert("E-mail ou senha incorretos!");
    return;
  }

  // Salva sessão
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  alert(`Bem-vindo, ${usuario.nome}!`);

  // Aqui você pode redirecionar depois
  // window.location.href = "home.html";
}

// =========================
// RECUPERAR SENHA
// =========================
function recuperar() {
  const email = document.getElementById("recEmail").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    alert("E-mail não encontrado!");
    return;
  }

  alert(`Sua senha é: ${usuario.senha}`);
  mostrar("login");
}

// =========================
// AUTOFOCO
// =========================
window.onload = () => {
  document.getElementById("loginEmail").focus();
};
