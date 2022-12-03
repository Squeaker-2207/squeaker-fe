import React from 'react'
import sqrl from '../images/SqueakerIcon.png'
import '../App.css'
import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main className='main-page center'>
      <div className='home-logo column center center-x'>      
        <div className='app-image-container'>
          <img src={sqrl} alt='hey now' />
        </div>
        <h1>SQUEAKR</h1>
      </div> 

      <div className='spacer'></div> 
      <div className='spacer'></div> 

      <div className=' buttons column center'>
        <Link to='/user' >
          <button>User</button>
        </Link>
      <div className='spacer'></div> 
        <Link to='/admin' >
          <button>Admin</button>
        </Link>
      </div>
      

    </main>
  )
}
