/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Resume = () => {
  const handleDownload = () => {
    const pdfUrl = '/src/assets/CV_2025032414432245.pdf'; // Replace with actual PDF path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Muhammad_Shafad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5 md:p-7 w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <motion.h1 className="text-white font-bold text-3xl mb-2" variants={itemVariants}>
        My Resume
      </motion.h1>
      <motion.hr
        className="border-3 text-yellow-500 w-12 rounded-4xl"
        variants={itemVariants}
      />
      <motion.div
        className="mt-7 flex flex-col items-center w-full"
        variants={containerVariants}
      >
        {/* Scrollable Resume Box */}
        <motion.div
          className="w-full max-w-4xl bg-white border border-gray-300 rounded-lg shadow-lg p-6 overflow-y-auto h-[80vh]"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Header */}
          <motion.h2
            className="text-black font-bold text-2xl text-center"
            variants={itemVariants}
          >
            MUHAMMAD SHAFAD K.K
          </motion.h2>

          {/* Contact Section */}
          <motion.h3 className="text-lg font-semibold mt-4" variants={itemVariants}>
            CONTACT
          </motion.h3>
          <motion.p variants={itemVariants}>📧 muhammadshafad445@gmail.com</motion.p>
          <motion.p variants={itemVariants}>📞 9074505209</motion.p>
          <motion.p variants={itemVariants}>🏠 Kandappankuzhi (HO), Karalmanna (PO), Cherpulassery , Palakkad, Kerala - 679506</motion.p>
          <motion.p variants={itemVariants}>🔗 GitHub: https://github.com/MuhammadShafad</motion.p>
          <motion.p variants={itemVariants}>🔗 LinkedIn: https://www.linkedin.com/in/muhammadshafadkk</motion.p>
          <motion.hr className="my-3" variants={itemVariants} />

          {/* Personal Details */}
          <motion.h3 className="text-lg font-semibold" variants={itemVariants}>
            PERSONAL DETAILS
          </motion.h3>
          <motion.p variants={itemVariants}>📅 Birth: 17/12/2004</motion.p>
          <motion.p variants={itemVariants}>🏳 Nationality: India</motion.p>
          <motion.hr className="my-3" variants={itemVariants} />

          {/* Objective */}
          <motion.h3 className="text-lg font-semibold" variants={itemVariants}>
            OBJECTIVE
          </motion.h3>
          <motion.p variants={itemVariants}>
            Detail-oriented and motivated Computer Engineering graduate with a strong
            foundation in hardware and software systems. Seeking a challenging position
            where I can apply my programming skills, problem-solving abilities, and
            teamwork experience to contribute to innovative projects and further develop
            my expertise in the field.
          </motion.p>
          <motion.hr className="my-3" variants={itemVariants} />

          {/* Experience */}
          <motion.h3 className="text-lg font-semibold" variants={itemVariants}>
            EXPERIENCE
          </motion.h3>
          <motion.p variants={itemVariants}>
            <strong>Web Development (MEARN Stack) - Luminar Technolab</strong>
          </motion.p>
          <motion.p variants={itemVariants}>Currently pursuing an internship and gaining experience.</motion.p>
          <motion.hr className="my-3" variants={itemVariants} />

          {/* Education */}
          <motion.h3 className="text-lg font-semibold" variants={itemVariants}>
            EDUCATION
          </motion.h3>
          <motion.p variants={itemVariants}>
            <strong>Diploma in Computer Engineering</strong> - IPT & GPTC SHORANUR (2021 - 2024)
          </motion.p>
          <motion.p variants={itemVariants}>
            <strong>SSLC</strong> - PT.M.H.S.S Thrikkadiri (2021)
          </motion.p>
          <motion.hr className="my-3" variants={itemVariants} />

          {/* Technical Skills */}
          <motion.h3 className="text-lg font-semibold" variants={itemVariants}>
            TECHNICAL SKILLS
          </motion.h3>
          <motion.p variants={itemVariants}>HTML,
            CSS,
            Bootstrap,
            Tailwind CSS,
            Javascript,
            C,
            React.js,
            Node.js,
            Express.js,
            Mongodb (database)</motion.p>
          <motion.hr className="my-3" variants={itemVariants} />

          {/* Projects */}
          <motion.h3 className="text-lg font-semibold" variants={itemVariants}>
            PROJECTS
          </motion.h3>
          <motion.ul className="list-disc list-inside" variants={itemVariants}>
            <li>Personal Portfolio Website using React</li>
            <li>BMI Calculator using React</li>
            <li>Car Rental Website using React.js & TailwindCSS</li>
            <li>Spotify Clone Website using React</li>
            <li>Fruit SlicerGame using JavaScript</li>
            <li>Weather Application using HTML,CSS,Bootstrap,JavaScript</li>
            <li>Personal Portfolio Website using HTML & TailwindCSS</li>
            <li>Responsive Restaurant Website</li>
            <li>Online Educational Platform Website</li>
            <li>Travel Event Management Website</li>
            <li>Online Pet Store Website</li>
            <li>Private Bus Route-Time Assist</li>
            <li>Online Pet Selling and Buying App</li>
            <li>Blood Donation App</li>
            <li>E-commerce App</li>
          </motion.ul>
        </motion.div>

        {/* Download CV Button */}
        <motion.button
          onClick={handleDownload}
          className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download CV
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Resume;