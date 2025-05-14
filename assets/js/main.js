let btnAcrilico=document.getElementById("acrilico");
let btnGelish=document.getElementById("gelish");
let btnRubigel=document.getElementById("rubergel");
let btnInicio=document.getElementById("inicio");


btnAcrilico.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './acrilico.html';
});
btnGelish.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './gelish.html';
});
btnRubigel.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './ruberGel.html';
});
btnInicio.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './index.html';
});
