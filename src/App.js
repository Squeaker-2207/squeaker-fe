import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Admin } from './Admin/Admin'
import { Error } from './Error/Error'
import { Home } from './Home/Home'
import { Main } from './Main/Main'
import './App.css'

const App = () => {
  const page = window.location.pathname

  return (
    <main className='app column center'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='admin' element={<Admin />} />
        <Route path='*' element={<Error />} />
      </Routes> 

    </main>
  )
}

export default App