import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    
 <div className="container">
      <p class="kanban_text">Kanban</p>
    <div className="tasks">
      <div className="Card_ToDo">
           <Card>Christmas Banners
             <div>
           <span className="label">Label</span>
           </div>
            </Card>
            <Card>Redo Portfolio
            <span className="label">Label</span>
            </Card>
      </div>
      <div className="Card_inProgress">
        <Card>Coffee Break
        <span className="label_orange">Always</span>
        </Card>
        <Card>Updating Portfolio 
        <span className="label_orange">Webflow</span>
        </Card>  
      </div>
      <div className="Card_Review">
        <Card>Release to Figma Community
        <span className="label_purple">Release</span>
        </Card>
        <Card>User Feedback
        <span className="label_purple">Feedback</span>
          </Card>  
        <Card>Background images from humaaans.com
        <span className="label_purple">Sourcing</span>
        </Card>  
      </div>
      <div className="Card_Done">
        <Card>Style Guide
        <span className="label_green">UI</span>
        </Card>
        <Card>Component Library
        <span className="label_green">UI</span>
        </Card>  
        <Card>Sticker Components
        <span className="label_green">UI</span>
          </Card>  
      </div>  
  </div>    
 </div>
    
  );
}

export default App;
