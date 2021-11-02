import React from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-around relative px-3 py-5 shadow-md">
        <div className="justify-start ">
          <a href="#" className="text-blue-400">
            <img src={logo}></img>
          </a>
        </div>
        <div className=" justify-end">
          <a
            href="#"
            className="mx-4 text-white hover:text-blue-400 transition-colors ease-in "
          >
            Home
          </a>
          <a
            href="#"
            className="mx-4 text-white hover:text-blue-400 transition-colors ease-in"
          >
            Cards
          </a>
          <a
            href="#"
            className="mx-4 text-white hover:text-blue-400 transition-colors ease-in"
          >
            Footer
          </a>
        </div>
      </div>
    </>
  );
}
