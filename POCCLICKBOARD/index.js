   

const CardCupon = () => {
    return (
        <>
        <div className="card_cupon">
            <div className="div__clickboard_descripcion">
             Copia el codigo de tu cupon!
            </div>
            <div className="div__clickboard">
                <span className="glyphicon glyphicon-new-window new-window__icon"></span>
                <span className="new-window__text">SDASFS5F43T3JJJ42322</span>
            </div>
        </div>
        </>
    );
};

function addClipboard () {
    let bannerContainer = document.querySelector('.main__container__bannerTop');
console.log("------------->:  ", bannerContainer)
    const nuevoDiv = document.createElement('div');
    const firstChild = bannerContainer.firstChild;
    
    nuevoDiv.classList.add('container_cards_clickboard');
    ///////////////////////////////
    for (let row = 0; row < 2; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
      
        for (let col = 0; col < 4; col++) {
          const clipboardButtonDiv = document.createElement('div');
          clipboardButtonDiv.classList.add('clipboardButtonContainer');
      
          // Render the ClipboardButton component and append it to the row
          ReactDOM.render(<ClipboardButton />, clipboardButtonDiv);
          rowDiv.appendChild(clipboardButtonDiv);
        }
      
        // Append the row to nuevoDiv
        nuevoDiv.appendChild(rowDiv);
      }
    ///////////////////////
    ReactDOM.render(<CardCupon />, nuevoDiv);
    bannerContainer.insertBefore(nuevoDiv, firstChild);
}


console.log("holaaaaaaaaaaa")

document.addEventListener('DOMContentLoaded', () => {
    console.log("----------->>>>>>>>>>>>>>>>>>>DOMContentLoaded")
    console.log("window.location.href ------->>>>> ", window.location.href)
    //addClipboard();
    
  });

  window.addEventListener('load', () => {
    console.log("----------->>>>>>>>>>>>>>>>>>>load");
    console.log("----------->>>>>>>>>>>>>>>>>>>load")
    console.log("window.location.href ------->>>>> ", window.location.href)
    addClipboard();
    
  });
/*
  const insertNewDivSearchResult = async () => {
    const observer = new MutationSummary({
        callback: addClipboard,
        queries: [{ element: '.bannerTop__center' }]
    });

    
};

insertNewDivSearchResult();
*/