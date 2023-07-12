document.addEventListener('DOMContentLoaded', async function () {

    observarCambiosCheckAndRender();
    changeDropdownDetailsFlight();
});

/*

const elements = document.getElementsByClassName('flight-result__segments-toggle');
Array.from(elements).forEach((element) => {
  element.style.display = 'none';
});


// Step 1: Select the target elements
const claseSinEscalas = document.querySelectorAll('.flight-result__stops');
// Create a new image element
const imageElement = document.createElement('img');

// Step 2 and 3: Add SVG element before the text
claseSinEscalas.forEach(element => {

    // Create a new image element
    
    imageElement.setAttribute('src', 'https://multitravelcom.github.io/components/MULT310/icons/SinEscalas.svg'
 );
    imageElement.setAttribute('alt', 'Icono Sin Escalas');
    imageElement.style.display = 'inline-block'

    
  //  const paragraphElement = document.createElement('p');
//paragraphElement.textContent = 'Hola';
//paragraphElement.style.display = 'inline-block'

//element.insertBefore(paragraphElement, textElement);
    // Insert the image element before the text within the stops element
    element.insertBefore(imageElement, element.firstChild);
});


*/
const FlightResultsDetails = () => {
    return (
        
        <div className="result-option__content">
            <div className="flight-result__info">
                <div className="flight-result__airline hidden-sm hidden-md hidden-lg">
                    <span className="flight-result__airline-name">Aerolineas Pepito</span>
                    <span className="flight-result__airline-logo"><img loading="lazy" alt="Aerolineas Argentinas" src="https://images.bookingengine.es/comun/flights/airline_s/AR.png"></img></span>
                </div>

                <div className="flight-result__stops">
                    <button type="button" className="flight-result__segments-toggle js-flight-segments-toggle">
                        <span className="glyphicon glyphicon-menu-down"></span>
                    </button>
                            
                        
                            Sem escalas
                </div>

                <div className="flight-result__duration">
                    <span data-toggle="tooltip" data-placement="top" className="flight-result__baggage-item" title="" data-original-title="Duração do voo">
                            <span className="glyphicon glyphicon-duration"></span>0h 50m
                    </span>
                    

                        <span data-toggle="tooltip" data-placement="top" className="flight-result__baggage-item" title="" data-original-title="2 Lugares disponíveis">
                        <span className="flight-result__places">
                            <span className="glyphicon glyphicon-places"></span>2
                        </span>
                        </span>


                </div>
                
                <div className="flight-result__airline hidden-xs">
                    <span className="flight-result__airline-name">Aerolineas Argentinas</span>
                    <span className="flight-result__airline-logo"><img loading="lazy" alt="Aerolineas Argentinas" src="https://images.bookingengine.es/comun/flights/airline_s/AR.png"></img></span>
                </div>

            </div>
        </div>
        
    );
};

/*
const flightResultsDetails = document.querySelector('.result-option__content');
ReactDOM.render(<FlightResultsDetails />, flightResultsDetails);
*/


//ReactDOM.createRoot(document.querySelector('.result-option__content')).render(<FlightResultsDetails />);

