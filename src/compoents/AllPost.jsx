import React, { useState } from "react";
import MyPost from "../pages/MyPost";
import { storagePost } from "../storageOperations/storageOperations";
import DemoPost from "./DemoPost";

const AllPost = (props) => {
  const [update, setUpdate] = useState(0);
  return (
    <>
      {/* add all posts */}

      {props.setSelectPostArray ? (
        storagePost().map((e, i) => (
          <DemoPost key={i} data={e} index={i} setUpdate={setUpdate} />
        ))
      ) : (
        <MyPost setUpdate={update} />
      )}
    </>
  );
};

export default AllPost;
