import React from "react";
import html2canvas from "html2canvas";

const TextEditor = ({ selectedFont, selectedBackground }) => {
  const containerStyle = {
    fontFamily: selectedFont,
    backgroundImage: selectedBackground ? `url(${selectedBackground})` : "none",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const downloadTarget = () => {
    const elem = document.getElementById("target");
    if(!elem) {
        return;
    }
    html2canvas(elem, {
        scale: 5.5
    }).then((canvas) => {

        let image = canvas.toDataURL("image/jpeg");
        const a = document.createElement("a");
        a.href = image;
        a.download = "QuotaShare_QuoteScreenShot.jpg";
        a.click();

    }).catch((err) => {
        alert("Somethinf went wrong.")
    })
  }

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="flex flex-col justify-center items-center w-[100%] h-screen">
        <div
          className="text-white sm:w-1/2 w-11/12 p-5 border-[1px] rounded-lg outline-none min-h-[100px]"
          style={containerStyle}
          id="target"
          contentEditable
        ></div>
        <div className="flex justify-end sm:w-1/2 w-11/12">
          <button className="p-2 bg-green-300" onClick={downloadTarget}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
