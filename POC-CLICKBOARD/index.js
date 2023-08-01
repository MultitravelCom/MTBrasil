   
const CompartirAlojamiento = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <div className="div__clickboard">
                <span className="glyphicon glyphicon-new-window new-window__icon"></span>
                <span className="new-window__text">Copia el codigo de tu cupon!</span>
            </div>
        </>
    );
};



const agregarClickboardButton = async () => {
    console.log("checkAndRender ------------> is RUNNING");
    /*
    let infoCardContents = document.querySelectorAll('.info-card__content');
    let infoCardImgContents = document.querySelectorAll('.info-card__image');
    */
    
    
};



/*
document.addEventListener('DOMContentLoaded', () => {
    console.log("window.location.href ------->>>>> ", window.location.href)
    if (window.location.href.includes('https://onefiveb2b.juniperbetemp.com/flights/')) {
        agregarClickboardButton();
    }else if (window.location.href.includes('/flights/booking')){
      changeStyleBooking();
    }
  });

  */

  const insertNewDivSearchResult = async () => {
    const observer = new MutationSummary({
        callback: handleDOMChanges,
        queries: [{ element: '.bannerTop__center' }]
    });

    let bannerContainer = document.querySelector('.bannerTop__center');
   
    const nuevoDiv = document.createElement('div');

    bannerContainer.appendChild(v);

    nuevoDiv.classList.add('container_clickboard');
    nuevoDiv.style.height = '100px';
    nuevoDiv.style.width = '100px';
    nuevoDiv.style.backgroundColor= 'blue';

    ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
};

insertNewDivSearchResult();
