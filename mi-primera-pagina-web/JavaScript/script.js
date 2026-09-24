function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

    document.getElementById("respuesta").textContent =
        "¡Gracias " + nombre + ", tu mensaje ha sido enviado correctamente!";

    event.target.reset();
}