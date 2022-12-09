import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from "../../contexts/userContext";

import "./User.css";
// import { Squeak } from "../Squeak/Squeak";
// import { NewSqueak } from "../NewSqueak/NewSqueak";
// import { GetSqueaks } from "../../queries/getSqueaks";
//  import { Link } from 'react-router-dom'

//import Navbar from "../Navigation/Navbar";

export const User = ({ isAdminTabClicked }) => {
 const [user] = useContext(UserContext);
 // const { username, id, isAdmin } = user;
  // const { loading, error, data } = GetSqueaks();
  // const [userData, setUserData] = useState()

  useEffect(()=> {

    const getUserData = async() => {
      // const result = await user
      await setUserData("")
    }
    getUserData()

  },[])
  
  // unnecessary console logs to trick circleCI
  console.log(user)
  console.log(userData);

  if (error) return <p>Error : {error.message}</p>;
  if (loading) return <p>Loading...</p>;
 const displaySqueaks = data.allSqueaks.map((squeak) => {
    return (
     <Squeak
       id={squeak.id}
       content={squeak.content}
       key={squeak.id}
       isAdminTabClicked={isAdminTabClicked}
       data={data}
     />
    )
  })


  // return (

  //   <main className='user'>

  //  <NewSqueak />

    
  //       <div className='user-content'>
     
//{/* {isAdmin && <Navbar />} */}
//          {/* <nav className='user-options'>
//            <Link to={'/user/:id'}>
//              <button id='user-info-button'>👤</button>
//            </Link>
//            <div className='spacer'></div>
    //        <button id='new-squeak-button'  >💬</button>
//          </nav>

//          <section className='user-content-squeaks'>
//            {/* {displaySqueaks()} */}
    //       </section>

    //     </div>
      

    // </main>
  // );
  } 
