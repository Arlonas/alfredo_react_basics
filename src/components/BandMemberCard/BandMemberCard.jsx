import member from './member.jpeg'
import { Link } from 'react-router-dom'
const BandMemberCard = (props) => {
  return (
    <div className="band-member-card">
      <Link to={`/band-member/${props.id}`}>
      <p>{props.fullName}</p>
      <img src={member} alt="" />
    </Link>
    </div>
  )
}

export default BandMemberCard