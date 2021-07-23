import {useState} from 'react';

import './App.css';
import DropdowBrazilianCities from './components/forms/DropdowBrazilianCities';
import DropdowBrazilianStates from './components/forms/DropdowBrazilianState';


function App() {

  const [formValues, setFormValues] = useState ({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setFormValues({...formValues, [name]:value });
  }

  console.log('formulário', formValues)

  return (
    <div className="container">
      <form>
      <label htmlFor="state">Estado:</label>
        <DropdowBrazilianStates id="state" name="state" onChange={handleInputChange}/>
      <label htmlFor="city">Cidade:</label>
        <DropdowBrazilianCities id="city" name="city" state={formValues.state} onChange={handleInputChange}/>
      </form>
    </div>
  );
}

export default App;
