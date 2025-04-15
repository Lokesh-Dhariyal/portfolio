import React,{useState} from 'react'
import { toast } from 'sonner'
import { validate } from 'react-email-validator'
import ContactBtn from './ContactBtn'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function ContactMe() {
  
    const [email, setEmail] = useState("");
    const form = useRef();

     const sendEmail = (e) => {
      e.preventDefault();

    const messageField = form.current.message.value;
    if (!validate(email)) {
      toast.error("Please provide a valid email address", {
        position: "top-center",
        duration: 4000,
      });
      return;
    }
    if (messageField.trim() === "") {
      toast.error("Message field cannot be empty", {
        position: "top-center",
        duration: 4000,
      });
      return;
    }

        emailjs.sendForm("service_zqr0nn9","template_cvwfdei",form.current,{
          publicKey: "RXK_CB5VdrChW5f0J"
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            duration: 4000,
          });
          form.current.reset();
          setEmail("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error(`Error: ${error.text || "Failed to send message"}`, {
          position: "top-center",
          duration: 4000,
       });
}
      );
  };

  return (
    <div className='lg:w-5/6 mx-auto mt-1 h-fit'>
        <div className='border-2 w-1/2 lg:w-1/3 ml-4 h-10 rounded-full border-blue-900 bg-[#101420] text-[#c4c4c4] pl-5 font-mono'>
            <strong className='text-2xl lg:text-3xl font-mono'>Contact Me</strong>
        </div>
        <div className='border-2 border-blue-900 w-28/29 mx-auto mt-2 h-fit pt-10 px-5 rounded-2xl'>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name" className='mx-2 text-2xl font-mono' >Name :</label><br />
                <input name ='user_name' type="text" id='name' placeholder='name' className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 text-2xl font-mono rounded-xl lg:w-1/2'/><br />

                <label htmlFor="email" className='mx-2 text-2xl font-mono'>Email :</label><br />
                <input  onChange={(e)=>setEmail(e.target.value)}  name='user_email' type="email" id='email' placeholder='email' className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 text-2xl font-mono rounded-xl lg:w-1/2'/><br />

                <label htmlFor="message" className='mx-2 text-2xl font-mono' >Message :</label><br />
                <input name='message' type="text" id='message' placeholder='type something...' className='border-blue-900 bg-[#101420] text-[#c4c4c4] mx-2 mb-5 p-2 text-2xl font-mono rounded-xl lg:w-1/2 h-fit'/><br />

                <ContactBtn type='submit' onClick={(e)=>sendEmail(e)}/>
            </form>
        </div>
    </div>
  )
}

export default ContactMe