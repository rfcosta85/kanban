import './Title.css'

const Title = (props) => {
  const { colorText, children } = props

  return <div className={`title title__${colorText}`}>{children}</div>
}

export default Title
