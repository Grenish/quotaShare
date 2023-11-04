import React, { useState } from "react";
import { Sidebar, TextEditor } from "./components";

const App = () => {
  const [selectedFont, setSelectedFont] = useState("Poppins");
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleSelectFont = (font) => {
    setSelectedFont(font);
  };

  const handleSelectBackground = (background) => {
    setSelectedBackground(background);
  };

  return (
    <div className="flex">
      <Sidebar
        onSelectFont={handleSelectFont}
        onSelectBackground={handleSelectBackground}
      />
      <TextEditor
        selectedFont={selectedFont}
        selectedBackground={selectedBackground}
      />
    </div>
  );
};

export default App;
