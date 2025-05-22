let btnAcrilico=document.getElementById("acrilico");
let btnGelish=document.getElementById("gelish");
let btnRubigel=document.getElementById("rubergel");
let btnSoftgel=document.getElementById("softgel");
let btnpolygel=document.getElementById("polygel");


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
btnSoftgel.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './softgel.html';
});
btnpolygel.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './polygel.html';
});

