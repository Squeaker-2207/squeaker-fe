import { useState } from "react";
import { Home } from "../Home/Home";
import "../Home/Home";
import sqrl from "../../images/SqueakerIcon.png";

export default function LoadingPage (setUserSelection) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [buttonText, setButton] = useState("");
  const isLoggingIn = () => {
    setLoggingIn(true);
    setUserSelection({loggingIn: true})
    setButton("Login");
  };

  const isNewUser = () => {
    setNewUser(true);
    setUserSelection({newUser: true})
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
      <h3>welcome</h3>
      {!loggingIn && !newUser && (
        <div className="column center distribute">
          <button onClick={isLoggingIn}>Login</button>
          <div className="spacer"></div>
          <button type="button" onClick={isNewUser}>
            I'm A New User
          </button>
        </div>
      )}
    </main>
  );
}
