function cadastrar(): void {
    const newUsername: string = (document.getElementById("newUsername") as HTMLInputElement).value;
    const newPassword: string = (document.getElementById("newPassword") as HTMLInputElement).value;

    if (newUsername && newPassword) {
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);
        alert("Novo usuário cadastrado com sucesso!");
        window.location.href = "login.html"; // Redireciona para a página de login
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

document.getElementById("signupForm")?.addEventListener("submit", function (e: Event) {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    cadastrar();
});
