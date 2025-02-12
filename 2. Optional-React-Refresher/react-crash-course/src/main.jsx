// lot of mistakes are there dont use this react crash course for learning 
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import Form from './components/Form'
import AppLayout from './Routes/AppLayout'
import Post from './components/Post'

const router = createBrowserRouter([  
    {
      element : <AppLayout />,
      children : [
        {
          path : '/',
          element : <App />
        },
        {
          path : '/form',
          element : <Form />
        },
        {
          path : '/post',
          element : <Post />
        }
      ]
    }
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
