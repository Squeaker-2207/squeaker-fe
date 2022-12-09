import React from 'react'
import { Link } from 'react-router-dom'

export const Error = ({ setPage }) => {

  setPage(window.location.pathname)

  return (
    <main>
      <h2>Oh nose!</h2>
      <p>This page in't found!</p>
      <p>Head back to <Link to='/'>teh main page</Link>.</p>
    </main>
  )
}
