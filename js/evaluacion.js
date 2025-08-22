document.addEventListener('DOMContentLoaded', () => {
  let preguntaActual = 0;
  const preguntas = document.querySelectorAll('.pregunta');
  const btnAtras = document.getElementById('atras');
  const btnSiguiente = document.getElementById('siguiente');
  const btnEnviar = document.getElementById('enviar');

  function mostrarPregunta(index) {
    preguntas.forEach((p, i) => {
      p.style.display = i === index ? 'block' : 'none';
    });

    btnAtras.style.display = index === 0 ? 'none' : 'inline-block';
    btnSiguiente.style.display = index === preguntas.length - 1 ? 'none' : 'inline-block';
    btnEnviar.style.display = index === preguntas.length - 1 ? 'inline-block' : 'none';
  }

  btnAtras.addEventListener('click', () => {
    if (preguntaActual > 0) {
      preguntaActual--;
      mostrarPregunta(preguntaActual);
    }
  });

  btnSiguiente.addEventListener('click', () => {
    if (preguntaActual < preguntas.length - 1) {
      preguntaActual++;
      mostrarPregunta(preguntaActual);
    }
  });

  btnEnviar.addEventListener('click', () => {
    alert('✅ Evaluación completada. Gracias por participar.');
    // Aquí puedes agregar lógica para generar diploma o guardar respuestas
  });

  mostrarPregunta(preguntaActual);
});
