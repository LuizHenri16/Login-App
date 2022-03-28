let buttonEye = document.querySelector("#verSenha")
let buttonEyeConfirm = document.querySelector("#verConfirmPassword")

let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let validUsuario = false

let password = document.querySelector("#password")
let labelPassword = document.querySelector("#labelPassword")
let validPassword = false

let confirmPassword = document.querySelector("#confirmPassword")
let labelconfirmPassword = document.querySelector("#labelconfirmPassword")
let validconfirmPassword = false


let msgError = document.querySelector("#msgError")
let msgSuccess = document.querySelector("#msgSuccess")

//Toggle do mostrar ou não mostrar a senha
buttonEye.addEventListener('click', () => {
   let inputPassword = document.querySelector("#password")

   if (inputPassword.getAttribute("type") == "password") 
   {inputPassword.setAttribute("type", 'text')
   }
   else {
    inputPassword.setAttribute("type", "password")
   }
})

buttonEyeConfirm.addEventListener('click', () => {
    let confirmPassword = document.querySelector("#confirmPassword")
 
    if (confirmPassword.getAttribute("type") == "password") 
    {confirmPassword.setAttribute("type", 'text')
    }
    else {
     confirmPassword.setAttribute("type", "password")
    }
 })

 //Final do Toggle do mostrar ou não mostrar a senha


//Cadastro verificar caracteres, confirmar senhas e usuario
nome.addEventListener("keyup", () => {
   if (nome.value.length <= 3 ) {
      labelNome.setAttribute("style", "color: red")
      labelNome.innerHTML = "Nome *Insira pelo menos 3 caracteres"
      nome.setAttribute("style", 'border-color:red')
      validNome = false
   }
   else {
      labelNome.setAttribute("style", "color: green")
      labelNome.innerHTML = "Nome"
      nome.setAttribute("style", 'border-color:green')
      validNome = true
   }

   if (nome.value.length == 0) {
      labelNome.setAttribute("style", " color: ##555086;; transition: .1s")
      labelNome.innerHTML = "Nome"
      nome.setAttribute("style", "border-color: #272262; transition: .1s") 
   }
})


usuario.addEventListener("keyup", () => {
   if (usuario.value.length <= 4) {
      labelUsuario.setAttribute("style", "color: red; transition: .1s")
      labelUsuario.innerHTML = "Usuário *O nome de usuário deve ter pelo menos 5 caracteres"
      usuario.setAttribute("style", "border-color: red")
      validUsuario = false
   }

   else {
      labelUsuario.setAttribute("style", "color: green; transition: .1s")
      labelUsuario.innerHTML =  "Usuário"
      usuario.setAttribute("style", "border-color: green") 
      validUsuario = true  
   }

   if (usuario.value.length == 0) {
      labelUsuario.setAttribute("style", " color: #555086;; transition: .1s")
      labelUsuario.innerHTML = "Usuário"
      usuario.setAttribute("style", "border-color: #272262; transition: .1s") 
   }
})

password.addEventListener("keyup", () => {
   if (password.value.length <= 7 ) {
      labelPassword.setAttribute("style", "color: red; transition: .1s")
      labelPassword.innerHTML = "Senha *A senha deve conter pelo menos 8 caracteres"
      password.setAttribute("style", "border-color: red")
      validPassword = false

   } else {
      labelPassword.setAttribute("style", "color: green; transition: .1s")
      labelPassword.innerHTML =  "Senha"
      password.setAttribute("style", "border-color: green") 
      validPassword = true 

   } if (password.value.length == 0) {
      labelPassword.setAttribute("style", " color: #555086;; transition: .1s")
      labelPassword.innerHTML = "Senha"
      password.setAttribute("style", "border-color: #272262; transition: .1s")
   }
})

confirmPassword.addEventListener("keyup", () => {
   if (confirmPassword.value != password.value ) {
      labelconfirmPassword.setAttribute("style", "color: red; transition: .1s")
      labelconfirmPassword.innerHTML = "Senha *As senhas não conferem"
      confirmPassword.setAttribute("style", "border-color: red")
      validconfirmPassword = false

   } else {
      labelconfirmPassword.setAttribute("style", "color: green; transition: .1s")
      labelconfirmPassword.innerHTML =  "Senha"
      confirmPassword.setAttribute("style", "border-color: green")
      validconfirmPassword = true

   } if (confirmPassword.value.length == 0) {
      labelconfirmPassword.setAttribute("style", " color: #555086;; transition: .1s")
      labelconfirmPassword.innerHTML = "Confirmar senha"
      confirmPassword.setAttribute("style", "border-color: #272262; transition: .1s")

   }
})


//Button
const cadastrar = function() {

   if (validNome && validUsuario && validPassword && validconfirmPassword) {

      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

      listaUser.push(
         {
            nameCad: nome.value,
            userCad: usuario.value,
            passwordCad: password.value
         }
      )

         localStorage.setItem("listaUser", JSON.stringify(listaUser))

         setTimeout(()=> {
            window.location.href = "./index.html"
         }, 3000)



      msgSuccess.setAttribute("style" , "display: block")
      msgSuccess.innerHTML = "Usuario cadastrado com sucesso, indo para a página de login"
      msgError.setAttribute("style" , "display: none")
      msgError.innerHTML = ""


   } else {
      msgError.setAttribute("style" , "display: block")
      msgError.innerHTML = "Preencha os campos corretamente antes de realizar o cadastro"
      msgSuccess.innerHTML = ""
      msgSuccess.setAttribute("style" , "display: none")

   }
}

