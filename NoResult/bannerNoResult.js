function ButtonBannerResult(props) {

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "https://br.multitravel.com/contato";
  }

  return (
    <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
  );
}

function BannerNoResult() {
  return (
    <>
      <div className="container-fluid container__bannerNoResultr">
        <div className="bannerNoResultr_text">
          <h2>Sentimos muito...</h2>
          <p className="bannerNoResultr_text__p1">
            Estamos trabalhando para expandir nossa oferta de produtos.</p>
          <p className="bannerNoResultr_text__p2">Convidamos você a consultar nossa equipe de atendimento personalizado para a mesma ou outras alternativas.</p>
          <ButtonBannerResult id="btnBannerSearch" style="btn btn_Style_NoResult" link="" text="contate-me" />
        </div>
        <div className="bannerNoResultr_img">
          <img alt="icono signo de interrogación" src="https://multitravelcom.github.io/style/General/img/iconresultado.png" />
        </div>
      </div>
    </>
  );
}

// Función que renderiza el componente <BannerNoResult />
function renderBannerNoResult() {
  ReactDOM.createRoot(document.querySelector('.results-list__body')).render(<BannerNoResult />);
}

function checkForClass() {
  const el = document.querySelector('.msg-box--no-results');
  const table = document.querySelector('.booking-breakdown__table');

  if (el) {
    // Si la clase msg-box--no-results está disponible, se renderiza el componente
    renderBannerNoResult();
    table.style.display = 'none';
    observer.disconnect();
  }
}

// Crea una instancia de MutationObserver
const observer = new MutationObserver(checkForClass);

// Observa los cambios en el cuerpo del documento
observer.observe(document.body, { childList: true, subtree: true });

// Comprueba si la clase ya está disponible en el DOM
checkForClass();