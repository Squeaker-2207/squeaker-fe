import React, { useState } from 'react'
import '../App/App.css'
import './User.css'
import { Squeak } from '../Squeak/Squeak'
import { NewSqueak } from '../NewSqueak/NewSqueak'
import { Link } from 'react-router-dom'


export const User = ({ setPage }) => {
  const [squeaks, setSqueaks] = useState([])
  const [isSqueaking, setIsSqueaking] = useState(false)
  setPage(window.location.pathname)

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
    <main className='user'>

      {isSqueaking && <NewSqueak addSubmittedSqueak={addSubmittedSqueak} stopSqueaking={stopSqueaking}/> }

      {!isSqueaking && 
        <div className='user-content'>

          <nav className='user-options'>
            <Link to='/user/:id'>
              <button id='user-info-button'>👤</button>
            </Link>
            <div className='spacer'></div>
            <button id='new-squeak-button' onClick={startSqueaking} >💬</button>
          </nav>

          <section className='user-content-squeaks'>
            {displaySqueaks()}
          </section>

        </div>
      }
    </main>
  )
}
