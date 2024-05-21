import React, { useEffect, useState } from "react";
// import Navbar from "../compoents/Navbar";
import MyPost from "./MyPost";
import AllPost from "../compoents/AllPost";
// import LikePost from "../compoents/LikePost";
import SavePost from "../compoents/SavePost";
import AddPost from "./AddPost";
import Profile from "../compoents/Profile";
import EditPost from "../compoents/EditPost";
import {
  loggedInUser,
  removeLoggedInUser,
} from "../storageOperations/storageOperations";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import LikePost from "../compoents/LikePost";

const Home = () => {
  const [showPost, setShowPost] = useState(true);
  const [showLikePost, setShowLikePost] = useState(false);
  const [ShowMyPost, setMyPost] = useState(false);
  const [savePost, setSavePost] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [profile, setProfile] = useState(false);
  const [EditDataHome, setEditDataHome] = useState({});
  const [editPostTrue, seteditPostTrue] = useState(false);
  // const [width, setwidth] = useState("0");

  // Define setUpdate if needed

  // this navbar feature

  const navigate = useNavigate();

  // let LoginUsers = JSON.parse(localStorage.getItem("userData"));

  function logOut() {
    removeLoggedInUser();
    navigate("/login");
  }

  function createFunction(a, b, c, d, e, f) {
    setAddPost(a);
    setMyPost(b);
    setSavePost(c);
    setShowLikePost(d);
    setProfile(e);
    setShowPost(f);
  }

  function AddPostHandler() {
    createFunction(true, false, false, false, false, false);
  }

  function profileHandler() {
    createFunction(false, false, false, false, true, false);
  }

  function homeHandler() {
    createFunction(false, false, false, false, false, true);
  }

  function LikePostHandler() {
    createFunction(false, false, false, true, false, false);
  }

  function myPostHandler() {
    createFunction(false, true, false, false, false, false);
  }

  function savePostHandler() {
    createFunction(false, false, true, false, false, false);
  }

  // end of featur

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
      {/* MultiMedia  */}

      <div className="" id="gridSystem">
        <div className=" main-col  " id="divOne">
          <h3 className="main-h34 mx-2 " onClick={homeHandler}>
            MultiMedia
          </h3>
          <h3 className="main-h35 mx-2 text-center mt-2" onClick={homeHandler}>
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios/50/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </h3>
          <ul className="main-ul">
            <li onClick={homeHandler}>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios-filled/50/home.png"
                alt="home"
              />

              <span className="ManuText">Home</span>
            </li>
            <li>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios/50/search--v1.png"
                alt="search--v1"
              />
              <span className="ManuText">Search</span>
            </li>
            <li onClick={savePostHandler}>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios/50/compass--v1.png"
                alt="compass--v1"
              />
              <span className="ManuText">Exoplor</span>
            </li>
            <li onClick={myPostHandler}>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios/50/instagram-reel.png"
                alt="instagram-reel"
              />
              <span className="ManuText">Post</span>
            </li>
            <li>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios/50/facebook-messenger--v1.png"
                alt="facebook-messenger--v1"
              />
              <span className="ManuText">Chat</span>
            </li>
            <li onClick={LikePostHandler}>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/external-alarm-essential-ui-v2-creatype-outline-colourcreatype-2.png"
                alt="external-alarm-essential-ui-v2-creatype-outline-colourcreatype-2"
              />
              <span className="ManuText">Notification</span>
            </li>
            <li onClick={AddPostHandler}>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios/50/plus--v1.png"
                alt="plus--v1"
              />
              <span className="ManuText">Create</span>
            </li>
            <li onClick={profileHandler}>
              <img
                width="28"
                height="28"
                src="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="user"
                className=" rounded-circle"
              />
              <span className="ManuText">{loggedInUser().name}</span>
            </li>
          </ul>

          <h5 className="main-h6" onClick={logOut}>
            <img
              width="27"
              height="27"
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="menu--v1"
              className="mx-3"
            />
            <span className="ManuText">More</span>
          </h5>
        </div>

        {/* 
        
        
        divTwo container 
        
        
        
        */}

        <div className=" container-fluid" id="divTwo">
          <div>
            <div>
              {varify() && showPost && (
                <AllPost
                  setSelectPostArray={showPost}
                  setEditDataHome={setEditDataHome}
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
                <Profile
                  ShowAllMyPost={setMyPost}
                  ShowAllMyProfile={setProfile}
                />
              )}
              {varify && editPostTrue && (
                <EditPost EditDataMyPost={EditDataHome} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/*
      
      
      
        =====>>>> phone width ke liye jsx .
      
      
      */}

      <div className="gridSystem2">
        <div className="Main3-header  ">
          <div className=" px-3 pt-2 ">
            <p className="main3-p" onClick={logOut}>
              <img
                width="25"
                height="25"
                src="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="user"
                className=" rounded-circle mx-2"
              />
              {loggedInUser().name}
            </p>
          </div>
          <div>
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/external-alarm-essential-ui-v2-creatype-outline-colourcreatype-2.png"
              alt="external-alarm-essential-ui-v2-creatype-outline-colourcreatype-2"
              className="mx-2"
              onClick={myPostHandler}
            />
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios/50/facebook-messenger--v1.png"
              alt="facebook-messenger--v1"
              className="mx-2"
              onClick={LikePostHandler}
            />
          </div>
        </div>

        {/*
        
        
        
        Main screen page 
        
        
        */}
        <div className="px-2">
          <div className="Main3-between fs-1">
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
              <Profile
                ShowAllMyPost={setMyPost}
                ShowAllMyProfile={setProfile}
              />
            )}
            {varify && editPostTrue && (
              <EditPost EditDataMyPost={EditDataHome} />
            )}
          </div>
        </div>

        {/*
        


        bottom menu Bar
        
        
        */}

        <div className="Main3-bottom   ">
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/ios-filled/50/home.png"
            alt="home"
            onClick={homeHandler}
          />
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="save post"
            onClick={savePostHandler}
          />
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/ios/50/plus--v1.png"
            alt="createPost"
            onClick={AddPostHandler}
          />
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/ios/50/instagram-reel.png"
            alt="instagram-reel"
            onClick={homeHandler}
          />
          <img
            width="28"
            height="28"
            src="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user"
            className=" rounded-circle"
            onClick={profileHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
