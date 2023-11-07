import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import Gif from '../assets/neet.gif'

const Section3 = () => {
    const [activePoint, setActivePoint] = useState(null);

  const handlePointClick = (pointNumber) => {
    setActivePoint(pointNumber);
  };
  return (
    <>
    <div className='lg:block hidden'>
    <div className='flex mt-6 ml-20 mb-20' >
      <div className='w-1/2'>
        <Image src={Gif} alt="Your GIF" />
      </div>
      <div className='w-1/2 flex flex-col justify-center'>
        <h1 className='ml-24 text-3xl mb-10'>Never Waste Another <span className='lead'>Lead</span></h1>
        <div className='flex flex-col ml-20'>
          {[
            { title: "Enforce Lead updates", description: "After every call, sales agents have to update the lead status before moving on to the next lead." },
            { title: "Mobile notifications for all your follow ups", description: "Easily add follow up reminders for your leads to ensure you don’t lose any deals." },
            { title: "Conversation history for every lead", description: "View history of calls, WhatsApp messages, and notes for every lead." },
          ].map((point, index) => (
            <div
              key={index}
              className={`p-2 m-2 cursor-pointer bg-white rounded ${
                activePoint === index ? 'border border-black' : ''
              }`}
              onMouseEnter={() => setActivePoint(index)}
              onMouseLeave={() => setActivePoint(null)}
              onClick={() => handlePointClick(index)}
            >
              <h4 className='mb-2 text-xl font-semibold'>{point.title}</h4>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className='lg:hidden block mt-10'>
    <div className='flex flex-col justify-center items-center'>
      
      <h1 className='mt-10 text-xl mb-10'>Never Waste Another <span className='lead'>Lead</span></h1>
      <div className='w-11/12'>
     
        {/* Points for mobile view */}
        {[
           { title: "Enforce Lead updates", description: "After every call, sales agents have to update the lead status before moving on to the next lead." },
           { title: "Mobile notifications for all your follow ups", description: "Easily add follow up reminders for your leads to ensure you don’t lose any deals." },
           { title: "Conversation history for every lead", description: "View history of calls, WhatsApp messages, and notes for every lead." },
        ].map((point, index) => (
          <div key={index} className="p-2 m-2 border rounded">
            <h4 className='mb-2'>{point.title}</h4>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
      <div className='w-11/12 mb-10'>
        <Image src={Gif} alt="Your GIF" />
      </div>
    </div>
    </div>
     
    </>
  )
}

export default Section3