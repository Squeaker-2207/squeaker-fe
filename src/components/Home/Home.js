import React from "react";
import chippy from "../../images/SqueakerIcon.png";
import "./Home.css";
import LoginForm from "../LoginForm/LoginPageForm";

export const Home = () => {

  return (
    <main className='main-page column'>

      <div className='home-logo column center-x'>      
        <div className='app-image-container'>
          <img src={chippy} alt='Squeakr logo - a blue silhouette of a chipmunk'/>
        </div>
        <h1>SQUEAKR</h1>
      </div>

      <div className="forms-container">
          <LoginForm/>
      </div>

    </main>
  );
};
