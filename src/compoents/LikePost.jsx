import React, { useEffect, useState } from "react";
import DemoPost from "./DemoPost";

const LikePost = () => {
  const [update, setUpdate] = useState(0);

  let myLikeArray = JSON.parse(localStorage.getItem("likeData"));
  useEffect(() => {
    setUpdate(1);
  }, [update]);
  return (
    <>
      {myLikeArray.map((e) => (
        <DemoPost data={e} setUpdate={setUpdate} RedHeart={true} />
      ))}

      <h1 className="text-danger"> No Post Like lo</h1>
    </>
  );
};

export default LikePost;
