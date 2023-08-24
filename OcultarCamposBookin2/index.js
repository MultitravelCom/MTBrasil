let elementToHide = null;

// Función para buscar y ocultar el elemento
function hideElement() {
    if (elementToHide === null) {
        // Encuentra el elemento por el selector
        elementToHide = document.querySelector('.confirm-booking__field.col-sm-6');
    }

    // Si se encontró el elemento, ocúltalo
    if (elementToHide) {
        elementToHide.style.display = 'none';
    }
}

// Llama a la función cuando sea necesario
hideElement();