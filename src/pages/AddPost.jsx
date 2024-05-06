import React, { useEffect, useState } from "react";
import { loggedInUser } from "../storageOperations/storageOperations";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  let navigate = useNavigate();
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  const EnterDataArray = {
    image: "",
    text: "",
    username: "",
    like: "",
    comments: [],
  };
  function addPost() {
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
      navigate("/");
    }
  }
  // console.log(PostArray);

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", "[]");
    }
  }, []);

  return (
    <>
      <div className="card   m-3" style={{ width: "300px" }}>
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
            value={text}
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
            value={image}
          ></textarea>
        </div>
        <button className="btn btn-success m-1">Refresh</button>
        <button className="btn btn-primary m-1" onClick={addPost}>
          Post
        </button>
      </div>
    </>
  );
};

export default AddPost;
