import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <p class="kanban_text">Kanban</p>
      <div className="card_todo">
        <Card/>
        <Card/>
        </div>
      
     </header>
      
    </div>
    
  );
}

export default App;
