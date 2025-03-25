import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggle = ()=> {
        setOpen(!open)
    }
  return (
    <div className='md:bg-transparent bg-gray-800 rounded-2xl'>
      <nav className='hidden md:block'>
        <ul className='flex gap-10 items-center justify-end text-white text-2xl font-semibold'>
            <NavLink to={'/'} className={({isActive})=> `${isActive ? "text-yellow-500":"text-white"} cursor-pointer`}><li>About</li></NavLink>
            <NavLink to={'/skills'} className={({isActive})=> `${isActive ? "text-yellow-500":"text-white"} cursor-pointer`}><li>Skills</li></NavLink>
            <NavLink to={'/resume'} className={({isActive})=> `${isActive ? "text-yellow-500":"text-white"} cursor-pointer`}><li>Resume</li></NavLink>
            <NavLink to={'/projects'} className={({isActive})=> `${isActive ? "text-yellow-500":"text-white"} cursor-pointer`}><li>Projects</li></NavLink>
            <NavLink to={'/contact'} className={({isActive})=> `${isActive ? "text-yellow-500":"text-white"} cursor-pointer`}><li>Contact</li></NavLink>
        </ul>
      </nav>
      <div className='flex justify-between items-center text-xl md:hidden px-5'>
        <p className='w-20 text-white p-5 font-bold'>Portfolio</p>
        {
            open ? <HiMenuAlt3 className='text-yellow-500 w-10 h-10' onClick={toggle}/> : <HiMenuAlt1 className='text-yellow-500 w-10 h-10' onClick={toggle}/>
        }
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Navbar
