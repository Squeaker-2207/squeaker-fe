import React from "react";
import { AdminSqueak } from "../AdminSqueak/AdminSqueak";
import { GetReported } from "../../queries/getReported";
import Navbar from "../Navigation/Navbar";

export const Admin = () => {
  const {data, error, loading} = GetReported();


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  

  const displaySqueaks = data?.reportedSqueaks.map((squeak)=> {
    const {metric, probability} = squeak.score
    return (
      <AdminSqueak key={squeak.id} id={squeak.id} user={squeak.user} content={squeak.content} metric={metric} probability={probability} />
    )
  })
 
  return (
    <main>
      <Navbar />
      {displaySqueaks}
    </main>
  );
};
