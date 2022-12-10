// import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import "./Squeak.css";

// const UPDATE_NUT = gql`
//   mutation UpdateNut($id: ID!) {
//     updateSqueak(input: { id: $id, nut: true }) {
//       squeak {
//         content
//         nuts
//       }
//     }
//   }
// `;

export const Squeak = ({squeak }) => {
  const { id: content, nuts, user} = squeak;
  console.log(user)
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

        {<button>❌</button>}
      </div>
    </div>
  );
};
