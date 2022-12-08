import React from 'react'
import chippy from '../../images/SqueakerIcon.png'

export const AdminSqueak = ({ id, userName, text, flaggedSqueaks, setFlaggedSqueaks }) => {

  return (
    <div className='squeak'>
      <div className='user-info row'>
        <div className='squeak-avatar-container'>
          <img src={chippy} alt='user' />
        </div>
      <p>Squeak ID: {id}</p>
      <span className='squeak-text'>{text}</span>
      </div>

      <div className='squeak-options row'>
        <button onClick='' >👍</button>
        <button onClick='' >👎</button>
      </div>
    </div>
  )
}
