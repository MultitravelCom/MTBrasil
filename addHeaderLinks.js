function getSubdomain() {
    return window.location.hostname.split('.')[0].toLowerCase();
}

function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const path = window.location.pathname;
    const subdomain = getSubdomain();

    if (subdomain === 'br') {
        const bannerNoResult = document.createElement('script');
        const bannerNoResultStyle = document.createElement('link');

        bannerNoResult.src = 'https://multitravelcom.github.io/MTBrasil/NoResult/bannerNoResult.js';
        bannerNoResult.type = "text/babel";

        bannerNoResultStyle.href = "https://multitravelcom.github.io/MTBrasil/NoResult/noResultStyle.css";
        bannerNoResultStyle.rel = "stylesheet";

        head.appendChild(bannerNoResultStyle);
        head.appendChild(bannerNoResult);
    }

    const priceFinalFlight = path.includes('/results');
    if (priceFinalFlight) {
        const priceFinalFlightScript = document.createElement('script');

        priceFinalFlightScript.src = 'https://multitravelcom.github.io/style/General/components/PrecioFinalFlight/finalPriceFlight.js';


        head.appendChild(priceFinalFlightScript);
    }
    const bannerTop = path.includes('/results') || path.includes('/booking/');
    if (!bannerTop) {
        const bannerTopStyle = document.createElement('link');
        // const bannerTopScript = document.createElement('script');

        // bannerTopScript.src = 'https://multitravelcom.github.io/style/General/components/BannerTop.js';
        // bannerTopScript.type = "text/babel";

        bannerTopStyle.href = "https://multitravelcom.github.io/style/General/components/styleBannerTop.css";
        bannerTopStyle.rel = "stylesheet";

        head.appendChild(bannerTopStyle);
        // head.appendChild(bannerTopScript);
    }

    const recomendadoHotels = path.includes('/hotels/');
    if (recomendadoHotels) {
        const recomendadoHotelsStyle = document.createElement('link');

        recomendadoHotelsStyle.href = "https://multitravelcom.github.io/style/General/components/RecomendadoHotels/recomendadosHotels.css";
        recomendadoHotelsStyle.rel = "stylesheet";

        head.appendChild(recomendadoHotelsStyle);
    }

    const copyBaggage = path.includes('/flights/booking');
    if (copyBaggage) {
        const copyBaggageStyle = document.createElement('link');
        const copyBaggageScript = document.createElement('script');

        copyBaggageScript.src = 'https://multitravelcom.github.io/MTBrasil/Equipaje/baggageComponente.js';
        copyBaggageScript.type = "text/babel";

        copyBaggageStyle.href = "https://multitravelcom.github.io/MTBrasil/Equipaje/baggageComponenteStyle.css";
        copyBaggageStyle.rel = "stylesheet";

        head.appendChild(copyBaggageScript);
        head.appendChild(copyBaggageStyle);
    }

    // ******************************** MULT-258 ****************************************************************

    if (path.includes('/results') || path.includes('/details') || path.includes('/flights/booking') || path.includes('/hotels/booking') || path.includes('/booking')) {
        const metaTag = document.createElement('meta');
        metaTag.name = 'robots';
        metaTag.content = 'noindex';

        const headElement = document.getElementsByTagName('head')[0];
        headElement.appendChild(metaTag);
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://unpkg.com/styled-components/dist/styled-components.min.js';
    document.body.appendChild(scriptElement);
    // **************************************
    const linkElement = document.createElement('link');

    // Establecer los atributos del enlace
    linkElement.setAttribute('rel', 'alternate');
    linkElement.setAttribute('hreflang', 'pt-br');
    linkElement.setAttribute('href', 'https://br.multitravel.com');

    // Agregar el elemento <link> al head del documento HTML
    document.head.appendChild(linkElement);
}
addHeaderLinks();


