window.addEventListener('load', () => {

  // *********** MULT-127 **********************
  const btnMoreOptions = document.querySelector('.btn-more-options');

  btnMoreOptions.innerHTML = 'Classe e bagagem para despachar <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';

  if (!btnMoreOptions.classList.contains('collapsed')) {
    btnMoreOptions.setAttribute('data-toggle-text', 'Classe e bagagem para despachar');
  }

  btnMoreOptions.style.display = 'inline-block';

  let divToMove = document.getElementsByClassName("checkbox")[0];
  let divDestination = document.getElementsByClassName("singledestination-only")[0];

  divDestination.appendChild(divToMove);

  document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
  document.querySelector('.radio').style.display = 'inline-block';

  const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');

  const divObjetivo = document.getElementById('flights-searcher-more-options');

  divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);
  // ***************************************************************************

  let multiFlightDiv = $('.flights-searcher-roundtrip-multi');
  let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

  label.text('Multidestino');
  document.querySelector('.radio').style.display = 'inline-block';

  // MULT-114
  const calendarContainers = document.querySelectorAll('.js-calendar-container');
  calendarContainers.forEach((container) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
        filterButton.style.display = mutation.target.classList.contains('closed') ? 'block' : 'none';
      });
    });
    observer.observe(container, { attributes: true });
  });

  const textBtn = document.querySelector('.btn-tertiary');
  textBtn.textContent = 'filtro';
  // *************************************************************************************************
});