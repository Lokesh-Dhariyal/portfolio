import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Experience() {
  const experiences = [
    {
      icon: '💻',
      title: 'Intermediate Full Stack Developer',
      description: 'Skilled in both frontend and backend development with modern web technologies.',
      details: [
        'Proficient in REST APIs, MongoDB, Express, React, and Node.js',
        'Experience with modern JavaScript frameworks and libraries',
        'Average understanding of database design and optimization'
      ]
    },
    {
      icon: '🚀',
      title: 'Full Stack Projects',
      description: 'Built production-ready applications with advanced features.',
      details: [
        'Developed Healing Tap (health app) and Staticgram (social media)',
        'Implemented JWT authentication and real-time features',
        'Used Socket.io for real-time communication and updates'
      ]
    },
    {
      icon: '🧠',
      title: 'Currently Learning & Building',
      description: 'Continuously expanding knowledge in modern development practices.',
      details: [
        'Advanced MERN stack architecture and microservices',
        'State management with Zustand and Redux',
        'Cloud deployment and DevOps practices'
      ]
    },
    {
      icon: '✨',
      title: 'Additional Highlights',
      description: 'Passion for creating beautiful and functional user experiences.',
      details: [
        'UI/UX-rich applications with React & Tailwind CSS',
        'Active contributor to open-source projects',
        'Focus on performance optimization and best practices'
      ]
    }
  ]

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const checkScreen = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkScreen()
      window.addEventListener('resize', checkScreen)
      return () => window.removeEventListener('resize', checkScreen)
    }, [])
  
    return isMobile
  }

  const isMobile = useIsMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className='w-full'>
      <motion.div
        className='modern-card p-6 lg:p-8'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount:0.1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className='text-center mb-7'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-3xl font-bold gradient-text mb-2 font-inter'>
            My Journey
          </h3>
          <p className='text-gray-400 font-inter'>
            Building the future, one project at a time
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className='space-y-6'
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='relative group'
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className='absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30'></div>
              )}

              <div className='flex gap-4'>
                {/* Icon */}
                <motion.div
                  className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl flex-shrink-0 shadow-lg'
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {exp.icon}
                </motion.div>

                {/* Content */}
                <div className='flex-1 min-w-0'>
                  <motion.h4
                    className='text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 font-inter'
                    whileHover={{ x: 5 }}
                  >
                    {exp.title}
                  </motion.h4>
                  
                  <p className='text-gray-400 mb-3 font-inter leading-relaxed'>
                    {exp.description}
                  </p>

                  <motion.ul 
                    className='space-y-2'
                    variants={containerVariants}
                  >
                    {exp.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        variants={itemVariants}
                        className='flex items-start gap-2 text-sm text-gray-500 font-inter'
                      >
                        <span className='text-blue-400 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0'></span>
                        <span className='group-hover:text-gray-400 transition-colors duration-300'>
                          {detail}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className='text-center mt-8 pt-6 border-t border-gray-700/50'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience
