// Banner Redes
const BannerRedes = () => {
    return (
        <>
            <div className="main_conteiner__s1_medio top_mkt">
                <h2 className="main__conteiner__titulo">
                    ¡Não perca nada, siga-nos!
                </h2>
                <div className="main_conteiner__s1_medio__paquetes">
                    <a href="https://www.instagram.com/multitravelcom/" target="_blank">
                        <picture>
                            <source media="(min-width: 1024px)" srcSet="
          https://multitravelcom.github.io/MT/Secciones/RedesSociales/Banner-MKT-Redes-1.jpg
        " />
                            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="
          https://multitravelcom.github.io/MT/Secciones/RedesSociales/Banner-MKT-Redes-2.jpg
        " />
                            <source media="(max-width: 767px)" srcSet="
          https://multitravelcom.github.io/MT/Secciones/RedesSociales/Banner-MKT-Redes-3.jpg
        " />
                            <img src="https://multitravelcom.github.io/MT/Secciones/RedesSociales/Banner-MKT-Redes-1.jpg"
                                alt="Imagen banner promocion redes sociales" />
                        </picture>
                    </a>
                </div>
            </div>
        </>
    )
}
// Componente medios de pago.
const MediosDePagos = () => {
    return (
        <>
            <h2 className="main__conteiner__titulo">
            Meios de pagamento
            </h2>
            <div className="main__conteiner__s2__pagos">
                <div className="main__conteiner__s2__pagos__card uno__s2">
                    <div className="main__conteiner__s2__pagos__card__texto">
                        <h4>Você decide</h4>
                        <p>Encontre todos os meios de pagamento exclusivos para você </p>
                        <button className="main__conteiner__s2__pagos__btn">
                            <a href="https://www.multitravel.com/medios-de-pago" target="_blank"
                                style={{ color: "white", textDecoration: "none" }}>Descobrir</a>
                        </button>
                    </div>
                    <div className="main__conteiner__s2__pagos__card__img">
                        <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/mediospagos-01.webp" />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/mediospagos-02.webp" />
                        <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/mediospagos-03.webp" />
                        <img alt={`Imagen banner`} src="https://multitravelcom.github.io/MT/Secciones/MediosPagos/mediospagos-01.webp" />
                    </div>
                </div>
                <div className="main__conteiner__s2__pagos__card dos__s2">
                    <a href="https://www.multitravel.com/ahora12" target="_blank">
                        <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-02.webp" />
                        <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-03.webp" />
                        <img alt={`Imagen banner Ahora12`} src="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
                    </a>
                </div>
            </div>
        </>
    )
}

// Lo mejor de Multitravel.com
const Secciones = ({ seccion, url, className }) => {
    return (
        <>
            <div className={`col-md-4 col-xs-12 hover__s3 ${className}`}>
                <a href={url} target="_blank">
                    <div className="main__conteiner__s3__piensa__parrafo">
                        <p>{seccion}</p>
                    </div>
                </a>
            </div>
        </>
    );
};

function Ofertas(props) {
    return (
        <>
            <h2 className="main__conteiner__titulo">Mais ofertas em Multitravel.com</h2>
            <div className="main__conteiner">
                <div className="main__conteiner__s3__piensa row-cols-3">
                    <Secciones seccion={props.seccion1} url={props.url1} className={props.className1} />
                    <Secciones seccion={props.seccion2} url={props.url2} className={props.className2} />
                    <Secciones seccion={props.seccion3} url={props.url3} className={props.className3} />
                </div>
            </div>
        </>
    );
}

const LoMejorDe = () => {
    const path = window.location.pathname;

    if (path === '/flights/') {
        return (
            <>
                <Ofertas
                    seccion1="Acomodações"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Pacotes"
                    url2="https://www.multitravel.com/packages/flighthotel/"
                    className2="dos__s3"
                    seccion3="Seguros"
                    url3="https://www.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else if (path === '/hotels/') {
        return (
            <>
                <Ofertas
                    seccion1="Pacotes"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Voos"
                    url2="https://www.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3="Seguros"
                    url3="https://www.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else if (path === '/packages/flighthotel/') {
        return (
            <>
                <Ofertas
                    seccion1="Acomodações"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Voos"
                    url2="https://www.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3="Seguros"
                    url3="https://www.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else {
        return (
            <>
                <Ofertas
                    seccion1="Acomodações"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Voos"
                    url2="https://www.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3="Pacotes"
                    url3="https://www.multitravel.com/packages/flighthotel/"
                    className3="tres__s3"
                />
            </>
        );
    };
}

const App = () => {
    return (
        <>
            <div id="mediosDePago">
                <MediosDePagos />
            </div>
            <div id="bannerRedes">
                <BannerRedes />
            </div>
            <div id="loMejorDe" className="main__conteiner__s3">
                <LoMejorDe />
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('rootHome')).render(<App />);

