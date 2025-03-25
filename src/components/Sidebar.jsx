/* eslint-disable no-unused-vars */
import React from 'react';
import avatar from "../assets/passport.jpg";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: FaGithub, url: "https://github.com/MuhammadShafad" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/muhammadshafadkk" },
    { icon: FaWhatsapp, url: "https://wa.me/919074505209" },
    { icon: FaInstagram, url: "https://www.instagram.com/shafaaad_/" }
];

const Sidebar = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className='bg-gray-600 h-screen w-[350px] rounded-xl m-7 hidden md:block'
        >
            <div className='bg-gray-600 rounded-md p-4'>
                <div className='rounded-xl p-3 flex items-center justify-center'>
                    <motion.img 
                        src={avatar} 
                        alt="" 
                        className='w-[180px] bg-gray-700 rounded-2xl' 
                        initial={{ scale: 0.8 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.8 }}
                    />
                </div>
                <h1 className='text-white font-bold text-center text-2xl my-2'>Muhammad Shafad K.K</h1>
                <p className='text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7'>MERN Stack Developer</p>
                
                {/* Social Media Icons */}
                <div className='flex justify-center gap-4 mb-7'>
                    {socialLinks.map(({ icon: Icon, url }, index) => (
                        <motion.a 
                            key={index} 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='p-2 rounded-full bg-gray-700 shadow-lg'
                            animate={{ y: [0, -5, 0] }} 
                            transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                        >
                            <Icon className='text-yellow-500 text-2xl' />
                        </motion.a>
                    ))}
                </div>
                
                <hr className='text-gray-700 mx-4 border-2' />
                <div className='mt-7 px-4 space-y-7'>
                    {[{
                        icon: FaRegEnvelope, title: 'EMAIL', text: 'muhammadshafad445@gmail.com'
                    }, {
                        icon: MdOutlinePhoneIphone, title: 'PHONE', text: '+91 9074505209'
                    }, {
                        icon: FaRegCalendarAlt, title: 'BIRTHDAY', text: '17 December, 2004'
                    }, {
                        icon: FaMapMarkerAlt, title: 'LOCATION', text: 'Cherpulassery, Palakkad, Kerala, India'
                    }].map((item, index) => (
                        <motion.div 
                            key={index} 
                            className='flex gap-3 items-center' 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className='bg-gray-700 p-2 rounded-md shadow'>
                                <item.icon className='text-yellow-500 text-2xl' />
                            </div>
                            <div className='text-white'>
                                <h1 className='font-semibold'>{item.title}</h1>
                                <p className='text-gray-200'>{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Sidebar;
