import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import "./Squeak.css";

const UPDATE_NUT = gql`
  mutation UpdateNut($id: ID!) {
    updateSqueak(input: { id: $id, nut: true }) {
      squeak {
        content
        nuts
      }
    }
  }
`;

export const Squeak = ({ isAdminTabClicked = false, squeak }) => {
  const { id: squeakId, content, nuts, user } = squeak;
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
        <div className="squeak-avatar-container"></div>
        <span>{squeakId}</span>
      </div>
      <span className="squeak-text">{content}</span>

      <div className="squeak-options row">
        <button type="button" onClick={() => handleClick()}>
          🌰 {count}
        </button>
        <button>👁️‍🗨️</button>

        {isAdminTabClicked && <button>❌</button>}
      </div>
    </div>
  );
};
