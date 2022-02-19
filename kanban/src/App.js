import './App.css'
import Tasks from './components/tasksFolder/Tasks'

function App() {
  return (
    <div className="App">
      <Tasks Tasks variant="blue"></Tasks>
      <Tasks variant="orange"></Tasks>
      <Tasks variant="purple"></Tasks>
      <Tasks variant="green"></Tasks>
    </div>
  )
}

export default App
