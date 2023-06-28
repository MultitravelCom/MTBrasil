import { useState, useEffect } from "react";
import Loader from "../Loader";
import Button from "../Button";

const Card = ({ destinos }) => {
    const [noDestinos, setNoDestinos] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchDestinos()
            .then((data) => {
                // Verificar si data.destinos es un array
                if (Array.isArray(data.destinos)) {
                    if (data.destinos.length > 0) {
                        setLoaded(true);
                        setDestinos(data.destinos);
                    } else {
                        setLoaded(true);
                        setNoDestinos(true);
                    }
                } else {
                    console.log("La propiedad 'destinos' no es un array.");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {loaded ? (
                destinos.length > 0 ? (
                    destinos.map(destino => (
                        <div key={destino.id} className="carrusel__elemento">
                            <div
                                className="main__conteiner__s1__destacado__card uno"
                                style={{ height: "100%", width: "100%" }}
                            >
                                {/* {destino.events === "no" && <EventImg style="eventImg" shouldShowEvent={shouldShowEvent} />} */}
                                <picture>
                                    <map name={destino.id}>
                                        <area
                                            target="_blank"
                                            alt={destino.title}
                                            title={destino.title}
                                            href={destino.linkWa}
                                            coords={destino.coords}
                                            shape="rect"
                                        />
                                    </map>
                                    <source media="(min-width: 1024px)" srcSet={destino.img} />
                                    <source
                                        media="(min-width: 768px) and (max-width: 1023px)"
                                        srcSet={destino.img}
                                    />
                                    <source media="(max-width: 767px)" srcSet={destino.img} />
                                    <img
                                        alt={`Imagen banner ${destino.title}`}
                                        src={destino.img}
                                        useMap={`#${destino.id}`}
                                    />
                                </picture>
                                <div className="priceStyle">{destino.price}</div>
                                <Button
                                    id={destino.title}
                                    style="btn_Style_Venta_Per"
                                    link={destino.linkWa}
                                    text="Contactarme"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay destinos disponibles.</p>
                )
            ) : (
                <Loader />
            )}
        </>
    );

};

export default Card