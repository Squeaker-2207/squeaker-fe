import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Squeak } from "../Squeak/Squeak";
import { NewSqueak } from "../NewSqueak/NewSqueak";
import { GetSqueaks } from "../../queries/getSqueaks";
import { useParams} from "react-router-dom";
import { GetUser } from "../../queries/getUser";
import chippy from "../../images/SqueakerIcon.png";
import Navbar from "../Navigation/Navbar";
import "./User.css";
import "../App/App.css";

const postImg = require("../../images/writePost.png");

export const User = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const { userId } = useParams();
  const { data: userById, loading, error } = GetUser(userId);
  const { isAdmin = false } = user || {};
  // const { loading, error, data } = GetSqueaks();
  console.log(userById);
  useEffect(() => {
    if (!user) {
      setUser(userById);
    }
  }, [user, userById, setUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const displaySqueaks = userById.allSqueaks.map((squeak) => {
    return (
      <Squeak
        id={squeak.id}
        content={squeak.content}
        key={squeak.id}
        squeak={squeak}
        userById={userById}
      />
    );
  });

  return (
    <main className="user">
      {!show ? (
        <img
          className="post-squeak"
          src={postImg }
          alt="write a squeak"
          type="button"
          onClick={() => setShow(true)}
        />
      ) : (
        <div className="squeaks-popup">
          <NewSqueak setShow={setShow} />
        </div>
      )}
      <header className="row center">
        <div className="title-and-image">
        <h1 className="squeakr-title">SQUEAKR</h1>
        <div className="user-image-container">
          <img
            src={chippy}
            alt="Squeakr logo - a blue silhouette of a chipmunk"
          />
        </div>
        </div>
        <Navbar isAdmin={userById.isAdmin}/>
      </header> 
      <span className="user-greeting column">Hello {userById.username}! {isAdmin ? <strong> User view </strong>: <p>Welcome</p>}</span>
      <br></br>
      <section className="user-content-squeaks column center">
        {displaySqueaks}
      </section>
    </main>
  );
};
