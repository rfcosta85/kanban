import './Card.css'
const Card = (props) => {
  const { children = 'Label'} = props
 
  return (
     <div className="card_label">{children}
     <span className="label"></span>
    </div>
  )
}

export default Card