import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavLink to="/admin"> ADMIN </NavLink>
      <NavLink to="/user"> USER </NavLink>
    </>
  );
}
