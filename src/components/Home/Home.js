import React, { useState } from "react";
import sqrl from "../../images/SqueakerIcon.png";
import "./Home.css";
import { Link } from "react-router-dom";
import Form from "../Form/form";

export const Home = () => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [buttonText, setButton] = useState("");

  const isLoggingIn = () => {
    setLoggingIn(true);
    setButton("Login");
  };

  const isNewUser = () => {
    setNewUser(true);
    setButton("Create Account");
  };

  return (
    <main className="main-page center">
      <div className="home-logo column center center-x">
        <div className="app-image-container">
          <img src={sqrl} alt="hey now" />
        </div>
        <h1>SQUEAKR</h1>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>

      {!loggingIn && !newUser && (
        <div className="column center distribute">
          <button onClick={isLoggingIn}>Login</button>
          <div className="spacer"></div>
          <button type="button" onClick={isNewUser}>
            I'm A New User
          </button>
        </div>
      )}

      <div className="buttons column center">
        {loggingIn && <Form buttonText={buttonText} loggingIn={loggingIn} />}
        {newUser && <Form buttonText={buttonText} />}
        <div className="spacer"></div>
        <div className="debug row distribute">
          debug only:
          <Link to="/user">
            <button>User</button>
          </Link>
          <Link to="/admin">
            <button>Admin</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
