import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Dropdown from './components/Home/Dropdown.jsx'
import Github from './components/Github/Github.jsx'
import ChartApp from './components/Analysis/ChartApp.jsx'

//Create router
const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "analysis",
        element : <ChartApp/>
      },
      {
        path : "github",
        element : <Github/>
      }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
