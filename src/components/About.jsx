/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import avatar from "../assets/passport.jpg";
import { service } from './data';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5 md:p-7 w-full'
        >
            <Navbar />
            <div className='mt-5 md:mt-7'>
                <motion.h1 
                    className='text-white font-bold text-2xl md:text-3xl mb-2'
                    initial={{ x: -30, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h1>
                <motion.hr 
                    className='border-3 text-yellow-500 w-12 rounded-4xl' 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div 
                    className='mt-5 flex justify-center md:hidden'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={avatar} alt="" className='bg-gray-700 rounded-2xl w-40 h-40' />
                </motion.div>
                <motion.p 
                    className='mt-4 text-gray-300 text-lg md:text-xl font-semibold text-center md:text-left'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi! I'm Muhammad Shafad K.K, a passionate MERN stack developer with a strong foundation in web development. I recently completed my Diploma in Computer Science, where I developed a keen interest in building dynamic and responsive web applications.

<p>I am currently working as a Computer Lab Instructor in Al Ameen Engineering College,Kulapully.I am also MEARN Full Stack Intern at Luminar Technolab on side.</p>
                </motion.p>
                {/* Service Section */}
                <h1 className='text-2xl text-white font-bold mt-7 text-center md:text-left'>What I'm Doing</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7'>
                    {service.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className='bg-gray-700 border shadow p-4 sm:p-5 text-white flex gap-4 sm:gap-5 items-start rounded-xl'
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className='text-4xl sm:text-6xl text-yellow-500'>
                                {item.logo}
                            </div>
                            <div>
                                <h1 className='font-bold text-xl sm:text-2xl'>{item.title}</h1>
                                <p className='text-lg sm:text-xl text-gray-300'>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default About;
