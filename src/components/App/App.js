
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import sqrl from '../../images/SqueakerIcon.png'
import { Admin } from '../Admin/Admin.js'
import { Error } from '../Error/Error'
import { Home } from '../Home/Home'
import { User } from '../User/User'

import './App.css'


const App = () => {

  const [page, setPage] = useState('/')
//   const [squeaks, setSqueaks] = useState([])
//   const [flaggedSqueaks, setFlaggedSqueaks] = useState([])
  const [userName, setUserName] = useState('')

 const [isAdminTabClicked, SetIsAdminClicked] = useState(false)

  console.log(SetIsAdminClicked)


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
        <Route 
          path='/' 
          element={
            <Home 
              setPage={setPage} 
              setUserName={setUserName}
            />
          } 
        />
        <Route 
          path='/user' 
          element={
            <User 
              setPage={setPage}
              userName={userName}
//               squeaks={squeaks}
//              isAdminTabClicked={isAdminTabClicked}
//               setSqueaks={setSqueaks}
//               flaggedSqueaks={flaggedSqueaks}
//               setFlaggedSqueaks={setFlaggedSqueaks} 
            />
          } 
        />
        <Route 
          path='admin' 
          element={
            <Admin 
            setPage={setPage}
            userName={userName}
//            squeaks={squeaks}
//            flaggedSqueaks={flaggedSqueaks}
          />
          } 
        />
        <Route 
          path='*' 
          element={
            <Error 
              setPage={setPage}
            />
          } 
        />

      </Routes> 
    </main>
  )
}

export default App
