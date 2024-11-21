import { useState, useCallback } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@%&*${}?+-_~`";

    for (let i = 1; i <= array.length; i++) {
      let char = math.floor(math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numAllowed, charAllowed, setPassword]);

  return (
    <div className="w-full mx-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-500">
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3 "
          placeholder="password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex flex-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={lenght}
            className="cursor-pointer"
            onChange={(e) => {
              setLenght(e.target.value);
            }}
          />
          <label>lenght: {lenght}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charcterInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charcterInput">Charcters</label>
        </div>
      </div>
    </div>
  );
}

export default App;