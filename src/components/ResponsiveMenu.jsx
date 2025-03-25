/* eslint-disable no-unused-vars */
import React from 'react'
import avatar from "../assets/passport.jpg"
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegEnvelope } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-4 pb-6 pt-6 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div className='bg-gray-600 rounded-md p-4'>
                <div className='rounded-xl p-3 flex items-center justify-center'>
                    <img src={avatar} alt="" className='w-[180px] bg-gray-700 rounded-2xl' />
                </div>
                <h1 className='text-white font-bold text-center text-xl my-2'>Muhammad Shafad K.K</h1>
                <p className='text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7'>MERN Stack Developer</p>
                <hr className='text-gray-700 mx-4 border-2' />

                <nav className='mt-5'>
                    <ul className='flex flex-wrap text-center gap-2 text-white text-xl font-semibold'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer rounded-2xl bg-gray-800 px-4 py-2`}><li>About</li></NavLink>
                        <NavLink to={'/skills'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer rounded-2xl bg-gray-800 px-4 py-2`}><li>Skills</li></NavLink>
                        <NavLink to={'/resume'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer rounded-2xl bg-gray-800 px-4 py-2`}><li>Resume</li></NavLink>
                        <NavLink to={'/projects'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer rounded-2xl bg-gray-800 px-4 py-2`}><li>Projects</li></NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer rounded-2xl bg-gray-800 px-4 py-2`}><li>Contact</li></NavLink>
                    </ul>
                </nav>

                <div className='mt-7 px-4 space-y-7'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaRegEnvelope className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>EMAIL</h1>
                            <p className='text-gray-200'>muhammadshafad445</p>
                                <p className='text-gray-200'>@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <MdOutlinePhoneIphone className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>PHONE</h1>
                            <p className='text-gray-200'>+91 9074505209</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaRegCalendarAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>BIRTHDAY</h1>
                            <p className='text-gray-200'>17 December, 2004</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaMapMarkerAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>LOCATION</h1>
                            <p className='text-gray-200'>Cherpulassery, Palakkad, Kerala, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu
