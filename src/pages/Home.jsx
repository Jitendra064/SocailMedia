import React, { useEffect, useState } from "react";
import Navbar from "../compoents/Navbar";
import MyPost from "./MyPost";
import AllPost from "../compoents/AllPost";
import LikePost from "../compoents/LikePost";
import SavePost from "../compoents/SavePost";
import AddPost from "./AddPost";
import Profile from "../compoents/Profile";
import EditPost from "../compoents/EditPost";

const Home = () => {
  const [showPost, setShowPost] = useState(true);
  const [showLikePost, setShowLikePost] = useState(false);
  const [ShowMyPost, setMyPost] = useState(false);
  const [savePost, setSavePost] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [profile, setProfile] = useState(false);
  const [EditDataHome, setEditDataHome] = useState({});
  const [editPostTrue, seteditPostTrue] = useState(false);

  // const [update, setUpdate] = useState(0);

  // Define setUpdate if needed

  console.log(EditDataHome);

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
    } else if (editPostTrue) {
      valid = true;
    }
    return valid;
  };

  useEffect(() => {
    if (!localStorage.getItem("likeData")) {
      localStorage.setItem("likeData", "[]");
    }
  }, [addPost, showPost]); // Pass an empty dependency array to execute the effect only once
  console.log("showPost-->>", showPost);
  console.log("addPost-->", addPost);
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

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 container-fluid w-100 ">
        {varify() && showPost && (
          <AllPost
            setSelectPostArray={showPost}
            setEditDataHome={setEditDataHome}
            // EditDataHome={EditDataHome}
            setAddPost={setAddPost}
          />
        )}
        {varify() && ShowMyPost && (
          <MyPost
            ShowMyPost={ShowMyPost}
            setEditDataHome={setEditDataHome}
            // EditDataHome={EditDataHome}
            setRemoveMyPostPage={setMyPost}
            setupdatePost={seteditPostTrue}
          />
        )}
        {varify() && savePost && <SavePost />}
        {varify() && showLikePost && <LikePost />}
        {varify() && addPost && (
          <AddPost
            setShowPost={setShowPost}
            setAddPost={setAddPost}
            // EditDataHome={EditDataHome}
          />
        )}
        {varify() && profile && (
          <Profile ShowAllMyPost={setMyPost} ShowAllMyProfile={setProfile} />
        )}
        {varify && editPostTrue && <EditPost EditDataMyPost={EditDataHome} />}
      </div>
    </>
  );
};

export default Home;
