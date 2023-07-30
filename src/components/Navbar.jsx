import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
   
  const [nav,setnav]=useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between p-2 text-2xl items-center bg-gray-800 text-white  fixed w-full h-15 z-50">
      <div className="">
        <h1  className=" cursor-pointer font-signature">
          <Link to="home"  smooth duration={500} >Saurabh</Link>
        </h1>
      </div>
      

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (         
         
            <li  key={id}
            className=" capitalize text-gray-600 px-4 cursor-pointer font-medium hover:scale-105 duration-100  ">

              <Link to={link} smooth duration={500} >
               {link}
               </Link>
               
            </li>
         
        ))}
      </ul>

<div onClick={()=>setnav(!nav)} className=" cursor-pointer pr-4  z-10  md:hidden">
  {
   nav ? <FaTimes size={30}/> : <FaBars size={30}/>
  }
</div>


   { nav &&(
    
      <ul className=" flex flex-col justify-center items-center bg-gradient-to-b from from-black to-gray-600 w-full h-screen top-0 left-0  absolute md:hidden  ">
  {
      links.map(({ id, link }) => (         
        <li
          key={id}
          className=" capitalize text-gray-600 px-4 text-4xl cursor-pointer font-medium  py-2 "
        >
          <Link to={link} onClick={()=>setnav(!nav)} smooth duration={500} >
               {link}
              </Link>
        </li>
      ))
}
</ul>
      )}
    
  


    </div>
  );
};

export default Navbar;
