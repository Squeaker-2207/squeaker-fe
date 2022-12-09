import { useContext, redirect, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/loginContext";
import { UserContext } from "../../contexts/userContext";
import { GetUsers } from "../../queries/getAllUsers";

export default function Form({ notLoggingIn, buttonText }) {
  const users = GetUsers();
  const [allUsers, setAllUsers] = useState();
  const [loginUsername, setUsername] = useState("");

  const [, setLogin] = useContext(LoginContext);
  const [, setId] = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const result = await users;
      await setAllUsers(result.data?.fetchUsers);
    };

    getData();
  }, [users]);

  const handleChange = (event) => {
    setUsername(event.currentTarget.value);

    setName(loginUsername);
  };

  const setName = () => {
    setLogin(setLogin);
  };

  const handleSubmit = async () => {
    const user = allUsers?.find((user) => {
      return user.username?.toLowerCase() === loginUsername.toLowerCase();
    });
    if (!user) {
        //please don delete it will work once the loading page is done
      console.log("Lets create a new account");
      return navigate("/admin");
    } else {
      await setId(user);
      return navigate("/user");
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
      <button type="button" onClick={() => handleSubmit()}>
        {buttonText}
      </button>
    </div>
  );
}
