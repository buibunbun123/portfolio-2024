// components/QRCodeWithImage.tsx
import React, { useState } from 'react';
import QRCodeStyling from 'qr-code-styling';

const QRCodeWithImage: React.FC = () => {
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

  const generateQRCode = () => {
    if (!imageUrl) return;

    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: 'https://example.com', // You can change this to any data you want to encode
      image: imageUrl,
    });

    qrCode.append(document.getElementById('qr-code-container') as HTMLElement);
    qrCode.download({
      name: 'qr-code-with-image.png',
    });
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {imageUrl && (
        <div id="qr-code-container" className="mb-4">
          {/* QR code will be rendered here */}
        </div>
      )}
      <button onClick={generateQRCode} disabled={!imageUrl} className="bg-blue-500 text-white py-2 px-4 rounded">
        Generate QR Code
      </button>
    </div>
  );
};

export default QRCodeWithImage;
