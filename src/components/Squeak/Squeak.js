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
        <button 
          className="squeak-nut-button" 
          type="button" 
          // onClick={() => handleClick()}
          >
          🌰 
          <span className="squeak-nut-button-tooltip tooltip">
          Give this Squeak a Nut
          </span>
        </button>
        <button className="squeak-report-button">
            👁️‍🗨️ 
          <span className="squeak-report-button-tooltip tooltip">
            Report this Squeak
          </span>
        </button>

        {userById.id === squeak.user.id && 
          <button 
          className="squeak-delete-button" 
          onClick={() => deleteClick()}>
            ❌
            <span className="squeak-delete-button-tooltip tooltip">
            Delete this Squeak
            </span>
          </button>
        }
      </div>
    </div>
  );
};
