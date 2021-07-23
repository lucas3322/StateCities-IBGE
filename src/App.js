
import './App.css';
import DropdowBrazilianCities from './components/forms/DropdowBrazilianCities';
import DropdowBrazilianStates from './components/forms/DropdowBrazilianState';


function App() {
  return (
    <div className="container">
      <form>
      <label htmlFor="state">Estado:</label>
        <DropdowBrazilianStates />
      <label htmlFor="city">Cidade:</label>
        <DropdowBrazilianCities />
      </form>
    </div>
  );
}

export default App;
