import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

type AppProps = {
  initialUrl: string;
  initialFileExt: string;
  bgColor: string;
  dotColor: string;
  imageURL: string | null;
  addText: string | null;
  textColor: string;
  font: string;
};

const App: React.FC<AppProps> = ({
  initialUrl,
  initialFileExt,
  bgColor,
  dotColor,
  imageURL,
  addText,
  textColor,
  font,
}) => {
  const [url, setUrl] = useState(initialUrl);
  const [fileExt, setFileExt] = useState(initialFileExt);
  const [prevText, setPrevText] = useState<string | null>(null);
  const BgColor = bgColor;
  const DotColor = dotColor;
  const qrContainerRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: 300,
      height: 300,
      image: imageURL ? imageURL : " ",
      dotsOptions: {
        color: DotColor,
        type: "rounded",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 0,
      },
      backgroundOptions: {
        color: BgColor,
      },
    });
  }, [BgColor, DotColor, imageURL]);

  useEffect(() => {
    if (qrCode.current && qrContainerRef.current) {
      qrCode.current.append(qrContainerRef.current);
    }
  }, []);

  useEffect(() => {
    if (qrCode.current) {
      qrCode.current.update({
        data: url,
        image: imageURL as string,
        dotsOptions: {
          color: DotColor,
        },
        backgroundOptions: {
          color: BgColor,
        },
      });
      onRender();
    }
  }, [url, BgColor, DotColor, imageURL]);
  const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const onExtensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value);
  };
  const onRender = () => {
    if (qrCode.current && qrContainerRef.current) {
      const canvas = qrContainerRef.current.querySelector("canvas");

      if (canvas) {
        const ctx = canvas.getContext("2d");

        if (ctx) {
          const qrImage = new Image();
          qrImage.src = canvas.toDataURL(); // Get the QR code image from the canvas
          qrImage.onload = () => {
            canvas.width = qrImage.width; // Set canvas width to QR code image width
            canvas.height = qrImage.height; // Set canvas height to QR code image height
            ctx.drawImage(qrImage, 0, 0); // Draw the QR code image onto the canvas
            // Check if addText is not null
            if (addText !== null && prevText === null) {
              // Draw text below the QR code
              setPrevText(addText);
              const text = `${addText}`; // Set your text here
              const fontSize = 16; // Adjust font size as needed
              canvas.height = qrImage.height + 20; // Add extra space for the text below
              ctx.drawImage(qrImage, 0, 0); // Draw the QR code image onto the canvas
              ctx.font = `${fontSize}px ${font}`;
              ctx.fillStyle = `${textColor}`; // Set text color
              ctx.textAlign = "center";
              ctx.fillText(text, canvas.width / 2, canvas.height - 5); // Position text below the QR code
            } else if (addText !== prevText) {
              // Clear canvas before redrawing
              ctx.clearRect(0, 0, canvas.width, canvas.height);

              // Draw the QR code image onto the canvas
              ctx.drawImage(qrImage, 0, 0);

              // Draw text below the QR code
              const text = `${addText}`; // Set your text here
              const fontSize = 16; // Adjust font size as needed
              ctx.font = `${fontSize}px ${font}`;
              ctx.fillStyle = `${textColor}`; // Set text color
              ctx.textAlign = "center";
              ctx.fillText(text, canvas.width / 2, canvas.height - 5); // Position text below the QR code

              // Update prevText to the current addText
              setPrevText(addText);
            }

            // Convert canvas to Blob
            canvas.toBlob((blob) => {
              if (blob) {
                navigator.clipboard
                  .write([
                    new ClipboardItem({
                      [blob.type]: blob,
                    }),
                  ])
                  .then(() => {
                  })
                  .catch((error) => {
                    console.error("Failed to create QR code: ", error);
                  });
              }
            });
          };
        }
      }
    }
  };
  const onDownloadClick = () => {
    if (qrCode.current) {
      qrCode.current.download({
        extension: fileExt as "png" | "jpeg" | "svg",
      });
    }
  };

  const onCopyClick = () => {
    if (qrCode.current && qrContainerRef.current) {
      const canvas = qrContainerRef.current.querySelector("canvas");

      if (canvas) {
        const ctx = canvas.getContext("2d");

        if (ctx) {
          const qrImage = new Image();
          qrImage.src = canvas.toDataURL(); // Get the QR code image from the canvas
          qrImage.onload = () => {
            canvas.width = qrImage.width; // Set canvas width to QR code image width
            canvas.height = qrImage.height; // Set canvas height to QR code image height
            ctx.drawImage(qrImage, 0, 0); // Draw the QR code image onto the canvas
            // Check if addText is not null
            if (addText !== null && prevText === null) {
              // Draw text below the QR code
              setPrevText(addText);
              const text = `${addText}`; // Set your text here
              const fontSize = 16; // Adjust font size as needed
              canvas.height = qrImage.height + 20; // Add extra space for the text below
              ctx.drawImage(qrImage, 0, 0); // Draw the QR code image onto the canvas
              ctx.font = `${fontSize}px ${font}`;
              ctx.fillStyle = `${textColor}`; // Set text color
              ctx.textAlign = "center";
              ctx.fillText(text, canvas.width / 2, canvas.height - 5); // Position text below the QR code
            } else if (addText !== prevText) {
              // Clear canvas before redrawing
              ctx.clearRect(0, 0, canvas.width, canvas.height);

              // Draw the QR code image onto the canvas
              ctx.drawImage(qrImage, 0, 0);

              // Draw text below the QR code
              const text = `${addText}`; // Set your text here
              const fontSize = 16; // Adjust font size as needed
              ctx.font = `${fontSize}px ${font}`;
              ctx.fillStyle = `${textColor}`; // Set text color
              ctx.textAlign = "center";
              ctx.fillText(text, canvas.width / 2, canvas.height - 5); // Position text below the QR code

              // Update prevText to the current addText
              setPrevText(addText);
            }

            // Convert canvas to Blob
            canvas.toBlob((blob) => {
              if (blob) {
                navigator.clipboard
                  .write([
                    new ClipboardItem({
                      [blob.type]: blob,
                    }),
                  ])
                  .then(() => {
                    alert("QR code copied to clipboard!");
                  })
                  .catch((error) => {
                    console.error("Failed to copy QR code: ", error);
                  });
              }
            });
          };
        }
      }
    }
  };

  return (
    <div className="App">
      <div ref={qrContainerRef} />
      <div className="input-wrapper py-2 mx-auto flex items-center">
        <select
          onChange={onExtensionChange}
          value={fileExt}
          className="border-[0.5px]  bg-black text-white border-black rounded-[8px] mx-auto mr-1 px-3 py-2 focus:outline-none"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="svg">SVG</option>
        </select>
        <button
          onClick={onDownloadClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mx-auto hover:bg-blue-600 focus:outline-none"
        >
          Download
        </button>
        <button
          onClick={onCopyClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mx-auto hover:bg-blue-600 focus:outline-none"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default App;
