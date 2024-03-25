var btnLogar = document.querySelector("#logar");
var btnCadastrar = document.querySelector("#cadastrar");

var body = document.querySelector("body");

btnCadastrar.addEventListener("click", function() {
    body.className = "cadastrar-js";
})

btnLogar.addEventListener("click", function() {
    body.className = "logar-js";
})

