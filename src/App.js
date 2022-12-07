import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import sqrl from './images/SqueakerIcon.png'
import { Admin } from './Admin/Admin'
import { Error } from './Error/Error'
import { Home } from './Home/Home'
import { User } from './User/User'
import './App.css'

const App = () => {
  const [page, setPage] = useState('/')

  return (
    <main className='app column center'>
      {page !== '/' && 
          <header className='row center'>
            <Link to='/' className='row center'>
            <h1>SQUEAKR</h1>
            <div className='logo-image-container'>
              <img src={sqrl} alt='alt text' />
            </div>
        </Link>
          </header>
      }

      <Routes>
        <Route path='/' element={<Home setPage={setPage} />} />
        <Route path='/user' element={<User setPage={setPage} />} />
        <Route path='admin' element={<Admin setPage={setPage}/>} />
        <Route path='*' element={<Error setPage={setPage}/>} />
      </Routes> 

    </main>
  )
}

export default App