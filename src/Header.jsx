import React from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='h-28 '>
        <div  className='flex justify-between items-center p-4 mx-2'>
            <div className=''>
                <img className='' src={logo} alt="do List" />
                {/* <span>do List</span> */}
            </div>
            
            <nav >
                <Link to='/aboutus'className='p-3 text-lg'>About US </Link>
                <Link to='/features' className='p-3 text-lg'>Features</Link>
                <Link to='/moreoption' className='p-3 text-lg'>More Option</Link>
                <Link to='/contactus'>Contact us</Link>
            </nav>
            <div className=''>
                <button className='px-6 py-1  m-3 text-lg border border-[#FF3E54] rounded-xl text-[#FF3E54] '>Log In </button>
                <button className='px-6 py-1 bg-[#FF3E54] rounded-xl text-white text-lg'>Sign up</button>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header