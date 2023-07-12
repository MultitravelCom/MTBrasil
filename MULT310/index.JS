document.addEventListener('DOMContentLoaded', async function () {

    observarCambiosCheckAndRender();
    changeDropdownDetailsFlight();
});


//ocultamos el dropdown gris
const elements = document.getElementsByClassName('flight-result__segments-toggle');
Array.from(elements).forEach((element) => {
  element.style.display = 'none';
});


// Step 1: Select the target elements
const claseSinEscalas2 = document.querySelectorAll('.flight-result__stops');
// Create a new image element
const imageElement2 = document.createElement('img');

// Step 2 and 3: Add SVG element before the text
claseSinEscalas2.forEach(element => {

    // Create a new image element
    
    imageElement2.setAttribute('src', 'https://https://multitravelcom.github.io/MTBrasil/MULT310/icons/SinEscalas.svg'
 );
    imageElement2.setAttribute('alt', 'Icono Sin Escalas');
    imageElement2.style.display = 'inline-block'

    
  //  const paragraphElement = document.createElement('p');
//paragraphElement.textContent = 'Hola';
//paragraphElement.style.display = 'inline-block'

//element.insertBefore(paragraphElement, textElement);
    // Insert the image element before the text within the stops element
    element.insertBefore(imageElement2, element.firstChild);
});





