let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")

logado.innerHTML = `Olá ${userLogado.nome}`

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para estar nessa página")
    window.location.href = "https://luizhenri16.github.io/Login-App/"

}

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = "https://luizhenri16.github.io/Login-App/"
}