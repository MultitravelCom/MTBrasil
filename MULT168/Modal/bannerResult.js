function ButtonBannerResult(props) {

    const handleClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}
const BannerSearchResult = () => {
    return (
        <>
            <div className="container_fluid">
                <div className="main__container__text">
                    <h2>¿NVocê precisa de ajuda com sua reserva?</h2>
                    <p>Entre em contato através do XXXX-XXX-XXXX (Venda) ou Whatsapp (Pós-Venda) para receber atendimento personalizado</p>
                </div>
                <div className="main__container__img">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <img className="main__container__img__img" src="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" alt="Contato personalizado do banner de imagem" />
                    </picture>
                    <ButtonBannerResult id="btnBannerSearch" style="btn btnStyleBannerSearch" link="https://wa.link/j47nea" text="contate-me" />
                </div>
            </div>
        </>
    );
};
const insertNewDivSearchResult = async () => {
    const observer = new MutationSummary({
        callback: handleDOMChanges,
        queries: [{ element: '.results-list__page' }]
    });

    const parentDiv = document.querySelector('.results-list__page');
    const firstChildDiv = document.querySelector('.results-list__item');

    if (parentDiv && firstChildDiv) {
        const newDiv = document.createElement('div');
        firstChildDiv.parentNode.insertBefore(newDiv, firstChildDiv.nextSibling);
        ReactDOM.render(<BannerSearchResult />, newDiv);
    }

    function handleDOMChanges(summaries) {
        const summary = summaries[0];

        if (summary.added.length > 0) {
            const newDiv = document.createElement('div');
            const firstChildDiv = summary.added[0].querySelector('.results-list__item');
            firstChildDiv.parentNode.insertBefore(newDiv, firstChildDiv.nextSibling);
            ReactDOM.render(<BannerSearchResult />, newDiv);
        }
    }
};

insertNewDivSearchResult();
