import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import CartDropDown from './Cartdropdown';






const Navbar = () => {
    const cart = useSelector((state) => state.cart.cartCount);
    const [cartDropDown, setCartDropDown] = useState(false)
    console.log(cart);

    return (
        <nav className='bg-gray-800   h-[80px] shadow flex justify-between items-center px-10'>

            <div className='flex '>
                <Link to='/'>
                    <img src="./careus logo.png" alt="" />

                </Link>

            </div>


            <div className='relative flex mt-6' onClick={() => setCartDropDown((previous) => !previous)}>
                <IoCart className='text-white text-3xl ms-12   mt-2     hover:text-gray-400 transition duration-200 cursor-pointer' />
                <span className="text-white flex items-center justify-center text-sm  ms-2 mb-2 left-">{cart}</span>
            </div>


            {cartDropDown && <CartDropDown/>}




            <Link to='/user'>
                <FaUserAlt className='text-white text-l mt-6 hover:text-gray-400 cursor-pointer  ' />
            </Link>


        </nav>
    )
}

export default Navbar


