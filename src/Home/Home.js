import React from 'react'
import sqrl from '../images/SqueakerIcon.png'
import '../App.css'
import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Link to='/main' >
      <div className='home-logo column center center-x'>      
        <div className='app-image-container'>
          <img src={sqrl} />
        </div>
        <h1>SQUEAKR</h1>
      </div>  
    </Link>
  )
}
