import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import sqrl from "../../images/SqueakerIcon.png";
import "./User.css";
// import { Squeak } from "../Squeak/Squeak";
import { NewSqueak } from "../NewSqueak/NewSqueak";
import { GetSqueaks } from "../../queries/getSqueaks";
import { useParams } from "react-router-dom";


import { GetUser } from "../../queries/getUser";
import Navbar from "../Navigation/Navbar";

export const User = ({ isAdminTabClicked }) => {

  const [user, setUser] = useContext(UserContext);

  const { userId } = useParams();
  const { data: userById } = GetUser(userId);
  const { isAdmin = false } = user || {};
  const { loading, error, data } = GetSqueaks();

  useEffect(() => {
    if (!user) {
      setUser(userById);
    }
  }, [user, userById, setUser]);


  // if (error) return <p>Error : {error.message}</p>;
  // if (loading) return <p>Loading...</p>;
//  const displaySqueaks = data.allSqueaks.map((squeak) => {
    return (
    <div>hey</div>
//      <Squeak
//        id={squeak.id}
//        content={squeak.content}
//        name={squeak.username}
//        key={squeak.id}
//        isAdminTabClicked={isAdminTabClicked}
//        squeak={squeak}
//     />
    );
 // });

  return (
    <main>
      {isAdmin && <Navbar />}
      <header className="row center">
        <h1>SQUEAKR</h1>
        <div className="main-image-container">
          <img src={sqrl} alt="alt text" />
        </div>
      </header>

      <NewSqueak />
      <button>💬</button>
      <section className="main-content-squeaks column center">
     
      </section>
    </main>
  );
};

