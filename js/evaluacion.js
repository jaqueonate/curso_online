// Función para generar el diploma con nombre y fecha
function generarDiploma() {
  const nombre = document.getElementById("nombreInput").value.trim();

  if (!nombre) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  // Formatear la fecha actual en español
  const hoy = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = hoy.toLocaleDateString('es-CL', opciones);

  // Insertar nombre y fecha en el diploma
  document.getElementById("nombreDiploma").textContent = nombre;
  document.getElementById("fechaDiploma").textContent = "Fecha: " + fechaFormateada;

  // Mostrar el diploma
  document.getElementById("diploma").style.display = "block";
}

// Función para descargar el diploma como PDF
function descargarPDF() {
  const elemento = document.getElementById("diploma");

  // Configuración del PDF
  const opciones = {
    margin: 0,
    filename: 'Diploma_' + document.getElementById("nombreDiploma").textContent + '.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
  };

  // Generar y guardar el PDF
  html2pdf().set(opciones).from(elemento).save();
}

  mostrarPregunta(preguntaActual);
});
