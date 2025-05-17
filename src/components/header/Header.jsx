import {BtnLayout} from '../index'
import { useNavigate } from 'react-router-dom'
function Header() {

    const navItems =[
        {
            name : 'START',
            id:'start'
        },
        {
            name : 'PROJECT',
            id:'project'
        },
        {
            name : 'INSIGHT',
            id:'insight'
        },
        {
            name : 'CONTACT',
            id:'contact'
        },
        
    ]

    const navigate = useNavigate();

  return (

  <header className='w-full h-18 lg:h-22 pt-3 lg:pt-0 fixed backdrop-blur-md bg-black/50 z-10'>
      <nav className=' flex h-12 lg:h-16'>
        <div className="mr-1 lg:mt-2 lg:mx-4 text-blue-900 blink lg:px-5 h-fit hover:cursor-pointer font-logo text-3xl lg:text-5xl pt-1 lg:pt-3 z-8 "
        onClick={()=>{
          navigate('/')
          const ele = document.getElementById('start')
          if (ele) {
                  ele.scrollIntoView({ behavior: "smooth" });
                }
        }}
        >LD</div>
        <ul className='flex w-7/8 lg:w-full lg:absolute lg:justify-center lg:mx-auto gap-0.5 lg:gap-0'>
          {navItems.map((items)=>(
            <li key={items.name}  className='w-1/4 lg:w-2/13 lg:flex lg:justify-center'>
                <BtnLayout onClick={()=>{
                  navigate(`#${items.id}`)
                  const element = document.getElementById(items.id);
                  if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  }
                  }} className='lg:font-medium w-full'>
                    {items.name}
                </BtnLayout> 
            </li>
          ))}
        </ul>
      </nav>
  </header>
  )
}

export default Header