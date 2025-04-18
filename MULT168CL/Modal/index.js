function addHideDuplicateButtonLogic() {
    const targetElementUser = document.querySelector('#main-menu-features');

    const buttonHTML = `
      <div class="upper-menu_quicklinks btn-toolbar visible-xs-block visible-sm-block">
        <button type="button" class="btn upper-menu__newsletter-button features_item js-login-box-modal btn-user">
          <span class="glyphicon glyphicon-user-profile" aria-hidden="true"></span>
          <span class="sr-only">Ingreso</span>
          <span class="quicklink-elem-label">Ingreso</span>
        </button>
      </div>
    `;

    targetElementUser.insertAdjacentHTML('beforeend', buttonHTML);

    const buttonsBtnUser = targetElementUser.querySelectorAll('.btn-user');

    if (buttonsBtnUser.length > 1) {
        buttonsBtnUser[1].classList.add('hidden');
    }
}
addHideDuplicateButtonLogic();

function ButtonARSEs() {
    return (
        <div className="main_container__buttonARSEs">
            <div className="main_container__buttonARSEs__ARS">
                <div>
                    <img src="https://multitravelcom.github.io/components/MULT168CL/icons/IconoPesos.png"></img>
                    <span>CL</span>
                </div>
            </div>
            <div className="main_container__buttonARSEs__Es">
                <div>
                    <img src="https://multitravelcom.github.io/MTBrasil/MULT168CL/icons/chile.svg"></img>
                    <span>CL</span>
                </div>
            </div>
        </div>
    );
}
function ButtonIngresar(props) {
    return (
        <button id={props.id} className={props.style}>{props.children}</button>
    );
}

