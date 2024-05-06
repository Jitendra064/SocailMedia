/* eslint-disable no-eval */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Navbar from "../compoents/Navbar";
import MyPost from "./MyPost";
import AllPost from "../compoents/AllPost";
import LikePost from "../compoents/LikePost";

const Home = () => {
  const [showPost, setShowPost] = useState(false);
  const [showLikePost, setShowLikePost] = useState(false);
  const [showMyPost, setShowMyPost] = useState(false);
  const [showAllPost, setShowAllPost] = useState(true);

  const varify = () => {
    let valid = false;
    if (showLikePost) {
      valid = true;
    } else if (showMyPost) {
      valid = true;
    } else if (showPost) {
      valid = true;
    } else if (showAllPost) {
      setShowPost(true);
    }
    return valid;
  };

  useEffect(() => {
    if (!localStorage.getItem("likeData")) {
      localStorage.setItem("likeData", "[]");
    }
  });
  useEffect(() => {});

  return (
    <>
      <Navbar
        setShowPost={setShowPost}
        setShowLikePost={setShowLikePost}
        setShowMyPost={setShowMyPost}
      />

      <div
        className=" container-fluid"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        {" "}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {varify() && showLikePost && <LikePost ShowMyPost={showPost} />}
          {varify() && showMyPost && <MyPost ShowMyPost={showPost} />}
          {varify() && showPost && <AllPost setSelectPostArray={showPost} />}
        </div>
        {/* {showPost ? (
          <MyPost ShowMyPost={showPost} />
        ) : (
          <AllPost setSelectPostArray={showPost} />
        )} */}
      </div>
    </>
  );
};

export default Home;
