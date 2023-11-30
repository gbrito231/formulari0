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
    if (nota >= 9) {
        mensaje = "felicitaciones kike!!! t encontramos!!! sino sos kike aflojale a los mates culiado!!"
    }else if (nota >= 7) {
        mensaje = "¡Excelente compa!!...usted sabe todo... ojo qc on un par d mates más lo invitan al sindicato";
    } else if (nota >= 4) {
        mensaje = "¡mmmm... ojo! lo voy a tener vigilado!!! usted es un posible topo!!.";
    } else {
        mensaje = "¡JAAAA! maldito topo!! he dado contigo!!! ya tiene tus datos el sindicato";
    }

    // Muestra la nota en el modal
    document.getElementById("notaTexto").innerHTML = "Sacaste un: " +nota+"!!"+ " "+ mensaje;

    // Muestra el modal
    document.getElementById("myModal").style.display = "block";

    formulario.reset();
}

function cerrarModal() {
    // Cierra el modal
    document.getElementById("myModal").style.display = "none";
}