
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Featuring() {
  return (
    <div className='bg-gray-100'>
        <div className='flex'>
            <h2 className='font-bold text-2xl ml-20 mt-20'>Featured New Cars</h2>
            <a className='ml-96 pl-96 mt-20 text-blue-500'>View All New Cars</a>
        </div>

        <div className='space-x-9 pl-20 mt-7 font-bold border-b-2 border-gray-300'>
            <a className='font-extrabold border-4 border-b-blue-800'>Popular</a>
            <a className='hover:font-extrabold'>Upcoming</a>
            <a className='hover:font-extrabold'>Newly Launched</a>
        </div>

        <div className='flex space-x-6 ml-12 mt-4'>
            <Link href="./cars/car1" className='text-center w-3/12 px-3 bg-white'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'>
                    <Image src="/images/01.jpg" alt="car1-pic" width={300} height={300}/>
                    <h3 className='text-blue-900 font-bold pt-4'>Toyota Corolla</h3>
                    <p className='text-green-600'>PKR 59.7 - 75.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>621 Reviews</span>
                </div>
            </Link>
            
            <Link href="./cars/car2" className='text-center w-3/12 px-3 bg-white'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'>
                    <Image src="/images/02.jpeg" alt="car2-pic" width={300} height={300}/>
                    <h3 className='text-blue-900 font-bold pt-4'>Suzuki Alto</h3>
                    <p className='text-green-600'>PKR 23.3 - 30.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>199 Reviews</span>
                </div>
            </Link>

            <Link href="./cars/car3" className='text-center w-3/12 px-3 bg-white'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'>
                    <Image src="/images/03.jpg" alt="car3-pic" width={300} height={300}/>
                    <h3 className='text-blue-900 font-bold pt-4'>Honda City</h3>
                    <p className='text-green-600'>PKR 46.5 - 58.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>458 Reviews</span>
                </div>
            </Link>


            <Link href="./cars/car4" className='text-center w-3/12 px-3 bg-white pr-4'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'> 
                    <Image src="/images/04.jpg" alt="car4-pic" width={300} height={300}/>
                    <h3 className='text-blue-900 font-bold pt-4'>Honda Civic</h3>
                    <p className='text-green-600'>PKR 86.6 - 99.0 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>357 Reviews</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}
