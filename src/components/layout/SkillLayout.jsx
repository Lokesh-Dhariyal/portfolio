import { useState } from 'react'
import { motion } from 'framer-motion'

function SkillLayout({ className = '' }) {
  const [skill, setSkill] = useState('EXPANDING LIBRARY')

  const skillCategories = {
    'Frontend': [
      { name: 'REACT', icon: 'react' },
      { name: 'NEXT.JS', icon: 'nextjs' },
      { name: 'JAVASCRIPT', icon: 'js' },
      { name: 'TYPESCRIPT', icon: 'ts' },
      { name: 'CSS', icon: 'css' },
      { name: 'TAILWIND', icon: 'tailwind' },
    ],
    'Backend': [
      { name: 'NODE.JS', icon: 'nodejs' },
      { name: 'EXPRESS', icon: 'express' },
      { name: 'MONGODB', icon: 'mongodb' },
      { name: 'FIREBASE', icon: 'firebase' },
    ],
    'Tools': [
      { name: 'GIT', icon: 'git' },
      { name: 'GITHUB', icon: 'github' },
      { name: 'VSCODE', icon: 'vscode' },
      { name: 'C++', icon: 'cpp' },
    ]
  }

  const allSkills = Object.values(skillCategories).flat()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className={`w-full h-fit ${className}`}>
      {/* Header */}
      <motion.div
        className='modern-card px-6 py-4 mb-8 text-center'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className='text-2xl lg:text-3xl font-bold text-white mb-2 font-inter'>
          Solving problems with
        </h3>
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='gradient-text text-xl lg:text-2xl font-semibold'
        >
          {skill}
        </motion.div>
      </motion.div>

      {/* Skills Grid - Categorized */}
      <motion.div
        className='space-y-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div key={category} variants={categoryVariants} className="group">
            <h4 className='text-lg font-semibold text-blue-400 mb-4 font-jetbrains'>
              {category}
            </h4>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-8'>
              {skills.map(({ name, icon }) => (
                <motion.div
                  key={name}
                  className='modern-card aspect-square rounded-2xl hover:bg-blue-500/10 transition-all duration-300 cursor-pointer group/item overflow-hidden'
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setSkill(name)}
                  onMouseLeave={() => setSkill('EXPANDING LIBRARY')}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 p-3 h-full flex flex-col items-center justify-center">
                    <motion.img
                      src={`https://skillicons.dev/icons?i=${icon}`}
                      alt={name}
                      className='w-14 h-14 lg:w-16 lg:h-16 mb-2 group-hover/item:drop-shadow-lg transition-all duration-300'
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className='text-xs lg:text-sm text-gray-400 group-hover/item:text-white transition-colors duration-300 text-center font-medium'>
                      {name}
                    </span>
                  </div>

                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/item:border-blue-500/50 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        className='mt-12 grid grid-cols-2 gap-4'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className='modern-card p-4 text-center'>
          <div className='text-3xl font-bold gradient-text'>14+</div>
          <div className='text-sm text-gray-400 font-inter'>Technologies</div>
        </div>
        <div className='modern-card p-4 text-center'>
          <div className='text-3xl font-bold gradient-text'>2+</div>
          <div className='text-sm text-gray-400 font-inter'>Years Experience</div>
        </div>
      </motion.div>
    </div>
  )
}

export default SkillLayout
