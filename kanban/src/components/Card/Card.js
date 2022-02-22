import './Card.css'
import avatarM from '../../components/icon/man.png'
const Card = (props) => { 
 return (
     <div className="card_label">
     <p className="text1_style">Christmas Banners</p>
     <div className="label_div">
     <img src={avatarM} className="avatar_male" alt="avatar"></img>
     <span className="label">Label</span>
     </div>
    </div>
  )
}

export default Card