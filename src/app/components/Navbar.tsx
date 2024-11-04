import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-gray-100">
      <nav className="bg-gradient-to-b from-black to-blue-950 text-white p-3">
        <div className="container mx-auto flex justify-between items-center h-7">
          {/* Left Section */}
          <div className="flex items-center space-x-4 ml-24">
            {/* Phone Icon */}
            <Image
              src="/images/mob_img.png"
              alt="mobile icon"
              width={15}
              height={15}
              className="mb-3"
            />
            <h3 className="font-semibold">Download App via SMS</h3>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1 mr-16">
            {/* Urdu Text Icon */}
            <Image
              src="/images/urdu-word.PNG"
              alt="urdu log"
              width={40}
              height={40}
              className="mb-4"
            />
            <button className=" text-white px-4 py-2 rounded">Sign Up</button>
            <button className="text-white px-4 py-2 rounded ">Sign In</button>
          </div>
        </div>
        <hr className="border-blue-900" />
        <div className="flex">
          <Image
            src="/images/pw-logo.png"
            alt="logo"
            width={170}
            height={100}
            className="ml-32 my-3"
          ></Image>
          <ul className="flex space-x-7 mt-8">
            <li className="ml-28 mt-3">Used Cars</li>
            <li className="mt-3">New Cars</li>
            <li className="mt-3">Bikes</li>
            <li className="mt-3">Auto Store</li>
            <li className="mt-3">Videos</li>
            <li className="mt-3">Forums</li>
            <li className="mt-3">Blog</li>
            <li className="my-2">
              More
              <sup className="bg-blue-700 rounded">
                <button className="h-8 w-8">New</button>
              </sup>
            </li>
          </ul>
          <button className="bg-red-600 font-semibold h-10 w-40 my-7 mx-4 rounded hover:bg-red-700">
            Post an Ad
          </button>
        </div>
      </nav>
    </div>
  );
}