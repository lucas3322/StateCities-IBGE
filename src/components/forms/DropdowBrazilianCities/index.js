import { useEffect, useState } from 'react';
import {fetchCities} from '../../../helpers/Ibge'

const DropdowBrazilianCities = ({id, name, state, onChange = () => {}}) => {

    const [cities, setCities] = useState([]);

    useEffect(()=>{
        fetchCities(state).then((cities)=> {
            setCities(cities);
        }); 
    }, [state]);

    return (
        <select id={id || name} name={name || id} onChange={onChange}>
            
            {cities.map((city)=>{
                const {id, nome} = city;
                return(
                <option value={id} key={id}> {nome} </option>
                );
            })};

        </select>
    );
};


export default DropdowBrazilianCities;