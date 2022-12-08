import React from 'react'
import { AdminSqueak } from '../AdminSqueak/AdminSqueak'
export const Admin = ({ setPage, flaggedSqueaks }) => {

  setPage(window.location.pathname)

  const displaySqueaks = () => {
    return flaggedSqueaks.map(squeak => {
      return (
        <AdminSqueak 
        id={squeak.id}
        flaggedSqueaks={flaggedSqueaks}
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
