import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Error } from '../Error/Error'
import { Home } from '../Home/Home'
import { User } from '../User/User'
import { Admin } from '../Admin/Admin'
import './App.css'


const App = () => {

  return (
    <main className='app column center'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='admin' element={<Admin />} />
        <Route path='*' element={<Error />} />
      </Routes> 

    </main>
  )
}

export default App