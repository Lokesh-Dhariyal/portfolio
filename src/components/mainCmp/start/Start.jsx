import React, { useEffect } from 'react'
import { useState } from 'react'
import TextTransition,{presets} from 'react-text-transition'

function Start() {

  const dev = ['FULLSTACK   DEVELOPER','FRONTEND   DEVELOPER','BACKEND   DEVELOPER','ENGINEER']
  const [change,setChange] = useState(0)

  useEffect(()=>{
    const intervalID = setInterval(()=>{
      setChange((i)=>i+1)
    },3000);
    return ()=>clearInterval(intervalID);
  },[])

  return (
    <div id='start' className='text-white w-10/11 h-215 lg:w-3/4 lg:h-dvh pt-30 lg:pt-60 mx-auto'>
      <strong className=' opacity-20'>#START</strong>
      <span className='flex flex-wrap'>
        <strong className='lg:font-myxl text-6xl mb-13 w-full'>Hey, My name is<span className='text-blue-950'> Lokesh Dhariyal.</span> </strong>
        <div className='lg:text-4xl text-2xl mb-7 w-full flex'>I am a  <TextTransition springConfig={presets.wobbly} className='font-azeeb text-blue-100 mx-2'>{dev[change%dev.length]}</TextTransition></div>
        <span className='font-light text-xl w-full opacity-40 text-blue-200'>
          I have 2+ years of experience as a coding enthusiast and 1+ years as a full stack developer working
          mostly with react and other js frameworks.
          </span>
      </span>
    </div>
  )
}

export default Start