import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Car1() {
  return (
    <div className='text-center'>
        <h3 className='font-extrabold text-2xl underline'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews &
        <br/>Specs</h3>
        <br/>
        <Image src="/images/05.jpg" alt="car image" width={500} height={500} className='ml-96 pl-32' />
        <br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa.
          Placeat assumenda porro <br/> quis aliquid tenetur recusandae maiores itaque totam, 
          dolores quibusdam voluptatum sit minus.<br/> A placeat provident neque Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. Recusandae <br/>neque corrupti, earum nihil aliquam 
           asperiores dolor.</p>
        <br/>
        <p className='text-xl text-green-600'>PKR 50,00,000</p>
        <br/>
        <Link href="/form">
          <button className='text-white bg-blue-700 w-40 h-10 rounded hover:bg-blue-800'>Make Payment</button>
        </Link>
        
    </div>
  )
}