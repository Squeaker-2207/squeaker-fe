import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { Squeak } from "../Squeak/Squeak";
import { NewSqueak } from "../NewSqueak/NewSqueak";
import { GetSqueaks } from "../../queries/getSqueaks";
import { useParams } from "react-router-dom";
import { GetUser } from "../../queries/getUser";
import sqrl from "../../images/SqueakerIcon.png";
import Navbar from "../Navigation/Navbar";
import "./User.css";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(error);

  console.log(data);
  const displaySqueaks = data.allSqueaks.map((squeak) => {
    return (
      <Squeak
        id={squeak.id}
        content={squeak.content}
        name={squeak.username}
        key={squeak.id}
        isAdminTabClicked={isAdminTabClicked}
        squeak={squeak}
      />
    );
  });

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
        {displaySqueaks}
      </section>
    </main>
  );
};
