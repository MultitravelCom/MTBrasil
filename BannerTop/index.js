function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

function cambiarUrlImg() {
    const fechaActual = new Date();
    const fechaLimite = new Date('2023-05-10T23:59:00');
    const esAntesDeLaFechaLimite = fechaActual < fechaLimite;

    if (esAntesDeLaFechaLimite) {
        return 'https://multitravelcom.github.io/MTBrasil-Img/Secciones/BannerPrincipal/BannerB'; // Se va a mostrar. 
    } else {
        return 'https://multitravelcom.github.io/MTBrasil-Img/Secciones/BannerPrincipal/BannerB'; // Se esta mostrando.
    }
}

const BannerTop = () => {

    const showPackageImages = window.location.pathname.includes('/packages');
    const UrlImgPaquetes = cambiarUrlImg();
    const UrlImgPaquetes = cambiarUrlImg();

    return (
        <>
            <div className="container-fluid main__container__bannerTop scroll-mobile">
                <div id="bannerTop__left" className="main__container_left">
                    <a href="https://br.multitravel.com/hotels/results.aspx?destinationID=46533&nationality=BR&endDate=2024-01-16&paxs=20&accion=searchhotels&startDate=2024-01-15&secondarySearch=false" target="_blank">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                }
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                }

                            />
                            <source
                                media="(max-width: 767px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                        : `${UrlImgPaquetes}/bannerMobile-1.webp`
                                }
                            />
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                }
                            />
                        </picture>
                    </a>
                    {/* {showPackageImages && (<Button style="btn btnStyleBannerPre" link="#" text="Ver Más" />)} */}
                </div>
                <div id="bannerTop__center" className="main__container_center">
                    <a href="https://br.multitravel.com/hotels/results.aspx?destinationID=43157&nationality=BR&endDate=2024-01-16&paxs=20&accion=searchhotels&startDate=2024-01-15&secondarySearch=false" target="_blank">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                }
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                }
                            />
                            <source
                                media="(max-width: 767px)"
                                srcSet={
                                    showPackageImages

                                        ? `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                        : `${UrlImgPaquetes}/bannerMobile-2.webp`
                                }
                            />
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                }
                            />
                        </picture>
                    </a>
                    {/* {showPackageImages && (<Button style="btn btnStyleBannerPre" link="#" text="Ver Más" />)} */}

                </div>
                <div id="bannerTop__rigth" className="main__container_right">
                    <a href="https://br.multitravel.com/hotels/" target="_blank">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                }
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                }
                            />
                            <source
                                media="(max-width: 767px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                        : `${UrlImgPaquetes}/bannerMobile-3.webp`
                                }
                            />
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                        : `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                }
                            />
                        </picture>
                    </a>
                    {/* {showPackageImages && (<Button style="btn btnStyleBannerPre" link="#" text="Ver Más" />)}; */}
                </div>
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('home-content-5')).render(<BannerTop />);