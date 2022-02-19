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

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="kanban-title-box">
          <h1 className="kanban-title">Kanban</h1>
        </div>
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
            <Icons img={imgFolderProgress}></Icons>
            <Title>In Progress</Title>
          </Tasks>
          <Tasks variant="purple">
            <Icons img={imgFolderReview}></Icons>
            <Title>Review</Title>
          </Tasks>
          <Tasks variant="green">
            <Icons img={imgFolderDone}></Icons>
            <Title colorText="black">Done</Title>
          </Tasks>
        </div>
      </section>
    </div>
  )
}

export default App
