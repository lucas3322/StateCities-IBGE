import { useEffect } from 'react';
import { fetchStates } from '../../../helpers/Ibge';

const DropdowBrazilianStates = () => {

useEffect(() =>{
    fetchStates().then(console.log)
}, []);


    
    return (
        <select id="state">
            <option value="">Selecione um estado</option>
        </select>
    );
};


export default DropdowBrazilianStates;