function init() {
    const navUl = document.querySelector("nav ul")

    // recupera o user do sessionStorage e converte em objeto
    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        navUl.innerHTML += `
            <li>
                <h2>Usuário: ${user.name}</h2>
            </li>
            <li>
                <button>Sair</button>
            </li>
        `
        return
    }

    // se o usuário não estiver logado, mostramos o botão
    navUl.innerHTML += `
        <li>
            <a href="./pages/login/login.html">Login</a>
        </li>
    `
}