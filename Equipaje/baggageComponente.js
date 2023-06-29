function moveBaggageSelection() {
    const baggageSelections = document.querySelectorAll('.booking-paxes__baggage-selection');
    if (baggageSelections.length > 0) {
        const productElement = document.querySelector('.booking-data__product');
        productElement.insertAdjacentElement('afterend', baggageSelections[0]);

        // Agregar estilo display:flex al primer elemento
        baggageSelections[0].style.display = 'flex';

        const baggageSections = document.querySelectorAll('.baggage-selection__bag-section');
        if (baggageSections.length > 0) {
            // Agregar clase 'block' solo al primer elemento
            baggageSections[0].style.display = 'block';
        }
    } else {
        setTimeout(moveBaggageSelection, 100);
    }
}

// Inicia la función cuando la página haya terminado de cargar
window.addEventListener('load', moveBaggageSelection);


function ButtonBaggage(props) {

    const [hrefDelBotonOriginal, setHrefDelBotonOriginal] = React.useState('');

    React.useEffect(() => {
        const botonOriginal = document.querySelector('.page-header-bar__back-button');
        if (botonOriginal) {
            const href = botonOriginal.getAttribute('href');
            setHrefDelBotonOriginal(href);
        }
    }, []);


    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = hrefDelBotonOriginal;
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const BaggagePax = () => {


    const [containerReady, setContainerReady] = React.useState(false);

    React.useEffect(() => {
        const container = document.querySelector('.booking-paxes__baggage-selection');
        if (container) {
            setContainerReady(true);
        }
    }, []);


    return (
        <>
            {containerReady &&
                <div className="main__bookingPaxes">
                    <div className="main__bookingPaxes__span">
                        <span>Quantidade de bagagem</span>
                    </div>

                    <div className="main__bookingPaxes__text">
                        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                        <p className="bookingPaxes__p">Para ver mais voos com outra quantidade de bagagem, selecione "Voltar" e use nossos filtros para uma busca mais precisa.</p>
                        <div className="main__bookingPaxes__style" >
                            <ButtonBaggage style="main__bookingPaxes__btn" text="< RETORNAR" />
                        </div>
                    </div>

                </div>
            }
        </>
    );

}

const bookingPaxesContainer = document.querySelector(".booking-paxes__baggage-selection");
const baggagePaxContainer = document.createElement("div");
bookingPaxesContainer.appendChild(baggagePaxContainer);
ReactDOM.render(<BaggagePax />, baggagePaxContainer);