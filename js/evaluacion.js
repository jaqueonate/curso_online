document.addEventListener('DOMContentLoaded', () => {
  let preguntaActual = 0;
  const preguntas = document.querySelectorAll('.pregunta');
  const btnAtras = document.getElementById('atras');
  const btnSiguiente = document.getElementById('siguiente');
  const btnEnviar = document.getElementById('enviar');
  const resultado = document.getElementById('resultado');

  const respuestasCorrectas = {
    q0: "b",
    q1: "b"
    // Agrega más claves si tienes más preguntas
  };

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
    let aciertos = 0;
    for (let clave in respuestasCorrectas) {
      const seleccionada = document.querySelector(`input[name="${clave}"]:checked`);
      if (seleccionada && seleccionada.value === respuestasCorrectas[clave]) {
        aciertos++;
      }
    }

    const total = Object.keys(respuestasCorrectas).length;
    const porcentaje = (aciertos / total) * 100;

    if (porcentaje >= 90) {
      resultado.innerHTML = `
        <p>✅ ¡Aprobaste con ${porcentaje.toFixed(0)}%!</p>
        <a href="diploma.html">🎓 Generar diploma</a>
      `;
    } else {
      resultado.innerHTML = `
        <p>❌ Obtuviste ${porcentaje.toFixed(0)}%. Debes alcanzar al menos 90% para aprobar.</p>
      `;
    }
  });

  mostrarPregunta(preguntaActual);
});
