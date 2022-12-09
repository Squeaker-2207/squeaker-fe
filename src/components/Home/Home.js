
import React, { useState } from 'react'
import chippy from '../../images/SqueakerIcon.png'
import './Home.css'
import { Link } from 'react-router-dom'
import Form from "../Form/form";
// import { GetUser } from '../../queries/getUser'
// import { GetSqueaks } from '../../queries/getSqueaks'

export const Home = ({ setPage, setUserName }) => {
  setPage(window.location.pathname)

  const [loggingIn, setLoggingIn] = useState(false)
  const [newUser, setNewUser] = useState(false)
  const [textValue, setTextValue] = useState('')

  const isLoggingIn = () => {
    setLoggingIn(true)
  }

  const notLoggingIn = () => {
    setLoggingIn(false)
    setUserName(textValue)
  }

  const isNewUser = () => {
    setNewUser(true);
    setButton("Create Account");
  };

  const handleChange = (event) => {
    setTextValue(event.target.value)
  }

  return (
    <main className='main-page column'>
      <div className='home-logo column center-x'>      
        <div className='app-image-container'>
          <img src={chippy} alt='chipmunk logo' />
        </div>
        <h1>SQUEAKR</h1>
      </div> 

      <div className='spacer'></div> 
      <div className='spacer'></div> 

        {!loggingIn && !newUser &&
          <div className='home-options column center distribute'>        
              <button id='login-button' onClick={isLoggingIn} >Login</button>
              <div className='spacer'></div> 
              <button id='new-user-button' onClick={isNewUser} >I'm A New User</button>
          </div>
        }

      <div className='buttons column center'>

        {loggingIn && 
        <form className='column center'>
          <span>Enter Username:</span> 
          <input value={textValue} onChange={event => handleChange(event)} className='text-input' type='text'></input>
          <Link to='/user' >
            <button className='submit-button' onClick={event => notLoggingIn(event)} >Submit</button>
          </Link>
        </form>  
        }

        
        {newUser && 
          <div className='column center'>
            <span>Enter New Username:</span> 
            <input type='text'></input>
            <Link className='column center distribute' to='/user' >
              <button onClick={notNewUser}>Create New User</button>
            </Link>
          </div>
        }


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
        </div>
    </main>
  );
};
