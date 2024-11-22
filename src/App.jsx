import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@%&*${}?+-_~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-800">
      <h1 className="text-white text-center my-4">Password Generator</h1>
      <div className='className = "flex shadow rounded-lg overflow-hidden mb-4"'>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-y-1">
          <input type="range" min={6} max={100} value={lenght} className="cursor-pointer onclick/>"
          <label>Lenght: {lenght}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
