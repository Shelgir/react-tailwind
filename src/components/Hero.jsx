import React from "react";
import Button from "./Button";
import Heroimg from "../images/Heoimg.png";

export default function Hero() {
  return (
    <>
      <div className="w-5/6 mx-auto grid grid-cols-2 h-screen content-center">
        <div className="col-span-2 md:col-span-1">
          <p className="text-4xl m-5 text-white">Hero Section</p>
          <p className="m-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde
            ullam dicta maxime repellendus illum quo cum accusantium aliquam
            distinctio, vel reprehenderit dolorem, nihil ipsam? Nulla, porro
            mollitia! Consectetur, quibusdam.
          </p>
          <Button text="Contact Sher" />
        </div>
        <div>
          <img src={Heroimg} className="hidden md:block"></img>
        </div>
      </div>
    </>
  );
}
