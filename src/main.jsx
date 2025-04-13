import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Start,About,Contact,Exp } from './components/index.js'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children :[
      {
        path:'/start',
        element:<Start/>
      },
      {
        path:'/project',
        element:<About/>
      },
      {
        path:'/insight',
        element:<Exp/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
