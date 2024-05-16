/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useEffect, useRef, useState } from "react";
import { loggedInUser } from "../storageOperations/storageOperations";

const AddPost = (props) => {
  const useReff = useRef(null);
  const [image, setImage] = useState(false);
  const [text, setText] = useState("");

  // let EditPost = props.EditDataHome;
  // console.log(props.EditDataHome);
  const EnterDataArray = {
    image: "",
    text: "",
    username: "",
    like: "",
    comments: [],
  };
  function addPost() {
    let data = JSON.parse(localStorage.getItem("posts"));
    if (image.length !== "" && text.length > 0) {
      EnterDataArray.image = URL.createObjectURL(image);
      EnterDataArray.text = text;
      EnterDataArray.username = loggedInUser().name;

      localStorage.setItem(
        "posts",
        JSON.stringify([EnterDataArray].concat(data))
      );

      setImage("");
      setText("");

      props.setShowPost(true);
      props.setAddPost(false);
    }
  }

  function resetData() {
    setImage("");
    setText("");
  }
  function HandleImageClick() {
    useReff.current.click();
  }
  function UploadHandler(e) {
    // const file = e.target.files[0];

    setImage(e.target.files[0]);
  }

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", "[]");
    }
  }, []);

  return (
    <>
      <div className="card  mx-3 mt-3 AddPostCard">
        <div
          className="d-flex justify-content-between align-item-center pt-2"
          style={{ borderBottom: "1px solid #f0ebeb" }}
        >
          <p className="fw-bold pb-1 ">
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
              width="11"
              height="11"
              src="https://img.icons8.com/small/16/FA5252/360-degrees.png"
              alt="360-degrees"
            />
          </p>
          <img
            width="18"
            height="18"
            src="https://img.icons8.com/metro/26/refresh.png"
            alt="refresh"
          />
        </div>

        <div>
          <textarea
            style={{
              borderBottom: "1px solid #f0ebeb",
              border: "none",
              outline: "none",
              resize: "none",
            }}
            cols="35"
            rows="2"
            placeholder="Enter your Title . . . "
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
        </div>

        <div onClick={HandleImageClick}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              width="100%"
              className="rounded"
            />
          ) : (
            <div className="text-center py-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_0L43nuwVrTGUFBXQoYee_Z52wzRphMHYg&s"
                alt="Choose Image "
                width="50px"
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
          <input
            type="file"
            ref={useReff}
            style={{ display: "none" }}
            onChange={UploadHandler}
          />
        </div>
        <button className="btn btn-danger m-1" onClick={resetData}>
          Reset
        </button>
        <button className="btn btn-primary m-1" onClick={addPost}>
          Post
        </button>
      </div>
    </>
  );
};

export default AddPost;
