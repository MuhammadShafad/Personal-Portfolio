/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        // Animation trigger could be added here
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'
        >
            <Navbar />
            <div className='mt-7'>
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='text-white font-bold text-3xl mb-2'
                >
                    Contact Me
                </motion.h1>
                <motion.hr 
                    initial={{ width: 0 }}
                    animate={{ width: '3rem' }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='border-3 text-yellow-500 w-12 rounded-4xl' 
                />
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className='mt-10'
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7835.749694285558!2d76.30789153766175!3d10.897114892455342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d1ab48246e77%3A0xf9b6ba84b8036266!2sKaralmanna%2C%20Kerala%20679506!5e0!3m2!1sen!2sin!4v1742810332289!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        loading="lazy" 
                        className='w-full rounded-2xl shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300'
                    ></iframe>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className='mt-10'
                >
                    <h1 className='text-white font-bold text-2xl mb-2'>Contact Form</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 my-7'>
                            <motion.input 
                                whileFocus={{ scale: 1.02, borderColor: "#f59e0b" }}
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Full Name' 
                                className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all'
                                required
                            />
                            <motion.input 
                                whileFocus={{ scale: 1.02, borderColor: "#f59e0b" }}
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email Address' 
                                className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all'
                                required
                            />
                        </div>
                        
                        <motion.textarea 
                            whileFocus={{ scale: 1.02, borderColor: "#f59e0b" }}
                            rows={4} 
                            cols={50} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Your Message' 
                            className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all'
                            required
                        ></motion.textarea>
                        
                        <div className='flex justify-end mt-7'>
                            <motion.button 
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "#1f2937",
                                    boxShadow: "0 0 10px rgba(245, 158, 11, 0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className='flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer transition-all'
                            >
                                <motion.span
                                    animate={{
                                        x: [0, 5, 0],
                                        transition: { repeat: Infinity, duration: 2 }
                                    }}
                                >
                                    <FaPaperPlane/>
                                </motion.span>
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact