import React from 'react'

function BoxLayout({
    children,
    className="",
    ...props
}) {
  return (
    <div className={`border-2 border-blue-900 w-full mx-auto h-fit my-5 rounded-3xl overflow-hidden ${className}`}{...props}>

      {/* <strong className='m-60'>Hello</strong> .... Solve this .... i have solved it
      the children can be replaced by the other elements on some other jsx */ }

            {children}
    </div>
  )
}
// How can i edit this html when i call it on some other file..??
export default BoxLayout