# note:
use of  tailwind
# why does the bg change olive color when we refresh the page.
When the page is refreshed, React re-renders the component and initializes the color state to "olive", causing the background color to default to olive on page load
```javascript
const [color, setColor] = useState("olive");
<div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
```
# if want the color to  remains inn same statment after refreshing the page:
If you want the background color to persist across page reloads, you'll need to save the selected color in localStorage or a similar persistent storage. Here's how you can modify your code to do that:

Store the selected color in localStorage:
On page load, check if there's a stored color in localStorage and set the initial state to that value.
Here's the modified code:
```javascript

import { useState, useEffect } from "react";

function App() {
  // Check if there's a stored color in localStorage
  const storedColor = localStorage.getItem("color") || "olive";

  const [color, setColor] = useState(storedColor);

  // Update localStorage whenever the color changes
  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
```
Key changes:
Initialization from localStorage: We added the line const storedColor = localStorage.getItem("color") || "olive"; to read the previously saved color from localStorage. If nothing is stored, it defaults to "olive".

Saving the selected color to localStorage: The useEffect hook is used to update the localStorage whenever the color state changes. The line localStorage.setItem("color", color); saves the current color in localStorage