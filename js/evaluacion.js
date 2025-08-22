document.addEventListener("DOMContentLoaded", function () {
  const preguntas = document.querySelectorAll(".pregunta");
  let indiceActual = 0;

  const btnAtras = document.getElementById("atras");
  const btnSiguiente = document.getElementById("siguiente");
  const btnEnviar = document.getElementById("enviar");
  const resultado = document.getElementById("resultado");

  function mostrarPregunta(indice) {
    preguntas.forEach((p, i) => {
      p.style.display = i === indice ? "block" : "none";
    });

    btnAtras.style.display = indice === 0 ? "none" : "inline-block";
    btnSiguiente.style.display = indice === preguntas.length - 1 ? "none" : "inline-block";
    btnEnviar.style.display = indice === preguntas.length - 1 ? "inline-block" : "none";
  }

  btnAtras.addEventListener("click", () => {
    if (indiceActual > 0) {
      indiceActual--;
      mostrarPregunta(indiceActual);
    }
  });

  btnSiguiente.addEventListener("click", () => {
    if (indiceActual < preguntas.length - 1) {
      indiceActual++;
      mostrarPregunta(indiceActual);
    }
  });

  btnEnviar.addEventListener("click", () => {
    let correctas = 0;

    preguntas.forEach((pregunta, index) => {
      const seleccionada = pregunta.querySelector('input[name="q' + index + '"]:checked');
      if (seleccionada && seleccionada.dataset.correct === "true") {
        correctas++;
      }
    });

    const total = preguntas.length;
    const porcentaje = Math.round((correctas / total) * 100);

    resultado.innerHTML = `<strong>Tu porcentaje de aprobación es:</strong> ${porcentaje}% (${correctas} de ${total} correctas)`;

    if (porcentaje >= 70) {
      resultado.innerHTML += `<p>🎉 ¡Felicitaciones! Has aprobado la evaluación.</p>`;
      mostrarDiploma(porcentaje);
    } else {
      resultado.innerHTML += `<p>💡 No alcanzaste el mínimo para aprobar. Puedes revisar el material y volver a intentarlo.</p>`;
    }
  });

  function mostrarDiploma(porcentaje) {
    const nombre = prompt("Ingresa tu nombre para generar el diploma:");
    if (!nombre) {
      alert("No se ingresó nombre. Diploma no generado.");
      return;
    }

    const hoy = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = hoy.toLocaleDateString('es-CL', opciones);

    const diplomaHTML = `
      <div id="diploma" style="background:white; border:5px solid #2c3e50; padding:40px; margin-top:30px; box-shadow:0 0 20px rgba(0,0,0,0.2); text-align:center;">
        <h1 style="color:#2c3e50;">Diploma de Reconocimiento</h1>
        <div style="font-size:2em; color:#34495e; margin:20px 0;">${nombre}</div>
        <p>Por su destacada participación y compromiso.</p>
        <div style="font-size:1.5em; color:#27ae60;">Aprobación: ${porcentaje}%</div>
        <div style="margin-top:30px; font-size:1.2em; color:#7f8c8d;">Fecha: ${fechaFormateada}</div>
        <div style="margin-top:30px;">
          <button onclick="window.print()">🖨️ Imprimir</button>
          <button onclick="descargarPDF()">📄 Descargar PDF</button>
        </div>
      </div>
    `;

    resultado.innerHTML += diplomaHTML;
  }

  window.descargarPDF = function () {
    const elemento = document.getElementById("diploma");
    const nombre = elemento.querySelector("div").textContent.trim();
    const opciones = {
      margin: 0,
      filename: 'Diploma_' + nombre + '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().set(opciones).from(elemento).save();
  };

  mostrarPregunta(indiceActual);
});
