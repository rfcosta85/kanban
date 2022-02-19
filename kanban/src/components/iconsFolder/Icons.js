import '../iconsFolder/Icons.css'

const Icons = (props) => {
  const { img } = props
  return (
    <div className={`icon`}>
      <img className="imgIcons" src={img} alt="Icons"></img>
    </div>
  )
}

export default Icons
