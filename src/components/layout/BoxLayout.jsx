import React from 'react'

function BoxLayout({
    children,
    className="",
    ...props
}) {
  return (
    <div className={`border-2 border-blue-900 w-full mx-auto h-fit my-5 rounded-3xl overflow-hidden  ${className}`} onClick={()=>window.open(props.link,'_blank')} {...props}>

      <div className='w-5/6 h-85 mx-auto my-5 rounded-2xl hover:cursor-pointer shadow-xl shadow-[#1c1c1c]'>
                            <img src={props.proj} alt="" className='object-fill w-full h-full rounded-2xl duration-500 hover:opacity-85 opacity-75'/>
                        </div>
                        <strong className='ml-9 opacity-80 font-mono'>{props.title}</strong>
      
                        <div className='opacity-60 font-mono w-6/7 mx-auto mb-5'>{props.content}</div>
      
      
                        <div className='w-1/5 aspect-square ml-10 relative'>
                          <div className='rounded-full absolute w-3/7 h-3/7 left-2'>
                            <img src={props.icon1} alt="img" className='object-cover w-full h-full'/>
                          </div>
                          <div className='rounded-full z-1 absolute w-3/7 h-3/7 left-9'>
                            <img src={props.icon2} alt="img" className='object-cover w-full h-full'/>
                          </div>
                          <div className='rounded-full z-2 absolute w-3/7 h-3/7 left-16'>
                            <img src={props.icon3} alt="img" className='object-cover w-full h-full'/>
                          </div>
                        </div>
    </div>
  )
}
// How can i edit this html when i call it on some other file..??
export default BoxLayout