import { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import { motion } from 'framer-motion'

function Start() {
  const dev = ['FULLSTACK DEVELOPER', 'PROGRAMMER', 'WEB DEVELOPER', 'ENGINEER']
  const [change, setChange] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setChange((i) => i + 1)
    }, 3000)
    return () => clearInterval(intervalID)
  },[])

  return (
    <motion.div
      id='start'
      className="text-white w-10/11 min-h-screen lg:w-3/4 pt-45 lg:pt-65 mx-auto"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.strong
        className='opacity-20 block'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1 }}
      >
        #START
      </motion.strong>

      <motion.div
        className='flex flex-wrap'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.strong
            className='lg:font-myxl text-6xl mb-13 w-full'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Hey, My name is{' '}
            <span className='text-blue-950 drop-shadow-[0_0_1px_#2563eb]'>
              Lokesh Dhariyal.
            </span>
          </motion.strong>


        <motion.div
          className='lg:text-4xl text-2xl mb-7 flex items-center h-10'
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          I am a
          <span className='ml-2 inline-block pt-4 pb-3 w-fit pr-5 overflow-hidden'>
            <TextTransition
              springConfig={presets.molasses}
              direction='down'
              inline
              className='text-xl lg:text-3xl pr-5 font-azeeb text-blue-100'
            >
              {dev[change % dev.length]}
            </TextTransition>
          </span>
        </motion.div>

        <motion.span
          className='font-light text-xl w-full opacity-40 text-blue-100'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.6 }}
        >
          I have 3+ years of experience as a coding enthusiast and 2+ years as a
          full stack developer working mostly with React and other JS frameworks.
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default Start
