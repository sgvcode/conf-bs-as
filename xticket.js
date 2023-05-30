// ____________________________________________________________
// CODIGO ORIGINAL PEDIDO
// ____________________________________________________________
// Obtener los botones de categoría
// let estudianteBtn = document.getElementById('estudianteBtn');
// let traineeBtn = document.getElementById('traineeBtn');
// let juniorBtn = document.getElementById('juniorBtn');
// let categoriaSelect = document.getElementById('categoria');

// // Activa / Desactiva botón de descuento
// function activarBoton(boton) {
//   estudianteBtn.classList.remove('button-active');
//   traineeBtn.classList.remove('button-active');
//   juniorBtn.classList.remove('button-active');
//   boton.classList.add('button-active');
// }

// // Activa el botón desde al elegir opción desde <select>
// function activarBotonDesdeSelect() {
//   let categoriaSeleccionada = categoriaSelect.value;
//   if (categoriaSeleccionada === 'estudiante') {
//     activarBoton(estudianteBtn);
//   } else if (categoriaSeleccionada === 'trainee') {
//     activarBoton(traineeBtn);
//   } else if (categoriaSeleccionada === 'junior') {
//     activarBoton(juniorBtn);
//   }
// }

// // Escuchar el evento click en los botones de categoría
// estudianteBtn.addEventListener('click', function () {
//   categoriaSelect.value = 'estudiante';
//   activarBoton(estudianteBtn);
// });

// traineeBtn.addEventListener('click', function () {
//   categoriaSelect.value = 'trainee';
//   activarBoton(traineeBtn);
// });

// juniorBtn.addEventListener('click', function () {
//   categoriaSelect.value = 'junior';
//   activarBoton(juniorBtn);
// });

// // Escuchar el evento change en el <select>
// categoriaSelect.addEventListener('change', function () {
//   activarBotonDesdeSelect();
// });

// // Activar el botón correspondiente inicialmente
// activarBotonDesdeSelect();
//_____________________________________________________________




// // Codigo optimizado con categorias agrupadas
// const botonesCategoria = {
//   estudiante: document.getElementById('estudianteBtn'),
//   trainee: document.getElementById('traineeBtn'),
//   junior: document.getElementById('juniorBtn')
// };
// const categoriaSelect = document.getElementById('categoria');
// const cantidadInput = document.getElementById('cantidad');
// const resumenBtn = document.getElementById('resumenBtn');
// const totalPagar = document.getElementById('totalPagar');
// const descuentos = { estudiante: 0.8, trainee: 0.5, junior: 0.15 };

// document.getElementById('comprar__ticket').addEventListener('submit', (event) => {
//   event.preventDefault();
//   actualizarTotal();
// });

// cantidadInput.addEventListener('change', () => {
//   if (parseFloat(cantidadInput.value) < 0) cantidadInput.value = "";
// });

// function formularioCompleto() {
//   return document.getElementById('nombreN').value !== '' && cantidadInput.value !== '';
// }

// function activarBoton(categoria) {
//   Object.values(botonesCategoria).forEach(boton => boton.classList.remove('button-active'));
//   botonesCategoria[categoria].classList.add('button-active');
// }

// function actualizarTotal() {
//   const categoria = categoriaSelect.value;
//   const cantidad = parseFloat(cantidadInput.value);
//   const descuento = descuentos[categoria] || 0;
//   const total = cantidad * 200 * (1 - descuento);

//   activarBoton(categoria);
//   totalPagar.innerHTML = isNaN(total) || total <= 0 ? 'Total a pagar: $' : `Total a pagar: $${total.toFixed(0)}`;
// }

// Object.entries(botonesCategoria).forEach(([categoria, boton]) => {
//   boton.addEventListener('click', () => {
//     categoriaSelect.value = categoria;
//     actualizarTotal();
//   });
// });

// categoriaSelect.addEventListener('change', actualizarTotal);
// cantidadInput.addEventListener('input', actualizarTotal);
// actualizarTotal();

// resumenBtn.addEventListener('click', () => {
//   if (formularioCompleto()) {
//     const nombre = document.getElementById('nombreN').value;
//     const cantidad = cantidadInput.value;
//     const totalPagarTexto = totalPagar.textContent;
//     const categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;
//     const mensaje = `Hola ${nombre.toUpperCase()}!\nElegiste comprar '${cantidad}' ticket(s)\ncomo '${categoria}'\n\n${totalPagarTexto}`;

//     const popup = document.createElement('div');
//     popup.classList.add('popup');
//     popup.textContent = mensaje;
//     document.body.appendChild(popup);
//     setTimeout(() => popup.remove(), 3600);
//   } else {
//     alert("Por favor, completa los datos en el formulario.");
//   }
// });

// document.getElementById('resetBtn').addEventListener('click', () => {
//   document.getElementById('comprar__ticket').reset();
//   totalPagar.innerHTML = 'Total a pagar: $';
//   Object.values(botonesCategoria).forEach(boton => boton.classList.remove('button-active'));
// });
