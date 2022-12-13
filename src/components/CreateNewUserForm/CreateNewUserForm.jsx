import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/loginContext";
// import { UserContext } from "../../contexts/userContext";
// import { GetUsers } from "../../queries/getAllUsers";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../Mutations/AddUser";
import { Link } from "react-router-dom";

export default function CreateNewUser() {
  // const {data} = GetUsers();
  const [loginUsername, setUsername] = useState("");
  const [, setLogin] = useContext(LoginContext);
  // const [, setUser] = useContext(UserContext);
  const [addUser] = useMutation(ADD_USER, {
    variables: {
      username: loginUsername,
      isAdmin: false,
    },
    onCompleted: (data) => {
      return data;
    },
  });

  const handleChange = (event) => {
    setUsername(event.currentTarget.value);

    setName(loginUsername);
  };

  const setName = () => {
    setLogin(setLogin);
  };

  const onSubmit = async () => {
    addUser();
  };

  return (
    <div className="column center">
      <h3>Welcome to Squeakr!</h3>
      <span>Enter Username:</span>
      <form className="column" onSubmit={onSubmit}>
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
