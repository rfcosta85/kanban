import './Card.css'
const Card = (props) => {
  const { children, color, status, variant } = props
  return (
    <div className={`card_label card__${variant}`}>
      <p className="text1_style">{children}</p>
      <span className={`label${color}`}>{status}</span>
    </div>
  )
}

export default Card
