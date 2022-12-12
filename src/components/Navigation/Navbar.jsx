import { NavLink,useParams } from "react-router-dom";

export default function Navbar() {
  const {userId} = useParams()
  const {adminId} = useParams()
  return (
    <>
      <NavLink  to={`/admin/${userId}`}> ADMIN </NavLink>
      <NavLink  to={`/user/${adminId}`}> USER </NavLink>
    </>
  );
}
