import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './compontent/index.js'
import AddPost from "./Pages/AddPost.jsx";
import Signup from './Pages/Signup'
import EditPost from "./Pages/EditPost";
import Post from "./Pages/Post";
import AllPost from "./Pages/AllPost";
import Home from './Pages/Home.jsx'
const router =createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  children:
  [
   { path:'/',
    element:<Home/>,

   },
   {
    path:"/login",
    element:(
      <AuthLayout authentication={false}>
        <Login/>
      </AuthLayout>
    ),
   },
   {
    path: "/signup",
    element: (
    <AuthLayout authentication={false}>
      <Signup/>
      </AuthLayout>
      ),
      },
    {
      path: "/all-post",
      element: (
      <AuthLayout authentication>
        {" "}
        <AllPost/>
      </AuthLayout>
       ),
        },
        {
          path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
         {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
         {
            path: "/post/:slug",
            element: <Post />,
        },
      ],
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
