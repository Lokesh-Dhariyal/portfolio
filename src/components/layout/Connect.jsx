import React from 'react'
function Connect() {

  return (
    <div className='lg:w-1/2 h-30 lg:h-35 flex mx-auto'>
        <div className='border-2 border-blue-900 bg-[#101420] text-[#c4c4c4] rounded-3xl text-center font-mono text-xl lg:text-3xl pt-1 lg:pt-4 mx-5 w-1/3 h-1/3 lg:h-1/2 my-auto'>Connect At</div>
        <div className='lg:mx-5 w-3/6 lg:w-3/5 h-1/3 lg:h-1/2 my-auto flex justify-evenly' >
            <div className='aspect-square gap-2 hover:cursor-pointer' onClick={
                ()=>window.open('https://www.linkedin.com/in/lokesh-dhariyal','_blank')
            }>
                <img src="https://skillicons.dev/icons?i=linkedin" alt="img" className='w-full h-full'/>
            </div>
            <div className='aspect-square gap-2 hover:cursor-pointer' onClick={
                ()=>window.open('https://github.com/lokesh-dhariyal','_blank')
            }>
                <img src="https://skillicons.dev/icons?i=github" alt="img" className='w-full h-full'/>
            </div>
            <div className='aspect-square gap-2 hover:cursor-pointer bg-white rounded-md lg:rounded-2xl' onClick={
                ()=>window.open('','_blank')
            }>
                <img src="img\icons8-x-logo-50.png" alt="img" className=' w-full h-full rounded-2xl'/>
            </div>
            <div className='aspect-square gap-2 hover:cursor-pointer' onClick={
                ()=>window.open('https://www.instagram.com/lokesh_dhariyal','_blank')
            }>
                <img src="https://skillicons.dev/icons?i=instagram" alt="img" className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Connect