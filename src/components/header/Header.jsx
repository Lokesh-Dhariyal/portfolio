import React from 'react'
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

  <header className='w-full h-19 py-3 fixed backdrop-blur-md bg-black/50 z-10'>
      <nav className=' flex h-12 lg:h-16'>
        <div className="mr-1 mt-1 lg:mx-4 text-blue-900 blink lg:px-5 h-14 hover:cursor-pointer font-logo text-3xl lg:text-4xl pt-3 "
        onClick={()=>{
          navigate('/')
          const ele = document.getElementById('start')
          if (ele) {
                  ele.scrollIntoView({ behavior: "smooth" });
                }
        }}
        >LD</div>
        <ul className='flex w-7/8 lg:justify-center justify-evenly lg:mx-auto'>
          {navItems.map((items)=>(
            <li key={items.name}  className='w-2/9 lg:w-1/7'>
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