// components/WiFiQRGenerator.tsx

import { useState } from 'react';
import QRCode from 'qrcode-generator';

const WiFiQRGenerator: React.FC = () => {
    const [ssid, setSsid] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [qrCode, setQrCode] = useState<string>('');

    const generateQR = () => {
        if (ssid.trim() === '' || password.trim() === '') {
            alert('SSID and password cannot be empty');
            return;
        }

        const qr = QRCode(0, 'M');
        qr.addData(`WIFI:T:WPA;S:${ssid};P:${password};;`);
        qr.make();
        setQrCode(qr.createDataURL());
    };

    return (
        <div>
            <h1>WiFi QR Code Generator</h1>
            <label htmlFor="ssid">SSID:</label>
            <input type="text" id="ssid" value={ssid} onChange={(e) => setSsid(e.target.value)} placeholder="Enter WiFi SSID" /><br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter WiFi Password" /><br /><br />
            <button onClick={generateQR}>Generate QR Code</button><br /><br />
            {qrCode && <img src={qrCode} alt="WiFi QR Code" />}
        </div>
    );
};

export default WiFiQRGenerator;
