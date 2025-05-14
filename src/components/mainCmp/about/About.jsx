import React from 'react'
import {BoxLayout} from '../../index'

function About() {

  const content1 = 'This project is made using JavaScript and pure CSS, this was a tough project to think and actually implement.'
  const content2 = 'This project is made using JavaScript and pure CSS, this was a great project to learn about api and how to use them.'
  const content3  = 'This project is made using JavaScript and pure CSS, this is a great project to learn about how to use good js.'
  const content4 = 'This project is made using react and Tailwind, i learned about the context api usecase and also react core.'
  const p1link = 'https://rokeshu-project4.vercel.app/'
  const p2link = 'https://rokeshu-project2.vercel.app/'
  const p3link = 'https://rokeshu-project3.vercel.app/'
  const p4link = 'https://lokesh-todo.vercel.app/'
  return (
    <div id='project' className='text-white'>
      <div className='-z-10 inset-0 h-fit w-full 
      bg-[linear-gradient(to_right,#1c398e38_1px,transparent_1px),linear-gradient(to_bottom,#1c398e38_1px,transparent_1px)] 
      bg-[size:20px_20px] overflow-auto'>
          <div className='lg:w-3/4 w-28/29 mx-auto h-fit mt-20'>
          <strong className='lg:ml-20 opacity-20'>#PROJECT</strong>
            <div className='border-3 border-blue-900 bg-[#101420] text-[#c4c4c4] rounded-full w-1/2 lg:w-1/4 h-fit mx-auto text-center font-bold mb-5 font-mono text-2xl '>My Projects</div>
              <div className='lg:grid grid-cols-2 gap-5 '>
    
                <BoxLayout className='relative overflow-auto'
                  link = {p1link}
                  proj = 'img/Pro1.PNG'
                  title = '#Memory Game' 
                  content = {content1}
                  icon1 = 'https://skillicons.dev/icons?i=html'
                  icon2 = 'https://skillicons.dev/icons?i=css'
                  icon3 = 'https://skillicons.dev/icons?i=js'
                  />
                  <BoxLayout className='relative overflow-auto'
                  link = {p2link}
                  proj = 'img/Pro2.PNG'
                  title = '#Quote Generator' 
                  content = {content2}
                  icon1 = 'https://skillicons.dev/icons?i=html'
                  icon2 = 'https://skillicons.dev/icons?i=css'
                  icon3 = 'https://skillicons.dev/icons?i=js'
                  />
                  <BoxLayout className='relative overflow-auto'
                  link = {p3link}
                  proj = 'img/Pro3.PNG'
                  title = '#Password Generator' 
                  content = {content3}
                  icon1 = 'https://skillicons.dev/icons?i=html'
                  icon2 = 'https://skillicons.dev/icons?i=css'
                  icon3 = 'https://skillicons.dev/icons?i=js'
                  />
                  <BoxLayout className='relative overflow-auto'
                  link = {p4link}
                  proj = 'img/Pro4.png'
                  title = '#Todo Manager' 
                  content = {content4}
                  icon1 = 'https://skillicons.dev/icons?i=js'
                  icon2 = 'https://skillicons.dev/icons?i=tailwind'
                  icon3 = 'https://skillicons.dev/icons?i=react'
                  />
              </div>
          </div>
      </div>
    </div>
  )
}

export default About