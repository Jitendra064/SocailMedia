import { useNavigate } from "react-router-dom";
import {
  loggedInUser,
  removeLoggedInUser,
} from "../storageOperations/storageOperations";

const Navbar = (props) => {
  const navigate = useNavigate();

  function logOut() {
    removeLoggedInUser();
    navigate("/login");
  }

  function createFunction(a, b, c, d, e, f) {
    props.setAddPost(a);
    props.setMyPost(b);
    props.setSavePost(c);
    props.setShowLikePost(d);
    props.setProfile(e);
    props.setShowPost(f);
  }

  function AddPostHandler() {
    createFunction(true, false, false, false, false, false);
  }

  function profileHandler() {
    createFunction(false, false, false, false, true, false);
  }

  function homeHandler() {
    // navigate("/");
    createFunction(false, false, false, false, false, true);
  }

  function LikePost() {
    createFunction(false, false, false, true, false, false);
  }

  function myPostHandler() {
    createFunction(false, true, false, false, false, false);
  }

  function savePostHandler() {
    createFunction(false, false, true, false, false, false);
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button
              className="  btn btn-success mx-2  mt-1"
              onClick={myPostHandler}
            >
              MyPost
            </button>
            <button
              className="  btn btn-info mx-2  mt-1"
              onClick={savePostHandler}
            >
              SavePost
            </button>
            <button className="  btn btn-danger mx-2  mt-1" onClick={LikePost}>
              LikePost
            </button>
            <button
              className=" border border-1 rounded mt-1 "
              style={{ cursor: "pointer" }}
              onClick={profileHandler}
            >
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/plasticine/100/user.png"
                alt="user"
              />
              <span className="text-dark mx-2 text-center pt-2">
                {loggedInUser()?.name}
              </span>
            </button>

            <button
              className="  btn btn-primary mx-2  fw-bold  mt-1"
              onClick={AddPostHandler}
            >
              +CreatePost
            </button>
            <button className="  btn btn-danger  mt-1" onClick={logOut}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
