import React from 'react'
import { Link } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className='bg-gray-800   h-[80px] shadow flex justify-between items-center px-10'>

            <div className='flex '>
                <Link to='/'>
                    <img src="./careus logo.png" alt="" />

                </Link>

            </div>


            <div className='Relative flex'>
                <Link to='/'>
                    <IoCart className='text-white text-3xl ms-250  hover:text-gray-400 transition duration-200 cursor-pointer' />
                </Link>
                </div>

           

            <Link to='/user'>
            <FaUserAlt className='text-white text-3xl hover:text-gray-400 cursor-pointer  ' />
            </Link>

           





        </nav>
    )
}

export default Navbar
