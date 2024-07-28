import React from "react";
import "./loaderStyle.css";

export default function Loader() {
  return (
    <div className="centerHolder">
      <div className="sharingon">
        <div className="ring">
          <div className="to"></div>
          <div className="to"></div>
          <div className="to"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
