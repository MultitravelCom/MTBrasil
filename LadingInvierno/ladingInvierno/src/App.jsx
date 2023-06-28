import { useState, useEffect } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [destinos, setDestinos] = useState([]);

  const Florianopolis = filtrarDestinos(destinos, "Florianopolis");
  const Buzios = filtrarDestinos(destinos, 'Buzios');
  const AllInclusive = filtrarDestinos(destinos, 'AllInclusive');

  useEffect(() => {
      fetchDestinos().then(data => {
          setDestinos(data.destinos);
          setLoaded(true);
      });
  }, []);

  return (
      <>
          {!loaded && <Loader />}

          {loaded && (
              <>
                  <div className="main_conteiner__s1_medio top_mkt">
                      <BannerTop />
                  </div>
                  <div className="main__conteiner main__conteiner-principal container">
                      <div className="carrusel">
                          <CardContainer btnStyles={btnStyles[0]} destinosFiltrados={Florianopolis} />
                          <WarningPrice />
                          <CardContainer btnStyles={btnStyles[1]} destinosFiltrados={Buzios} />
                          <WarningPrice />
                          <CardContainer btnStyles={btnStyles[2]} destinosFiltrados={AllInclusive} />
                      </div>

                  </div>
              </>
          )}
      </>
  );
}

export default App
