import { BoxLayout } from '../../index'
import { motion } from 'framer-motion'

function About() {
  const projects = [
    {
      title: '#Healing Tap(Health App)',
      content: 'A full-stack health application built with React, Express, and MongoDB. Appointment Booking, Doctor and Patient Dashboard, AI Report Generator and more.',
      proj: 'img/Pro7.png',
      link: 'https://healingtap.vercel.app/',
      icons: [
        'https://skillicons.dev/icons?i=mongodb',
        'https://skillicons.dev/icons?i=express',
        'https://skillicons.dev/icons?i=react',
        'https://skillicons.dev/icons?i=nodejs',
      ],
      featured: true
    },
    {
      title: '#Staticgram (Social Media)',
      content: 'A full-stack social media platform built with React, Express, and MongoDB. Features include user authentication, post creation, likes, comments, and more.',
      proj: 'img/Pro5.png',
      link: 'https://staticgram.vercel.app/',
      icons: [
        'https://skillicons.dev/icons?i=mongodb',
        'https://skillicons.dev/icons?i=express',
        'https://skillicons.dev/icons?i=react',
        'https://skillicons.dev/icons?i=nodejs'
      ],
      featured: true
    },
    {
      title: '#Batuni (Chat App)',
      content: 'Real-time chat application using WebSocket (Socket.io) technology. Built with MERN stack for seamless communication experience.',
      proj: 'img/Pro6.png',
      link: 'https://batuni.vercel.app/',
      icons: [
        'https://skillicons.dev/icons?i=react',
        'https://skillicons.dev/icons?i=express',
        'https://skillicons.dev/icons?i=mongodb'
      ],
    },
    {
      title: '#Memory Game',
      content: 'Interactive memory game built with vanilla JavaScript and CSS. Features beautiful animations and progressive difficulty levels.',
      proj: 'img/Pro1.PNG',
      link: 'https://rokeshu-project4.vercel.app/',
      icons: [
        'https://skillicons.dev/icons?i=html',
        'https://skillicons.dev/icons?i=css',
        'https://skillicons.dev/icons?i=js'
      ]
    },
    {
      title: '#Password Generator',
      content: 'Secure password generator with customizable options. Built with vanilla JavaScript focusing on security.',
      proj: 'img/Pro3.PNG',
      link: 'https://rokeshu-project3.vercel.app/',
      icons: [
        'https://skillicons.dev/icons?i=html',
        'https://skillicons.dev/icons?i=css',
        'https://skillicons.dev/icons?i=js'
      ]
    },
    {
      title: '#Todo Manager',
      content: 'Feature-rich todo application built with React and Tailwind CSS. Demonstrates context API usage and modern React patterns.',
      proj: 'img/Pro4.png',
      link: 'https://lokesh-todo.vercel.app/',
      icons: [
        'https://skillicons.dev/icons?i=react',
        'https://skillicons.dev/icons?i=tailwind',
        'https://skillicons.dev/icons?i=js'
      ]
    },
    {
      title: '#Quote Generator',
      content: 'Dynamic quote generator with API integration. Built with JavaScript showcasing clean code architecture and API handling.',
      proj: 'img/Pro2.PNG',
      link: 'https://rokeshu-project2.vercel.app/',
      icons: [
        'https://skillicons.dev/icons?i=html',
        'https://skillicons.dev/icons?i=css',
        'https://skillicons.dev/icons?i=js'
      ]
    }
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut'
      } 
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='project' className='relative text-white pt-22 overflow-hidden'>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>

      <motion.div
        className='max-w-7xl mx-auto px-4 lg:px-8 relative z-10'
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        variants={container}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-7" variants={fadeInUp}>
          <motion.div 
            className='text-sm font-jetbrains tracking-widest text-blue-400/60 mb-4'
            variants={titleVariants}
          >
            #PROJECTS
          </motion.div>
          
          <motion.h2 
            className='text-4xl lg:text-6xl font-bold mb-6 gradient-text'
            variants={titleVariants}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className='text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed'
            variants={fadeInUp}
          >
            Here are some of my recent projects showcasing my skills in full-stack development, 
            from Healing Tap to interactive web applications.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div className="mb-7" variants={container}>
          <motion.h3 
            className="text-2xl font-bold mb-2 text-center text-blue-400"
            variants={fadeInUp}
          >
            🌟 Featured Work
          </motion.h3>
          
          <div className='grid h-fit lg:grid-cols-2 gap-5 lg:gap-10 mt-5'>
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <BoxLayout
                  className='hover-lift'
                  link={project.link}
                  proj={project.proj}
                  title={project.title}
                  content={project.content}
                  icon1={project.icons[0]}
                  icon2={project.icons[1]}
                  icon3={project.icons[2]}
                  icon4={project.icons[3]? project.icons[3] : null}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div variants={container}>
          <motion.h3 
            className="text-2xl font-bold text-center text-purple-400"
            variants={fadeInUp}
          >
            💼 All Projects
          </motion.h3>
          
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <BoxLayout
                  className='hover-lift'
                  link={project.link}
                  proj={project.proj}
                  title={project.title}
                  content={project.content}
                  icon1={project.icons[0]}
                  icon2={project.icons[1]}
                  icon3={project.icons[2]}
                  icon4={project.icons[3]? project.icons[3] : null}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-5"

        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://github.com/Lokesh-Dhariyal', '_blank')}
          >
            View More on GitHub
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
