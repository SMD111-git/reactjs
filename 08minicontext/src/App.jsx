
import './App.css'
import Login from './compoents/Login'
import Profile from './compoents/Profile'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
 

  return ( // over here the file of usercontesxt is imported in to app.jsx file to handel the user deatils
    <Usercontextprovider> 
      <h1>SMD THE UPCOMING EMPIER</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
