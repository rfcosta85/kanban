import '../tasksFolder/Tasks.css'

const Tasks = (props) => {
  const { variant, children } = props
  return <div className={`box box__${variant}`}>{children}</div>
}

export default Tasks
