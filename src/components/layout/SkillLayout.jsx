import { useState } from 'react'
import { motion } from 'framer-motion'

function SkillLayout({ className = '' }) {
  const [skill, setSkill] = useState('EXPANDING LIBRARY')

  const skills = [
    { name: 'REACT', icon: 'react' },
    { name: 'JAVASCRIPT', icon: 'js' },
    { name: 'TAILWIND', icon: 'tailwind' },
    { name: 'GIT', icon: 'git' },
    { name: 'MONGODB', icon: 'mongodb' },
    { name: 'C++', icon: 'cpp' },
    { name: 'GITHUB', icon: 'github' },
    { name: 'NEXT.JS', icon: 'nextjs' },
    { name: 'VSCODE', icon: 'vscode' },
    { name: 'NODE.JS', icon: 'nodejs' },
    { name: 'EXPRESS', icon: 'express' }
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  }

  return (
      <div className={`lg:w-4/5 h-fit mt-5 lg:mt-10 ${className}`}>
      <motion.div
        className='bg-[#101420] border-2 border-blue-900 text-2xl text-center lg:text-3xl w-fit h-fit mx-auto rounded-3xl px-3 lg:px-17 py-2 font-bold font-mono text-[#c4c4c4] opacity-95'
        layout
        variants={fadeIn}
      >
        Solving real problems with
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='font-azeeb text-center text-xl lg:text-2xl mt-1 text-blue-200'
        >
          {skill}
        </motion.div>
      </motion.div>

      <motion.div
        className='flex w-full h-fit flex-wrap mx-auto mt-10 justify-center gap-2 lg:gap-3'
        variants={fadeIn}
      >
        {skills.map(({ name, icon }) => (
          <motion.div
            key={name}
            className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420] hover:cursor-pointer'
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={() => setSkill(name)}
            onMouseLeave={() => setSkill('EXPANDING LIBRARY')}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={name}
              className='w-full h-full p-2 lg:p-1'
            />
          </motion.div>
        ))}
      </motion.div>
      </div>
  )
}

export default SkillLayout
