const btnVerSenha = document.querySelector("#verSenha")

btnVerSenha.addEventListener("click", () => {
    let verSenha =  document.querySelector("#senha")
   
    if (verSenha.getAttribute("type") == "password") {
        verSenha.setAttribute("type", "text")
    } else {
        verSenha.setAttribute("type", 'password')
    }

})


let entrar = function() {
    let inputUser = document.querySelector("#usuario")
    let labelUser = document.querySelector("#labelUsuario")

    let inputPassword = document.querySelector("#senha")
    let labelPassword = document.querySelector("#labelPassword")

    let msgError = document.querySelector("#msgError")
    let msgSuccess = document.querySelector("#msgSuccess")
    let listUser = []

    let validUser = {
        nome: '',
        user: '',
        senha: ''
    }

    listUser = JSON.parse(localStorage.getItem("listaUser"))
    
    listUser.forEach((item) => {
        if(inputUser.value == item.userCad && inputPassword.value == item.passwordCad && inputUser.value != "" && inputPassword.value != ""){
           
          validUser = {
             nome: item.nameCad,
             user: item.userCad,
             senha: item.passwordCad
        }
     }
    })

    if (inputUser.value == validUser.user && inputPassword.value == validUser.senha && validUser.user != "" && validUser.senha != "") {
        msgSuccess.setAttribute("style",  "display: block")

        msgSuccess.innerHTML = "Fazendo Login <div class='loading'></div> "
        msgError.setAttribute("style",  "display: none")

        labelUser.setAttribute("style", "color: green")
        inputUser.setAttribute("style", "border-color: green")

        labelPassword.setAttribute("style", "color: green")
        inputPassword.setAttribute("style", "border-color: green")

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem("token", token)

        setTimeout(() =>
         {
             window.location.href = "App/index.html"
         } , 2000)

         localStorage.setItem("userLogado", JSON.stringify(validUser) )

    } else {
        labelUser.setAttribute("style", "color: red")
        labelUser.innerHTML = "Usuário *Digite o nome corretamente"
        inputUser.setAttribute("style", "border-color: red")

        labelPassword.setAttribute("style", "color: red")
        inputPassword.setAttribute("style", "border-color: red")

        msgError.setAttribute("style",  "display: block")
        msgError.innerHTML = "**Senha ou usuário errado!**"

        inputUser.focus()
    }

}

