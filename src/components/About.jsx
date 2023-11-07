import React from "react";
import { useState } from "react";
import Image from "next/image";
import Boards from "../assets/card1.jpg";
import Cards from "../assets/card3.jpg";
import Lists from "../assets/card14.jpg";
const About = () => {
  const [activeList, setActiveList] = useState(1);
  const images = [Boards, Lists, Cards];
  const handleListClick = (listNumber) => {
    setActiveList(listNumber);
  };
  const handleNext = () => {
    setActiveList((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <div className="lg:ml-20 ml-5 mt-20">
        <h5 className="font-semibold">TRELLO 101</h5>
        <h2 className="text-4xl mt-2 mb-6 font-semibold">
          A productivity powerhouse
        </h2>
        <p className="text-lg">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          <br />
          cards to get a clear view of who’s doing what and what needs to
          <br />
          get done. Learn more in our{" "}
          <a className="underline" href="">
            guide for getting started.
          </a>
        </p>
      </div>
      <div className="lg:block hidden">
        <div className="flex mt-6 ml-20 ">
          <div className="w-1/2">
            <ul className="flex flex-wrap gap-4">
              <li
                onClick={() => handleListClick(1)}
                className={`cursor-pointer mb-16 w-[350px] p-4 ${
                  activeList === 1 ? "border-l-4 border-blue-500" : ""
                } ${activeList === 1 ? "bg-white" : ""}`}
              >
                <h5 className="font-semibold">Boards</h5>
                <p>
                  Trello boards keep tasks organized and work moving forward. In
                  a glance, see everything from things to do to aww yeah we
                  did it!
                </p>
              </li>
              <li
                onClick={() => handleListClick(2)}
                className={`cursor-pointer mb-16 w-[350px] p-4 ${
                  activeList === 2 ? "border-l-4 border-blue-500" : ""
                } ${activeList === 2 ? "bg-white" : ""}`}
              >
                <h5 className="font-semibold">Lists</h5>
                <p>
                  Trello boards keep tasks organized and work moving forward. In
                  a glance, see everything from things to do to aww yeah we
                  did it!
                </p>
              </li>
              <li
                onClick={() => handleListClick(3)}
                className={`cursor-pointer mb-16 w-[350px] p-4 ${
                  activeList === 3 ? "border-l-4 border-blue-500" : ""
                } ${activeList === 3 ? "bg-white" : ""}`}
              >
                <h5 className="font-semibold">Cards</h5>
                <p>
                  Trello boards keep tasks organized and work moving forward. In
                  a glance, see everything from things to do to aww yeah we
                  did it!
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/2 ml-4">
            <div className="relative" style={{ height: "300px" }}>
              <div className="flex absolute inset-0">
                <Image
                  src={Boards}
                  alt='not found'
                  className={`${activeList === 1 ? "block" : "hidden"}`}
                />
                <Image
                  src={Lists}
                  alt='not found'
                  className={`${activeList === 2 ? "block" : "hidden"}`}
                />
                <Image
                  src={Cards}
                  alt='not found'
                  className={`${activeList === 3 ? "block" : "hidden"}`}
                />
              </div>
              <div className="flex justify-center absolute bottom-4 left-0 w-full">
                {[1, 2, 3].map((i) => (
                  <button
                    key={i}
                    className={`mx-1 w-3 h-3 rounded-full ${
                      activeList === i ? "bg-blue-500" : "bg-gray-400"
                    }`}
                    onClick={() => handleListClick(i)}
                  ></button>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="block mx-auto mt-4 text-blue-500"
            ></button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="lg:hidden block">
        <div className="flex flex-col items-center mt-6 mx-4">
          <div>
            <Image
              src={images[activeList]}
              width={500}
              height={300}
              alt={`Image ${activeList}`}
            />
=======
      <div className="lg:hidden">
        <div className="flex mt-6 mx-4">
          <div className="w-full text-center">
            <Image src={images[activeList]} alt='not found' />
>>>>>>> 9226647f3826f01a9ef8d7329cf34193a9952fbb
            <p>
              Trello boards keep tasks organized and work moving forward. In a
              glance, see everything from things to do to aww yeah we did
              it!
            </p>
          </div>

          <button
            onClick={handleNext}
            className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
