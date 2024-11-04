
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Car4() {
  return (
    <div className='text-center bg-gray-100'>
        <h3 className='font-extrabold text-2xl underline'>Honda Civic 2024 Price in Pakistan, Images, Reviews &
        <br/>Specs</h3>
        <br/>
        <Image src="/images/05.jpg" alt="car image" width={500} height={500} className='ml-96 pl-32' />
        <br/>
        <div className='space-x-5'>
          <button className='text-white bg-blue-700 rounded font-bold w-40 h-12 px-2 hover:bg-blue-800'>Book a Test Drive</button>
          <button className='text-blue-700 border border-blue-700 w-50 h-12 bg-white px-2 rounded hover:bg-blue-700 hover:text-white'>Request Bank Finance</button>
          <button className='text-blue-700 border border-blue-700 w-50 h-12 bg-white px-8 rounded hover:bg-blue-700 hover:text-white'>Visit Place</button>
          <button className='text-blue-700 border border-blue-700 w-50 h-12 bg-white px-6 rounded hover:bg-blue-700 hover:text-white'>Car Inspection</button>
        </div>
        
        <br/>
        <h3 className='font-bold text-xl'>Vehicle Description</h3>
        <br/>
        <div className='space-x-5'>
        <span><b>Number of Doors</b> 4 </span>
        <span><b>Engine</b> 1800 CC </span>
        <span><b>Condition</b> 8.5/10 </span>
        <span><b>Driven</b> 9,500 KM </span>
        <span><b>Suspension Type:</b> Soft Suspension </span>
        <br/>
        <span><b>Avg</b> 13 Km per ltr </span>
        <span><b>Transmission</b> Automatic </span>
        <span><b>Fuel Type</b> High Octane </span>
        </div>
        <br/>
        <p className='text-xl text-green-600'>PKR 50,00,000</p>
        <br/>
        <Link href="/form">
          <button className='text-white bg-blue-700 w-40 h-12 rounded hover:bg-blue-800'>Make Payment</button>
        </Link>
        
    </div>
  )
}
