import React from "react";
import { one, two, three, four, five, six, seven } from "../assets";

const Sidebar = ({ onSelectFont, onSelectBackground }) => {
  const fonts = [
    {
      name: "Poppins",
      exampleText: "The only way to do great work is to love what you do.",
    },
    {
      name: "Caveat",
      exampleText: "The only way to do great work is to love what you do.",
    },
    {
      name: "Crimson Text",
      exampleText: "The only way to do great work is to love what you do.",
    },
    {
      name: "Eczar",
      exampleText: "The only way to do great work is to love what you do.",
    },
    {
      name: "Itim",
      exampleText: "The only way to do great work is to love what you do.",
    },
    {
      name: "Playfair Display",
      exampleText: "The only way to do great work is to love what you do.",
    },
  ];

  const backgrounds = [one, two, three, four, five, six, seven];

  const handleFontClick = (font) => {
    onSelectFont(font);
  };

  const handleBackgroundClick = (background) => {
    onSelectBackground(background);
  };

  return (
    <div className="bg-[#151516] p-6 h-screen overflow-y-scroll text-white flex-shrink-0">
      <div className="flex flex-col gap-4 ">
        <div className="font-bold text-lg mb-2">Font:</div>
        {fonts.map((font) => (
          <div
            key={font.name}
            onClick={() => handleFontClick(font.name)}
            className="font-card bg-[#333333] rounded p-4 cursor-pointer hover:bg-[#3c3c3c] text-gray-200"
            onKeyDown={(event) =>
              event.key === "Enter" && handleFontClick(font.name)
            }
            role="button"
            tabIndex="0"
            aria-label={`Select ${font.name} font`}
          >
            <div>{font.name}</div>
            <div className="text-xs mt-2" style={{ fontFamily: font.name }}>
              {font.exampleText}
            </div>
          </div>
        ))}
        <div className="font-bold text-lg my-4">Background:</div>
        {backgrounds.map((background, index) => (
          <button
            key={index}
            onClick={() => handleBackgroundClick(background)}
            style={{
              backgroundImage: `url(${background})`,
            }} 
            className="h-20 rounded cursor-pointer hover:opacity-80 text-white"
            aria-label={`Select background ${index + 1}`}
          >
            Background {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
