import { BtnLayout } from '../index'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('start')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'START', id: 'start' },
    { name: 'ABOUT ME', id: 'insight' },
    { name: 'PROJECTS', id: 'project' },
    { name: 'CONTACT', id: 'contact' },
  ]

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  const handleNavClick = (item) => {
    navigate(`#${item.id}`)
    const element = document.getElementById(item.id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

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
      className={`w-full h-18 fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-xl' 
          : 'bg-black/30 backdrop-blur-sm'
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className='flex items-center justify-between h-full px-5 lg:px-20 mx-auto'>
        {/* Logo */}
        <motion.div
          className=" gradient-text blink hover:cursor-pointer font-logo text-4xl lg:text-5xl transition-colors duration-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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

        {/* Nav Items - Desktop */}
        <motion.ul
          className='hidden lg:flex items-center gap-2 lg:gap-4'
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              variants={itemVariants}
              className="relative"
            >
              <motion.button
                className={`px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.id 
                    ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => handleNavClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId={activeSection === item.id ? "activeTab" : undefined}
                />
                
                <span className="relative z-10">{item.name}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
              
            </motion.li>
          ))}
          <motion.a
                  href="https://github.com/Lokesh-Dhariyal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/lokesh-dhariyal"
                  target='_blank'
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-7 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
                      2.24 5 5 5h14c2.76 0 5-2.24 
                      5-5v-14c0-2.76-2.24-5-5-5zm-11 
                      19h-3v-10h3v10zm-1.5-11.27c-.97 
                      0-1.75-.79-1.75-1.75s.78-1.75 
                      1.75-1.75 1.75.79 1.75 
                      1.75-.78 1.75-1.75 
                      1.75zm13.5 11.27h-3v-5.5c0-1.1-.9-2-2-2s-2 
                      .9-2 2v5.5h-3v-10h3v1.4c.59-.86 
                      1.56-1.4 2.5-1.4 1.93 0 3.5 1.57 
                      3.5 3.5v6.5z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="/Lokesh Dhariyal Resume.pdf"
                  download="resume.pdf"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-7 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                  </svg>
                </motion.a>
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white relative z-50"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span 
            className="w-6 h-0.5 bg-current transition-all duration-300"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0
            }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-current transition-all duration-300"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1
            }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-current transition-all duration-300"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0
            }}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`lg:hidden fixed inset-0 z-40 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Content */}
        <motion.div
          className="absolute top-20 right-4 left-4 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            scale: isMobileMenuOpen ? 1 : 0.95,
            y: isMobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="p-6">
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isMobileMenuOpen ? "show" : "hidden"}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    className={`w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 relative overflow-hidden group ${
                      activeSection === item.id 
                        ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => handleNavClick(item)}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
                        layoutId="mobileActiveIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* Social links in mobile menu */}
            <motion.div 
              className="mt-8 pt-6 border-t border-gray-700/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://github.com/Lokesh-Dhariyal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/lokesh-dhariyal"
                  target='_blank'
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-7 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
                      2.24 5 5 5h14c2.76 0 5-2.24 
                      5-5v-14c0-2.76-2.24-5-5-5zm-11 
                      19h-3v-10h3v10zm-1.5-11.27c-.97 
                      0-1.75-.79-1.75-1.75s.78-1.75 
                      1.75-1.75 1.75.79 1.75 
                      1.75-.78 1.75-1.75 
                      1.75zm13.5 11.27h-3v-5.5c0-1.1-.9-2-2-2s-2 
                      .9-2 2v5.5h-3v-10h3v1.4c.59-.86 
                      1.56-1.4 2.5-1.4 1.93 0 3.5 1.57 
                      3.5 3.5v6.5z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="/Lokesh Dhariyal Resume.pdf"
                  download="resume.pdf"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-7 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}

export default Header
