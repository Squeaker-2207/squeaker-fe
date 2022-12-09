import React, { useState } from 'react'
import './NewSqueak.css'

export const NewSqueak = ({addSubmittedSqueak, stopSqueaking, userName}) => {
  const [squeakContent, setSqueakContent] = useState('')

  const submitNewSqueak = (event) => {
    event.preventDefault()
    stopSqueaking()
    addSubmittedSqueak({
      id: Date.now(),
      user: userName,
      text: squeakContent
    })
  }

  return (
    <div className='new-squeak column center' >
      <form className='new-squeak-form column center'>
        <input className='text-input column center' type="text" name="squeak" value={squeakContent} onChange={event => setSqueakContent(event.target.value)} />
        <button id='post-new-squeak-button' onClick={event => submitNewSqueak(event)}>Squeak!</button>
      </form>
    </div>
  )
}
