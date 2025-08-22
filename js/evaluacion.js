let preguntaActual = 0;
const totalPreguntas = document.querySelectorAll('.pregunta').length;

const mostrarPregunta = (index) => {
  document.querySelectorAll('.pregunta').forEach((p, i) => {
    p.style.display = i === index ? 'block' : 'none';
  });

  document.getElementById('atras').style.display = index === 0 ? 'none' : 'inline-block';
  document.getElementById('siguiente').style.display = index === totalPreguntas - 1 ? 'none' : 'inline-block';
  document.getElementById('enviar').style.display = index === totalPreguntas - 1 ? 'inline-block' : 'none';
};

document.getElementById('atras').addEventListener('click', () => {
  if (preguntaActual > 0) {
    preguntaActual--;
    mostrarPregunta(preguntaActual);
  }
});

document.getElementById('siguiente').addEventListener('click', () => {
  if (preguntaActual < totalPreguntas - 1) {
    preguntaActual++;
    mostrarPregunta(preguntaActual);
  }
});

document.getElementById('enviar').addEventListener('click', () => {
  alert('¡Gracias por completar la evaluación!');
  // Aquí puedes agregar lógica para calcular resultados o generar diploma
});

mostrarPregunta(preguntaActual);
