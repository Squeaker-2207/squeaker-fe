
import React from 'react'
import { AdminSqueak } from '../AdminSqueak/AdminSqueak'
import { GetReported } from "../../queries/getReported";
import Navbar from "../Navigation/Navbar";


export const Admin = ({ setPage, flaggedSqueaks }) => {

  setPage(window.location.pathname)

  const displaySqueaks = () => {
    console.log(GetReported())
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
      <Navbar />
      {displaySqueaks()}
    </main>
  )
}

