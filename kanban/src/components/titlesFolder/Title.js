import '../titlesFolder/Title.css'

const Title = (props) => {
  const { icons, colorText, children } = props

  return (
    <div className={`title title__${icons} title__${colorText}`}>
      {children}
    </div>
  )
}

export default Title
