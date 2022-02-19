import logo from './Home.png';
import './App.css';
import column from './components/column/column.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p class="kanban_text">
          Kanban
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <div class ="column_car">TEXTE</div>
        
      </header>
    </div>
  );
}

export default App;
