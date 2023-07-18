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
  
    console.log("-----------> SE EJECUTA LA FUNCION")
    changeDescription();
    changeOrderOfDescriptionElements();
    copyButtonAndMove();
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


/*

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
*/

/*
  const containerResults = document.querySelectorAll('.results-list__body');
  containerResults.forEach((result) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        waitForElementToLoad();
      });
    });
    observer.observe(result, { attributes: true });
  });

  */
/*

  function observeElementChanges(targetClass, counter, callback) {
    let targetElements = document.querySelectorAll(targetClass);
  console.log(targetElements)



  // Call your function here
  console.log('Function called');

  counter += 10; // Increment the counter by the interval duration (10 milliseconds)
console.log("Counter added 10: ", counter)
  if (counter >= 100000) {
    return; // Stop the interval after 5 seconds (5000 milliseconds)
  }
  if (!targetElements.length) {
    console.error(`No elements with class "${targetClass}" found.`);
    
    return setTimeout(observeElementChanges(targetClass, counter, callback), 10);
  }
  
    targetElements.forEach((targetElement) => {
      const observer = new MutationObserver(() => {
        callback();
      });
  
      const observerConfig = {
        childList: true,
      };
  
      observer.observe(targetElement, observerConfig);
    });
  }

  
  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded")
    observeElementChanges('.results-list__item', 0, waitForElementToLoad);
  });

  //tengo que lograr ahora que al volver correrse NO se agreguen mas de una vez las cosas que hago

  */

  function observeElementChanges(targetClasses, callback) {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.addedNodes && mutation.addedNodes.length) {
          for (let addedNode of mutation.addedNodes) {
            if (
              addedNode.nodeType === Node.ELEMENT_NODE &&
              targetClasses.some((targetClass) => addedNode.matches(targetClass))
            ) {
              // observer.disconnect(); // Stop observing once the target element is found
              callback(); // Perform your desired actions
              //return; // Exit the function
            }
          }
        }
      }
    });
  
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    observeElementChanges(
      ['.results-list__item', 'flight-result__route-selection'],
      waitForElementToLoad
    );
  });