import '../tasksFolder/Tasks.css'

const Tasks = (props) => {
  const { variant } = props
  return (
    <div className={`box box__${variant}`}>
      <div className={`title`}></div>
    </div>
  )
}

export default Tasks
