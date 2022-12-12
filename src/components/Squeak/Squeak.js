import { useMutation } from "@apollo/client";
import React from "react";
// import { useState } from "react";
import { GetSqueaks } from "../../queries/getSqueaks";
import { DELETE_SQUEAK } from "../../queries/deleteSqueak";
import "./Squeak.css";
import "../App/App.css"



export const Squeak = ({ squeak, userById }) => {
  const { content, user } = squeak;
  const { refetch } = GetSqueaks();

  const [deleteSqueak] = useMutation(DELETE_SQUEAK, {
    variables: {
      id: squeak.id,
    },
    onCompleted: () => {
      refetch()
    },
  });

  const deleteClick = () => {
    deleteSqueak();
  };
  
  // const handleClick = () => {
    //updateNut();
    // let num = count;
    // num += 1;
    // setCount(num);
  // }

  return (
    <div className="squeak">
      <div className="user-info row">
        <span className="squeak-username">{user.username}</span>
      </div>
      <span className="squeak-text">{content}</span>

      <div className="squeak-options row">
        {/* <button type="button" onClick={() => handleClick()}>
          🌰 
        </button> */}
        <button className="squeak-report-button">
            👁️‍🗨️ 
          <span className="squeak-report-button-tooltip">
            Report this Squeak
          </span>
        </button>
        {userById.id === squeak.user.id && <button onClick={() => deleteClick()}>❌</button>}
      </div>
    </div>
  );
};
