import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './componet/About/About.jsx'
import Home from './componet/Home/Home.jsx'
const router=createBrowserRouter([
  {
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"About",
      element:<About/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
