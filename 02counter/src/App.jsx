import { useState } from 'react' //from here the actual hooks function methodes are bought in the code 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0) //this the actual work happens we create a vraibale in a array format, where
  //the first place holder is a varaible and second is a method or functio respossible of updation of varaiable
  //after the "usestate(defalutvalue)" it a hook where the actaul work happens 

 // let counter=15; **this traditonal way of handel the varaible and as we see once we click the add button the number are not reflecting
 //on the ui, so we are going into hooks which a whole intergates the ui and dom updation togther. 
  const addvalue=() =>{
     console.log("value added",counter);
     counter=counter+1
     setcounter(counter)//this a way upadting the state or the variable 
    
  }
  const subtracevalue=()=>{
    setcounter(counter-1)//this method or function from above hook 
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter:{counter}</h2>
     
     <button onClick={addvalue}>
      add value{counter}</button> 
     <br/> 

     <button onClick={subtracevalue}>subtrace value{counter}</button><br></br>
     <p>footer:{counter}</p>
    </>
  )
}

export default App


