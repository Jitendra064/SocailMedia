import React, { useState } from "react";
import { storagePost } from "../storageOperations/storageOperations";
import DemoPost from "./DemoPost";

const AllPost = (props) => {
  const [update, setUpdate] = useState(0);
  const [EditData, setEditData] = useState({});

  return (
    <>
      {/* add all posts */}

      {/* {props.setSelectPostArray ? (
        storagePost().map((e, i) => (
          <DemoPost key={i} data={e} index={i} setUpdate={setUpdate} />
        ))
      ) : (
        <MyPost setUpdate={update} />
      )} */}

      {storagePost().map((e, i) => (
        <DemoPost
          key={i}
          data={e}
          index={i}
          setUpdate={setUpdate}
          setA={true}
          setEditData={setEditData}
        />
      ))}
    </>
  );
};

export default AllPost;
