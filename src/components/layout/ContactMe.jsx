import { useState, useRef } from 'react'
import { toast } from 'sonner'
import { validate } from 'react-email-validator'
import ContactBtn from './ContactBtn'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

function ContactMe() {
  const [email, setEmail] = useState("")
  const form = useRef()
  const btnref = useRef(null)

  const gayab = () => {
    btnref.current.disabled = true
    setTimeout(() => {
      btnref.current.disabled = false
    }, 5000)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    const messageField = form.current.message.value
    if (!validate(email)) {
      toast.error('Please provide a valid email address (wait 5sec)', {
        position: "top-center",
        duration: 4000,
      })
      return
    }

    if (messageField.trim() === "") {
      toast.promise("Message field cannot be empty (wait 5sec)", {
        position: "top-center",
        duration: 4000,
      })
      return
    }

    emailjs.sendForm(
      "service_zqr0nn9",
      "template_cvwfdei",
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => {
        btnref.current.innerText = "Sending..."
        setTimeout(() => {
          btnref.current.innerText = "Contact Me"
        }, 2000)

        const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))
        toast.promise(promise, {
          loading: 'Loading...',
          position: 'top-center',
          success: () => 'Email Sent',
          error: 'Error',
        })

        form.current.reset()
        setEmail("")
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        toast.error(`Error: ${error.text || "Failed to send message (wait 5sec)"}`, {
          position: "top-center",
          duration: 4000,
        })
      })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      className='lg:w-5/6 mx-auto h-fit'
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
    >
      <motion.div
        className='border-2 border-blue-900 w-28/29 mx-auto h-fit pt-10 px-5 backdrop-blur-xl rounded-2xl'
        variants={fadeIn}
      >
        <form ref={form} onSubmit={sendEmail}>
          <motion.label
            htmlFor="name"
            className='mx-2 lg:text-2xl font-mono'
            variants={fadeIn}
          >Name :</motion.label><br />
          <motion.input
            name='user_name'
            type="text"
            id='name'
            placeholder='name'
            className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 lg:text-2xl font-mono rounded-xl w-10/11 lg:w-1/2'
            variants={fadeIn}
          /><br />

          <motion.label
            htmlFor="email"
            className='mx-2 lg:text-2xl font-mono'
            variants={fadeIn}
          >Email :</motion.label><br />
          <motion.input
            onChange={(e) => setEmail(e.target.value)}
            name='user_email'
            type="email"
            id='email'
            placeholder='email'
            className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 lg:text-2xl font-mono rounded-xl lg:w-1/2'
            variants={fadeIn}
          /><br />

          <motion.label
            htmlFor="message"
            className='mx-2 lg:text-2xl font-mono'
            variants={fadeIn}
          >Message :</motion.label><br />
          <motion.input
            name='message'
            type="text"
            id='message'
            placeholder='type something...'
            className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 lg:text-2xl font-mono rounded-xl w-10/11 lg:w-1/2 h-fit'
            variants={fadeIn}
          /><br />

          <motion.div variants={fadeIn}>
            <ContactBtn ref={btnref} type='submit' onClick={(e) => {
              gayab()
              sendEmail(e)
            }} />
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default ContactMe
