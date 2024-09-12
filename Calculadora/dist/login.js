"use strict";
var _a;
function login() {
    const username = document.getElementById("username").value;
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
        if (username === storedUsername && password === storedPassword) {
            alert("Login bem-sucedido!");
            // Aqui você pode redirecionar para outra página ou fazer outras ações
            window.location.href = "../pages/calculadora.html";
        }
        else {
            alert("Usuário ou senha inválidos.");
            passwordInput.value = '';
        }
    }
    else {
        alert("Nenhum usuário cadastrado.");
    }
}
(_a = document.getElementById("loginForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    login();
});
