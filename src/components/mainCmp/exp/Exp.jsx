import {Experience, SkillLayout} from '../../index'
import { motion } from 'framer-motion'

function Exp() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id='insight' className='relative text-white pt-22 overflow-hidden'>
      {/* Enhanced Background */}
      <div className="absolute inset-0 grid-pattern opacity-60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>

      <motion.div
        className={`max-w-7xl mx-auto px-4 lg:px-8 relative z-10`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        variants={fadeIn}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeIn}>
          <motion.div 
            className='text-sm font-jetbrains tracking-widest text-purple-400/60 mb-4'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            #SKILLS_&_EXPERIENCE
          </motion.div>
          
          <motion.h2 
            className='text-4xl lg:text-6xl font-bold mb-3 gradient-text'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Expertise & Journey
          </motion.h2>
          
          <motion.p 
            className='text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed'
            variants={fadeIn}
          >
            My technical skills and professional experience in building modern web applications.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className='grid lg:grid-cols-2 gap-5 items-start'
          variants={fadeIn}
        >
          {/* Skills Section */}
          <motion.div variants={fadeIn}>
            <SkillLayout />
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={fadeIn}>
            <Experience />
          </motion.div>
        </motion.div>

        {/* Additional Stats Section */}
        <motion.div 
          className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 mb-5'
          variants={fadeIn}
        >
          {[
            { number: '7+', label: 'Projects Completed' },
            { number: '14+', label: 'Technologies' },
            { number: '2+', label: 'Years Experience' },
            { number: '∞', label: 'Learning Continues' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className='modern-card p-6 text-center group hover:scale-105 transition-transform duration-300'
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className='text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300'>
                {stat.number}
              </div>
              <div className='text-sm text-gray-400 font-inter'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Exp