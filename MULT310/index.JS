/*
  La funcion obtiene los elementos Sin Escala para cambiar el icono dropdown por el de escalas"
*/
function checkIfFirstTimeChanging(elementsToCheck, type){
console.log("---------> RUNNING checkIfFirstTimeChanging")
console.log("elementsToCheck.classList: ", elementsToCheck.classList)
if (type === "description") {
  if (!elementsToCheck.classList.contains('class_changed_description') ) {
    // Step 3: Add the "class_changed" class to the parent element
    console.log("Changed class description");
    elementsToCheck.classList.add('class_changed_description');
    return true;
  }
}
else if (type === "order"){
  console.log("type === order", type === "order")
  console.log("!elementsToCheck.classList.contains('class_changed_order': ", !elementsToCheck.classList.contains('class_changed_order'))
  if (!elementsToCheck.classList.contains('class_changed_order') ) {
    // Step 3: Add the "class_changed" class to the parent element
    console.log("Changed class order");
    elementsToCheck.classList.add('class_changed_order');
    return true;
  }
}
return false;
}

function changeDescription() {
  
  
  // Step 1: Select all occurrences of the element escalas
  const elementsSinEscalas = document.querySelectorAll('.flight-result__stops');
console.log("elementsSinEscalas for description: ", elementsSinEscalas)
  
  // Step 2: Iterate through each occurrence
  elementsSinEscalas.forEach(element => {
    if(checkIfFirstTimeChanging(element,"description")){
      console.log("element changing description: ", element)
      
      //we chekc 
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
    }
  });
}

function changeOrderOfDescriptionElements() {
  const elementsDescription = document.querySelectorAll('.flight-result__info');

  // Step 2: Iterate through each occurrence
  console.log("-------->  changeOrderOfDescriptionElements RUNNING")
  elementsDescription.forEach(element => {
    if(checkIfFirstTimeChanging(element, "order")){
console.log("--->changeOrderOfDescriptionElements  order type")

    // Get references to the child div elements
    const aerolinea = element.querySelector('.flight-result__airline');
    const duracion = element.querySelector('.flight-result__duration');
    const escalas = element.querySelector('.flight-result__stops');


    // Append the child div elements in the desired order
    //element.insertBefore(estaVaPrimero, estaVaSegundo);
    element.insertBefore(duracion, aerolinea);
    element.insertBefore(escalas,duracion);


    copyButtonAndMove(element);
  }
  });

  
}

function copyButtonAndMove(element) {
  
  console.log("--------> copyButtonAndMove running")
  // Step 1: Select all occurrences of the element escalas
  //const elementsSinEscalas = document.querySelectorAll('.flight-result__info');

  // Step 2: Iterate through each occurrence
  //elementsSinEscalas.forEach(element => {
console.log("---------> CHECKING STATE OF ELEMENT BEFORE ADDING BUTTON: ")
console.log("---------> element: ", element)
    //if(checkIfFirstTimeChanging(element, true)){

  // Step 3: Hide the button
  const escalas = element.querySelector('.flight-result__stops');
  copiaEscalas = escalas.cloneNode(true);
  const imageChildElement = copiaEscalas.querySelector('.stops-image-escalas');
  imageChildElement.style.display = 'none';
  const button = copiaEscalas.querySelector('.flight-result__segments-toggle');
  button.style.display = 'block';
  for (let i = 0; i < copiaEscalas.childNodes.length; i++) {
    if (copiaEscalas.childNodes[i] === Node.TEXT_NODE) {
    copiaEscalas.removeChild(copiaEscalas.childNodes[i]);
    console.log("deleteing text node?")
    }
  }
  console.log(copiaEscalas.childNodes);
  const newText = document.createTextNode('Ver detalles');

// Insert the new text node after the button element
copiaEscalas.insertBefore(newText, button.nextSibling);

  element.appendChild(copiaEscalas);
      // }
  //});
}
function changeDescriptionElementFunctions() {
  console.log("-----> CALLING changeDescriptionElementFunctions")
  changeDescription();
  changeOrderOfDescriptionElements();
  //copyButtonAndMove();

}
// Run the changeDescription() function when the element is available
function waitForElementToLoad() {
  
    console.log("-----------> SE EJECUTA LA FUNCION waitForElementToLoad")
    changeDescriptionElementFunctions();

    //const targetElements = document.querySelectorAll('.results-list__item, .flight-result__route-selection');


}



  function observeElementChanges(targetClasses, callback) {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'childList' ||
          mutation.type === 'attributes' ||
          mutation.type === 'characterData'
        ) {
          const addedNodes = mutation.addedNodes;
          const removedNodes = mutation.removedNodes;
          
          if (
            addedNodes.length > 0 ||
            removedNodes.length > 0 ||
            mutation.type === 'attributes'
          ) {
            for (let node of addedNodes) {
              if (
                node.nodeType === Node.ELEMENT_NODE &&
                targetClasses.some((targetClass) => node.matches(targetClass))
              ) {
                console.log("Calling callback from observer")
                callback(); // Perform your desired actions for each change
                
                return;
              }
            }
          }
        }
      }
    });
  
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');

    observeElementChanges(
      ['.results-list__item', 'flight-result__route-selection'],
      waitForElementToLoad
    );

    document.addEventListener('click', changeDescriptionElementFunctions);
    

  });