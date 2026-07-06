import React from 'react'

export default function Navbar() {
  return (
    <>
       <nav className='bg-blue-600 text-white shadow-md'>
         <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
            <div>
                <h1 className='text-3xl font-bold cursor-pointer'>Placement Portal</h1>
            </div>
            <ul className='flex gap-8 font-medium'>
                <li className='cursor-pointer hover:text-yellow-500'>Home</li>
                <li className='cursor-pointer hover:text-yellow-500'>Companies</li>
                <li className='cursor-pointer hover:text-yellow-500'>Students</li>
                <li className='cursor-pointer hover:text-yellow-500'>About</li>
                <li className='cursor-pointer hover:text-yellow-500'>Contact</li>
            </ul>
            <div className='flex gap-4'>
                <button className='cursor:pointer hover:text-yellow-300 border border-white rounded-lg px-4 py-2'>Register</button>
                <button className='cursor:pointer hover:text-yellow-300 border border-white rounded-lg px-4 py-2'>Login</button>
            </div>
         </div>
       </nav>
    </>
  )
}
