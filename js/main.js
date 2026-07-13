// Función para mostrar/ocultar campos de celular según el servicio seleccionado
const selectServicio = document.getElementById('service');
const camposCelular = document.getElementById('campos-celular');

selectServicio.addEventListener('change', function(e) {
  if (e.target.value === 'smartphones') {
    camposCelular.style.display = 'block';
  } else {
    camposCelular.style.display = 'none';
  }
});

// Función para manejar el envío del formulario
const form = document.querySelector('.formulario-contacto');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // evita que el form se envíe "de verdad"

  const nombre = document.getElementById('name').value;
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const problema = document.getElementById('falla').value;

  const mensaje = `Hola Ulicel. Mi nombre es ${nombre}, mi marca es ${marca}, mi modelo es ${modelo}, mi problema es ${problema} y quiero mi presupuesto.`;

  const numeroWhatsapp = '543878342800'; 
  const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
});