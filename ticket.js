// Obtener los botones de categoría
let estudianteBtn = document.getElementById('estudianteBtn');
let traineeBtn = document.getElementById('traineeBtn');
let juniorBtn = document.getElementById('juniorBtn');
let categoriaSelect = document.getElementById('categoria');
let cantidadInput = document.getElementById('cantidad');
let resumenBtn = document.getElementById('resumenBtn');

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

  let total = cantidad * 200 * (1 - descuento);

  let totalPagar = document.getElementById('totalPagar');
  totalPagar.innerHTML = `Total a pagar: $ ${total.toFixed(0)}`;
});

// Impide que se ingrese un número negativo
cantidadInput.addEventListener('change', function () {
  let cantidad = parseFloat(cantidadInput.value);
  if (cantidad < 0) {
    cantidadInput.value = "";
  }
})

function formularioCompleto() {
  let nombre = document.getElementById('nombreN').value;
  let cantidad = cantidadInput.value;

  return nombre !== '' && cantidad !== '';
}

// Activar un botón y desactivar los demás
function activarBoton(boton) {
  estudianteBtn.classList.remove('button-active');
  traineeBtn.classList.remove('button-active');
  juniorBtn.classList.remove('button-active');
  boton.classList.add('button-active');
}

// Calcular y actualizar el total a pagar
function actualizarTotal() {
  let categoria = categoriaSelect.value;
  let cantidad = parseFloat(cantidadInput.value);
  let descuento = 0;

  // Aplicar los descuentos
  if (categoria === 'estudiante') {
    descuento = 0.8;
    activarBoton(estudianteBtn);
  } else if (categoria === 'trainee') {
    descuento = 0.5;
    activarBoton(traineeBtn);
  } else if (categoria === 'junior') {
    descuento = 0.15;
    activarBoton(juniorBtn);
  }

  let total = cantidad * 200 * (1 - descuento); // Total

  let totalPagar = document.getElementById('totalPagar');
  if (isNaN(total) || total <= 0) {
    totalPagar.innerHTML = 'Total a pagar: $';
  } else {
    totalPagar.innerHTML = `Total a pagar: $${total.toFixed(0)}`;
  }
}

// Escuchar evento click en los botones de categorías
estudianteBtn.addEventListener('click', function () {
  categoriaSelect.value = 'estudiante';
  activarBoton(estudianteBtn);
  actualizarTotal();
});

traineeBtn.addEventListener('click', function () {
  categoriaSelect.value = 'trainee';
  activarBoton(traineeBtn);
  actualizarTotal();
});

juniorBtn.addEventListener('click', function () {
  categoriaSelect.value = 'junior';
  activarBoton(juniorBtn);
  actualizarTotal();
});

// Escuchar el cambio en el <select>
categoriaSelect.addEventListener('change', function () {
  actualizarTotal();
});

// Escuchar el evento input en el campo de cantidad
cantidadInput.addEventListener('input', function () {
  actualizarTotal();
});

// Activar el botón correspondiente inicialmente
actualizarTotal();

// Mostrar el mensaje tipo popup
resumenBtn.addEventListener('click', function () {
  if (formularioCompleto()) {
    let nombre = document.getElementById('nombreN').value;
    let cantidad = cantidadInput.value;
    let totalPagar = document.getElementById('totalPagar').textContent;
    let categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;

    let mensaje = `Hola ${nombre.toUpperCase()}!\nElegiste comprar '${cantidad}' ticket(s)\ncomo '${categoria}'\n\n${totalPagar}`;

    // Crear un elemento <div> para el popup
    let popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = mensaje;

    // Agregar el popup al cuerpo del documento
    document.body.appendChild(popup);

    // Eliminar el popup después de 3 segundos
    setTimeout(function () {
      popup.remove();
    }, 3600);
  } else {
    alert("Por favor, completa los datos en el formulario.");
  }
});

document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('comprar__ticket').reset(); // Restablece los campos del formulario
  document.getElementById('totalPagar').innerHTML = 'Total a pagar: $'; // Limpia el párrafo de salida de resultados

  // activarBoton(estudianteBtn);
  estudianteBtn.classList.remove('button-active');
  traineeBtn.classList.remove('button-active');
  juniorBtn.classList.remove('button-active');
});