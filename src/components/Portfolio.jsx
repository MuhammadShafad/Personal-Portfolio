/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { projects } from './data';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <Navbar />
      <div className='mt-7'>
        <motion.h1
          className='text-white font-bold text-3xl mb-2'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.hr
          className='border-3 text-yellow-500 w-12 rounded-4xl'
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.div
          className='grid md:grid-cols-3 gap-6 mt-7'
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform'
              variants={cardVariants}
              whileHover='hover'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'
              />
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-300 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
                <div className='flex gap-3'>
                  <motion.a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'
                    variants={buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                  >
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 items-center bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md transition-colors'
                    variants={buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                  >
                    <FaGithub /> Github
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Portfolio;