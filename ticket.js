document.getElementById('comprar__ticket').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  var categoria = document.getElementById('categoria').value;
  var cantidad = parseFloat(document.getElementById('cantidad').value);
  var descuento = 0;

  // Descuento
  if (categoria === 'estudiante') {
    descuento = 0.8;
  } else if (categoria === 'trainee') {
    descuento = 0.5;
  } else if (categoria === 'junior') {
    descuento = 0.15;
  }

  var total = cantidad * 200 * (1 - descuento); // Total

  var totalPagar = document.getElementById('totalPagar');
  totalPagar.innerHTML = `Total a pagar: $ ${total.toFixed(2)}`;
});

document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('comprar__ticket').reset(); // Restablece los campos del formulario
  document.getElementById('totalPagar').innerHTML = 'Total a pagar: $'; // Limpia el párrafo de salida de resultados
});