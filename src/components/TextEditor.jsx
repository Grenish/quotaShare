import React from "react";

const TextEditor = ({ selectedFont, selectedBackground }) => {
  const containerStyle = {
    fontFamily: selectedFont,
    backgroundImage: selectedBackground ? `url(${selectedBackground})` : "none",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="flex justify-center items-center w-[100%] h-screen">
        <div
          className="text-white w-1/2 p-5 border-[1px] rounded-lg outline-none min-h-[100px]"
          style={containerStyle}
          contentEditable
        >
          Write something here...
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
