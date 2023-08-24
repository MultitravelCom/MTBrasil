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

function modifyFieldsText() {
    console.log('Ejecutando la función modifyFieldsText...');
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


function changeDocumentText() {
    const paxFields = document.querySelector('.booking-paxes__pax-fields');
    const elementspaxFields = paxFields.querySelectorAll('.booking-paxes__pax-field');
  
    elementspaxFields.forEach(label => {
        const originalTextLabel = element.querySelector('.booking-paxes__pax-field-label');        
        if (originalTextLabel && originalTextLabel.textContent.trim() === 'Número do documento') {
            label.textContent = 'CPF/CNPJ';
        }
    });
  }
// Llama a la función cuando sea necesario
document.addEventListener("DOMContentLoaded", function () {
    console.log("test")
    // hideElement();
    modifyFieldsText();
    changeDocumentText();
});