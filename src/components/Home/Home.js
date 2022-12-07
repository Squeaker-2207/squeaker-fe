import React, { useState } from 'react'
import sqrl from '../../images/SqueakerIcon.png'
import './Home.css'
import { Link } from 'react-router-dom'
// import { GetUser } from '../../queries/getUser'
// import { GetSqueaks } from '../../queries/getSqueaks'

export const Home = ({ setPage }) => {
  setPage(window.location.pathname)

  const [loggingIn, setLoggingIn] = useState(false)
  const [newUser, setNewUser] = useState(false)

  // console.log(GetUser("Jort Jeggings"), GetSqueaks());

  const isLoggingIn = () => {
    setLoggingIn(true)
  }

  const notLoggingIn = () => {
    setLoggingIn(false)
  }


  const isNewUser = () => {
    setNewUser(true)
  }

  const notNewUser = () => {
    setNewUser(false)
  }


  return (
    <main className='main-page column'>
      <div className='home-logo column center-x'>      
        <div className='app-image-container'>
          <img src={sqrl} alt='hey now' />
        </div>
        <h1>SQUEAKR</h1>
      </div> 

      <div className='spacer'></div> 
      <div className='spacer'></div> 

        {!loggingIn && !newUser &&
          <div className='home-options column center distribute'>        
              <button onClick={isLoggingIn} >Login</button>
              <div className='spacer'></div> 
              <button onClick={isNewUser} >I'm A New User</button>
          </div>
        }

      <div className='buttons column center'>

        {loggingIn && 
        <div className='column center'>
          <span>Enter Username:</span> 
          <input type='text'></input>
          <Link to='/user' >
            <button onClick={notLoggingIn} >Submit</button>
          </Link>
        </div>  
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

        <div className='spacer'></div> 

        <div className='debug row distribute'>debug only:        
          <Link to='/user' >
            <button>User</button>
          </Link>
          <Link to='/admin' >
            <button>Admin</button>
          </Link>
        </div>
      </div>
      

    </main>
  )
}
