import React, { useState } from "react";
import { storagePost } from "../storageOperations/storageOperations";
import DemoPost from "./DemoPost";

const AllPost = (props) => {
  const [update, setUpdate] = useState(0);
  const [EditData, setEditData] = useState({});
  console.log(EditData);
  console.log(update);
  return (
    <>
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
