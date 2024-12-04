import "./index.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);
      setQrcode(url);
    });
  };

  return (
    <div className="app flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-8">QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
        className="mb-4 p-3 rounded-md text-gray-900 w-80"
      />
      <button
        onClick={GenerateQRCode}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg mb-4 transition duration-300"
      >
        Generate
      </button>
      {qrcode && (
        <>
          <img
            src={qrcode}
            alt="Generated QR Code"
            className="mb-4 border-4 border-white rounded-lg shadow-lg"
          />
          <a
            href={qrcode}
            download="qrcode.png"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
