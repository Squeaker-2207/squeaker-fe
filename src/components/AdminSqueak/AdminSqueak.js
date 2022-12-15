import React from "react";
import { useMutation } from "@apollo/client";
import { GetReported } from "../../queries/getReported";
import { HIDE_SQUEAK } from "../../Mutations/hideSqueak";
import { APPROVE_SQUEAK } from "../../Mutations/approveSqueak";
import '../App/App.css'
import '../Squeak/Squeak.css'

export const AdminSqueak = ({ id, content, metric, probability, user }) => {
  const { username } = user;
  const { refetch } = GetReported();

  const [removeSqueak] = useMutation(HIDE_SQUEAK, {
    variables: { 
      id: id,
      approved: false
    },
    onCompleted: () => {
      refetch();
    }
  });

  const [approveSqueak] = useMutation(APPROVE_SQUEAK, {
    variables: {
      id: id,
      approved: true
    },
    onCompleted: () => {
      refetch();
    }
  });
 
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
        <button className="admin-squeak-approve" onClick={() => approveSqueak()}>
          👍
          <span className="admin-squeak-approve-tooltip tooltip">
            Approve this Squeak
            </span>
        </button>
        <button className="admin-squeak-deny" onClick={() => removeSqueak()}>
          👎
          <span className="admin-squeak-deny-tooltip tooltip">
            Deny this Squeak
          </span>
        </button>
      </div>
    </div>
  );
};
