import { useState, useCallback } from 'react'

function App() {
  const [Length, setLength] = useState(8)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuwxyz"
    if (NumberAllowed) str += "0123456789"
    if (CharAllowed) str += "~!@#$%^&*{}()?<>?/"

    for (let index = 0; index < Length; index++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [Length, CharAllowed, NumberAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text'
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={() => navigator.clipboard.writeText(Password)}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={Length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {Length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              checked={NumberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              checked={CharAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Include Special Characters</label>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2"
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  )
}

export default App
