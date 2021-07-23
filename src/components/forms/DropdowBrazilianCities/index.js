import { useEffect, useState } from 'react';
import {fetchCities} from '../../../helpers/Ibge'

const DropdowBrazilianCities = ({state, onChange = () => {}}) => {

    const [cities, setCities] = useState([]);

    useEffect(()=>{
        fetchCities(state).then((cities)=> {
            setCities(cities);
        }); 
    }, [state]);

    return (
        <select id="city" name="city" onChange={onChange}>
            
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