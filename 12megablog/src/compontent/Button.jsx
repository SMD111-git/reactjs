import React from 'react'

function Button({
    children,
    type='button',
    bgcolor='bg-blue-600',
    textcolor='text-white',
    className='',
    ...props
}) {
  return (
    <Button className={`px- py-2 rounded-lg ${bgcolor} ${className} ${textcolor} `} {...props}>{children}</Button>
  )
}

export default Button