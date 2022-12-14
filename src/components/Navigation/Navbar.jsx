import { Link, useParams } from "react-router-dom";
import { GetSqueaks } from "../../queries/getSqueaks";
import "./Navigation.css"

export default function Navbar({isAdmin}) {
  const { userId } = useParams();
  const { adminId } = useParams();
  const { refetch } = GetSqueaks();

  return (
    <>
      <Link className="logout-tab" to={`/`}> <button>Logout</button></Link>
      {isAdmin && <Link className="admin-tab"to={`/admin/${userId}`}> ADMIN </Link>}
      {!userId && <Link className="user-tab" to={`/user/${adminId}`} onClick={() => refetch()}> USER </Link>}
    </>
  );
}
