import React from "react";
import { useMutation } from "@apollo/client";
import { GetReported } from "../../queries/getReported";
import { DELETE_SQUEAK } from "../../Mutations/deleteSqueak";
import '../App/App.css'
import '../Squeak/Squeak.css'

// import chippy from "../../images/SqueakerIcon.png";

export const AdminSqueak = ({ id, content, metric, probability, user }) => {
  const { username } = user;
  const { refetch } = GetReported();

  const [removeSqueak] = useMutation(DELETE_SQUEAK, {
    variables: {
      id: id,
    },
    onCompleted: () => {
      refetch();
    },
  });

  const deleteReportedSqueak = () => {
    removeSqueak();
  };

  return (
    <div className="squeak">
        <p>{username}</p>
      <div className="user-info row">
        <span className="squeak-text">{content}</span>
      </div>
      <br></br>
      <div className="column">
        <span>{metric}</span>
        <span>{probability}</span>
      </div>
      <div className="squeak-options row">
        <button className="admin-squeak-approve" onClick="">
          👍
          <span className="admin-squeak-approve-tooltip tooltip">
            Approve this Squeak
            </span>
        </button>
        <button className="admin-squeak-deny" onClick={() => deleteReportedSqueak()}>
          👎
          <span className="admin-squeak-deny-tooltip tooltip">
            Deny this Squeak
          </span>

        </button>
      </div>
    </div>
  );
};
