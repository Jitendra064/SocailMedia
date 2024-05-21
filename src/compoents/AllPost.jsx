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
      <div className=" w-100  row row-cols-1 row-cols-md-2 justify-content-evenly">
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
      </div>
    </>
  );
};

export default AllPost;
