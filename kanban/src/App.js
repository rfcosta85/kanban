import './App.css'
import Tasks from './components/tasksFolder/Tasks'
import Title from './components/titlesFolder/Title'

function App() {
  return (
    <div className="App">
      <Tasks variant="blue">
        <Title icons="black">Alguma coisa</Title>
      </Tasks>
      <Tasks variant="orange"></Tasks>
      <Tasks variant="purple"></Tasks>
      <Tasks variant="green"></Tasks>
    </div>
  )
}

export default App
