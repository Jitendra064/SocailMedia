/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import DemoPost from "../compoents/DemoPost";
import { loggedInUser } from "../storageOperations/storageOperations";
import Navbar from "../compoents/Navbar";

// import { storagePost } from "../storageOperations/storageOperations";

// import { Ripple, initMDB } from "mdb-ui-kit";

const MyPost = (props) => {
  // initMDB({ Ripple });
  const [update, setUpdate] = useState(0);
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", "[]");
    } else {
      let myPosts = JSON.parse(localStorage.getItem("posts"));
      const filterArr = myPosts.filter(
        (e) => e.username === loggedInUser().name
      );
      setFilterArray(filterArr);
    }
  }, [props.ShowMyPost, props.setUpdate, update]);

  return (
    <>
      <Navbar />
      <div
        className=" container-fluid"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {filterArray.length > 0 &&
          filterArray.map((e, i) => {
            return (
              <div className="col" key={i}>
                <DemoPost data={e} setUpdate={setUpdate} index={i} />
              </div>
            );
          })}
      </div>

      {filterArray.length === 0 && (
        <h1 className="text-center bg-light fw-bold text-danger">
          There are no posts here
        </h1>
      )}
    </>
  );
};

export default MyPost;
