function validarEvaluacion() {
  const respuestasCorrectas = {
    q1: "b",
    // Agrega las claves correctas para q2 a q10
  };

  let aciertos = 0;
  for (let pregunta in respuestasCorrectas) {
    const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
    if (seleccionada && seleccionada.value === respuestasCorrectas[pregunta]) {
      aciertos++;
    }
  }

  const resultado = document.getElementById("resultado");
  if (aciertos >= 9) {
    resultado.innerHTML = `<p>✅ ¡Aprobado con ${aciertos}/10!</p><a href="diploma.html">Generar diploma</a>`;
  } else {
    resultado.innerHTML = `<p>❌ Reprobado con ${aciertos}/10. Debes obtener al menos 9 respuestas correctas.</p>`;
  }
}
