/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loggedInUser,
  removeLoggedInUser,
} from "../storageOperations/storageOperations";
import zIndex from "@mui/material/styles/zIndex";

const Navbar = (props) => {
  const navigate = useNavigate();

  function logOut() {
    removeLoggedInUser();
    navigate("/login");
  }

  const HandleDropdown = (e) => {
    navigate(e.target.value);
  };

  function selectHandler(e) {
    if (e.target.value === "/myPost") {
      props.setShowMyPost(true);
      navigate("/myPost");
    } else {
      props.setShowPost(true);
      navigate("/");
    }
  }
  function homeHandler() {
    props.setShowPost(true);
    props.setShowLikePost(false);
  }

  function LikePost() {
    props.setShowLikePost(true);
    props.setShowPost(false);
  }
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ position: "sticky", top: "0", width: "100%", zIndex: "100" }}
      >
        <div class="container-fluid">
          <h1
            class="navbar-brand"
            onClick={homeHandler}
            style={{ cursor: "pointer" }}
          >
            Home
          </h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>

        <div
          className=" mx-2"
          style={{ border: "none", display: "flex", flexDirection: "row" }}
        >
          <button className="btn btn-danger mx-2 " onClick={LikePost}>
            LikePost
          </button>
          <div className="d-flex">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/plasticine/100/user.png"
              alt="user"
            />
            <select
              className="HandleDropdown px-1 border border-0"
              onClick={selectHandler}
            >
              <option value="/">{loggedInUser()?.name}</option>
              <option value="/myPost">MyPosts</option>
            </select>
          </div>

          <Link
            to="/addPost"
            className="btn btn-primary mx-2  fw-bold"
            onChange={HandleDropdown}
          >
            +
          </Link>
          <button className="btn btn-danger" onClick={logOut}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
