import { useMutation } from "@apollo/client";
import React from "react";
import { GetSqueaks } from "../../queries/getSqueaks";
import { ADD_NUT } from "../../Mutations/addANut";
import { ADD_REPORT } from "../../Mutations/addReports";
import { DELETE_SQUEAK } from "../../Mutations/deleteSqueak";
import "./Squeak.css";
import "../App/App.css";

export const Squeak = ({ squeak, userById }) => {
  const { content, user } = squeak;
  const { refetch } = GetSqueaks();

  const [updateNut] = useMutation(ADD_NUT, {
    variables: {
      id: squeak.id,
      nut: true,
    },
    onCompleted: () => {
      refetch();
    },
  });

  const [updateReport] = useMutation(ADD_REPORT, {
    variables: {
      id: squeak.id,
      report: true,
    },
    onCompleted: () => {
      refetch();
    },
  });

  const [deleteSqueak] = useMutation(DELETE_SQUEAK, {
    variables: {
      id: squeak.id,
    },
    onCompleted: () => {
      refetch();
    },
  });

  const deleteClick = () => {
    deleteSqueak();
  };

  return (
    <div className="squeak">
      <div className="user-info row">
        <span>{user.username}</span>
      </div>
      <span className="squeak-text">{content}</span>
      <div className="squeak-options row">
        <button type="button" onClick={() => updateNut()}>
          🌰 <span className="squeak-text">{squeak.nuts}</span>
        </button>
        <button type="button" onClick={() => updateReport()}>
          👁️‍🗨️ <span className="squeak-text">{squeak.reports}</span>
        </button>
        {userById.id === squeak.user.id && (
          <button onClick={() => deleteClick()}>❌</button>
        )}
      </div>
    </div>
  );
};
