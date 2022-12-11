// import { gql, useMutation } from "@apollo/client";
import React from "react";
// import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_SQUEAK } from "../../queries/deleteSqueak";
import "./Squeak.css";

export const Squeak = ({ squeak, userById }) => {
  const { id: squeakId, content, user } = squeak;
  const { id: userId } = user;
  // const [count, setCount] = useState(nuts);

  const [deleteSqueak] = useMutation(DELETE_SQUEAK, {
    variables: {
      id: squeak.id,
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const deleteClick = () => {
    //updateNut();
    // let num = count;
    // num += 1;
    // setCount(num);
    deleteSqueak();
  };
  // const handleClick = () => {
    //updateNut();
    // let num = count;
    // num += 1;
    // setCount(num);
  // }


  console.log(userId)
  console.log(squeakId)
  console.log(squeak.user.id)
  console.log(userById.id)

  return (
    <div className="squeak">
      <div className="user-info row">
        <span>{user.username}</span>
      </div>
      <span className="squeak-text">{content}</span>

      <div className="squeak-options row">
        {/* <button type="button" onClick={() => handleClick()}>
          🌰 
        </button> */}
        <button>👁️‍🗨️</button>
        {userById.id === squeak.user.id && <button onClick={() => deleteClick()}>❌</button>}
      </div>
    </div>
  );
};
