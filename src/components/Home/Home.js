import React, { useState } from "react";
// import sqrl from "../../images/SqueakerIcon.png";
import "./Home.css";
import LoginForm from "../LoginForm/LoginPageForm";
import CreateNewUser from "../CreateNewUserForm/CreateNewUserForm";

export const Home = () => {
  const [newUser, setNewUser] = useState(false);
  // const [textValue, setTextValue] = useState('')

  const isNewUser = () => {
    setNewUser(true);
  };
  console.log(newUser)

  // const handleChange = (event) => {
  //  setTextValue(event.target.value)
  // }

  return (
    <main className='main-page column'>
      <div className='home-logo column center-x'>      
        <div className='app-image-container'>
        </div>
        <h1>SQUEAKR</h1>
      </div>
      <div className="forms-container">
        {!newUser ? <LoginForm isNewUser={isNewUser} newUser={newUser}/> : <CreateNewUser />}
      </div>

    </main>
  );
};
