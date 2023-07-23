/*
  La funcion obtiene los elementos Sin Escala para cambiar el icono dropdown por el de escalas"
*/
function checkIfFirstTimeChanging(elementsToCheck, type){
if (type === "description") {
  if (!elementsToCheck.classList.contains('class_changed_description') ) {
    console.log("Changed class description");
    elementsToCheck.classList.add('class_changed_description');
    return true;
  }
}
else if (type === "order"){
  if (!elementsToCheck.classList.contains('class_changed_order') ) {
    console.log("Changed class order");
    elementsToCheck.classList.add('class_changed_order');
    return true;
  }
}
else if (type === "description_selected"){
  if (!elementsToCheck.classList.contains('class_changed_description_selected') ) {
    console.log("Changed class description selection");
    elementsToCheck.classList.add('class_changed_description_selected');
    return true;
  }
}
return false;
}

function changeDescriptionSelectedFlight() {


  /*
  const elementsSinEscalas = document.querySelectorAll('.flight-selection__info');
  console.log("changeDescriptionSelectedFlight elementsSinEscalas ---> :", elementsSinEscalas)
  elementsSinEscalas.forEach(element => {
    if(checkIfFirstTimeChanging(element,"description_selected")){
    console.log("Iterating element ---> :", element)
//seleccionamos el horario, para isnertar antes las escalas
const time = element.querySelector('.flight-selection__duration');
console.log("Time ---> :", time)

    const divEscalas = document.createElement('div');
    const image = document.createElement('img');
    image.classList.add('stops-image-escalas');
    image.src = 'https://multitravelcom.github.io/MTBrasil/MULT310/icons/SinEscalas.svg';
    image.alt = 'Image Description';
    const text = document.createTextNode('Your text goes here');
    divEscalas.appendChild(image);
    divEscalas.appendChild(text);
    element.insertBefore(divEscalas, time);
    }
  })
  */
}

