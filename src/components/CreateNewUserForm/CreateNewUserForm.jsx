import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/loginContext";
import { UserContext } from "../../contexts/userContext";
import { GetUsers } from "../../queries/getAllUsers";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../Mutations/AddUser";
import { Link } from "react-router-dom";

export default function CreateNewUser() {
  const {data} = GetUsers();
  const [loginUsername, setUsername] = useState("");
  const [, setLogin] = useContext(LoginContext);
  const [, setUser] = useContext(UserContext);
  const [addUser] = useMutation(ADD_USER, {
    variables: {
      username: loginUsername,
      isAdmin: false
    },
    onCompleted: (data) => {
      console.log(data)
      return data
    }
  })

  console.log(data)
  console.log(setUser)


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
      <form onSubmit={onSubmit} className='column'>
        <input
          autoFocus
          value={loginUsername}
          onChange={(event) => handleChange(event)}
          type="text"
          ></input>
          <div className="spacer"></div>
        <Link to='/'>
          <button type="submit">
            Create Account
          </button>
        </Link>
        </form>
    </div>
  );
}
