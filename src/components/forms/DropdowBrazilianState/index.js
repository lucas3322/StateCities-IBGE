import { useEffect, useState } from 'react';
import { fetchStates, pasrseStates } from '../../../helpers/Ibge';

const DropdowBrazilianStates = ({id, name, onChange = () => {}}) => {

    const [states, setStates] = useState([]);
    useEffect(() =>{
        fetchStates().then(pasrseStates).then(setStates)
    }, []);


    
    return (
        <select id={id || name} name={name || id} onChange={onChange}>
            
            <option value="">Selecione um estado</option>

            {states.map((state)=>{
                const {label, value} = state;
                return (<option key={value} value={value}>{label}</option>)
            })}
            
        </select>
    );
};


export default DropdowBrazilianStates;