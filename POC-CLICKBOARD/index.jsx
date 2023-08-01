   
const ClipBoardButton = () => {
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

function addClipboard () {
    let bannerContainer = document.querySelector('.bannerTop__center');
console.log("------------->:  ", bannerContainer)
    const nuevoDiv = document.createElement('div');

    bannerContainer.appendChild(v);

    nuevoDiv.classList.add('container_clickboard');
    nuevoDiv.style.height = '100px';
    nuevoDiv.style.width = '100px';
    nuevoDiv.style.backgroundColor= 'blue';

    ReactDOM.render(<ClipBoardButton />, nuevoDiv);
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("window.location.href ------->>>>> ", window.location.href)
    if (window.location.href.includes('https://onefiveb2b.juniperbetemp.com/flights/')) {
        addClipboard();
    }else if (window.location.href.includes('/flights/booking')){
      changeStyleBooking();
    }
  });

  

  const insertNewDivSearchResult = async () => {
    const observer = new MutationSummary({
        callback: addClipboard,
        queries: [{ element: '.bannerTop__center' }]
    });

    
};

insertNewDivSearchResult();
