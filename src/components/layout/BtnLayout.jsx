import React from 'react'

function BtnLayout({
    children,
    type = 'button',
    className = "",
    ...props
}) {
  return (
<button 
className={`bg-[#01010e] text-white border-2 border-blue-900 rounded-full w-20 h-10 lg:w-35 lg:h-10 mt-3 mx-0.5 lg:m-5 
     shadow-[#3ea1db] hover:cursor-pointer hover:shadow-xs text-center duration-550 text-xs lg:text-lg
    ${type} ${className}`}{...props}
    >
        {children}
    </button>
  )
}

export default BtnLayout