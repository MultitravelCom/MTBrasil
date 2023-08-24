let elementToHide = null;

// Función para buscar y ocultar el elemento
function hideElement() {
    // Encuentra todos los elementos con la clase confirm-booking__field col-sm-6
    const elementsToHide = document.querySelectorAll('.confirm-booking__field.col-sm-6');

    // Recorre los elementos y verifica si contienen el texto "CUIT/CUIL"
    elementsToHide.forEach(element => {
        const fieldLabel = element.querySelector('.confirm-booking__field-label');
        if (fieldLabel && fieldLabel.textContent.trim() === 'CUIT/CUIL') {
            element.style.display = 'none';
            // Si encuentras y ocultas el elemento, puedes detener el bucle aquí
            return;
        }
    });
}

// Llama a la función cuando sea necesario
hideElement();