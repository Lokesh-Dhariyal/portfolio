import { useState } from 'react'

function SkillLayout({
  className=''
}) {

  const [skill,setSkill] = useState('EXPANGDING LIBRARY');

  //bg-[#242938]
  return (
    <div className={`w-28/29 lg:w-3/4 h-fit mx-auto pt-18 lg:pt-22 ${className} `}>
      <strong className=' opacity-20 text-white'>#INSIGHT</strong>

      <div className=' bg-[#101420] border-2 border-blue-900 text-2xl text-center lg:text-3xl w-full lg:w-1/2 h-fit mx-auto rounded-3xl px-3 lg:px-17 py-2 font-bold font-mono text-[#c4c4c4] opacity-95'>
        Solving real problems with 
        <br></br>
        <div className='font-azeeb text-center text-xl lg:text-2xl mt-1'> {skill}</div> 
      </div>

      <div className='flex lg:w-3/4 h-fit flex-wrap mx-auto mt-10 justify-center-safe gap-2 lg:gap-3' >

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('REACT'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('REACT'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=react" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('JAVASCRIPT'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('JAVASCRIPT'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=js" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('TAILWIND'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('TAILWIND'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=tailwind" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('GIT'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('GIT'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=git" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('MONGODB'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('MONGODB'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=mongodb" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('C++'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('C++'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=cpp" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('GITHUB'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('GITHUB'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=github" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('NEXT.JS'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('NEXT.JS'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=nextjs" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('VSCODE'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('VSCODE'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=vscode" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('NODE.JS'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('NODE.JS'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=nodejs" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('EXPRESS'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('EXPRESS'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=express" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div>

        {/* <div className='border-2 border-blue-900 w-1/4 h-18 lg:h-22 rounded-3xl bg-[#101420]'
          onClick={()=>setTimeout(() => setSkill('EXPRESS'), 200)}
          onMouseEnter={()=>setTimeout(() => setSkill('EXPRESS'), 200)}
          onMouseLeave={()=>setTimeout(() => setSkill('EXPENDING LIBRARY'), 200)}>
          <img src="https://skillicons.dev/icons?i=axios" alt="some-img" className='w-full h-full p-2 lg:p-1'/>
        </div> */}
      </div>
    </div>
  )
}

export default SkillLayout