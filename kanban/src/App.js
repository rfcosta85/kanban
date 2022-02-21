import back from './Home.png';
import './App.css';
import Card from './components/Card/Card';
import avatar from './components/icon/female.png'
import avatar2 from './components/icon/man.png'
import Label from './components/Label_card/Label_card'


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <p class="kanban_text">Kanban </p>
      <div className="Card_div">
        <Card>
        <p className="text1_style">Christmas Banners</p>
         <img src={avatar} className="avatar_male" alt="avatar" />
        </Card>
        </div>
      
     </header>
      
    </div>
    
  );
}

export default App;
