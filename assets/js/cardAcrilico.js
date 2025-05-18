// Datos del contenido de las uñas
const contenidoUñasData = [
  {
    imagenSrc: "./assets/images/Acrilico.jpeg",
    nombre: "Francesitas",
    descripcion: "Uñas nude #5 francesitas color rojo, relieve con efecto espejo.",
  },
  {
    imagenSrc: "./assets/images/Acrilico_2.jpeg",
    nombre: "Baby color",
    descripcion: "Uñas baby color #15 french efecto azúcar, flores de acrílico 3D y joyería.",
  },
  {
    imagenSrc: "./assets/images/Acrilico_1.jpeg",
    nombre: "Nude",
    descripcion: "Uñas tono nude acabado brilloso, relieve en forma de sol con efecto espejo y cristales",
  },
  {
    imagenSrc: "./assets/images/Acrilico_4.jpeg",
    nombre: "Estileto",
    descripcion: "Estileto #15 neón, encapsulado, french y cristales",
  },

  
  // Puedes agregar más objetos para más secciones
];

// Obtener el contenedor
const contenedorUñas = document.getElementById('contenedorUñas');

// Generar el contenido dinámicamente usando innerHTML
let contenidoHTML = '';

contenidoUñasData.forEach(item => {
  contenidoHTML += `
    <div class="row">
      <div class="col-sm-12 col-md-6 mb-4">
        <div class="card">
          <img
            src="${item.imagenSrc}"
            class="card-img-top rounded-circle mx-auto d-block"
            alt="${item.nombre}"
          />
        </div>
      </div>
      <div
        class="col-sm-12 col-md-6 mb-4 align-items-center justify-content parrafo"
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        "
      >
        <h2>${item.nombre}</h2>
        <p>${item.descripcion}</p>
      </div>
    </div>
  `;
});

contenedorUñas.innerHTML = contenidoHTML;