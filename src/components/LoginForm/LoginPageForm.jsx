import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/loginContext";
import { UserContext } from "../../contexts/userContext";
import { GetUsers } from "../../queries/getAllUsers";

export default function LoginForm({ isNewUser, newUser }) {
  const { data } = GetUsers();
  const [loginUsername, setUsername] = useState("");

  const [, setLogin] = useContext(LoginContext);
  const [, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.currentTarget.value);

    setName(loginUsername);
  };

  const setName = () => {
    setLogin(setLogin);
  };

  const onSubmit = async (event) => {
    event.preventDefault()
    const user = data?.find((user) => {
      return user.username?.toLowerCase() === loginUsername.toLowerCase();
    });
    console.log(user);
    if (!user) {
      return navigate("/create-account");
    } else {
      await setUser(user);
      return navigate(`/user/${user.id}`);
    }
  };

  return (
    <div className="column center">
      <div className="spacer"></div>
      <span>Enter Username:</span>
      <form onSubmit={event => onSubmit(event)} className="column center">
        <input
        style={{borderRadius: 8, width: "20em", height: "2em", margin: 2}}
          autoFocus
          required
          value={loginUsername}
          onChange={(event) => handleChange(event)}
          type="text"
          >
        </input>
        <button style={{borderRadius: 8, width: "20em", height: "2em", margin: 2}}type="submit">
          Login
        </button>
      </form>
      <br></br>
      {!newUser && (
        <Link to='/create-account' >
          <button style={{borderRadius: 8, width: "20em", height: "2em"}} type="button" onClick={isNewUser}>
            I'm A New User
          </button>
        </Link>
      )}
    </div>
  );
}
