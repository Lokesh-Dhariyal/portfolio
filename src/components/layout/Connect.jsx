import { motion } from "framer-motion";

function Connect() {
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/lokesh-dhariyal",
      img: "https://skillicons.dev/icons?i=linkedin",
      alt: "LinkedIn",
    },
    {
      link: "https://github.com/lokesh-dhariyal",
      img: "https://skillicons.dev/icons?i=github",
      alt: "GitHub",
    },
    {
      link: "https://x.com/lokesh_dhariyal",
      img: "img/icons8-x-logo-50.png",
      alt: "X (Twitter)",
      bg: "bg-white rounded-md lg:rounded-2xl",
    },
    {
      link: "https://www.instagram.com/lokesh_dhariyal",
      img: "https://skillicons.dev/icons?i=instagram",
      alt: "Instagram",
    },
  ];

  return (
    <motion.div
      className='lg:w-1/2 h-16 lg:h-35 flex mx-auto'
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
    >
      <motion.div
        className='border-2 border-blue-900 bg-[#101420] text-[#c4c4c4] rounded-3xl text-center font-mono text-xl lg:text-3xl pt-1 lg:pt-4 mx-5 w-1/3 h-8/12 lg:h-1/2 my-auto'
        variants={fadeIn}
      >
        Connect At
      </motion.div>

      <motion.div
        className='lg:mx-5 w-3/6 lg:w-3/5 h-8/12 lg:h-1/2 my-auto flex justify-evenly'
        variants={fadeIn}
      >
        {socialLinks.map((item, idx) => (
          <motion.div
            key={idx}
            className={`aspect-square hover:scale-110 transition-transform duration-300 hover:cursor-pointer ${item.bg || ""}`}
            onClick={() => window.open(item.link, "_blank")}
            whileHover={{ scale: 1 }}
            variants={fadeIn}
          >
            <img src={item.img} alt={item.alt} className="w-full h-full rounded-2xl" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Connect;
