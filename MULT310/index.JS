/*
  La funcion obtiene los elementos Sin Escala para cambiar el icono dropdown por el de escalas"
*/

// Step 1: Select all occurrences of the element
async function changeDescription(){
  const elementsSinEscalas22 = document.querySelectorAll('.flight-result__stops');

  // Step 2: Iterate through each occurrence
  elementsSinEscalas22.forEach(element => {
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
/*
async function changeDescriptionIteration() {
  const actionsContainer = document.querySelector('.flight-result__stops');

  let flag = true;
  while(flag)
  if (!actionsContainer) {
      await wait(2000);
      await changeDescription();
      return;
  }
}
*/
changeDescriptionIteration();
document.addEventListener('DOMContentLoaded', async function () {
  changeDescription();
});