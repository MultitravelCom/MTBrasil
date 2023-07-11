document.addEventListener('DOMContentLoaded', async function () {

    observarCambiosCheckAndRender();
    changeDropdownDetailsFlight();
});


const elements = document.getElementsByClassName('flight-result__segments-toggle');
Array.from(elements).forEach((element) => {
  element.style.display = 'none';
});


// Step 1: Select the target elements
const claseSinEscalas = document.querySelectorAll('.flight-result__stops');
// Create a new image element
const imageElement = document.createElement('img');

// Step 2 and 3: Add SVG element before the text
claseSinEscalas.forEach(element => {

    // Create a new image element
    
    imageElement.setAttribute('src', 'https://multitravelcom.github.io/components/MULT310/icons/SinEscalas.svg'
 );
    imageElement.setAttribute('alt', 'Icono Sin Escalas');
    imageElement.style.display = 'inline-block'

    /*
    const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'Hola';
paragraphElement.style.display = 'inline-block'
*/
//element.insertBefore(paragraphElement, textElement);
    // Insert the image element before the text within the stops element
    element.insertBefore(imageElement, element.firstChild);
});




