import React, { useState, useEffect } from "react";
type ColorPickerProps = {
    color:string,
    colorChange: (value:string) => void,
}
const ColorPicker = ({color, colorChange}:ColorPickerProps) => {
  const [colorCode, setColorCode] = useState(color);
  const [suggestColor, setSuggestColor] = useState("#0000FF");
  const [isShow, setShow] = useState(false);
  const [liveSuggest, setLiveSuggest] = useState(false)

  const handleColorSelection = (selectedColor: string) => {
    setColorCode(selectedColor);
    setShow(false);
    colorChange(selectedColor); // Pass the selected color to the parent component
  };
  useEffect(() => {
    // Update colorCode state when color prop changes
    setColorCode(color);
  }, [color]);
  return (
    <div className="block relative">
      <div className="flex">
        {isShow && (
          <div className="absolute z-10 mt-11 w-[148px] bg-white border border-gray-300 rounded-[8px] shadow-lg">
            <div
              className="p-2 flex items-center hover:bg-gray-200"
              onClick={() => handleColorSelection("#0000FF")}
            >
              <div className="w-6 h-6 cursor-pointer inline-block rounded-full bg-[#0000FF] mr-2"></div>
              <span className="cursor-pointer">#0000FF</span>
            </div>
            <div
              className="p-2 flex items-center hover:bg-gray-200"
              onClick={() => handleColorSelection("#00FFFF")}
            >
              <div className="w-6 h-6 cursor-pointer inline-block rounded-full bg-[#00FFFF] mr-2"></div>
              <span className="cursor-pointer">#00FFFF</span>
            </div>
            <div
              className="p-2 flex items-center hover:bg-gray-200"
              onClick={() => handleColorSelection("#FF0000")}
            >
              <div className="w-6 h-6 cursor-pointer inline-block rounded-full bg-[#FF0000] mr-2"></div>
              <span className="cursor-pointer">#FF0000</span>
            </div>
            <div
              className="p-2 flex items-center hover:bg-gray-200"
              onClick={() => handleColorSelection("#FFFF00")}
            >
              <div className="w-6 h-6 cursor-pointer inline-block rounded-full bg-[#FFFF00] mr-2"></div>
              <span className="cursor-pointer">#FFFF00 </span>
            </div>
            {/* Add more suggestions similarly */}
          </div>
        )}

        <input
          type="text"
          value={colorCode || suggestColor}
          onChange={(event) => {
            setColorCode(event.target.value)
            setShow(false);
            setLiveSuggest(true);
            colorChange(colorCode)
          }}
          placeholder={colorCode}
          onFocus={() => setShow(true)}
          className="w-[80%] h-10 focus:outline-none font-light p-2 rounded-l-lg border-none"
        />

        <div
          className="w-9 h-9 my-auto mr-[2px] rounded-md border-[0.5px] border-blue-800"
          style={{ backgroundColor: colorCode }}
        ></div>
      </div>
    </div>
  );
};

export default ColorPicker;