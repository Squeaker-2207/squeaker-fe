import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { UserContext } from "../../contexts/userContext";
import { GetUser } from "../../queries/getUser";
import { POST_SQUEAK } from "../../Mutations/addSqueak";
import "./NewSqueak.css";

export const NewSqueak = ({ setShow, userById }) => {
  const [squeakContent, setSqueakContent] = useState("");
  const [user] = useContext(UserContext);
  const { refetch } = GetUser(userById.id);
  const { id } = user;

  const [postSqueak] = useMutation(POST_SQUEAK, {
    variables: {
      content: squeakContent,
      userId: id,
    },
    onCompleted: () => {
      refetch();
    },
  });

  const submitNewSqueak = (event) => {
    event.preventDefault();
    postSqueak();
    setSqueakContent("");
    setShow(false);
  };

  const handleCancel = () => {
    setSqueakContent("");
    setShow(false);
  };

  return (
    <div className="new-squeak column center">
      <form
        onSubmit={(event) => submitNewSqueak(event)}
        className="new-squeak-form column center"
      >
        <textarea
          id="new-squeak-input"
          autoFocus
          className="text-input column center"
          type="text"
          name="squeak"
          value={squeakContent}
          onChange={(event) => setSqueakContent(event.target.value)}
        />
        <div className="new-squeaks-buttons">
          <button
            className="cancel-button"
            type="button"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button
            id="post-new-squeak-button"
            disabled={!squeakContent}
            type="submit"
          >
            Squeak!
          </button>
        </div>
      </form>
    </div>
  );
};
