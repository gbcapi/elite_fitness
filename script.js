
const form = document.getElementById('for');
form.addEventListener('submit', function(event) {    
event.preventDefault();
alert('Inscrição realizada com sucesso!');
});



const menu = document.querySelector('#menu')
const navegacao = document.getElementById("navegacao")
menu.addEventListener('click', ()=>{
    navegacao.classList.toggle('revelarNavegacao')
})





