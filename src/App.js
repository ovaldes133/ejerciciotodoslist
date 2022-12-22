import './App.css';
import Listadetareas from './componentes/listatareas';
import './componentes/tarea.js';


function App() {
  return (
    <div className="App">
      <div className='titulo'>
        <h1>todos</h1>
        
        < Listadetareas />
        </div>
      
    </div>
  );
}

export default App;