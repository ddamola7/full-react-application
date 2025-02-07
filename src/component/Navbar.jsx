import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='bg-gray-800   h-[80px] shadow flex justify-between items-center px-10'>

    <div className='flex '>
        <Link to='/'>
        <img src="./careus logo.png" alt="" />
        
        </Link>
       
    </div>

    <div>
        <ul className='text-white text-2xl'>
            <li> <Link to='/product'>product</Link></li>
        </ul>
    </div>





   </nav>
  )
}

export default Navbar
