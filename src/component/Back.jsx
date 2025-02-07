import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
  const navigate = useNavigate()
  return (
    <div className='item-center flex justify-center absolute top-16 left-4 pl-48'>
      <button onClick={() => { navigate(-1) }} className='m-6 hover:bg-green-900 bg-gray-500 text-white px-8 py-2 rounded-xl'> Previous page</button>
    </div>
  )
}

export default Back
