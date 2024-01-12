// função hello world
function helloWorld() {
  alert("Hello World");
}
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let mensagem = document.getElementById("mensagem");
//let nome = <input id ="nome" type = "text" name="nome">

function enviar() {
  let nome = document.getElementById("nome");
  alert("Olá! " + nome.value);
}
