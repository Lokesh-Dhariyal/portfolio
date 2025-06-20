import { BtnLayout } from '../index'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Header() {
  const navItems = [
    { name: 'START', id: 'start' },
    { name: 'PROJECT', id: 'project' },
    { name: 'INSIGHT', id: 'insight' },
    { name: 'CONTACT', id: 'contact' },
  ]

  const navigate = useNavigate()

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
  }

  return (
    <motion.header
      className='w-full lg:h-22 pt-3 lg:pt-0 fixed backdrop-blur-md bg-black/50 z-50'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className='flex h-16'>
        {/* Logo */}
        <motion.div
          className="mr-1 lg:mt-2 lg:mx-4 text-blue-900 blink lg:px-5 h-fit hover:cursor-pointer font-logo text-5xl pt-1 lg:pt-3 z-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => {
            navigate('/')
            const ele = document.getElementById('start')
            if (ele) {
              ele.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          LD
        </motion.div>

        {/* Nav Items */}
        <motion.ul
          className='flex w-7/8 lg:w-full lg:absolute lg:justify-center lg:mx-auto gap-0.5 lg:gap-0'
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className='w-1/4 lg:w-2/13 lg:flex lg:justify-center'
              variants={itemVariants}
            >
              <BtnLayout
                onClick={() => {
                  navigate(`#${item.id}`)
                  const element = document.getElementById(item.id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className='lg:font-medium w-full'
              >
                {item.name}
              </BtnLayout>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  )
}

export default Header
