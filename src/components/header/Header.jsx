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
            name : 'ABOUT',
            id:'about'
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

  <header className=' lg:w-full h-19 py-3 fixed backdrop-blur-md bg-black/50 z-10'>
      <nav className='flex h-12 lg:h-16'>
        <div className=" lg:mx-4 text-blue-900 blink lg:px-5 h-14 hover:cursor-pointer font-logo mx-2 text-3xl lg:text-4xl pt-3 "
        onClick={()=>{
          navigate('/')
          const ele = document.getElementById('start')
          if (ele) {
                  ele.scrollIntoView({ behavior: "smooth" });
                }
        }}
        >LD</div>
        <ul className='flex lg:mx-auto'>
          {navItems.map((items)=>(
            <li key={items.name}>
                <BtnLayout onClick={()=>{
                  navigate(`#${items.id}`)
                  const element = document.getElementById(items.id);
                  if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  }
                  }} className='lg:font-medium'>
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