import React, { useState, useContext } from "react";
import { POST_SQUEAK } from "../../Mutations/addSqueak";
import { useMutation } from "@apollo/client";
import { UserContext } from "../../contexts/userContext";
import { GetSqueaks } from "../../queries/getSqueaks";
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


  const submitNewSqueak = () => {
    postSqueak();
  };

  return (
    <div className="new-squeak column center">
      <form className="new-squeak-form column center">
        <input
          className="text-input column center"
          type="text"
          name="squeak"
          value={squeakContent}
          onChange={(event) => setSqueakContent(event.target.value)}
        />
        <button
          id="post-new-squeak-button"
          type="button"
          onClick={() => submitNewSqueak()}
        >
          Squeak!
        </button>
      </form>
    </div>
  );
};
