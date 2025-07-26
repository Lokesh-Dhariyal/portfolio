import { motion } from 'framer-motion';
import '../../LaserBox.css';

export default function BoxLayout({ children, className = "", ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 2,
        rotateX: 1,
      }}
      viewport={{ once: false, amount: 0.01 }}
      className={`relative group w-full mx-auto h-fit overflow-hidden cursor-pointer p-1 ${className}`}
      onClick={() => window.open(props.link, '_blank')}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {/* Enhanced Animated Border */}
      <motion.div
        className="animated-border p-[2px] rounded-2xl"
        whileHover={{ rotate: 0.5 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="relative rounded-[14px] bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 h-fit w-full overflow-hidden modern-card">
          
          {/* Project Image */}
          <motion.div
            className='relative w-11/12 aspect-video mx-auto mt-6 rounded-xl overflow-hidden shadow-2xl'
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={props.proj}
              alt="project thumbnail"
              className='w-full h-full object-cover transition-all duration-500 group-hover:scale-97 '
              loading="lazy"
            />
            
          </motion.div>

          {/* Project Title */}
          <motion.h3
            className='ml-6 mt-6 text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 font-jetbrains'
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {props.title}
          </motion.h3>

          {/* Project Description */}
          <motion.p
            className='text-gray-400 font-inter w-11/12 mx-auto mt-3 mb-6 leading-relaxed text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300'
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {props.content}
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            className='flex gap-3 mb-6 ml-6'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {[props.icon1, props.icon2, props.icon3, props.icon4].filter(Boolean).map((icon, i) => (
              <motion.div
                key={i}
                className='w-10 h-10 lg:w-12 lg:h-12 relative group/icon group-hover:scale-95 duration-500 transition-all'
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon}
                  alt="tech icon"
                  className='rounded-lg object-cover w-full h-full border border-gray-700 group-hover/icon:border-blue-500 transition-all duration-300 shadow-lg'
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
        </div>
      </motion.div>

      {/* External link indicator */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-blue-500/30"
        whileHover={{ scale: 1.1 }}
      >
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