function changeDescription() {
  
  
  // Step 1: Select all occurrences of the element escalas
  const elementsSinEscalas = document.querySelectorAll('.flight-result__stops, .flight-selection__stops');
  
  // Step 2: Iterate through each occurrence
  elementsSinEscalas.forEach(element => {
    if(checkIfFirstTimeChanging(element,"description")){
      
      //we chekc 
    // Step 3: Hide the button
    const button = element.querySelector('.flight-result__segments-toggle, .flight-selection__segments-toggle');
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

function checkIfTheresZeroBaggage(durationElement) {
  const baggageElement = durationElement.querySelector('.flight-result__baggage');
  if(!baggageElement){
   // Step 1: Create the outermost <span> element with the class "flight-result__baggage"
const outerSpan = document.createElement("span");
outerSpan.classList.add("flight-result__baggage");

// Step 2: Create the innermost <span> element with the class "glyphicon glyphicon-baggage"
const innerSpan = document.createElement("span");
innerSpan.classList.add("glyphicon", "glyphicon-baggage");

// Step 3: Set the title attribute for the innermost <span> element
innerSpan.setAttribute("data-toggle", "tooltip");
innerSpan.setAttribute("data-placement", "top");
innerSpan.setAttribute("title", "Included 1 Bagagem (LUGG)");

// Set the text content of the innermost <span> element
const innerSpanText = document.createElement("span");
innerSpanText.textContent = "× 0";

// Step 4: Append the innermost <span> element to the outermost <span> element
outerSpan.appendChild(innerSpan);
outerSpan.appendChild(innerSpanText);

// Now you have the entire HTML element programmatically created. You can append it to an existing element in your HTML, for example:
durationElement.appendChild(outerSpan);
  }
}

function changeOrderOfDescriptionElements() {
  const elementsDescription = document.querySelectorAll('.flight-result__info, .flight-selection__info');

  // Step 2: Iterate through each occurrence
  console.log("-------->  changeOrderOfDescriptionElements RUNNING")
  elementsDescription.forEach(element => {
    //next line is to be able to use absolute position in last child (dropdown)
    //element.style.position = 'relative';
    if(checkIfFirstTimeChanging(element, "order")){
console.log("--->changeOrderOfDescriptionElements  order type")
   





    // Get references to the child div elements
    const aerolinea = element.querySelector('.flight-result__airline');
    const duracion = element.querySelector('.flight-result__duration, .flight-selection__duration');
    const escalas = element.querySelector('.flight-result__stops, .flight-selection__stops');

    checkIfTheresZeroBaggage(duracion);
console.log("---> aerolinea: ", aerolinea)
console.log("---> duracion: ", duracion)
console.log("---> escalas: ", escalas)
    // Append the child div elements in the desired order
    //element.insertBefore(estaVaPrimero, estaVaSegundo);
    if(aerolinea)
    element.insertBefore(duracion, aerolinea);
    element.insertBefore(escalas,duracion);

    /*
    Create empty div so it takes up empty space with flex grow property
    */
     const emptyDiv = document.createElement('div');
     emptyDiv.classList.add('.flight-info__empty-div');
     // Get the first child element of the container
     const firstChild = element.firstChild;
      
     // Insert the empty div before the first child element inside the container
     element.insertBefore(emptyDiv, firstChild);


    //PART FOR NOT MOBILE
    if(window.innerWidther > 1023){


    }

    copyButtonAndMove(element);
  }
  });

  
}

function copyButtonAndMove(element) {
  
  console.log("--------> copyButtonAndMove running")
  const escalas = element.querySelector('.flight-result__stops, .flight-selection__stops');
  copiaEscalas = escalas.cloneNode(true);
  copiaEscalas.classList.add('modified_blue_dropdown');
  const imageChildElement = copiaEscalas.querySelector('.stops-image-escalas');
  imageChildElement.style.display = 'none';
  const button = copiaEscalas.querySelector('.flight-result__segments-toggle, .flight-selection__segments-toggle');
  
  button.style.display = 'inline-block';
  /*
  button.style.margin = '0rem 1rem';
  button.style.backgroundColor = '#0d4e88';
  */
  for (let i = 0; i < copiaEscalas.childNodes.length; i++) {
    if (copiaEscalas.childNodes[i].nodeType === Node.TEXT_NODE) {
    copiaEscalas.removeChild(copiaEscalas.childNodes[i]);
    console.log("deleteing text node?")
    }
  }
  console.log(copiaEscalas.childNodes);
  
  if (button.classList.contains('flight-selection__segments-toggle')) {
    copiaEscalas.style.margin= '0rem 1rem';
    const newText = document.createTextNode('Ver detalles');
    button.style.marginLeft = '0.5rem';
    // Insert the new text node after the button element
    copiaEscalas.insertBefore(newText, button);
  }
  copiaEscalas.style.textAlign= 'right'; 
  copiaEscalas.style.flexGrow= '1'; 
  element.appendChild(copiaEscalas);
      // }
  //});
}
function changeDescriptionElementFunctions() {
  console.log("----------> changeDescriptionElementFunctions")
  changeDescription();
  changeOrderOfDescriptionElements();
  changeDescriptionSelectedFlight();
  //copyButtonAndMove();

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
/*
    observeElementChanges(
      ['.results-list__item', 'flight-result__route-selection'],
      changeDescriptionElementFunctions
    );
*/
    //document.addEventListener('click', changeDescriptionElementFunctions);
    

  });




  ////////////////////




  function onDivAdded(mutationsList, repetition) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === 'DIV') {
          // Call your function or perform any action here
          console.log('New <div> element added:', node);
          changeDescriptionElementFunctions();
        }
      });
    }
  });

  const elements = document.querySelectorAll('.flight-selection');
    if (elements.length === 0 ) {
      console.log("***** NO .flight-selection FOUND")
      if (repetition && repetition < 5000) {
        console.log("*****  repetition FOUND")
      repetition +=100;
      setTimeout(()=>{onDivAdded(mutationsList,repetition)}, 100); // Retry after 100 milliseconds
      }else if  (repetition && repetition >= 3000){
        console.log("**-----------> END LOOP FOR querySelectorAll('.flight-selection') ")
        }
      else  {
        console.log("***** **NO** repetition FOUND")
        let repetition =100;
        setTimeout(()=>{onDivAdded(mutationsList,repetition)}, 100); // Retry after 100 milliseconds
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(onDivAdded);
  const observerConfig = { childList: true, subtree: true };
  observer.observe(document.documentElement, observerConfig);
});