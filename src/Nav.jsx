import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="site-nav fixed top-0 left-0 right-0 z-100 bg-white shadow-md w-screen flex justify-between items-center px-6 xl:px-20 py-4 max-md:px-4 max-md:py-2">
      <p className="text-6xl text-(--primary) font-[upton] max-md:text-5xl ">
        EXODIGITAL
      </p>
      <Button name="Book Now" />
    </div>
  );
}

export default Nav;
