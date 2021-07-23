//https://servicodados.ibge.gov.br/api/v1/localidades/estados
//https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/';

const responseToJason = (response) => response.json();

export const fetchStates = () => {
    const url = `${BASE_URL}/localidades/estados`;
    return fetch(url).then(responseToJason);
};

export const fetchCities = (state) => {
    if (!state) return Promise.resolve([]);
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
    return fetch(url).then(responseToJason);
}