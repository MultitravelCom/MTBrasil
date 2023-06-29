function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];

    const bannerNoResultStyle = document.createElement('link');
    const bannerNoResult = document.createElement('script');

    bannerNoResult.src = 'https://multitravelcom.github.io/style/General/bannerNoResult.js';
    bannerNoResult.type = "text/babel";

    bannerNoResultStyle.href = "https://multitravelcom.github.io/style/General/noResultStyle.css";
    bannerNoResultStyle.rel = "stylesheet";

    head.appendChild(bannerNoResultStyle);
    head.appendChild(bannerNoResult);


    const path = window.location.pathname;


    const copyTaxRg = path.includes('/flights') || path.includes('/booking/') || path.includes('/hotels/');
    if (copyTaxRg) {
        const copyTaxRegStyle = document.createElement('link');
        const copyTaxRegJs = document.createElement('script');

        copyTaxRegJs.src = 'https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRg.js';

        copyTaxRegStyle.href = "https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRgStyle.css";
        copyTaxRegStyle.rel = "stylesheet";

        head.appendChild(copyTaxRegStyle);
        head.appendChild(copyTaxRegJs);
    }
    const copyTaxRgComponent = path.includes('/flights/results');

    // if (copyTaxRgComponent) {
    //     const copyTaxRgComponentJs = document.createElement('script');
    //     copyTaxRgComponentJs.src = 'https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRgComponent.js';
    //     copyTaxRgComponentJs.type = "text/babel";

    //     head.appendChild(copyTaxRgComponentJs);
    // }

    const priceFinalFlight = path.includes('/results');
    if (priceFinalFlight) {
        const priceFinalFlightScript = document.createElement('script');

        priceFinalFlightScript.src = 'https://multitravelcom.github.io/style/General/components/PrecioFinalFlight/finalPriceFlight.js';


        head.appendChild(priceFinalFlightScript);
    }
    const bannerTop = path.includes('/results') || path.includes('/booking/');
    if (!bannerTop) {
        const bannerTopStyle = document.createElement('link');
        const bannerTopScript = document.createElement('script');

        bannerTopScript.src = 'https://multitravelcom.github.io/style/General/components/BannerTop.js';
        bannerTopScript.type = "text/babel";

        bannerTopStyle.href = "https://multitravelcom.github.io/style/General/components/styleBannerTop.css";
        bannerTopStyle.rel = "stylesheet";

        head.appendChild(bannerTopStyle);
        head.appendChild(bannerTopScript);
    }

    const recomendadoHotels = path.includes('/hotels/');
    if (recomendadoHotels) {
        const recomendadoHotelsStyle = document.createElement('link');
        const recomendadoHotelsJs = document.createElement('script');

        recomendadoHotelsJs.src = 'https://multitravelcom.github.io/style/General/components/RecomendadoHotels/recomendadosHotels.js';

        recomendadoHotelsStyle.href = "https://multitravelcom.github.io/style/General/components/RecomendadoHotels/recomendadosHotels.css";
        recomendadoHotelsStyle.rel = "stylesheet";

        head.appendChild(recomendadoHotelsStyle);
        head.appendChild(recomendadoHotelsJs);
    }

    const copyBaggage = path.includes('/flights/booking');
    if (copyBaggage) {
        const copyBaggageStyle = document.createElement('link');
        const copyBaggageScript = document.createElement('script');

        copyBaggageScript.src = 'https://multitravelcom.github.io/style/General/components/Equipaje/baggageComponente.js';
        copyBaggageScript.type = "text/babel";

        copyBaggageStyle.href = "https://multitravelcom.github.io/style/General/components/Equipaje/baggageComponenteStyle.css";
        copyBaggageStyle.rel = "stylesheet";

        head.appendChild(copyBaggageScript);
        head.appendChild(copyBaggageStyle);
    }

    // const transferenciaComponent = path.includes('/confirmBooking');
    // if (transferenciaComponent) {
    //     const transferenciaComponentStyle = document.createElement('link');
    //     const transferenciaComponentScript = document.createElement('script');

    //     transferenciaComponentScript.src = 'https://multitravelcom.github.io/style/General/Transferencias/transferencia.js';
    //     transferenciaComponentScript.type = "text/babel";

    //     transferenciaComponentStyle.href = "https://multitravelcom.github.io/style/General/Transferencias/styletransferencia.css";
    //     transferenciaComponentStyle.rel = "stylesheet";

    //     head.appendChild(transferenciaComponentStyle);
    //     head.appendChild(transferenciaComponentScript);
    // }

    // const cuponSeccion = path.includes('/booking/');
    // if(cuponSeccion){
    //     const cuponSeccionScript = document.createElement('script');
    //     const cuponSeccionStyle = document.createElement('link');

    //     cuponSeccionScript.src = 'https://multitravelcom.github.io/style/General/components/CuponSeccion/cuponSeccion.js';


    //     cuponSeccionStyle.href = "https://multitravelcom.github.io/style/General/components/CuponSeccion/cuponSeccion.css";
    //     cuponSeccionStyle.rel = "stylesheet";

    //     head.appendChild(cuponSeccionStyle);
    //     head.appendChild(cuponSeccionScript);
    // }

    // ******************************** MULT-258 ****************************************************************

    if (path.includes('/results') || path.includes('/details') || path.includes('/flights/booking') || path.includes('/hotels/booking') || path.includes('/booking')) {
        const metaTag = document.createElement('meta');
        metaTag.name = 'robots';
        metaTag.content = 'noindex';

        const headElement = document.getElementsByTagName('head')[0];
        headElement.appendChild(metaTag);
    }

}
addHeaderLinks();

//************************************ MULT-213*************************************************************** */
window.addEventListener('load', () => {

    let buttonNewsletter = document.querySelector('button[data-target="#-newsletter-container"]');
    let divNewsletter = buttonNewsletter.querySelector('.quicklink-elem-label');

    divNewsletter.textContent = 'Suscribite a nuestro Newsletter ';

    let modalNewsletter = document.querySelector('#-newsletter-container');
    let titleNewsletter = modalNewsletter.querySelector('.content-title');

    titleNewsletter.textContent = 'Suscribite a nuestro Newsletter ';

});

//*************************************************************************************************** */


