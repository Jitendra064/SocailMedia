import React, { useState } from "react";
import { loggedInUser } from "../storageOperations/storageOperations";

const EditPost = (props) => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  console.log(props.EditDataMyPost);

  let EditPost = props.EditDataMyPost;
  // console.log(props.EditDataHome);
  const EnterDataArray = {
    image: "",
    text: "",
    username: "",
    like: "",
    comments: [],
  };
  function updateHandler() {
    let data = JSON.parse(localStorage.getItem("posts"));
    if (image.length > 0 && text.length > 0) {
      EnterDataArray.image = image;
      EnterDataArray.text = text;
      EnterDataArray.username = loggedInUser().name;

      localStorage.setItem(
        "posts",
        JSON.stringify(data.concat(EnterDataArray))
      );

      setImage("");
      setText("");

      props.setShowPost(true);
      props.setAddPost(false);
    }
  }

  //   function updateHandler() {
  //     setImage(EditPost.image);
  //     setText(EditPost.text);
  //   }

  return (
    <>
      <div className="card   m-3 mt-3" style={{ width: "300px" }}>
        <p
          className="fw-bold pb-1 "
          style={{ borderBottom: "1px solid #f0ebeb" }}
        >
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/color/48/user.png"
            alt="user"
            className="mx-3"
          />
          {loggedInUser().name}
          <img
            className="mx-2"
            width="13"
            height="13"
            src="https://img.icons8.com/small/16/FA5252/360-degrees.png"
            alt="360-degrees"
          />
        </p>

        <div className="mb-1">
          <textarea
            style={{
              borderBottom: "1px solid #f0ebeb",
              border: "none",
              outline: "none",
              resize: "none",
            }}
            cols="37"
            rows="3"
            placeholder="Enter your Title . . . "
            onChange={(e) => setText(e.target.value)}
            value={EditPost.text}
          ></textarea>
        </div>
        <hr />
        <div>
          <textarea
            style={{ border: "0", outline: "none", resize: "none" }}
            cols="37"
            rows="3"
            placeholder="Enter your Image link "
            onChange={(e) => setImage(e.target.value)}
            value={EditPost.image}
          ></textarea>
        </div>
        <button className="btn btn-success m-1" onClick={updateHandler}>
          Update
        </button>
      </div>
    </>
  );
};

export default EditPost;
