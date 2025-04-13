import React from 'react'
import {BoxLayout} from '../../index'

function About() {

  return (
    <div id='about' className='text-white'>
      <div className='-z-10 inset-0 h-fit w-full 
      bg-[linear-gradient(to_right,#1c398e38_1px,transparent_1px),linear-gradient(to_bottom,#1c398e38_1px,transparent_1px)] 
      bg-[size:20px_20px] overflow-auto'>
          <div className='lg:w-3/4 w-28/29 mx-auto h-fit mt-20'>
          <strong className='lg:ml-20 opacity-20'>#ABOUT</strong>
            <div className='border-3 border-blue-900 bg-[#101420] text-[#c4c4c4] rounded-full w-1/2 lg:w-1/4 h-fit mx-auto text-center font-bold mb-5 font-mono text-2xl '>My Projects</div>
              <div className='lg:grid grid-cols-2 gap-5 '>
    
                <BoxLayout className='relative overflow-auto' onClick={()=>window.open('https://rokeshu-project4.vercel.app/','_blank')}>
                  <strong className='ml-5 opacity-80 font-mono'>#Memory Game</strong>

                  <div className='w-5/6 h-85 mx-auto my-5 rounded-2xl hover:cursor-pointer shadow-xl shadow-[#1c1c1c]'>
                      <img src="img\Pro1.PNG" alt="" className='object-fill w-full h-full rounded-2xl duration-500 hover:opacity-85 opacity-75'/>
                  </div>

                  <div className='opacity-60 font-mono w-6/7 mx-auto mb-5'>#This project is made using JavaScript and pure CSS, this was a tough project to think
                  and actually implement.</div>


                  <div className='w-1/5 aspect-square ml-10 relative'>
                    <div className='rounded-full absolute w-3/7 h-3/7 left-2'>
                      <img src='https://skillicons.dev/icons?i=html' alt="img" className='object-cover w-full h-full'/>
                    </div>
                    <div className='rounded-full z-1 absolute w-3/7 h-3/7 left-9'>
                      <img src="https://skillicons.dev/icons?i=css" alt="img" className='object-cover w-full h-full'/>
                    </div>
                    <div className='rounded-full z-2 absolute w-3/7 h-3/7 left-16'>
                      <img src="https://skillicons.dev/icons?i=js" alt="img" className='object-cover w-full h-full'/>
                    </div>
                  </div>

                </BoxLayout>

                <BoxLayout onClick={()=>window.open('https://rokeshu-project2.vercel.app/','_blank')}>
                  <strong className='ml-5 opacity-80 font-mono'>#Quote Generator</strong>

                  <div className='w-5/6 h-85 mx-auto my-5 rounded-2xl hover:cursor-pointer shadow-xl shadow-[#1c1c1c]'>
                   <img src="img\Pro2.PNG" alt="" className='object-fill w-full h-full rounded-2xl duration-500 hover:opacity-85 opacity-75'/>
                  </div>

                  <div className='opacity-60 font-mono w-6/7 mx-auto mb-5'>#This project is made using JavaScript and pure CSS, this was a great project to learn about 
                  api and how to use them.</div>


                  <div className='w-1/5 aspect-square ml-10 relative'>
                    <div className='rounded-full absolute w-3/7 h-3/7 left-2'>
                      <img src='https://skillicons.dev/icons?i=html' alt="img" className='object-cover w-full h-full'/>
                    </div>
                    <div className='rounded-full z-1 absolute w-3/7 h-3/7 left-9'>
                      <img src="https://skillicons.dev/icons?i=css" alt="img" className='object-cover w-full h-full'/>
                    </div>
                    <div className='rounded-full z-2 absolute w-3/7 h-3/7 left-16'>
                      <img src="https://skillicons.dev/icons?i=js" alt="img" className='object-cover w-full h-full'/>
                    </div>
                  </div>

                </BoxLayout>

                <BoxLayout onClick={()=>window.open('https://rokeshu-project3.vercel.app/','_blank')}>
                  <strong className='ml-5 opacity-80 font-mono'>#Password Generator</strong>

                  <div className='w-5/6 h-85 mx-auto my-5 rounded-2xl hover:cursor-pointer shadow-xl shadow-[#1c1c1c]'>
                    <img src="img\Pro3.PNG" alt="" className='object-fill w-full h-full rounded-2xl duration-500 hover:opacity-85 opacity-75'/>
                  </div>

                  <div className='opacity-60 font-mono w-6/7 mx-auto mb-5'>#This project is made using JavaScript and pure CSS, this is
                  a great project to learn about how to use good js.</div>


                  <div className='w-1/5 aspect-square ml-10 relative'>
                    <div className='rounded-full absolute w-3/7 h-3/7 left-2'>
                      <img src='https://skillicons.dev/icons?i=html' alt="img" className='object-cover w-full h-full '/>
                    </div>
                    <div className='rounded-full z-1 absolute w-3/7 h-3/7 left-9'>
                      <img src="https://skillicons.dev/icons?i=css" alt="img" className='object-cover w-full h-full '/>
                    </div>
                    <div className='rounded-full z-2 absolute w-3/7 h-3/7 left-16'>
                      <img src="https://skillicons.dev/icons?i=js" alt="img" className='object-cover w-full h-full '/>
                    </div>
                  </div>
                  
                </BoxLayout>

              </div>
          </div>
      </div>
    </div>
  )
}

export default About