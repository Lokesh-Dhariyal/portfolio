import {Connect, ContactMe} from '../../index'
import { motion } from 'framer-motion'

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  }

  return (
    <section id='contact' className='relative text-white py-22 overflow-hidden'>
      {/* Enhanced Background */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-52 h-52 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>

      <motion.div
        className='max-w-7xl mx-auto px-4 lg:px-8 relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-7" variants={itemVariants}>
          <motion.div 
            className='text-sm font-jetbrains tracking-widest text-cyan-400/60 mb-4'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            #GET_IN_TOUCH
          </motion.div>
          
          <motion.h2 
            className='text-4xl lg:text-6xl font-bold mb-6 gradient-text'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.p 
            className='text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed'
            variants={itemVariants}
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life.
            I'm always excited to work on new challenges.
          </motion.p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div variants={itemVariants}>
          <ContactMe />
        </motion.div>

        {/* Social Links Section */}
        <motion.div className="" variants={itemVariants}>
          <Connect />
        </motion.div>

        {/* Footer */}
        <motion.div 
          className='pt-4 border-t border-gray-700/50 text-center'
          variants={itemVariants}
        >
          <motion.div 
            className='font-inter text-gray-400 text-sm lg:text-base opacity-60 hover:opacity-80 transition-opacity duration-300'
            whileHover={{ scale: 1.02 }}
          >
            <span className='block lg:inline'>Ⓒ 2025 Lokesh Dhariyal. </span>
            <span className='block lg:inline'>All rights reserved.</span>
          </motion.div>
          
          {/* Additional footer links */}
          <motion.div 
            className='flex justify-center gap-6 mt-4 text-sm text-gray-500'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="#start" 
              className='hover:text-blue-400 transition-colors duration-300'
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Back to Top
            </motion.a>
            <span>•</span>
            <motion.a 
              href="https://github.com/Lokesh-Dhariyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:text-blue-400 transition-colors duration-300'
              whileHover={{ y: -2 }}
            >
              GitHub
            </motion.a>
            <span>•</span>
            <motion.a 
              href="mailto:lokeshdhariyal@gmail.com" 
              className='hover:text-blue-400 transition-colors duration-300'
              whileHover={{ y: -2 }}
            >
              Email
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
