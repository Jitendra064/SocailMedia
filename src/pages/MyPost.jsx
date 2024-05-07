import React, { useEffect, useState } from "react";
import { loggedInUser } from "../storageOperations/storageOperations";
import DemoPost from "../compoents/DemoPost";

const MyPost = () => {
  const [update, setUpdate] = useState(0);
  const [filterArray, setFilterArray] = useState([]);
  const [spliceIndex, setSpliceIndex] = useState("");

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
