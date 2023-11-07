import React, { useState } from "react";
import { SiBadge } from "react-icons/si";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-col items-start cursor-pointer">
              <h1 className="text-6xl font-normal m-0 ml-4 ">EsaLink</h1>
              <p
                className="text-right m-0 ml-11 text-xs  font-normal uppercase"
                style={{ letterSpacing: "4px" }}
              >
                Data Integration
              </p>
            </div>

            <div className="ml-12 uppercase border-2 rounded-md p-2 border-white cursor-pointer relative overflow-hidden lg:block hidden">
              Facturation Electronique 2024
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            </div>

            <button
              className="md:hidden ml-auto p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`md:flex md:items-center md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <ul className="md:flex space-x-10 mr-36 text-lg">
              <li>
                <a href="#" className="hover:text-gray-300 hover:underline">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 hover:underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 hover:underline">
                  Blog
                </a>
              </li>
            </ul>

            <ul className="md:flex space-x-10 mr-4 text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 uppercase font-semibold hover:underline"
                >
                  Connexion TMA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-opacity-30 uppercase font-bold bg-opacity-20 bg-gray-50 rounded p-2 px-4 relative "
                >
                  GET A DEMO
                  <span
                    className="absolute top-0 left-0 right-0 bottom-0"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      pointerEvents: "none",
                      borderRadius: "0.375rem",
                    }}
                  ></span>
                </a>
              </li>

              <li className="relative">
                <select
                  className="rounded-md bg-transparent text-white"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="Option 1" className="text-black">
                    FR
                  </option>
                  <option value="Option 2" className="text-black">
                    EN
                  </option>
                  <option value="Option 3" className="text-black">
                    TR
                  </option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
