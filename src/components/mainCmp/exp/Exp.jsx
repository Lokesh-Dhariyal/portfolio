import {Experience, SkillLayout} from '../../index'
import { motion } from 'framer-motion'

function Exp() {
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
    <div id='insight' className='text-white w-full h-fit -z-10 inset-0
      bg-[linear-gradient(to_right,#1c398e38_1px,transparent_1px),linear-gradient(to_bottom,#1c398e38_1px,transparent_1px)] 
      bg-[size:20px_20px] overflow-hidden'>
      <motion.div
      className={`w-28/29 lg:w-3/4 h-fit mx-auto pt-18 lg:pt-22`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
    >
      <strong className='opacity-20 text-white'>
        #INSIGHT
      </strong>
      <div className='lg:flex'>
      <SkillLayout className=''/>
      <Experience/>
      </div>
      </motion.div>
    </div>
  )
}

export default Exp