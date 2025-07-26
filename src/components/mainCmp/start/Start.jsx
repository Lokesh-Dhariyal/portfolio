import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Start() {
  const dev = ['FULLSTACK DEVELOPER', 'WEB DEVELOPER']
  const [change, setChange] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isMouseVisible, setIsMouseVisible] = useState(false)
  const [clickRipples, setClickRipples] = useState([])

  useEffect(() => {
    const currentText = dev[change % dev.length]
    let timeout

    if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      // Move to next text
      setIsDeleting(false)
      setChange(prev => prev + 1)
    } else {
      // Type or delete characters
      const speed = isDeleting ? 69 : 128
      timeout = setTimeout(() => {
        setDisplayText(prev => {
          if (isDeleting) {
            return currentText.substring(0, prev.length - 1)
          } else {
            return currentText.substring(0, prev.length + 1)
          }
        })
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, change])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isMouseVisible) {
        setIsMouseVisible(true)
      }
    }
    
    const handleMouseLeave = () => {
      setIsMouseVisible(false)
    }

    const handleClick = (e) => {
      const ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      }
      setClickRipples(prev => [...prev, ripple])
      
      // Remove ripple after animation
      setTimeout(() => {
        setClickRipples(prev => prev.filter(r => r.id !== ripple.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMouseVisible])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  }

  return (
    <div id='start' className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Click Ripples */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed w-4 h-4 border-2 border-cyan-400 rounded-full pointer-events-none z-15"
            style={{
              left: ripple.x - 8,
              top: ripple.y - 8,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 6, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 grid-pattern opacity-30"></div> */}
      
      {/* Particle Effect */}
      {/* <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div> */}

      <motion.div
        className="relative z-20 text-white w-full lg:w-3/4 xl:w-2/3 mx-auto text-center pb-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className='opacity-30 text-sm font-jetbrains tracking-widest mb-8'
          variants={itemVariants}
        >
          #WELCOME_TO_MY_PORTFOLIO
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h1
            className='text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Hey, I'm{' '}
            <motion.span 
              className='gradient-text inline-block'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Lokesh
            </motion.span>
            <br />
            <motion.span 
              className='text-blue-400 inline-block'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Dhariyal
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          className='text-2xl lg:text-4xl xl:text-5xl mb-8 h-16 lg:flex items-center justify-center'
          variants={itemVariants}
        >
          <span className='lg:mr-4 text-gray-300'>I'm a</span>
          <motion.div
            className='relative overflow-hidden'
            whileHover={{ scale: 1.05 }}
            style={{ minWidth: '400px' }}
          >
            <motion.span
              className='font-semibold font-mono tracking-wider text-white'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
              <motion.span
                className='inline-block w-fit h-8 bg-blue-400 ml-1'
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.p
          className='text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-inter'
          variants={itemVariants}
        >
          I have <span className='text-blue-400 font-semibold'>3+ years</span> of experience as a coding enthusiast and 
          <span className='text-purple-400 font-semibold'> 2+ years</span> as a full stack developer, 
          specializing in <span className='text-cyan-400 font-semibold'>React</span> and modern JavaScript frameworks.
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row gap-6 justify-center items-center'
          variants={itemVariants}
        >
          <motion.button
            className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('project')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className='px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Start
