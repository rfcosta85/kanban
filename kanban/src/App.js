import './App.css'
import Icons from './components/iconsFolder/Icons'
import Tasks from './components/tasksFolder/Tasks'
import Title from './components/titlesFolder/Title'
import imgFolder from './components/imgFolder/note.svg'
import imgFolderProgress from './components/imgFolderProgress/progress.svg'
import imgFolderReview from './components/imgFolderReview/review.svg'
import imgFolderDone from './components/imgFolderDone/done.svg'
import InfoCard from './components/subTasksFolder/InfoCard'
import avatarFolder from './avatarFolder/Female.svg'
import Card from './components/Card/Card'
import avatarM from './components/icon/man.png'
import avatarF from './components/icon/female.png'

function App() {
  return (
    <div className="App">
      <section className="container">
        <p class="kanban_text">Kanban</p>

        <div className="kanban-tasks">
          <Tasks variant="blue">
            <div className="container-task">
              <div className="subtask__title">
                <Icons img={imgFolder}></Icons>
                <Title>To Do</Title>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">Christimas Banners</span>
                </InfoCard>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">Redo Portfolio</span>
                </InfoCard>
              </div>
            </div>
          </Tasks>
          <Tasks variant="orange">
            <div className="container-task">
              <div className="subtask__title">
                <Icons img={imgFolderProgress}></Icons>
                <Title>In Progress</Title>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">Coffe Break</span>
                </InfoCard>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">Updating Portfolio</span>
                </InfoCard>
              </div>
            </div>
          </Tasks>
          <Tasks variant="purple" height="height">
            <div className="container-task">
              <div className="subtask__title">
                <Icons img={imgFolderReview}></Icons>
                <Title>Review</Title>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">
                    Release to Figma Community
                  </span>
                </InfoCard>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">User Feedback</span>
                </InfoCard>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">
                    Background images from <a src="">humaans.com</a>
                  </span>
                </InfoCard>
              </div>
            </div>
          </Tasks>
          <Tasks variant="green" height="height">
            <div className="container-task">
              <div className="subtask__title">
                <Icons img={imgFolderDone}></Icons>
                <Title colorText="black">Done</Title>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">Style Guide</span>
                </InfoCard>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">Componente Library</span>
                </InfoCard>
              </div>
              <div className="kanban-decoration">
                <InfoCard image={avatarFolder}>
                  <span className="substask-name">Sticker Components</span>
                </InfoCard>
              </div>
            </div>
          </Tasks>
        </div>
      </section>
    </div>
  )
}

export default App
