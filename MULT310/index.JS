/*
  La funcion obtiene los elementos Sin Escala para cambiar el icono dropdown por el de escalas"
*/



function changeDescription() {
  
  
  // Step 1: Select all occurrences of the element escalas
  const elementsSinEscalas = document.querySelectorAll('.flight-result__stops');

  // Step 2: Iterate through each occurrence
  elementsSinEscalas.forEach(element => {
  // Step 3: Hide the button
  const button = element.querySelector('.flight-result__segments-toggle');
  button.style.display = 'none';

  // Step 4: Create a new image element
  const image = document.createElement('img');
  image.classList.add('stops-image-escalas');
  image.src = 'https://multitravelcom.github.io/MTBrasil/MULT310/icons/SinEscalas.svg';
  image.alt = 'Image Description';

  // Step 5: Insert the new image element
  element.insertBefore(image, button);
  });
}

function changeOrderOfDescriptionElements() {
  const elementsDescription = document.querySelectorAll('.flight-result__info');

  // Step 2: Iterate through each occurrence
  elementsDescription.forEach(element => {


    // Get references to the child div elements
    const aerolinea = element.querySelector('.flight-result__airline');
    const duracion = element.querySelector('.flight-result__duration');
    const escalas = element.querySelector('.flight-result__stops');


    // Append the child div elements in the desired order
    //element.insertBefore(estaVaPrimero, estaVaSegundo);
    element.insertBefore(duracion, aerolinea);
    element.insertBefore(escalas,duracion);
    
  });
}

function copyButtonAndMove() {
  
  
  // Step 1: Select all occurrences of the element escalas
  const elementsSinEscalas = document.querySelectorAll('.flight-result__info');

  // Step 2: Iterate through each occurrence
  elementsSinEscalas.forEach(element => {
  // Step 3: Hide the button
  const escalas = element.querySelector('.flight-result__stops');
  copiaEscalas = escalas.cloneNode(true);
  const imageChildElement = copiaEscalas.querySelector('.stops-image-escalas');
  imageChildElement.style.display = 'none';
  const button = copiaEscalas.querySelector('.flight-result__segments-toggle');
  button.style.display = 'block';
  element.appendChild(copiaEscalas);
  });
}
// Run the changeDescription() function when the element is available
function waitForElementToLoad() {
  const actionsContainer = document.querySelector('.flight-result__stops');
  if (actionsContainer) {
    console.log("-----------> SE EJECUTA LA FUNCION")
    changeDescription();
    changeOrderOfDescriptionElements();
    copyButtonAndMove();
  } else {
    setTimeout(waitForElementToLoad, 10);
  }
}

/*
//document.addEventListener('DOMContentLoaded', waitForElementToLoad);
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    // DOM is ready and interactive
    waitForElementToLoad();
  }
};
*/


function observarCambiosCheckAndRender() {
  const observer = new MutationObserver(() => {
    waitForElementToLoad();
  });

  const observerConfig = {
    childList: true,
    subtree: true,
  };

  observer.observe(document.documentElement, observerConfig);

  waitForElementToLoad();
}

document.addEventListener('DOMContentLoaded', () => {
  observarCambiosCheckAndRender();
});