import { Link,useParams } from "react-router-dom";

export default function Navbar() {
  const {userId} = useParams()
  const {adminId} = useParams()
  
  return (
    <div className="row center">
      <Link  to={`/admin/${userId}`}> ADMIN </Link>
      <Link  to={`/user/${adminId}`}> USER </Link>
    </div>
  );
}
