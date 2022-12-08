import React from 'react'
import './Squeak.css'
import chippy from '../../images/SqueakerIcon.png'

export const Squeak = ({ id, text, nutSqueak, reportSqueak, removeSqueak }) => {
  console.log('squeak squeak')
  return (
    <div className='squeak'>
      <div className='user-info row'>
        <div className='squeak-avatar-container'>
          <img src={chippy} alt='user image' />
        </div>
        <span className='squeak-username'>{id}</span>
      </div>
      <span className='squeak-text'>{text}</span>

      <div className='squeak-options row'>
        <button onClick={nutSqueak} >🌰</button>
        <button onClick={reportSqueak} >👁️‍🗨️</button>
        <button onClick={removeSqueak} >❌</button>
      </div>
    </div>
  )
}
