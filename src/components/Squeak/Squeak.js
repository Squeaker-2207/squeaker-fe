import { useMutation } from "@apollo/client";
import React from "react";
import { GetSqueaks } from "../../queries/getSqueaks";
import { ADD_NUT } from "../../Mutations/addANut";
import { ADD_REPORT } from "../../Mutations/addReports";
import { DELETE_SQUEAK } from "../../Mutations/deleteSqueak";
import "./Squeak.css";
import "../App/App.css"
import chippy from '../../images/SqueakerIcon.png'


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
      <div className="squeak-user-info row ">
        <div className="squeak-avatar-container">
          <img src={chippy} alt='Squeakr logo - a blue silhouette of a chipmunk'/>
        </div>
        <span className="squeak-username">{user.username}</span>
      </div>
      <p className="row center squeak-text">{content}</p>

      <div className="squeak-options row">
        <button 
          className="squeak-nut-button" 
          type="button" 
          onClick={() => updateNut()}
          >
          🌰 
          <span className="squeak-text">{squeak.nuts}</span>
          <span className="squeak-nut-button-tooltip tooltip">
          Give this Squeak a Nut
          </span>
        </button>
        <button 
          className="squeak-report-button"
          onClick={() => updateReport()}
          >
          👁️‍🗨️ 
          <span className="squeak-text">{squeak.reports}</span>
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
