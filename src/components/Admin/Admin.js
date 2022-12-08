import React, { useState } from 'react'
import { Squeak } from '../Squeak/Squeak'

export const Admin = ({ setPage }) => {
  const [squeaks, setSqueaks] = useState([])

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

  return (
    <main>
      <header>Admin</header>
      {displaySqueaks()}
    </main>
  )
}
