import React from 'react'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Projects from './components/Portfolio'
import Contact from './components/Contact'

const router = createBrowserRouter([
  {
    path:"/",
    element:<About/>
  },
  {
    path:"/skills",
    element:<Skills/>
  },
  {
    path:"/resume",
    element:<Resume/>
  },
  {
    path:"/projects",
    element:<Projects/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
])

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
