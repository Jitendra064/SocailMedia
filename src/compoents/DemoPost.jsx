/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react";
import {
  loggedInUser,
  storagePost,
} from "../storageOperations/storageOperations";

const DemoPost = (props) => {
  const [commentSection, setCommentSection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);
  const [likeCount, setLikeCount] = useState(props.data?.like);
  const [ShowDropdown, setShowDropdown] = useState(false);

  function commentHandler() {
    if (!commentSection) {
      setCommentSection(true);
    } else {
      setCommentSection(false);
    }
  }

  function LikeHandler() {
    let storedData = JSON.parse(localStorage.getItem("posts"));

    if (!likeSection) {
      /*

      like increse karna click pe
      
      */
      let like = Number(storedData[props.index].like) + 1;
      storedData[props.index].like = like;
      localStorage.setItem("posts", JSON.stringify(storedData));

      setLikeSection(true);
      setLikeCount(like);
    } else {
      /*
      
      remove like post
      */
      let like = Number(storedData[props.index].like) - 1;
      storedData[props.index].like = like;
      localStorage.setItem("posts", JSON.stringify(storedData));

      props.setUpdate(1);

      setLikeSection(false);
      setLikeCount(like);
    }
  }

  function threeDocts() {
    // yaha muje ager three docts par click karke ye dikha raha hu ager me kisi post pe click karta hu to ager vo user ki post hai to kya dropdown dikhau ager vo ager vo user ki post nahi hai to kya dropdown dikhau
    if (props.data.username === loggedInUser().name) {
      setShowDropdown(true);
    } else if (storagePost()[props.index].username === loggedInUser().name) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function SaveHandler() {
    console.log("save");
  }

  function EditHandler() {
    console.log("EditHandler");
  }

  function DeleteHandler() {
    let storedData = JSON.parse(localStorage.getItem("posts"));
    const FilterArr = storagePost().filter(
      (e) => e.username === loggedInUser().name
    );

    // props.A  == ye bta hai ki me kis sabhi post par ager click karta hu to  usme se kisi post ka index kya hota
    // props.B == ye bta hai ki me kis khud ki  post  ki hui ager kisi post par click karta hu to  usme se kisi post ka index kya hota
    if (props.setA) {
      storedData.splice(props.index, 1);
      props.setUpdate(1);
    } else if (props.setB) {
      props.setSpliceIndex(props.index);
      /*
     
     
     */
      let deletepost = FilterArr[props.index];
      // console.log(storedData);

      // yaha me check kar raha hu ki ager jo data me delete kar rha hu ager vo localstorage me hai to usko delete kar do

      for (var i = 0; i < storedData.length; i++) {
        if (JSON.stringify(storedData[i]) === JSON.stringify(deletepost)) {
          // console.log(i);
          storedData.splice(i, 1);
          // console.log(storedData);
        }
      }
      props.setUpdate(1);
    }

    localStorage.setItem("posts", JSON.stringify(storedData));
  }

  /*
    
  */

  useEffect(() => {
    props.setUpdate(0);
  });

  function listOfLikes() {}
  function AddComment() {
    setCommentSection(false);
  }
  return (
    <>
      <div className="  PostCard">
        <div className="card mx-2 mt-2 ">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className="mt-2"
          >
            <p className="fw-bold pb-1 ">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/color/48/user.png"
                alt="user"
                className="mx-3"
              />
              {props.data?.username}
              <img
                className="mx-2"
                width="13"
                height="13"
                src="https://img.icons8.com/small/16/FA5252/360-degrees.png"
                alt="360-degrees"
              />
            </p>
            <p className="mx-2 btn-group dropstart">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios-glyphs/30/ellipsis.png"
                alt="ellipsis"
                style={{ cursor: "pointer" }}
                type="button"
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={threeDocts}
              />

              <ul className="dropdown-menu rounded ">
                <li>
                  {ShowDropdown ? (
                    <p className="dropdown-item" onClick={DeleteHandler}>
                      <img
                        width="23"
                        height="23"
                        src="https://img.icons8.com/carbon-copy/100/filled-trash.png"
                        alt="filled-trash"
                        className="mx-2"
                      />
                      Delete Post
                    </p>
                  ) : (
                    <p className="dropdown-item">
                      <img
                        width="23"
                        height="23"
                        src="https://img.icons8.com/color/48/close-window.png"
                        alt="close-window"
                        className="mx-2"
                      />
                      Report Post
                    </p>
                  )}
                  {ShowDropdown ? (
                    <p className="dropdown-item" onClick={EditHandler}>
                      <img
                        width="17"
                        height="17"
                        src="https://img.icons8.com/metro/26/edit.png"
                        alt="edit"
                        className="mx-2"
                      />
                      Edit Post
                    </p>
                  ) : (
                    <p className="dropdown-item">
                      <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/material/24/hide--v1.png"
                        alt="hide--v1"
                        className="mx-2"
                      />
                      Hide Post
                    </p>
                  )}
                </li>
              </ul>
            </p>
          </div>

          <div className="mb-3 p-1">
            <p className="card-text " style={{ fontSize: "14px" }}>
              {props.data?.text}
            </p>
          </div>
          <div
            className="bg-image hover-overlay"
            data-mdb-ripple-init="true"
            data-mdb-ripple-color="light"
          >
            <img
              src={props.data?.image}
              className="img-fluid"
              alt="Image Cant loaded"
              width="100%"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </div>
          <div className="card-body">
            <div
              className=" my-2 "
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="d-flex">
                {likeSection ? (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/retro/32/filled-like.png"
                    alt="filled-like"
                    className="mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={LikeHandler}
                  />
                ) : (
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/windows/32/like--v1.png"
                    alt="like--v1"
                    className="mx-2"
                    onClick={LikeHandler}
                  />
                )}

                <h6 onClick={listOfLikes}>{likeCount}</h6>

                <img
                  width="20"
                  height="20"
                  className="mx-2"
                  src="https://img.icons8.com/ios/50/speech-bubble--v1.png"
                  alt="speech-bubble--v1"
                  style={{ cursor: "pointer" }}
                  onClick={commentHandler}
                />

                <img
                  width="22"
                  height="22"
                  src="https://img.icons8.com/ios-filled/50/000000/forward-arrow.png"
                  alt="forward-arrow"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png"
                  alt="bookmark-ribbon--v1"
                  onClick={SaveHandler}
                  style={{ cursor: "pointer" }}
                />
                {/* save post icon  */}
                {/* <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-sharp/24/bookmark-ribbon--v1.png"
                  alt="bookmark-ribbon--v1"
                   style={{ cursor: "pointer" }}
                /> */}
              </div>
            </div>

            {commentSection && (
              <div>
                <input
                  type="text"
                  placeholder=" Write Comments ... "
                  className=" border-0 border-bottom commentBox Post-comment"
                />
                <button
                  className="btn btn-primary btn-sm mx-2  "
                  onClick={AddComment}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPost;
