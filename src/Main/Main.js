import React, { useState } from 'react'
import sqrl from '../images/SqueakerIcon.png'
import '../App.css'
import './Main.css'
import { Squeak } from '../Squeak/Squeak'
import { NewSqueak } from '../NewSqueak/NewSqueak'


export const Main = () => {
  /**
   * this is where all the squeaks will be displayed
   */

  const [squeaks, setSqueaks] = useState([])
  const [isSqueaking, setIsSqueaking] = useState(false)

  const displaySqueaks = () => {
    return squeaks.map(squeak => {
      return (
        <Squeak 
          id={squeak.id}
          text={squeak.text}
        />
      )
    })
  }

  const startSqueaking = () => {
    setIsSqueaking(true)
  }
  
  const stopSqueaking = () => {
    setIsSqueaking(false)
  }
  
  const addSubmittedSqueak = (submittedSqueak) => {
    setSqueaks(squeaks => [...squeaks, submittedSqueak])
  }

  return (
    <main>
      <header className='row center'>
        <h1>SQUEAKR</h1>
        <div className='main-image-container'>
          <img src={sqrl} />
        </div>
      </header>

      {isSqueaking && <NewSqueak addSubmittedSqueak={addSubmittedSqueak} stopSqueaking={stopSqueaking}/> }

      {!isSqueaking && 
        <div className='main-content row'>

        <nav className='main-options column'>
          <button>👤</button>
          <button onClick={startSqueaking} >💬</button>
        </nav>

        <section className='main-content-squeaks column center'>
          {displaySqueaks()}
        </section>

        </div>
      }
    </main>
  )
}