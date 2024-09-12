"use strict";
var _a;
function cadastrar() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    if (newUsername && newPassword) {
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);
        alert("Novo usuário cadastrado com sucesso!");
        window.location.href = "login.html"; // Redireciona para a página de login
    }
    else {
        alert("Por favor, preencha todos os campos.");
    }
}
(_a = document.getElementById("signupForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    cadastrar();
});
