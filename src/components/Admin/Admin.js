import React from "react";
import { AdminSqueak } from "../AdminSqueak/AdminSqueak";
import { GetReported } from "../../queries/getReported";
import Navbar from "../Navigation/Navbar";

export const Admin = () => {
  const {data, error, loading} = GetReported();


  if (error) return <p>Error : {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  const displaySqueaks = data?.reportedSqueaks.map((squeak)=> {
    const {metric, probability} = squeak.score
    return (
      <AdminSqueak key={squeak.id} id={squeak.id} user={squeak.user} content={squeak.content} metric={metric} probability={probability} />
    )
  })
  console.log(data.reportedSqueaks);
  return (
    <main>
      <Navbar />
      {displaySqueaks}
    </main>
  );
};
