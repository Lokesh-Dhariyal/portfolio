import React from 'react'
import { useState } from 'react'

function SkillLayout({
  className=''
}) {

  const [skill,setSkill] = useState('EXPANGDING LIBRARY');

  //bg-[#242938]
  return (
    <div className={`w-28/29 lg:w-3/4 h-fit mx-auto pt-20 ${className} `}>
      <strong className='lg:ml-20 opacity-20 text-white'>#INSIGHT</strong>

      <div className=' bg-[#101420] border-2 border-blue-900 text-xl lg:text-2xl w-4/5 lg:w-1/2 h-20 mx-auto rounded-3xl px-3 lg:px-17 py-2 font-bold font-mono text-[#c4c4c4] opacity-95'>
        Solving real problems with
        <span className='font-azeeb'> {skill}</span> 
      </div>

      <div className='flex lg:w-3/4 h-fit flex-wrap mx-auto mt-10 justify-center-safe' >

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('REACT'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('REACT'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=react" alt="" className='w-full h-full p-2'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('JAVASCRIPT'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('JAVASCRIPT'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=js" alt="" className='w-full h-full p-2'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('TAILWIND'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('TAILWIND'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=tailwind" alt="" className='w-full h-full p-2'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('GIT'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('GIT'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=git" alt="" className='w-full h-full p-2'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('C++'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('C++'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=cpp" alt="" className='w-full h-full p-2'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('GITHUB'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('GITHUB'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=github" alt="" className='w-full h-full p-2'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('NEXT.JS'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('NEXT.JS'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=nextjs" alt="" className='w-full h-full p-2'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-20 rounded-3xl m-2 bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('VSCODE'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('VSCODE'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=vscode" alt="" className='w-full h-full p-2'/>
        </div>
      </div>
    </div>
  )
}

export default SkillLayout