import '../iconsFolder/Icons.css'

const Icons = (props) => {
  const { img } = props
  return (
    <div className={`icon`}>
      <img className="test" src={img} alt="Note Icon"></img>
    </div>
  )
}

export default Icons
