import { NavLink, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

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
