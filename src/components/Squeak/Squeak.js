import React, { useState } from 'react'
import './Squeak.css'
import chippy from '../../images/SqueakerIcon.png'

export const Squeak = ({ id, userName, text, flaggedSqueaks, setFlaggedSqueaks, isAdminTabClicked = false }) => {
  const [nuts, setNuts] = useState(0)
  const [nutted, setNutted] = useState(false)

  const reportSqueak = () => {
    setFlaggedSqueaks([...flaggedSqueaks, id])
  }

  const nutSqueak = () => {
    setNutted(true)
    if (nuts === 0) {
      setNuts(nuts => nuts += 1)      
    }
  }

  const useless = () => {
    if (nutted) {
      
    }
  }
  useless()

  return (
    <div className='squeak'>
      <div className='user-info row'>
        <div className='squeak-avatar-container'>
          <img src={chippy} alt='user' />
        </div>
        <span className='squeak-username'>{userName}</span>
      </div>
      <span className='squeak-text'>{text}</span>
      <p>Squeak ID: {id}</p>
      <div className='squeak-options row'>
        <button onClick={nutSqueak} >🌰{nuts}</button>
        <button onClick={reportSqueak} >👁️‍🗨️</button>
        {isAdminTabClicked && <button>❌</button>}
      </div>
    </div>
  )
}
