import React from 'react'
import ContactBtn from './ContactBtn'
function ContactMe() {
  return (
    <div className='lg:w-5/6 mx-auto mt-1 h-fit'>
        <div className='border-2 w-1/2 lg:w-1/3 ml-4 h-10 rounded-full border-blue-900 bg-[#101420] text-[#c4c4c4] pl-5 font-mono'>
            <strong className='text-2xl lg:text-3xl font-mono'>Contact Me</strong>
        </div>
        <div className='border-2 border-blue-900 w-28/29 mx-auto mt-2 h-fit py-10 px-5 rounded-2xl'>
            <form action="">
                <label htmlFor="name" className='mx-2 text-2xl font-mono'>Name :</label><br />
                <input type="text" id='name' placeholder='name' className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 text-2xl font-mono rounded-xl lg:w-1/2'/><br />

                <label htmlFor="email" className='mx-2 text-2xl font-mono'>Email :</label><br />
                <input type="email" id='email' placeholder='email' className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 text-2xl font-mono rounded-xl lg:w-1/2'/><br />

                <ContactBtn/>
            </form>
        </div>
    </div>
  )
}

export default ContactMe