import { BoxLayout } from '../../index'
import { motion } from 'framer-motion'

function About() {
  const content1 = 'This project is made using JavaScript and pure CSS, this was a tough project to think and actually implement.'
  const content2 = 'This project is made using JavaScript and pure CSS, this was a great project to learn about API.'
  const content3 = 'This project is made using JavaScript and pure CSS, this is a great project to learn about how to use good js.'
  const content4 = 'This project is made using react and Tailwind, i learned about the context api usecase and also react core.'
  const content5 = 'Full Stack project, made using react, axios and tailwind in frontend and mongoose, mongodb, express in backend'
  const content6 = 'Full Stack project make for real time chatting by using webSocket(socket.io), build using MERN stack'
  const p1link = 'https://rokeshu-project4.vercel.app/'
  const p2link = 'https://rokeshu-project2.vercel.app/'
  const p3link = 'https://rokeshu-project3.vercel.app/'
  const p4link = 'https://lokesh-todo.vercel.app/'
  const p5link = 'https://staticgram.vercel.app/'
  const p6link = `https://batuni.vercel.app/`

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut'} },
  }

  return (
    <div id='project' className='text-white h-fit'>
      <div
        className='-z-10 inset-0 h-fit w-full 
        bg-[linear-gradient(to_right,#1c398e38_1px,transparent_1px),linear-gradient(to_bottom,#1c398e38_1px,transparent_1px)] 
        bg-[size:20px_20px] overflow-hidden'
      >
        <motion.div
          className='lg:w-3/4 w-28/29 mx-auto h-fit mt-18 lg:mt-22'
          initial="hidden"
          whileInView="show"
          viewport={{ once: false,amount:0.1}}
          variants={container}
        >
          <strong className='opacity-20'>
            #PROJECT
          </strong>

          <motion.div
            className='border-3 border-blue-900 bg-[#101420] text-[#c4c4c4] rounded-full w-1/2 lg:w-1/4 h-fit mx-auto text-center font-bold mb-5 font-mono text-2xl'
            variants={fadeInUp}
          >
            My Projects
          </motion.div>

          <motion.div className='lg:grid grid-cols-2 gap-5' variants={container}>

            <motion.div variants={fadeInUp}>
              <BoxLayout
                className='relative overflow-auto'
                link={p5link}
                proj='img/Pro5.png'
                title='#Staticgram(Social media)'
                content={content5}
                icon1='https://skillicons.dev/icons?i=react'
                icon2='https://skillicons.dev/icons?i=express'
                icon3='https://skillicons.dev/icons?i=mongodb'
              >
              </BoxLayout>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <BoxLayout
                className='relative overflow-auto'
                link={p6link}
                proj='img/Pro6.png'
                title='#Batuni(Chat App)'
                content={content6}
                icon1='https://skillicons.dev/icons?i=react'
                icon2='https://skillicons.dev/icons?i=express'
                icon3='https://skillicons.dev/icons?i=mongodb'
              >
              </BoxLayout>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <BoxLayout
                className='relative overflow-auto'
                link={p1link}
                proj='img/Pro1.PNG'
                title='#Memory Game'
                content={content1}
                icon1='https://skillicons.dev/icons?i=html'
                icon2='https://skillicons.dev/icons?i=css'
                icon3='https://skillicons.dev/icons?i=js'
              >
              </BoxLayout>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <BoxLayout
                className='relative overflow-auto'
                link={p3link}
                proj='img/Pro3.PNG'
                title='#Password Generator'
                content={content3}
                icon1='https://skillicons.dev/icons?i=html'
                icon2='https://skillicons.dev/icons?i=css'
                icon3='https://skillicons.dev/icons?i=js'
              >
              </BoxLayout>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <BoxLayout
                className='relative overflow-auto'
                link={p4link}
                proj='img/Pro4.png'
                title='#Todo Manager'
                content={content4}
                icon1='https://skillicons.dev/icons?i=js'
                icon2='https://skillicons.dev/icons?i=tailwind'
                icon3='https://skillicons.dev/icons?i=react'
              >
              </BoxLayout>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <BoxLayout
                className='relative overflow-auto'
                link={p2link}
                proj='img/Pro2.PNG'
                title='#Quote Generator'
                content={content2}
                icon1='https://skillicons.dev/icons?i=html'
                icon2='https://skillicons.dev/icons?i=css'
                icon3='https://skillicons.dev/icons?i=js'
              >
              </BoxLayout>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
