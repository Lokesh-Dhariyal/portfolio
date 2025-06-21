import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  }
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const checkScreen = () => {
        setIsMobile(window.innerWidth < 768) // Adjust for your breakpoint
      }
      checkScreen()
      window.addEventListener('resize', checkScreen)
      return () => window.removeEventListener('resize', checkScreen)
    }, [])
  
    return isMobile
  }
  const isMobile = useIsMobile()

  return (
    <motion.div
      className='w-fit h-fit mx-auto'
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: isMobile ? 0.1 : 0.3}}
      variants={fadeIn}
    >
      <motion.div
        className='border-2 border-blue-900  mx-auto h-fit pb-10 mt-3 lg:mt-10 rounded-3xl'
        variants={fadeIn}
      >
        <motion.div
          className='w-28/29 mx-auto border-2 border-blue-900 bg-[#101420] text-[#c4c4c4] h-15 rounded-full my-5 font-bold text-2xl lg:text-3xl px-4 pt-3'
          variants={fadeIn}
        >
          My Experience
        </motion.div>

        <motion.div
          className='w-28/29 mx-auto h-fit p-3 font-mono text-[#c4c4c4]'
          variants={fadeIn}
        >
          <motion.p className='font-bold text-xl' variants={fadeIn}>
            1. Intermediate Full Stack Developer 🖥️
          </motion.p>
          <motion.p variants={fadeIn}>- Skilled in both frontend and backend development.</motion.p>
          <motion.p variants={fadeIn}>- Comfortable working with REST APIs, MongoDB, Express, React, and Node.js.</motion.p>

          <br />

          <motion.p className='font-bold text-xl' variants={fadeIn}>
            2. Full Stack Projects 🚀
          </motion.p>
          <motion.p variants={fadeIn}>- Built a full-stack social media and chat platform called <strong>Staticgram</strong> and <strong>Batuni</strong>.</motion.p>
          <motion.p variants={fadeIn}>- Implemented JWT authentication, infinite scrolling, user follow system, and real-time chat.</motion.p>
          <motion.p variants={fadeIn}>- Live demo and GitHub repo publicly available.</motion.p>

          <br />

          <motion.p className='font-bold text-xl' variants={fadeIn}>
            3. Currently Learning & Building 🧠
          </motion.p>
          <motion.p variants={fadeIn}>- Deep-diving into advanced MERN stack architecture and microservices.</motion.p>
          <motion.p variants={fadeIn}>- Experimenting with Socket.io, Prisma, WebSockets, and real-time data sync.</motion.p>
          <motion.p variants={fadeIn}>- Learning design systems, state management (Zustand, Redux), and deployment strategies.</motion.p>

          <br />

          <motion.p className='font-bold text-xl' variants={fadeIn}>
            4. Additional Highlights ✨
          </motion.p>
          <motion.p variants={fadeIn}>- Created multiple UI/UX-rich single-page applications using React & Tailwind CSS.</motion.p>
          <motion.p variants={fadeIn}>- Regularly contribute to personal GitHub projects to sharpen problem-solving skills.</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Experience
