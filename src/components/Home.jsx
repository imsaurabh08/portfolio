import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import pic from '../Assets/saurabh_pic9.png'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 text-white flex flex-row gap-2 p-2'>
        <div className=" max-w-screen-lg  flex flex-col m-auto    justify-center   ">
            <div className="  flex flex-col justify-center h-full">
                <h2 className=' text-4xl md:text-7xl font-bold text-white mb-1'>I'm a full stack developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>Welcome to my portfolio website! I am a full stack MERN (MongoDB, Express.js, React.js, Node.js) developer with a strong passion for creating robust and user-friendly web applications. With a solid foundation in Data Structures and Algorithms, I have honed my problem-solving skills and strive to develop efficient and scalable solutions. Whether it's building responsive front-end interfaces or designing and implementing server-side functionalities. Explore my projects and experience, and let's collaborate on turning ideas into reality!</p>
            </div>
            
            <Link to="portfolio" smooth duration={500} >
              <button className='w-fit rounded-md group gap-1 flex p-2 flex-row bg-gradient-to-r from from-cyan-600  to-blue-500 cursor-pointer' >
             Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                <AiOutlineArrowRight className='ml-1'  size={25}/>
            </span>
              </button>
            </Link>
          
  
        </div>
        

   <div className='flex justify-center items-center' >
    <img src={pic} className="w-[300px] h-[330px] rounded-2xl mr-4 "  alt="profile" />
   </div>

         </div>
  )
}

export default Home