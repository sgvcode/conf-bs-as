document.getElementById('comprar__ticket').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  let categoria = document.getElementById('categoria').value;
  let cantidad = parseFloat(document.getElementById('cantidad').value);
  let descuento = 0;

  // Descuento
  if (categoria === 'estudiante') {
    descuento = 0.8;
  } else if (categoria === 'trainee') {
    descuento = 0.5;
  } else if (categoria === 'junior') {
    descuento = 0.15;
  }

  let total = cantidad * 200 * (1 - descuento); // Total

  let totalPagar = document.getElementById('totalPagar');
  totalPagar.innerHTML = `Total a pagar: $ ${total.toFixed(2)}`;
});

document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('comprar__ticket').reset(); // Restablece los campos del formulario
  document.getElementById('totalPagar').innerHTML = 'Total a pagar: $'; // Limpia el párrafo de salida de resultados
});

// ____________________________________________________________
// Obtener los botones de categoría
let estudianteBtn = document.getElementById('estudianteBtn');
let traineeBtn = document.getElementById('traineeBtn');
let juniorBtn = document.getElementById('juniorBtn');
let categoriaSelect = document.getElementById('categoria');

// Activa / Desactiva botón de descuento
function activarBoton(boton) {
  estudianteBtn.classList.remove('button-active');
  traineeBtn.classList.remove('button-active');
  juniorBtn.classList.remove('button-active');
  boton.classList.add('button-active');
}

// Activa el botón desde al elegir opción desde <select>
function activarBotonDesdeSelect() {
  var categoriaSeleccionada = categoriaSelect.value;
  if (categoriaSeleccionada === 'estudiante') {
    activarBoton(estudianteBtn);
  } else if (categoriaSeleccionada === 'trainee') {
    activarBoton(traineeBtn);
  } else if (categoriaSeleccionada === 'junior') {
    activarBoton(juniorBtn);
  }
}

// Escuchar el evento click en los botones de categoría
estudianteBtn.addEventListener('click', function () {
  categoriaSelect.value = 'estudiante';
  activarBoton(estudianteBtn);
});

traineeBtn.addEventListener('click', function () {
  categoriaSelect.value = 'trainee';
  activarBoton(traineeBtn);
});

juniorBtn.addEventListener('click', function () {
  categoriaSelect.value = 'junior';
  activarBoton(juniorBtn);
});

// Escuchar el evento change en el <select>
categoriaSelect.addEventListener('change', function () {
  activarBotonDesdeSelect();
});

// Activar el botón correspondiente inicialmente
activarBotonDesdeSelect();
//_____________________________________________________________


// ____________________________________________________________
// OPCION MOSTRAR TOTAL A PAGAR EN FORMA AUTOMÁTICA
// Obtener los botones de categoría Automático
// let estudianteBtn = document.getElementById('estudianteBtn');
// let traineeBtn = document.getElementById('traineeBtn');
// let juniorBtn = document.getElementById('juniorBtn');
// let categoriaSelect = document.getElementById('categoria');
// let cantidadInput = document.getElementById('cantidad');

// // Función para activar un botón y desactivar los demás
// function activarBoton(boton) {
//   estudianteBtn.classList.remove('button-active');
//   traineeBtn.classList.remove('button-active');
//   juniorBtn.classList.remove('button-active');
//   boton.classList.add('button-active');
// }

// // Función para calcular y actualizar el total a pagar
// function actualizarTotal() {
//   var categoria = categoriaSelect.value;
//   var cantidad = parseFloat(cantidadInput.value);
//   var descuento = 0;

//   // Descuento
//   if (categoria === 'estudiante') {
//     descuento = 0.8;
//     activarBoton(estudianteBtn);
//   } else if (categoria === 'trainee') {
//     descuento = 0.5;
//     activarBoton(traineeBtn);
//   } else if (categoria === 'junior') {
//     descuento = 0.15;
//     activarBoton(juniorBtn);
//   }

//   var total = cantidad * 200 * (1 - descuento); // Total

//   var totalPagar = document.getElementById('totalPagar');
//   totalPagar.innerHTML = `Total a pagar: $ ${total.toFixed(2)}`;
// }

// // Escuchar el evento click en los botones de categoría
// estudianteBtn.addEventListener('click', function () {
//   categoriaSelect.value = 'estudiante';
//   activarBoton(estudianteBtn);
//   actualizarTotal();
// });

// traineeBtn.addEventListener('click', function () {
//   categoriaSelect.value = 'trainee';
//   activarBoton(traineeBtn);
//   actualizarTotal();
// });

// juniorBtn.addEventListener('click', function () {
//   categoriaSelect.value = 'junior';
//   activarBoton(juniorBtn);
//   actualizarTotal();
// });

// // Escuchar el evento change en el <select>
// categoriaSelect.addEventListener('change', function () {
//   actualizarTotal();
// });

// // Activar el botón correspondiente inicialmente
// actualizarTotal();
// ------------------------------------------------------------------