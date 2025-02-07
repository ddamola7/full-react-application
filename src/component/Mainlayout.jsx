import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Back from './Back'

const Mainlayout = () => {
    return (
        <>
            <Navbar />
            <main className='flex min-h-screen '>
                <Sidebar />
                <Back />
                <div>
                    <Outlet />
                </div>

            </main>
        </>
    )
}

export default Mainlayout
