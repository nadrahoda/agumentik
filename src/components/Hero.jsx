import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import Image from "next/image";
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";

const Hero = () => {
  useEffect(() => {
    const gradients = [
      "linear-gradient(to left top, #538ad6, #86e7d6)",
      "linear-gradient(to left top, #c5f9d7, #f7d486, #f27a7d)",
    ];

    let currentGradient = 0;
    const interval = setInterval(() => {
      if (currentGradient === gradients.length - 1) {
        currentGradient = 0;
      } else {
        currentGradient++;
      }
      document.querySelector(".hero-section").style.background =
        gradients[currentGradient];
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-section h-screen bg-gradient-transition">
        <Header />
        <div className="text-white mt-20 ml-4 relative">
          <h1 className="lg:text-7xl font-semibold">
            Dematerialization
            <br />
            at the service of your business
          </h1>
          <p className="text-2xl mt-4 ml-1">
            Esalink supports you in the digitalization of your B2B flows
          </p>
          <div>
            <button className="mt-10 lg:ml-3">
              <a
                href="#"
                className="text-lg font-semibold bg-opacity-20 bg-gray-50 rounded p-3 relative"
              >
                Find your EDI solution
                <span
                  className="absolute top-0 left-0 right-0 bottom-0"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    pointerEvents: "none",
                    borderRadius: "0.375rem",
                  }}
                ></span>
              </a>
            </button>
            <button className="mt-10 lg:ml-8">
              <a
                href="#"
                className=" text-lg font-semibold bg-opacity-20 bg-gray-50 rounded p-3 relative"
              >
                Switch to electronic invoicing
                <span
                  className="absolute top-0 left-0 right-0 bottom-0"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    pointerEvents: "none",
                    borderRadius: "0.375rem",
                  }}
                ></span>
              </a>
            </button>
          </div>

          <div className="icons mt-10 flex items-center ">
            {[
              { id: 1, src: logo1 },
              { id: 2, src: logo2 },
              { id: 3, src: logo3 },
              { id: 4, src: logo4 },
              { id: 5, src: logo5 },
            ].map((logo) => (
              <div
                key={logo.id}
                className="ml-10 mr-6 "
                style={{
                  animationDelay: `${logo.id * 0.3}s`,
                  animationDuration: "10s",
                  animationName: "fadeInFromRight",
                  animationFillMode: "forwards",
                }}
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="absolute bottom-0 right-0">
    <Image
      src={apple}
      alt="Right Bottom Image"
      style={{ width: "80%" }}
    />
  </div> */}
      </div>
    </>
  );
};

export default Hero;
