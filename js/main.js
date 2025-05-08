let btnGelish=document.getElementById("gelish");
let btnRubigel=document.getElementById("rubigel");

btnGelish.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './gelish.html';
});
btnRubigel.addEventListener('click', function(e) {
    // Puedes agregar condiciones o lógica aquí
    e.preventDefault();
    window.location.href = './rubigel.html';
});
