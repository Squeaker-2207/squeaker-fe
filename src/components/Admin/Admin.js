import React from "react";
import { GetReported } from "../../queries/getReported";
import Navbar from "../Navigation/Navbar";
import "../Navigation/Navbar";
export const Admin = () => {
  console.log(GetReported())
  return (
    <div>
      <Navbar />
    </div>
  );
};
