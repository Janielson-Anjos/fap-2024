function login(): void {
    const username: string = (document.getElementById("username") as HTMLInputElement).value;
    const passwordInput = document.getElementById("password") as HTMLInputElement; //precisa alterar diretamente o valor do elemento HTML 
    const password: string = passwordInput.value;

    const storedUsername: string | null = localStorage.getItem("username");
    const storedPassword: string | null = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
        if (username === storedUsername && password === storedPassword) {
            alert("Login bem-sucedido!");
            // Aqui você pode redirecionar para outra página ou fazer outras ações
            window.location.href = "../pages/calculadora.html"
        } else {
            alert("Usuário ou senha inválidos.");
            passwordInput.value =''; //precisa alterar diretamente o valor do elemento HTML 
           
        }
    } else {
        alert("Nenhum usuário cadastrado.");
    }
}

document.getElementById("loginForm")?.addEventListener("submit", function (e: Event) {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    login();
});
