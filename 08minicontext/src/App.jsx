
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
 

  return ( // over here the file of usercontesxt is imported in to app.jsx file to handel the user deatils
    <Usercontextprovider> 
      <h1>SMD THE UPCOMING EMPIER</h1>
    </Usercontextprovider>
  )
}

export default App
