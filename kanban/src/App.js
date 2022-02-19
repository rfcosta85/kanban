import './App.css'
import Icons from './components/iconsFolder/Icons'
import Tasks from './components/tasksFolder/Tasks'
import Title from './components/titlesFolder/Title'
import imgFolder from './components/imgFolder/note.svg'
import imgFolderProgress from './components/imgFolderProgress/progress.svg'
import imgFolderReview from './components/imgFolderReview/review.svg'
import imgFolderDone from './components/imgFolderDone/done.svg'

function App() {
  return (
    <div className="App">
      <Tasks variant="blue">
        <Icons img={imgFolder}></Icons>
        <Title>To Do</Title>
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
  )
}

export default App
