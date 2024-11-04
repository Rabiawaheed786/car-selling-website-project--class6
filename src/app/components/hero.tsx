import React from 'react';

export default function Hero() {
  return (
    <section>
      <div className='bg-gray-100'>
        {/* Top heading with border */}
          <h2 className='text-center font-bold text-gray-800 text-2xl mt-10'>
            Sell Your Car on PakWheels and Get the Best Price
          </h2>
        
        

        <div className='flex justify-center items-start space-x-8 mt-10'>
          
          {/* Left Section */}
          <div className='pr-3 border border-r-6 p-8 w-4/12'>
            <h3 className='mb-4 text-blue-950 font-bold text-xl'>
              Post your Ad on PakWheels
            </h3>
            <ul className='text-gray-700 space-y-2'>
              <li>✔️ Post your Ad for Free in 3 Easy Steps</li>
              <li>✔️ Get Genuine offers from Verified Buyers</li>
              <li>✔️ Sell your car Fast at the Best Price</li>
            </ul>
            <button className='bg-red-700 rounded text-white h-10 w-40 my-6 hover:bg-red-800'>
              Post Your Ad
            </button>
          </div>

          {/* OR Divider */}
            <span className='mt-16 text-gray-400 font-semibold ml-0'>OR</span>
          {/* Right Section */}
          <div className='pl-16 border border-r-6 p-8 w-4/12'>
            <h3 className='mb-4 text-blue-950 font-bold text-xl'>
              Try PakWheels Sell It For Me
            </h3>
            <ul className='text-gray-700 space-y-2'>
              <li>✔️ Dedicated Sales Expert to Sell your Car</li>
              <li>✔️ We Bargain for you and share the Best Offer</li>
              <li>✔️ We ensure Safe & Secure Transaction</li>
            </ul>
            <button className='bg-blue-400 rounded text-white h-10 w-40 my-6 hover:bg-blue-700'>
              Register Your Car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}