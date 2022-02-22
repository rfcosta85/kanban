import './App.css';
import Card from './components/Card/Card';
import avatarM from './components/icon/man.png'
import avatarF from './components/icon/female.png'

function App() {
  return (
    
 <div className="container">
      <p class="kanban_text">Kanban</p>
    <div className="tasks">
     <div className="Card_ToDo">
          <Card>Christmas Banners
             <div className="avatar_div">
                 <img src={avatarM} className="avatar" alt="avatar"></img>
                 <span className="label">Label</span>
             </div>
          </Card>
          <Card>Redo Portfolio
            <div className="avatar_div">
                <img src={avatarM} className="avatar" alt="avatar"></img>
                <span className="label">Label</span>
            </div>
          </Card>
      </div>
     <div className="Card_inProgress">
          <Card>Coffee Break
               <div className="avatar_div">
                      <img src={avatarF} className="avatar" alt="avatar"></img>
                      <span className="label_orange">Always</span>
               </div>
         </Card>
         <Card>Updating Portfolio 
               <div className="avatar_div">
                     <img src={avatarF} className="avatar" alt="avatar"></img>
                    <span className="label_orange">Webflow</span>
               </div>
         </Card>  
     </div>
     <div className="Card_Review">
          <Card>Release to Figma Community
               <div className="avatar_div">
                      <img src={avatarM} className="avatar" alt="avatar"></img>
                      <span className="label_purple">Release</span>
               </div>
        </Card>
        <Card>User Feedback
               <div className="avatar_div">
                      <img src={avatarM} className="avatar" alt="avatar"></img>
                      <span className="label_purple">Feedback</span>
               </div>
          </Card>  
        <Card>Background images from humaaans.com
              <div className="avatar_div">
                      <img src={avatarM} className="avatar" alt="avatar"></img>
                      <span className="label_purple">Sourcing</span>
               </div>
        </Card>  
      </div>
     <div className="Card_Done">
        <Card>Style Guide
               <div className="avatar_div">
                     <img src={avatarF} className="avatar" alt="avatar"></img>
                     <span className="label_green">UI</span>
               </div>
        </Card>
        <Card>Component Library
               <div className="avatar_div">
                     <img src={avatarF} className="avatar" alt="avatar"></img>
                     <span className="label_green">UI</span>
               </div>
        </Card>  
        <Card>Sticker Components
               <div className="avatar_div">
                      <img src={avatarF} className="avatar" alt="avatar"></img>
                      <span className="label_green">UI</span>
               </div>
          </Card>  
      </div>  
    </div>    
 </div>
    
  );
}

export default App;
