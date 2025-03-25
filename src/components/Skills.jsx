/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import Navbar from './Navbar';

const skills = [
    { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" }, 
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-400" },
    { icon: FaReact, name: "React", color: "text-cyan-500" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
];

const Skills = () => {
    return (
        <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
            <Navbar/>
            <h1 className="text-white font-bold text-3xl mb-2">My Skills</h1>
            <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
        <div className="w-full flex flex-col items-center mt-10">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-10/12">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <skill.icon className={`text-5xl ${skill.color}`} />
                        <p className="text-white mt-3 text-lg">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Skills;
