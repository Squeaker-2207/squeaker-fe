import React from 'react'
import './Squeak.css'

export const Squeak = ({ id, content,isAdminTabClicked = false}) => {
  return (
    <div className='squeak'>
      <div className='user-info row'>
        <div className='squeak-avatar-container'>
        </div>
        <span>{id}</span>
      </div>
      <span className='squeak-text'>{content}</span>

      <div className='squeak-options row'>
        <button>🌰</button>
        <button>👁️‍🗨️</button>
        {isAdminTabClicked && <button>❌</button>}
      </div>
    </div>
  )
}
