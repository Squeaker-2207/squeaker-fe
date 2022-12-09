import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/loginContext";
import { UserContext } from "../../contexts/userContext";
import { GetUsers } from "../../queries/getAllUsers";

export default function Form({ notLoggingIn, buttonText }) {
  const {data} = GetUsers();
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

  const onSubmit = async () => {
    const user = data?.find((user) => {
      return user.username?.toLowerCase() === loginUsername.toLowerCase();
    });
    if (!user) {
        //please don delete it will work once the loading page is done
      console.log("Lets create a new account");
      return navigate("/");
    } else {
      await setUser(user);
      return navigate(`/user/${user.id}`);
    }
  };

  return (
    <div className="column center">
      <span>Enter Username:</span>
      <input
        value={loginUsername}
        onChange={(event) => handleChange(event)}
        type="text"
      ></input>
      <button type="button" onClick={() => onSubmit()}>
        {buttonText}
      </button>
    </div>
  );
}