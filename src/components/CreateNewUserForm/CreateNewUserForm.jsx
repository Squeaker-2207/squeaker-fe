import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/loginContext";
import { UserContext } from "../../contexts/userContext";
import { GetUsers } from "../../queries/getAllUsers";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../Mutations/AddUser";

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

  const navigate = useNavigate();

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
      <span>Enter Username:</span>
      <input
        value={loginUsername}
        onChange={(event) => handleChange(event)}
        type="text"
      ></input>
      <button type="button" onClick={() => onSubmit()}>
        Create Account
      </button>
    </div>
  );
}
