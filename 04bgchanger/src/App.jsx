import {useState}from "react";
function App() {
  const [color, setColor] = useState("green")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">red</div>
    </div>
    </>
  )
}

export default App
