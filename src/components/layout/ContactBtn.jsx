function ContactBtn({
  ...props
}) {
  return (
    <button  className='bg-blue-500 w-40 h-12 rounded-xl text-2xl text-center font-mono mx-2 mb-10 mt-5 hover:cursor-pointer
    hover:shadow-xs shadow-[#3ea1db]'{...props} >Contact Me</button>
  )
}

export default ContactBtn