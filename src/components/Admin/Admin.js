import React from "react";
import { AdminSqueak } from "../AdminSqueak/AdminSqueak";
import { GetReported } from "../../queries/getReported";
import Navbar from "../Navigation/Navbar";
import chippy from "../../images/SqueakerIcon.png";
import "./Admin.css";

export const Admin = () => {
  const { data, error, loading } = GetReported();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const displaySqueaks = data?.reportedSqueaks.map((squeak) => {
    const { metric, probability } = squeak.score;
    return (
      <AdminSqueak
        key={squeak.id}
        id={squeak.id}
        user={squeak.user}
        content={squeak.content}
        metric={metric}
        probability={probability}
      />
    );
  });

  return (
    <main className="user">
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
        <Navbar />
      </header>
      <span className="user-greeting column"> <strong>you are in Admin view </strong></span>
      <br></br>
      <section className="user-content-squeaks column center">
        {displaySqueaks}
      </section>
    </main>
   
  );
};
