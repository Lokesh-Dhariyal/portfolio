import {Connect,ContactMe} from '../../index'

function Contact() {
  return (
    <div id='contact' className='text-white w-full h-233 lg:h-fit -z-10 inset-0
      bg-[linear-gradient(to_right,#1c398e38_1px,transparent_1px),linear-gradient(to_bottom,#1c398e38_1px,transparent_1px)] 
      bg-[size:20px_20px] overflow-auto'>
      <div className='w-28/29 lg:w-3/4 mx-auto mt-18 lg:mt-22 lg:h-2/3'>
          <strong className=' opacity-20 text-white'>#CONTACT</strong>
          <ContactMe/>
      </div>
        <Connect/>
        <div className='w-full lg:w-1/3 h-10 lg:mx-auto lg:pt-1 font-mono text-center text-[#c4c4c4] text-xs lg:text-lg opacity-60'>
            Ⓒ 2025 Lokesh Dhariyal. All rights reserved.
        </div>
    </div>
  )
}

export default Contact