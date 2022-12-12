import { Link, useParams } from "react-router-dom";
import './Navigation.css'
import '../App/App.css'

export default function Navbar() {
  const { userId } = useParams();
  const { adminId } = useParams();

  return (
    <div className="row center">
      {!adminId && <Link to={`/admin/${userId}`}> ADMIN </Link>}
      {!userId && <Link to={`/user/${adminId}`}> USER </Link>}
    </div>
  );
}
