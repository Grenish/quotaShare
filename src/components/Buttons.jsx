import React from "react";

const Buttons = ({ onClick, actionType }) => {
  return (
    <button onClick={onClick}>
      {actionType === "download" ? "Download" : "Share"}
    </button>
  );
};

export default Buttons;
