import './Card.css'
import avatarM from '../../components/icon/man.png'
const Card = (props) => { 
  const { children,color,status } = props
 return (
     <div className="card_label">
     <p className="text1_style">{children}</p>
     <div className="label_div">
     <img src={avatarM} className="avatar_male" alt="avatar"></img>
     <span className={`label${color}`}>{status}</span>
     </div>
    </div>
  )
}


export default Card