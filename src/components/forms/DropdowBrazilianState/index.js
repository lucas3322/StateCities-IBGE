import { useEffect, useState } from 'react';
import { fetchStates } from '../../../helpers/Ibge';

const DropdowBrazilianStates = ({id, name, onChange = () => {}}) => {

    const [states, setStates] = useState([]);
    useEffect(() =>{
        fetchStates().then((state) =>{
            return state.map((state)=>{
                return {label: state.nome, value: state.sigla}
            }).sort((a, b)=> {
                return a.label.localeCompare(b.label);
            })
        }).then((states)=> {
            setStates(states);
        })
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