function ButtonModalLink(props) {
    const handleClick = (event) => {
        console.log("callToPhone:", props.callToPhone);
        event.preventDefault();
        if (props.callToPhone) {
            window.location.href = `tel:${props.link}`;
        } else {
            window.open(props.link, '_blank');
        }
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

function ButtonModal(props) {
    const handleClick = (event) => {
        event.preventDefault();
        props.onClick();
    };

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>
            {props.children}
        </button>
    );
}

const ButtonWidget = () => {

    if (window.innerWidth <= 768) {
        return null;
    }
    return (
        <div className="main__container__buttonWidget">
            <div className="glyphicon glyphicon-agent agentWidget"></div>
            <div className="main__container__widget_text">Atención personalizada</div>
        </div>
    )
}

const ModalContactos = ({ ventasClass, ventasText, horarioClass, horarioText, diasClass, diasText, spanText, iconModal, buttonStyle, buttonLink, buttonText, callToPhone }) => {
    return (
        <div className="main__container__modalContactos">
            <div className={`glyphicon ${iconModal}`}></div>
            <div className="modalContactos__telephone">
                <p className={`ventas ${ventasClass}`} dangerouslySetInnerHTML={{ __html: ventasText }}></p>
                <p className={`horario ${horarioClass}`}>{horarioText}</p>
                <p className={`dias ${diasClass}`}>{diasText}</p>
                <p className="modalContactos__telephone_span">{spanText}</p>
            </div>
            <ButtonModalLink
                style={buttonStyle}
                link={buttonLink}
                text={buttonText}
                callToPhone={callToPhone}
            />
        </div>
    );
};

const Modal = ({ open, onClose }) => {

    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();


    const renderModal = () => {
        if (
            (currentDay >= 1 && currentDay <= 5 && currentHour >= 10 && currentHour < 20) ||
            (currentDay === 6 && currentHour >= 10 && currentHour < 15)
        ) {
            return (
                <>
                    <ModalContactos
                        iconModal="glyphicon-phone"
                        ventasClass="blue"
                        ventasText="Vendas <span>XXXX XXX XXXX</span>"
                        horarioClass="blue"
                        horarioText="De segunda a sexta das 10h às 20h"
                        diasClass="blue"
                        diasText="Sábados das 10h às 15h"
                        spanText="Ligue para o número na tela para que nossos especialistas possam aconselhá-lo em sua compra."
                        buttonStyle="btn_Style_Venta_llamar"
                        buttonLink="08003480003"
                        buttonText="Chamar"
                        callToPhone={false}
                    />
                </>
            );
        } else {
            return (
                <>
                    <ModalContactos
                        iconModal="glyphicon-phone"
                        ventasClass="blue"
                        ventasText="Vendas <span>XXXX XXX XXXX</span>"
                        horarioClass="blue"
                        horarioText="De segunda a sexta das 10h às 20h"
                        diasClass="blue"
                        diasText="Sábados das 10h às 15h"
                        spanText="Ligue para o número na tela para que nossos especialistas possam aconselhá-lo em sua compra."
                        buttonStyle="btn_Style_Venta_llamar"
                        buttonLink="08003480003"
                        buttonText="Chamar"
                        callToPhone={false}
                    />
                    <ModalContactos
                        iconModal="glyphicon-whatsapp-bottomless"
                        ventasClass="green"
                        ventasText="Depois das vendas <span>XX XXXX XXXX</span>"
                        horarioClass="green"
                        horarioText="Segunda a domingo 24 horas"
                        diasClass="green"
                        spanText="Escreva para o whatsapp para que nossos especialistas o ajudem."
                        buttonStyle="btn_Style_Venta_Contactarme"
                        buttonLink="https://wa.link/64zdo9"
                        buttonText="Enviar mensagem"
                    />
                </>
            );
        }
    };

    if (!open) return null;
    return (
        <>
            <div id="overlay" className="overlay">
                <div className="container__modal">
                    <div className='emcabezadoModal'>
                        <h3>Atenção personalizada</h3>
                        <button className="close-button" onClick={onClose}><span>X</span></button>
                    </div>
                    <div className="container-fluid-modal">
                        <div className="row-modal">
                            {renderModal()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const App = () => {
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        const openModalButton = document.querySelector('.whatsAppFixes');


        const handleButtonClick = () => {
            setOpenModal(true);
        };

        function buscarBtnStyleVentaPer() {
            const isDesktop = window.innerWidth > 768;

            if (isDesktop) {
                const btnStyleVentaPerList = document.querySelectorAll('.btn_Style_Venta_Per');

                if (btnStyleVentaPerList.length > 0) {
                    btnStyleVentaPerList.forEach((btnStyleVentaPer) => {
                        btnStyleVentaPer.addEventListener('click', (event) => {
                            event.preventDefault();
                            setOpenModal(true);
                        });
                    });
                } else {
                    setTimeout(buscarBtnStyleVentaPer, 1000);
                }
            }
        }
        if (window.innerWidth > 768) {
            buscarBtnStyleVentaPer();
        }


        const checkButtonExistence = setInterval(() => {
            const openModalButtonNew = document.getElementById('btnBannerSearchh');
            if (openModalButtonNew) {
                openModalButtonNew.addEventListener('click', handleButtonClick);
                clearInterval(checkButtonExistence);
            }
        }, 500);

        openModalButton.addEventListener('click', (event) => {
            event.preventDefault();
            setOpenModal(true);
        });

        return () => {
            clearInterval(checkButtonExistence);
        };
    }, []);

    return (
        <>
            <div className="container-fluid flex_container">
                <ButtonModal
                    id="container__widget"
                    style="main__container__widget"
                    onClick={() => setOpenModal(true)}
                >
                    <div className="glyphicon glyphicon-agent agentWidget"></div>
                    <div className="main__container__widget_text">Atenção</div>
                </ButtonModal>
                <ButtonIngresar
                    id="container__widget__ars"
                    style="btn_login-button js-login-box-modal"
                    onClick={() => setOpenModal(true)}
                >
                    <div className="glyphicon-user-profile"></div>
                    <div className="main__container__widget_text__ars">Iniciar sesión</div>
                </ButtonIngresar>
                <ButtonARSEs />
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};


const targetDivDesktop = document.querySelector('.upper-menu_quicklinks');
ReactDOM.render(<App />, targetDivDesktop);

const targetDivMobile = document.querySelector('.pull-left.hidden-xs');
ReactDOM.render(<App />, targetDivMobile);

// ************************************************************

const targetDivWidgetFixe = document.querySelector('#home > div.whatsAppFixes');
const widgetFixeComponent = <ButtonWidget />;
ReactDOM.render(widgetFixeComponent, targetDivWidgetFixe);