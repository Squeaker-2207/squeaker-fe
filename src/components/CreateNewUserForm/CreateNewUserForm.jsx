import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/loginContext";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../Mutations/AddUser";
import { Link } from "react-router-dom";

export default function CreateNewUser() {
  const [loginUsername, setUsername] = useState("");
  const [, setLogin] = useContext(LoginContext);
  const [addUser] = useMutation(ADD_USER, {
    variables: {
      username: loginUsername,
      isAdmin: false
    },
    onCompleted: (data) => {
      return data
    }
  })

  const handleChange = (event) => {
    setUsername(event.currentTarget.value);

    setName(loginUsername);
  };

  const setName = () => {
    setLogin(setLogin);
  };

  const onSubmit = async () => {
    addUser()
  };

  return (
    <div className="column center">
      <p>Welcome to Squeakr!</p>
      <span>Enter Username:</span>
      <form className="column" onSubmit={onSubmit}>
        <input
          autoFocus
          value={loginUsername}
          onChange={(event) => handleChange(event)}
          type="text"
          ></input>
        <Link to='/'>
          <button type="submit">
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
}
