import { useEffect, useState } from 'react';
import {fetchCities, pasrseCities} from '../../../helpers/Ibge'

const DropdowBrazilianCities = ({id, name, state, onChange = () => {}}) => {

    const [cities, setCities] = useState([]);

    useEffect(()=>{
        fetchCities(state).then(pasrseCities).then((cities)=> {
            setCities(cities);
        }); 
    }, [state]);

    return (
        <select id={id || name} name={name || id} onChange={onChange}>
            
            {cities.map((city)=>{
                const {label, value} = city;
                return(<option value={value} key={value}> {label} </option>);
            })}
        </select>
    );
};


export default DropdowBrazilianCities;