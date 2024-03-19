"use client";
import React, { useEffect, useState } from "react"; // Import useState from 'react'
import QRCodeStyling from "qr-code-styling";
import ColorPicker from "@/components/color-picker";
import TextInputDropdown from "@/components/textInput";
import FontPicker from "@/components/font-picker";
import QRCodeGenerator from "@/components/qrcode";
import App from "@/components/qrcode";
import { text } from "stream/consumers";
import QRCodeWithImage from "@/components/test";
const QrCode = () => {
  // Capitalize component name
  const [inputUrl, setInputUrl] = useState("");
  const [isShow, setShow] = useState(false);
  const [urlCapture, setUrlCapture] = useState("");
  const [inputText, setInputText] = useState("");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#FF0000");
  const [font, setFont] = useState("Arial");
  const [dotColor, setDotColor] = useState("#000000");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    // You can perform any side effects here if needed
    // For now, we just include the variables to trigger a re-render
  }, [inputUrl, bgColor, dotColor, textColor, font]);

  useEffect(() => {
    setBgColor(bgColor), setDotColor(dotColor);
  }, [bgColor, dotColor, textColor]);
  return (
    <>
      <div className="flex">
        <div className="ml-4 mt-5 border-[4px] w-[548px] h-[480px] bg-white border-black rounded-md">
          <h1 className="mt-1 text-center text-red-500 font-semibold text-2xl">
            QR Code Generator
          </h1>
          <div className="w-full h-[60px] mx-auto  flex">
            <h2 className="my-auto ml-1 font-light text-blue-500">Your URL</h2>
            <div className="border-[1px] ml-4 w-[82%] rounded-lg border-black h-[60%] my-auto">
              <input
                type="text"
                className="w-full font-light h-full p-2 rounded-lg border-none"
                placeholder="Enter your URL"
                value={inputUrl}
                onChange={(event) => {
                  setInputUrl(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-[100%] h-[60px] mx-auto  flex">
            <h2 className="my-auto ml-1 font-light text-blue-500">Add Text</h2>
            <div className="border-[1px] ml-[14px] w-[82%] rounded-lg border-black h-[60%] my-auto">
              <input
                type="text"
                className="w-full font-light h-full p-2 rounded-lg border-none"
                placeholder="Enter your URL"
                value={inputText}
                onChange={(event) => {
                  setInputText(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="ml-1 flex">
            <div>
              <h2 className="font-light text-blue-800">Frame Background</h2>
              <div className="border-[1px] flex border-black w-[60%] rounded-lg my-auto">
                <ColorPicker
                  color={bgColor}
                  colorChange={(color) => {
                    setBgColor(color);
                    console.log(color);
                    setShow(!isShow);
                  }}
                />
              </div>
            </div>
            <div className="ml-[-80px]">
              <h2 className="font-light text-blue-800">Text Color</h2>
              <div className="border-[1px] flex border-black w-[60%] rounded-lg my-auto">
                <ColorPicker
                  color={textColor}
                  colorChange={(color) => {
                    setTextColor(color), setShow(!isShow);
                  }}
                />
              </div>
            </div>
            <div className="ml-[-80px]">
              <h2 className="font-light text-blue-800">Text Color</h2>
              <div className="border-[1px] flex border-black w-[98%] rounded-lg my-auto">
                <FontPicker font={font} fontChange={setFont} />
              </div>
            </div>
          </div>

          <div className="ml-1 mt-4">
            <h2 className="font-light text-blue-800">Dot Color</h2>
            <div className="border-[1px] flex border-black w-[25%] rounded-lg my-auto">
              <ColorPicker
                color={dotColor}
                colorChange={(color) => {
                  setDotColor(color), setShow(!isShow);
                }}
              />
            </div>
          </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-5 ml-1"
            />
          <button
            className="bg-green-300 border-[2px] mt-10 rounded-[8px] border-red-500 px-4 text-[20px] text-center mx-auto block"
            onClick={() => {
              setShow(!isShow);
              setUrlCapture(inputUrl);
            }}
          >
            Create Now
          </button>
        </div>
        <div className="w-[30%] ml-6 mt-5 h-[480px] bg-red-300 flex items-center justify-center">
          {!isShow && (
            <App
              initialUrl={urlCapture ? urlCapture : " "}
              initialFileExt="SVG"
              bgColor={bgColor}
              dotColor={dotColor}
              imageURL={imageUrl}
              textColor={textColor}
              addText={inputText}
              font={font}
            />
          )}
          {isShow && (
            <App
              initialUrl={urlCapture}
              initialFileExt="SVG"
              bgColor={bgColor}
              dotColor={dotColor}
              imageURL={imageUrl}
              textColor={textColor}
              addText={inputText}
              font={font}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default QrCode;
