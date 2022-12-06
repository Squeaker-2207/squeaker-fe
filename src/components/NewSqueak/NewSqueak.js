import React, { useState } from 'react'
import './NewSqueak.css'

export const NewSqueak = ({addSubmittedSqueak, stopSqueaking}) => {
  const [squeakContent, setSqueakContent] = useState('')

  const submitNewSqueak = (event) => {
    stopSqueaking()
    addSubmittedSqueak({
      id: Date.now(),
      text: squeakContent})
  }

  return (
    <div className='new-squeak column center' >
      <form className='new-squeak-form column center'>
        <input className='column center' type="text" name="squeak" value={squeakContent} onChange={event => setSqueakContent(event.target.value)} />
        <button onClick={event => submitNewSqueak(event)}>Squeak!</button>
      </form>
    </div>
  )
}
