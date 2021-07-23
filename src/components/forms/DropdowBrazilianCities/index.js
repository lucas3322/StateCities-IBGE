import { useEffect, useState } from 'react';
import fetchCities from '../../../helpers/Ibge';

const DropdowBrazilianCities = () => {

    const [cities, setCities] = useState([]);

    useEffect(()=>{
        fetchCities('SP').then((cities)=> {
            setCities(cities);
        })
    }, []);

    return (
        <select id="city">
            
            {cities.map((city)=>{
                const {id, nome} = city;
                return(<option value={id}>{nome}</option>);
            })};
        </select>
    );
};


export default DropdowBrazilianCities;