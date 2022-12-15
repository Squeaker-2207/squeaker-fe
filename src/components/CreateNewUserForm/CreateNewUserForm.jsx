import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/loginContext";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../Mutations/AddUser";
import { GetUsers } from "../../queries/getAllUsers";
import { Link } from "react-router-dom";

export default function CreateNewUser() {
  const [loginUsername, setUsername] = useState("");
  const [, setLogin] = useContext(LoginContext);
  const { refetch } = GetUsers()
  const [addUser] = useMutation(ADD_USER, {
    variables: {
      username: loginUsername,
      isAdmin: false,
    },
    onCompleted: (data) => {
      refetch()
    },
  });

  const handleChange = (event) => {
    setUsername(event.currentTarget.value);

    setName(loginUsername);
  };

  const setName = () => {
    setLogin(setLogin);
  };

  return (
    <div className="column center">
      <h3>Welcome to Squeakr!</h3>
      <span>Enter Username:</span>
      <form className="column" onClick={addUser}>
        <input
          id="new-user-input"
          autoFocus
          value={loginUsername}
          onChange={(event) => handleChange(event)}
          type="text"
        ></input>
        <Link to="/">
          <button id="submit-new-user" type="submit">
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
}
