import '../subTasksFolder/InfoCard.css'

const InfoCard = (props) => {
  const { children, children2 = 'Label', image, labelColor } = props
  return (
    <div className={`card`}>
      <div className="card__content">
        {children}
        <div className="card__img-label">
          <span className="picture">
            <img src={image}></img>
            <span className={`label label__${labelColor}`}>{children2}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
