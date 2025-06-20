import { motion } from 'framer-motion';
import '../../LaserBox.css';

export default function BoxLayout({ children, className = "", ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: false, amount: 0.3 }}
      className={`relative group w-full mx-auto h-fit my-5 overflow-hidden ${className}`}
      onClick={() => window.open(props.link, '_blank')}
      {...props}
    >
      {/* 🔥 Animated Border */}
      <motion.div
        className="animated-border p-[2px] rounded-3xl"
        whileHover={{ rotate: 0.3 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="relative rounded-[18px] bg-gradient-to-b from-[#101420] to-[#0c0f1a] h-full w-full overflow-hidden">
          {/* Box Content */}
          <motion.div
            className='w-10/11 aspect-video mx-auto my-5 hover:cursor-pointer rounded-xl shadow-xl shadow-[#1c1c1c] overflow-hidden'
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={props.proj}
              alt="project thumbnail"
              className='w-full h-full object-cover duration-500 hover:opacity-85 opacity-75 transition-all'
            />
          </motion.div>

          <motion.strong
            className='ml-9 opacity-80 font-mono'
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {props.title}
          </motion.strong>

          <motion.div
            className='opacity-60 font-mono w-6/7 mx-auto mb-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {props.content}
          </motion.div>

          <motion.div
            className='w-fit mb-3 ml-6 flex gap-0.5'
            whileHover={{ scale: 1.05 }}
          >
            {[props.icon1, props.icon2, props.icon3].map((icon, i) => (
              <motion.div
                key={i}
                className='lg:w-1/3 w-1/4 relative z-10'
                whileHover={{ rotate: i % 2 === 0 ? 3 : -3 }}
              >
                <img
                  src={icon}
                  alt="tech icon"
                  className='rounded-full object-cover w-full h-full transition-transform duration-300'
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
