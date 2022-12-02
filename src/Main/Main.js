import React, { useState } from 'react'
import sqrl from '../images/SqueakerIcon.png'
import '../App.css'
import './Main.css'


export const Main = () => {
  /**
   * this is where all the squeaks will be displayed
   */

  const [squeaks, setSqueaks] = useState([])

  const displaySqueaks = () => {
    
  }

  return (
    <div>
      <header className='row'>
        <h1>SQUEAKR</h1>
        <div className='main-image-container'>
          <img src={sqrl} />
        </div>
      </header>


    </div>
  )
}
