import React from 'react'
import { FaGithub,FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const SocialLinks = () => {
  return (
    <div className='  lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-12 px-4 bg-gray-500 text-white  duration-300 ml-[-100px] hover:rounded-md hover:ml-[-10px]'>
                <a href="https://www.linkedin.com/in/saurabh-modanwal-b13a29202/" className=' flex justify-between items-center w-full' target="_blank"  rel="noreferrer">
                    <>
                    LinkedIn <FaLinkedinIn size={30}/>
                    </>
                </a>
            </li>

            <li className='flex justify-between items-center w-40 h-12 px-4 bg-gray-500 text-white  duration-300 ml-[-100px] hover:rounded-md hover:ml-[-10px]'>
                <a href="https://leetcode.com/imsaurabh_08/" className=' flex justify-between items-center w-full' target="_blank"  rel="noreferrer">
                    <>
                    Leetcode <SiLeetcode    size={30}/>
                    </>
                </a>
            </li>

            <li className='flex justify-between items-center w-40 h-12 px-4 bg-gray-500 text-white  duration-300 ml-[-100px] hover:rounded-md hover:ml-[-10px]'>
                <a href="https://github.com/imsaurabh08" className=' flex justify-between items-center w-full' target="_blank"  rel="noreferrer">
                    <>
                    Github <FaGithub size={30}/>
                    </>
                </a>
            </li>

            <li className='flex justify-between items-center w-40 h-12 px-4 bg-gray-500 text-white  duration-300 ml-[-100px] hover:rounded-md hover:ml-[-10px]'>
                <a href="mailto:srbhmodanwal@gmail.com" className=' flex justify-between items-center w-full ' >
                    <>
                    Mail <HiOutlineMail size={30}/>
                    </>
                </a>
            </li>

            <li className='flex justify-between items-center w-40 h-12 px-4 bg-gray-500 text-white  duration-300 ml-[-100px] hover:rounded-md hover:ml-[-10px]'>
                <a href="https://drive.google.com/file/d/1l7RQ1nfpuIVSOmXRM3cXuCvcNP5JlMMn/view?usp=drive_link" className=' flex justify-between items-center w-full ' target='_blank'  rel="noreferrer">
                    <>
                    Resume <BsFillPersonLinesFill size={30}/>
                    </>
                </a>
            </li>

        </ul>
    </div>
  )
}

export default SocialLinks