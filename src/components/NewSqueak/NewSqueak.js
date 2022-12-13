import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { UserContext } from "../../contexts/userContext";
import { GetSqueaks } from "../../queries/getSqueaks";
import { POST_SQUEAK } from "../../Mutations/addSqueak";
import "./NewSqueak.css";

export const NewSqueak = () => {
  const [squeakContent, setSqueakContent] = useState("");
  const [user] = useContext(UserContext);
  const { refetch } = GetSqueaks();
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
  };

  return (
    <div className="new-squeak column center">
      <form
        onSubmit={(event) => submitNewSqueak(event)}
        className="new-squeak-form column center"
      >
        <input
          id="new-squeak-input"
          autoFocus
          className="text-input column center"
          type="text"
          name="squeak"
          value={squeakContent}
          onChange={(event) => setSqueakContent(event.target.value)}
        />
        <button
          id="post-new-squeak-button"
          type="submit"
          // onClick={() => submitNewSqueak()}
        >
          Squeak!
        </button>
      </form>
    </div>
  );
};
