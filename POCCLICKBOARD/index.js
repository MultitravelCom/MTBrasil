   

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
    let bannerContainer = document.querySelector('.home-v5');
    const nuevoDiv = document.createElement('div');
    const firstChild = bannerContainer.firstChild;
    
    nuevoDiv.classList.add('container_cards_clickboard');
    ///////////////////////////////
    for (let row = 0; row < 2; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row-cards');
      
        for (let col = 0; col < 4; col++) {
          const clipboardButtonDiv = document.createElement('div');
          clipboardButtonDiv.classList.add('clipboardButtonContainer');
      
          // Render the ClipboardButton component and append it to the row
          ReactDOM.render(<CardCupon />, clipboardButtonDiv);
          rowDiv.appendChild(clipboardButtonDiv);
        }
      
        // Append the row to nuevoDiv
        nuevoDiv.appendChild(rowDiv);
      }
    ///////////////////////
    bannerContainer.insertBefore(nuevoDiv, firstChild);
    addClickListenerToCopyButtons();
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    console.log(text)
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  function addClickListenerToCopyButtons () {
      // Get all the copy buttons
      const cards = document.querySelectorAll('.clipboardButtonContainer');

      cards.forEach(button => {
        const copyButton = button.querySelector('.glyphicon.glyphicon-new-window.new-window__icon');
        console.log("Button:", copyButton)
        button.addEventListener('click', () => {
            console.log("inside the event")
          // Get the key ID associated with this button
          const keyId = button.previousElementSibling.textContent.trim();
    
          // Copy the key ID to the clipboard
          copyToClipboard(keyId);
    
          // (Optional) Show a message to indicate successful copy (can be done with a tooltip or a simple alert)
          alert('Key ID copied to clipboard: ' + keyId);
        });
      });
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