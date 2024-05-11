import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <Link to="/" className='logo'>
            Logo
        </Link>
        <div className='auth'>
            <Link to={'/login'} className='px-3'>Login</Link>
            <Link to={'/Signup'} className=' bg-black px-3 text-white py-2 rounded-sm'>Signup</Link>
        </div>
    </div>
  )
}

export default Header