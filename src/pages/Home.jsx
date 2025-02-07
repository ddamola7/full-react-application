import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'


const Home = () => {
  return (
    <>
      {/* <Navbar/> */}

      <div className='flex justify-start p-10 items-center space-x-30 mt-16 ml-28 '>
        <div className='shadow-xl border rounded text-white text-2xl bg-red-500 hover:text-red-300 p-4'>Failed</div>

        <div className='shadow-xl rounded text-white text-2xl bg-yellow-500 hover:bg-yellow-300 p-4 '>Pending</div>


        <div className=' shadow-xl rounded text-white bg-green-600 text-2xl hover:text-green-300 p-4'>Successful</div>

      </div>

    <div className='flex justify-start ml-26 mt-10'>
    <table className="w-full table-auto border-collapse text-center">
  <thead>
    <tr className='bg-gray-700 text-white '>
      <th className="border px-4 py-2 text-center">T/N</th>
      <th className="border px-4 py-2 text-center ">STATUS</th>
      <th className="border px-4 py-2 text-center ">DATE</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-gray-100 ">
      <td className="border px-4 py-2">001 TXN</td>
      <td className="border text-xl px-4 py-2 text-red-500">FAILED</td>
      <td className="border px-4 py-2">2/5/25</td>
    </tr>
    <tr className="hover:bg-gray-100">
      <td className="border px-4 py-2">002 TXN</td>
      <td className="border text-xl text-yellow-400 rounded px-4 py-2">PENDING</td>
      <td className="border px-4 py-2">2/5/25</td>
    </tr>
    <tr className="hover:bg-gray-100">
      <td className="border px-4 py-2">003 TXN</td>
      <td className="border rounded text-green-600 text-xl  px-4 py-2">SUCCESS</td>
      <td className="border px-4 py-2">2/5/25</td>
    </tr>
  </tbody>
</table>
    </div>





    </>
  )
}

export default Home
