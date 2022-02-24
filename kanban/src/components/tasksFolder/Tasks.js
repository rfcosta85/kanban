import '../tasksFolder/Tasks.css'

const Tasks = (props) => {
  const { variant, children, height } = props
  return <div className={`box box__${variant} box__${height}`}>{children}</div>
}

export default Tasks
