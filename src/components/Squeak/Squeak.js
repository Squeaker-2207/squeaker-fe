import React from 'react'
import './Squeak.css'

export const Squeak = ({ id, text }) => {
  console.log('squeak squeak')
  return (
    <div className='squeak'>
      <div className='user-info row'>
        <div className='squeak-avatar-container'>
          <img src='' alt='user image' />
        </div>
        <span>{id}</span>
      </div>
      <span className='squeak-text'>{text}</span>

      <div className='squeak-options row'>
        <button>🌰</button>
        <button>👁️‍🗨️</button>
        <button>❌</button>
      </div>
    </div>
  )
}
