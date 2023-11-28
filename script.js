const respuestasCorrectas = {
    1: "1d",
    2: "2d",
    3: "3d",
    4: "4a",
    5: "5e",
    6: "6d",
    7: "7d",
    8: "8b",
    9: "9c",
    10: "10c",
}


function evaluarRespuestas() {
    // Obtener el formulario
    const formulario = document.getElementById("formularioPrueba");

    // Obtener todas las respuestas seleccionadas
    const respuestasSeleccionadas = {};
    const elementos = formulario.elements;
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].type === "radio" && elementos[i].checked) {
            respuestasSeleccionadas[elementos[i].name] = elementos[i].value;
        }
    }

    // Evaluar respuestas
    let nota = 0;
    for (const pregunta in respuestasSeleccionadas) {
        if (respuestasSeleccionadas.hasOwnProperty(pregunta)) {
            const respuestaUsuario = respuestasSeleccionadas[pregunta];
            const respuestaCorrecta = respuestasCorrectas[pregunta];
            
            if (respuestaUsuario === respuestaCorrecta) {
                // La respuesta es correcta
                nota += 1; // Puedes ajustar la puntuación según tus necesidades
            }
        }
    }
    let mensaje = "";
    if (nota >= 8) {
        mensaje = "¡Excelente! Has obtenido una puntuación alta.";
    } else if (nota >= 4) {
        mensaje = "¡Bien hecho! Tu puntuación es moderada.";
    } else {
        mensaje = "¡Ánimo! Puedes mejorar en la próxima ocasión.";
    }

    // Muestra la nota en el modal
    document.getElementById("notaTexto").innerHTML = "Tu nota es: " + nota + mensaje;

    // Muestra el modal
    document.getElementById("myModal").style.display = "block";

    formulario.reset();
}

function cerrarModal() {
    // Cierra el modal
    document.getElementById("myModal").style.display = "none";
}