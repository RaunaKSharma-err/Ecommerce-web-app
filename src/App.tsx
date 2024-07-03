import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LC, NV, SV, UC } from "./data/database";

function App() {
  const [passLength, setPassLength] = useState(10);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [number, setNumber] = useState(false);
  const [displayPassword, setDisplayPassword] = useState("");

  const createPassword = () => {
    let finalValue = "";
    let charSet = "";
    if (upperCase || lowerCase || symbols || number) {
      if (upperCase) charSet += UC;
      if (lowerCase) charSet += LC;
      if (symbols) charSet += SV;
      if (number) charSet += NV;
      for (let i = 0; i < passLength; i++) {
        finalValue += charSet.charAt(
          Math.floor(Math.random() * charSet.length)
        );
      }
      setDisplayPassword(finalValue);
    } else {
      toast.error("Select atleast one options...");
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(displayPassword);
    toast.success("Password Copied ..")
  };

  return (
    <>
      <div className="App">
        <div className="Card">
          <label>Password Generator</label>
          <div className="showPass">
            <input type="text" readOnly value={displayPassword} />
            <button className="btn" onClick={copyPassword}>
              Copy
            </button>
          </div>
          <div className="passLength">
            <p>Password length</p>
            <input
              type="number"
              max={20}
              min={8}
              value={passLength}
              onChange={(e) => setPassLength(Number(e.target.value))}
            />
          </div>
          <div className="options">
            <p>Include Uppercase</p>
            <input
              type="checkbox"
              checked={upperCase}
              onChange={() => setUpperCase(!upperCase)}
            />
          </div>
          <div className="options">
            <p>Include lowercase</p>
            <input
              type="checkbox"
              checked={lowerCase}
              onChange={() => setLowerCase(!lowerCase)}
            />
          </div>
          <div className="options">
            <p>Include symbols</p>
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
          </div>
          <div className="options">
            <p>Include numbers</p>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber(!number)}
            />
          </div>
          <button className="btn" onClick={createPassword}>
            Generate
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
