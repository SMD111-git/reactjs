import {useState}from "react";
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button  onClick={()=>setColor("red")}
          //point to note here:we are dierctly give a function of setter in oclick and give a default value in setter method.
          className="outline-none px-4  py-1 rounded-full  text-white"style={{backgroundColor:"red"}}>Red</button>
          <button  onClick={()=>setColor("green")}
          className="outline-none px-4  py-1 rounded-full  text-white"style={{backgroundColor:"green"}}>green</button>
          <button  onClick={()=>setColor("orange")} 
          className="outline-none px-4  py-1 rounded-full  text-white"style={{backgroundColor:"orange"}}>orange</button>
          <button  onClick={()=>setColor("yellow")}
           className="outline-none px-4  py-1 rounded-full  text-white"style={{backgroundColor:"yellow"}}>yellow</button>
          <button  onClick={()=>setColor("blue")} 
          className="outline-none px-4  py-1 rounded-full  text-white"style={{backgroundColor:"blue"}}>blue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
