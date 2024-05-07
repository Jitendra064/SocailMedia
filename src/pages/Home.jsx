import React, { useEffect, useState } from "react";
import Navbar from "../compoents/Navbar";
import MyPost from "./MyPost";
import AllPost from "../compoents/AllPost";
import LikePost from "../compoents/LikePost";
import SavePost from "../compoents/SavePost";
import AddPost from "./AddPost";
import Profile from "../compoents/Profile";

const Home = (props) => {
  const [showPost, setShowPost] = useState(true);
  const [showLikePost, setShowLikePost] = useState(false);
  const [ShowMyPost, setMyPost] = useState(false);
  const [savePost, setSavePost] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [profile, setProfile] = useState(false);
  // Define setUpdate if needed
  // const [update, setUpdate] = useState(0);

  const varify = () => {
    let valid = false;
    if (showPost) {
      valid = true;
    } else if (ShowMyPost) {
      valid = true;
    } else if (showLikePost) {
      valid = true;
    } else if (addPost) {
      valid = true;
    } else if (profile) {
      valid = true;
    } else if (savePost) {
      valid = true;
    }
    return valid;
  };

  useEffect(() => {
    if (!localStorage.getItem("likeData")) {
      localStorage.setItem("likeData", "[]");
    }
  }); // Pass an empty dependency array to execute the effect only once

  return (
    <>
      <Navbar
        setProfile={setProfile}
        setMyPost={setMyPost}
        setShowPost={setShowPost}
        setShowLikePost={setShowLikePost}
        setSavePost={setSavePost}
        setAddPost={setAddPost}
      />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 container-fluid">
        {varify() && showPost && <AllPost setSelectPostArray={showPost} />}
        {varify() && ShowMyPost && <MyPost ShowMyPost={ShowMyPost} />}
        {varify() && savePost && <SavePost />}
        {varify() && showLikePost && <LikePost />}
        {varify() && addPost && (
          <AddPost setShowPost={setShowPost} setAddPost={setAddPost} />
        )}
        {varify() && profile && <Profile />}
      </div>
    </>
  );
};

export default Home;
