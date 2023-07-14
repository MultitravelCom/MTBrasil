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

// Run the changeDescription() function when the element is available
function waitForElementToLoad() {
  const actionsContainer = document.querySelector('.flight-result__stops');
  if (actionsContainer) {
    changeDescription();
  } else {
    setTimeout(waitForElementToLoad, 10);
  }
}

//document.addEventListener('DOMContentLoaded', waitForElementToLoad);

function handleNewElement(mutationsList, observer) {
  mutationsList.forEach(mutation => {
    if (mutation.type === 'childList') {
      const newElements = mutation.addedNodes;
      newElements.forEach(element => {
        if (element.classList.contains('.flight-result__stops')) {
          // Disconnect the observer to stop further observations
          observer.disconnect();
          
          // Execute your function here
          changeDescription();
        }
      });
    }
  });
}

function observeElementAppearance() {
  const targetNode = document.documentElement; // Observe changes in the entire document
  const observer = new MutationObserver(handleNewElement);
  observer.observe(targetNode, { childList: true, subtree: true });
}

observeElementAppearance();