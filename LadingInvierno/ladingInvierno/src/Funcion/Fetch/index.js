const fetchDestinos = async () => {
    const response = await fetch('https://raw.githubusercontent.com/MultitravelCom/style/main/Estaticas/Brasil/dbBrasil.json');
    const data = await response.json();

    return data;
};