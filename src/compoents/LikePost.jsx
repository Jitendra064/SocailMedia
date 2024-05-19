import React, { useEffect, useState } from "react";
import DemoPost from "./DemoPost";

const LikePost = () => {
  const [update, setUpdate] = useState(0);

  console.log("like post");
  let myLikeArray = JSON.parse(localStorage.getItem("likeData"));
  useEffect(() => {
    setUpdate(1);
  }, [update]);
  return (
    <>
      <div style={{ minWidth: "83vw" }}>
        {myLikeArray.map((e) => (
          <DemoPost data={e} setUpdate={setUpdate} RedHeart={true} />
        ))}

        <h1 className="text-danger bg-light"> No Post Like </h1>
      </div>
    </>
  );
};

export default LikePost;
