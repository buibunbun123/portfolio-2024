import React, { useState } from "react";

type FontPickerProps = {
    font: string,
    fontChange: (value: string) => void,
}

const FontPicker = ({ font, fontChange }: FontPickerProps) => {
  const [selectedFont, setSelectedFont] = useState(font);
  const [isShow, setShow] = useState(false);

  const handleFontSelection = (selectedFont: string) => {
    setSelectedFont(selectedFont);
    setShow(false); // Hide the dropdown after font selection
    fontChange(selectedFont);
  };

  return (
    <div className="block relative">
      <div className="flex">
        {isShow && (
          <div className="absolute z-10 mt-11 w-full bg-white border border-gray-300 rounded-[8px] shadow-lg">
            <div
              className="p-2 flex items-center hover:bg-gray-200"
              onClick={() => handleFontSelection("Arial")}
            >
              <span className="font-arial">Arial</span>
            </div>
            <div
              className="p-2 flex items-center hover:bg-gray-200"
              onClick={() => handleFontSelection("Times New Roman")}
            >
              <span className="font-serif">Times New Roman</span>
            </div>
            <div
              className="p-2 flex items-center hover:bg-gray-200"
              onClick={() => handleFontSelection("Courier New")}
            >
              <span className="font-mono">Courier New</span>
            </div>
            {/* Add more font suggestions similarly */}
          </div>
        )}

        <input
          type="text"
          value={selectedFont}
          onChange={(event) => {
            setSelectedFont(event.target.value);
            setShow(false);
            fontChange(event.target.value);
          }}
          placeholder={selectedFont}
          onFocus={() => setShow(true)}
          className={`w-[80%] h-10 focus:outline-none font-light p-2 rounded-l-lg border-none`}
          style={{ fontFamily: selectedFont }} // Apply font style dynamically
        />
      </div>
    </div>
  );
};

export default FontPicker;
