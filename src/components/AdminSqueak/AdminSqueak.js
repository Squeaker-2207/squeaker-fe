import React from "react";
// import chippy from "../../images/SqueakerIcon.png";

export const AdminSqueak = ({ id, content, metric, probability, user }) => {
  const { username } = user;
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
        <button onClick="">👎</button>
      </div>
    </div>
  );
};
