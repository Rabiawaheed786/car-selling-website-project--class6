import React from 'react'
import Link from 'next/link'

export default function Form() {
  return (
    <div className='text-center bg-blue-100 min-h-screen space-y-4 py-5'>
        <h3 className='text-4xl font-bold py-10'> Enter your Details </h3>
        <br/>
        <br/>
        <br/>
        <form className='flex flex-col items-center space-y-6'>
            <input type='text' placeholder='Enter your name' required className='border border-gray-400 w-96 h-10 pl-2'/>
            <input type='Email' placeholder='Enter your Email' required className='border border-gray-400 w-96 h-10 pl-2'/>
            <input type='number' placeholder='Card number' required className='border border-gray-400 w-96 h-10 pl-2'/>
            <input type='address' placeholder='Address' required className='border border-gray-400 w-96 h-10 pl-2'/>
            <br/>
            <br/>
            <Link href="./thank-you">
            <button className='text-white bg-blue-700 w-40 h-12 rounded  hover:bg-blue-800'>Place your Order</button>
            </Link>
            
        </form>
        
    </div>
  )
}