import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaDiagramProject } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside className='  w-[15%] h-screen justify  shadow border-gray-300 rounded-lg bg-gray-950 text-white flex flex-col '>
            <Link to="/" className='flex items-center m-4 rounded py-8  hover:bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
                <CiHome />
                <p className='ms-4'>Dashboard</p>
            </Link>

            <Link to="/product" className='flex items-center m-4 rounded p-2  hover:bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
                <FaCalendar />
                <p className='ms-4'> Product</p>
            </Link>

            <Link to="/settings" className='flex items-center m-4 rounded p-2  hover:bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
                <IoIosSettings />
                <p className='ms-4'>Settings</p>
            </Link>

            <div className='mt-auto py-20'>
                <Link to="/Log out" className='flex items-center m-4 ms-2 ps-1 rounded   hover:bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
                    <IoLogInOutline />
                    <p className='ms-4'>Log-out</p>
                </Link>

            </div>












        </aside>
    )
}

export default Sidebar
