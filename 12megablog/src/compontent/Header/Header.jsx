import React from 'react'
import { Logo,LogoutBtn,Container } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus=useSelector((state)=>state.authStatus)
  const useNavigate = useNavigate()
  const navItems=[
     {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
    <Container>
      <nav>
        <div className='flex'>
          <div className='mr-4'>
            <Link  to='/'>
            <Logo width='70px'/>

            </Link>
          </div>
          <ul className=' flex ml-auto'>
            {navItems.map((item)=>
              item.active?(
                <li key={item.name}>
                  <button onClick={()=>useNavigate(item.slug)} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {item.name}</button>
                </li>
              ):null
            )}
              {authStatus && (<li>
                <LogoutBtn/>
              </li>)}
          </ul>
        </div>
      </nav>
    </Container>
    </header>
  )
}

export default Header