function checkPaymentMethod() {
    const gatewaySelect = document.querySelector('.js-enhanced-select.pos__field-select');

    gatewaySelect.addEventListener('change', handleGatewayChange);

    function handleGatewayChange(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const dataConfigId = selectedOption.getAttribute('data-config-id');
        const configId = parseInt(dataConfigId);

        setSelectedConfigId(configId);
    }
}

const TransferenciaComponent = () => {
    const [selectedConfigId, setSelectedConfigId] = React.useState(null);

    React.useEffect(() => {
        const gatewaySelect = document.querySelector('.js-enhanced-select.pos__field-select');
        
        function handleChange(event) {
            handleGatewayChange(event, setSelectedConfigId);
        }

        gatewaySelect.addEventListener('change', handleChange);
        
        return () => {
            gatewaySelect.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <>
            <div className="main__transferencia">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={selectedConfigId === 12 ? "https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Desktop.png" : "https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenDesktop.webp"}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet={selectedConfigId === 12 ? "https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Tablet.png" : "https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenTablet.webp"}
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={selectedConfigId === 12 ? "https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Mobile.png" : "https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenMobile.webp"}
                    />
                    <img
                        alt=""
                        src={selectedConfigId === 12 ? "https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Desktop.png" : "https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenDesktop.webp"}
                    />
                </picture>
            </div>
        </>
    );
};

const paymentInfoContainer = document.querySelector('.booking-payment__info.prepayment');
ReactDOM.render(<TransferenciaComponent />, paymentInfoContainer);