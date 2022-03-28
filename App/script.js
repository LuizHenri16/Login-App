let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")

logado.innerHTML = `Olá ${userLogado.nome}`

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para estar nessa página")
    window.location.href = "../Login/index.html"

}

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = "./index.html"
}