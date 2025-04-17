
import './App.css'
import Login from './compoents/Login'
import Profile from './compoents/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return ( 
    <UserContextProvider>
      <h1>SIKE UPCOMING SOON</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App // over here the file of usercontesxt is imported in to app.jsx file to handel the user deatils
