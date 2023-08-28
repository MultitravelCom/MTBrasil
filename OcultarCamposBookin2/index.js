// Función para buscar y ocultar el elemento
function hideElement() {
    // Encuentra el contenedor que contiene los campos
    const fieldsContainer = document.querySelector('.confirm-booking__fields');

    // Busca todos los elementos con la clase confirm-booking__field col-sm-6 dentro del contenedor
    const elementsToHide = fieldsContainer.querySelectorAll('.confirm-booking__field.col-sm-6');

    // Recorre los elementos y verifica si contienen el texto "CUIT/CUIL"
    elementsToHide.forEach(element => {
        const fieldLabel = element.querySelector('.confirm-booking__field-label');
        if (fieldLabel && fieldLabel.textContent.trim() === 'CUIT/CUIL') {
            element.style.display = 'none';
            element.style.float = 'inherit';
        }
    });
}
function modifyFieldsTextFlights() {
    if (window.location.href.includes('/flights')) {
        return; // No ejecutar la función
    }
    // Encuentra el contenedor que contiene los campos
    const fieldsContainer = document.querySelector('.confirm-booking__fields');

    // Busca todos los elementos con la clase confirm-booking__field col-sm-5 y col-sm-6 dentro del contenedor
    const elementsToModify = fieldsContainer.querySelectorAll('.confirm-booking__field.col-sm-5, .confirm-booking__field.col-sm-6');

    // Recorre los elementos y realiza las modificaciones necesarias
    elementsToModify.forEach(element => {
        const fieldLabel = element.querySelector('.confirm-booking__field-label');
        if (fieldLabel) {
            const labelContent = fieldLabel.textContent.trim();
            if (labelContent === 'Documento de identidade / Passaporte') {
                fieldLabel.textContent = 'CPF/CNPJ';
            }
        }
    });
}

function modifyFieldsTextBooking() {
    if (window.location.href.includes('/flights')) {
        return; // No ejecutar la función
    }

    // Encuentra el contenedor que contiene los campos
    const fieldContainer = document.querySelector('#main-content > div:nth-child(2) > div > div > div.booking-data__data > div.confirm-booking__section.confirm-booking__holder-data > fieldset > label.confirm-booking__field.col-sm-5');

    // Verifica si se encontró el contenedor
    if (fieldContainer) {

        const fieldLabel = fieldContainer.querySelector('.confirm-booking__field-label');
        if (fieldLabel) {
            const labelContent = fieldLabel.textContent.trim();
            if (labelContent === 'Documento de identidade / Passaporte*') {
                fieldLabel.textContent = 'CPF/CNPJ*';
                }
        }
    } else {
        setTimeout(modifyFieldsTextBooking, 100);
    }
}

function changeDocumentText() {
    // Encuentra todos los elementos con la clase booking-paxes__pax-field
    const elementsToModify = document.querySelectorAll('.booking-paxes__pax-field');

    // Recorre los elementos y realiza las modificaciones necesarias
    elementsToModify.forEach(element => {
        const fieldLabel = element.querySelector('.booking-paxes__pax-field-label');
        if (fieldLabel) {
            const labelText = fieldLabel.textContent.trim();
            if (labelText === 'Número do documento*') {
                fieldLabel.textContent = 'CPF/CNPJ';
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // hideElement();
    changeDocumentText();
    modifyFieldsTextFlights();
    modifyFieldsTextBooking();
});