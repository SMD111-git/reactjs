import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './compontent/index.js'
const router =createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
   { path:'/',
    element:<home/>,

   },
   {
    path:"/login",
    element:(
      <AuthLayout>
        
      </AuthLayout>
    )
   }

  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
