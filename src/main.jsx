import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import ProductPage from './pages/Product.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
  {
    path:"/Product",
    element:<ProductPage />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
