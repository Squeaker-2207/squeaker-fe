import React from "react";
import { useMutation } from "@apollo/client";
import { GetReported } from "../../queries/getReported";
import { DELETE_SQUEAK } from "../../Mutations/deleteSqueak";

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
      <div className="squeak-options row">
        <h6> {metric}</h6>
        <h6>{probability}</h6>
        <button onClick="">👍</button>
        <button onClick={() => deleteReportedSqueak()}>👎</button>
      </div>
    </div>
  );
};
