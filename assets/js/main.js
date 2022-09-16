const input = document.querySelector("[data-input]");
const button = document.querySelector("[data-button]");
let ArrayDeEmails = [];

//ESTA FUNÇÃO É PARA PEGAR OS EMAILS DIGITADOS NO INPUT//
button.addEventListener("click", (evento)=>{
    evento.preventDefault();
    ArrayDeEmails.push(input.value);
    console.log(ArrayDeEmails);
})

//ESTA FUNÇÃO É PARA O BOTÃO NO FINAL DA PÁGINA//
function aviso(){
    alert("Suba e preencha o seu e-mail!!");
}