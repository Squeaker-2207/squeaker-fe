// import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import "./Squeak.css";
import "../App/App.css"



export const Squeak = ({squeak }) => {
  const { id: squeakId, content, nuts, user} = squeak;

  const {id: userId} = user

  const [count, setCount] = useState(nuts);


  const handleClick = () => {
   //updateNut();
    let num = count;
    num += 1;
    setCount(num);
  };

  return (
    <div className="squeak">
      <div className="user-info row">
        <span>{user.username}</span>
      </div>
      <span className="squeak-text">{content}</span>

      <div className="squeak-options row">
        <button type="button" onClick={() => handleClick()}>
          🌰 {count}
        </button>
        <button>👁️‍🗨️</button>

        {userId === squeakId && <button>❌</button>}
      </div>
    </div>
  );
};
