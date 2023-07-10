document.addEventListener('DOMContentLoaded', async function () {
    observarCambiosCheckAndRender();
    changeDropdownDetailsFlight();
});


async function cargarEstilosYModales() {

    /*
    const link = document.querySelector('link[href="https://multitravelcom.github.io/MTBrasil/MULT245/style.css"]');
    const scriptReact = document.querySelector('script[src="https://multitravelcom.github.io/MTBrasil/MULT245/modalShare.js"]');

    // Forzar la recarga del archivo CSS
    if (link) {
        link.href = '';
        await wait(1000);
        link.href = 'https://multitravelcom.github.io/MTBrasil/MULT245/style.css';
    }

    // Forzar la recarga del script de los modales de React
    if (scriptReact) {
        scriptReact.src = '';
        await wait(100);
        scriptReact.src = 'https://multitravelcom.github.io/MTBrasil/MULT245/modalShare.js';
    }
    */

}

function changeDropdownDetailsFlight() {
    let dropdownsFlight = document.querySelectorAll('flight-selection__segments-toggle');
    console.log("-->: ", dropdownsFlight)
    dropdownsFlight.forEach((element) => {
            element.style.display = 'none';
   
        });
        observer.observe(container, { attributes: true });
      }

    //let divToMove = document.getElementsByClassName("flight-selection__segments-toggle")[0];
    //let divDestination = document.getElementsByClassName("singledestination-only")[0];


/*
const targetElementUser = document.querySelector('#main-menu-features');

const buttonHTML = `
  <div class="upper-menu_quicklinks btn-toolbar visible-xs-block visible-sm-block">
    <button type="button" class="btn upper-menu__newsletter-button features_item js-login-box-modal btn-user">
      <span class="glyphicon glyphicon-agent" aria-hidden="true"></span>
      <span class="sr-only">Ingreso</span>
      <span class="quicklink-elem-label">Ingreso</span>
    </button>
  </div>
`;

targetElementUser.insertAdjacentHTML('beforeend', buttonHTML);

const buttonsBtnUser = targetElementUser.querySelectorAll('.btn-user');

*/