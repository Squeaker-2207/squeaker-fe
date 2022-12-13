
import { Link, useParams } from "react-router-dom";
import "./Navigation.css"

export default function Navbar() {
  const { userId } = useParams();
  const { adminId } = useParams();

  return (
    <>
      {!adminId && <Link className="admin-tab"to={`/admin/${userId}`}> ADMIN </Link>}
      {!userId && <Link className="user-tab" to={`/user/${adminId}`}> USER </Link>}
    </>
  );
}
