/*
  La funcion obtiene los elementos Sin Escala para cambiar el icono dropdown por el de escalas"
*/



// Step 1: Select all occurrences of the element
function changeDescription() {
  const elementsSinEscalas = document.querySelectorAll('.flight-result__stops');

  // Step 2: Iterate through each occurrence
  elementsSinEscalas.forEach(element => {
    // Step 3: Hide the button
    const button = element.querySelector('.flight-result__segments-toggle');
    button.style.display = 'none';

    // Step 4: Create a new image element
    const image = document.createElement('img');
    image.src = 'https://multitravelcom.github.io/MTBrasil/MULT310/icons/SinEscalas.svg';
    image.alt = 'Image Description';

    // Step 5: Insert the new image element
    element.insertBefore(image, button);
  });
}

changeOrderOfDescriptionElements() {

  const flightInfo = document.querySelector('.flight-result__info');

  // Get references to the child div elements
  const airlineHiddenSm = document.querySelector('.flight-result__airline.hidden-sm');
  const stops = document.querySelector('.flight-result__stops');
  const duration = document.querySelector('.flight-result__duration');
  const airlineHiddenXs = document.querySelector('.flight-result__airline.hidden-xs');
  
  // Append the child div elements in the desired order
  flightInfo.insertBefore(airlineHiddenSm, duration);
  flightInfo.insertBefore(stops, duration);
  flightInfo.insertBefore(airlineHiddenXs, duration);
}

// Run the changeDescription() function when the element is available
function waitForElementToLoad() {
  const actionsContainer = document.querySelector('.flight-result__stops');
  if (actionsContainer) {
    changeDescription();
    changeOrderOfDescriptionElements();
  } else {
    setTimeout(waitForElementToLoad, 10);
  }
}

//document.addEventListener('DOMContentLoaded', waitForElementToLoad);
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    // DOM is ready and interactive
    waitForElementToLoad();
  }
};