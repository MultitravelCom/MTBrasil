const TransferenciaComponent = () => {
    return (
        <>
            <div className="main__transferencia">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenDesktop.webp"
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenTablet.webp"
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet="https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenMobile.webp"
                    />
                    <img
                        alt=""
                        src="https://multitravelcom.github.io/MTBrasil-Img/Booking-2/ComoPagar/ImagenDesktop.webp"
                    />
                </picture>
            </div>
        </>
    );
};

const paymentInfoContainer = document.querySelector('.booking-payment__info.prepayment');
ReactDOM.render(<TransferenciaComponent />, paymentInfoContainer);