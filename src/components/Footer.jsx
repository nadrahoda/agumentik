import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import PlayStore from "../assets/Store.png"

const Footer = () => {
  return (
    <>
    <hr/>
    <footer className="bg-white py-4">

      <div className="container mx-auto flex items-center lg:ml-6 justify-between ">
        <div>
          <select className="px-2 py-1 rounded border">
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
          
        </div>
        <div className='mt-2 ml-6 flex flex-col'>
        <div className=' items-center'>
        <div className="flex mr-3">
          <a href="#" className="mx-2">
            <FaFacebook size={20} />
            
          </a>
          <a href="#" className="mx-2">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="mx-2">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="mx-2">
            <FaYoutube size={20} />
          </a>
          {/* Add more social media icons */}
        </div>
        
        <div className="flex mt-3 lg:flex flex-col">
        <a className="text-xs mx-2 underline">Security</a>
        <a className="text-xs mx-2 underline">Terms of Services</a>
        <a className="text-xs mx-2 underline">Privacy Policy</a>
        <a className="text-xs mx-2 underline">Cookie Setting</a>
        <a className="text-xs mx-2 underline">Status</a>

        <p className='text-xs mx-2'>All rights reserved © monday.com</p>
        
        
      </div>
    </div>
      </div>
      <div className="flex">
      <Image src={PlayStore} alt="Image 1" width={450} height={450} />
     
    </div>
      </div>
    </footer>
    </>
  )
}

export default Footer