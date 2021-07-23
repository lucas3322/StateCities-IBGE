//https://servicodados.ibge.gov.br/api/v1/localidades/estados
//https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/';

const responseToJason = (response) => response.json();


const ordenation = (a, b)=> { // ordenação alfabética
    return a.label.localeCompare(b.label);
}

//lista dos estados
export const pasrseStates = (state) =>{
    return state.map((state)=>{
        return {label: state.nome, value: state.sigla}
    }).sort(ordenation);
}

//lista das cidades
export const pasrseCities = (cities)=>{
    return cities.map((city) => {
        const {id, nome} = city;
        return {label: nome, value: id}
    }).sort(ordenation);
}


export const fetchStates = () => {
    const url = `${BASE_URL}/localidades/estados`;
    return fetch(url).then(responseToJason);
};

export const fetchCities = (state) => {
    if (!state) return Promise.resolve([]);
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
    return fetch(url).then(responseToJason);
}