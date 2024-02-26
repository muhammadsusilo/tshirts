import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./input.css"
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import ProductPage from './pages/Product.jsx'
import ContactPage from './pages/Contact.jsx'
import AboutPage from './pages/About.jsx'
import ShopPage from './pages/Shop.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element:<HomePage />,
  },
  {
    path:"/Product",
    element:<ProductPage />
  },
  {
    path:"/Contact",
    element:<ContactPage />
  },
  {
    path:"/About",
    element:<AboutPage />
  },
  {
    path:"/Shop",
    element:<ShopPage />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
