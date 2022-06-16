import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-white flex justify-center items-center">
      <div className="circle-loading"></div>
    </div>
  );
};

export default Loading;
