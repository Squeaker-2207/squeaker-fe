import { Link, useParams } from "react-router-dom";

export default function Navbar() {
  const { userId } = useParams();
  const { adminId } = useParams();

  return (
    <>
      {!adminId && <Link to={`/admin/${userId}`}> ADMIN </Link>}
      {!userId && <Link to={`/user/${adminId}`}> USER </Link>}
    </>
  );
}
