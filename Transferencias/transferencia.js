
function checkPaymentMethod() {
    const gatewaySelect = document.querySelector('.js-enhanced-select.pos__field-select');

    if (gatewaySelect) {
        const selectedOption = gatewaySelect.options[gatewaySelect.selectedIndex];
        const dataConfigId = selectedOption.getAttribute('data-config-id');

        if (dataConfigId) {
            const configId = parseInt(dataConfigId);

            return configId;
        }
    }

    return null;
}

const TransferenciaComponentMP = () => {

    const hostParts = window.location.hostname.split('.')[0].toLowerCase();
    console.log("🚀 ~ TransferenciaComponentMP ~ hostParts:", hostParts)


    const basePaths = {
        br: 'https://multitravelcom.github.io/MTBrasil-Img/Booking-2/MercadoPago/',
        cl: 'https://multitravelcom.github.io/MTBrasil-Img/Booking-2/MercadoPago/Chile/',
        uy: 'https://multitravelcom.github.io/MTBrasil-Img/Booking-2/MercadoPago/Chile/'
    };

    const basePath = basePaths[hostParts]

    return (
        <div className="main__transferencia">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={`${basePath}Desktop.png`}
                />
                <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet={`${basePath}Tablet.png`}
                />
                <source
                    media="(max-width: 767px)"
                    srcSet={`${basePath}Mobile.png`}
                />
                <img
                    alt="Método de pago"
                    src={`${basePath}Desktop.png`}
                />
            </picture>
        </div>
    );
};

const TransferenciaComponent = () => {
    const hostParts = window.location.hostname.split('.')[0].toLowerCase();
    const basePaths = {
        br: 'https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/',
        cl: 'https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/Chile/',
        uy: 'https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/Chile/'
    };

    const basePath = basePaths[hostParts]

    return (
        <>
            <div className="main__transferencia">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={`${basePath}Desktop.png`}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet={`${basePath}Tablet.png`}
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={`${basePath}Mobile.png`}
                    />
                    <img
                        alt="Método de pago"
                        src={`${basePath}Desktop.png`}
                    />
                </picture>
            </div>
        </>
    );
};

const paymentMethod = checkPaymentMethod();
const shouldRenderTransferencia = paymentMethod === 12 || paymentMethod === 14;
const paymentInfoContainer = document.querySelector('.booking-payment__info.prepayment');

if (shouldRenderTransferencia) {
    const posElement = document.querySelector('.booking-payment__info.pos');
    const transferenciaContainer = document.createElement('div');

    ReactDOM.render(<TransferenciaComponentMP />, transferenciaContainer);
    posElement.appendChild(transferenciaContainer);
}
if (paymentInfoContainer) {
    ReactDOM.render(<TransferenciaComponent />, paymentInfoContainer);
}  