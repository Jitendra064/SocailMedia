import React, { useEffect, useState } from "react";
import { loggedInUser } from "../storageOperations/storageOperations";
import DemoPost from "../compoents/DemoPost";

const MyPost = (props) => {
  const [update, setUpdate] = useState(0);
  const [filterArray, setFilterArray] = useState([]);
  const [spliceIndex, setSpliceIndex] = useState("");
  const [EditData, setEditData] = useState({});
  const [AddPostTrue, setAddPostTrue] = useState(false);
  const [editMyPostIndex, setEditMyPostIndex] = useState("");
  // const [removeHomeTrue, setRemoveHometTrue] = useState(false);

  props.setupdatePost(AddPostTrue);
  props.setRemoveMyPostPage(!AddPostTrue);
  // props.editMyPostIndex(editMyPostIndex);
  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", "[]");
    } else {
      const myPosts = JSON.parse(localStorage.getItem("posts"));
      const filterArr = myPosts.filter(
        (e) => e.username === loggedInUser().name
      );
      setFilterArray(filterArr);
    }
  }, [update, spliceIndex]);

  if (update) {
    filterArray.splice(spliceIndex, 1);
    setUpdate(0); // Trigger useEffect to fetch updated posts
  }

  console.log(AddPostTrue);
  return (
    <>
      {filterArray.length > 0 ? (
        filterArray.map((e, i) => (
          <div className="col" key={i}>
            <DemoPost
              data={e}
              setUpdate={setUpdate}
              index={i}
              postId={e.id} // Pass the post ID to DemoPost
              setB={true}
              setSpliceIndex={setSpliceIndex}
              setEditData={setEditData}
              setAddPostTrue={setAddPostTrue}
              editMyPostIndex={setEditMyPostIndex}
            />
          </div>
        ))
      ) : (
        <h1 className="text-center bg-light fw-bold text-danger">
          There are no posts here
        </h1>
      )}
    </>
  );
};

export default MyPost;
