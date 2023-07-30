import React from 'react'
import HtmlLogo from '../Assets/htmllogo.png'
import CssLogo from '../Assets/csslogo.png'
import JavascriptLogo from '../Assets/Javascriptlogo.png'
import Reactlogo from '../Assets/reactlogo.png'
import ExpressLogo from '../Assets/expressjs1.png'
import NodeLogo from '../Assets/Nodejslogo.png'
import MongoLogo from '../Assets/MongoDblogo.png'
import TailwindLogo from '../Assets/tailwindlogo.png'


const Experience = () => {
  return (
    <div name="experience" className=' bg-gradient-to-b  from-gray-800  to-black w-full  text-white   '>

        <div className=' max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='mb-4'>
                <p className='text-4xl font-bold border-b-4 border-gary-500 inline '>Experience</p>
                <p className='mt-5'>These are the technologies I've worked with</p>

            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
              
            <div className='w-4/5 shadow-md hover:scale-105  duration-500 py-2 rounded-lg shadow-orange-500'>
                    <img src={HtmlLogo} alt="" className='w-[150px] mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>

                <div className='w-4/5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                    <img src={CssLogo} alt="" className='w-[150px] mx-auto' />
                    <p className='mt-4'>CSS</p>
                </div>

                <div className=' w-4/5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-600'>
                    <img src={JavascriptLogo} alt="" className='w-[140px] mx-auto' />
                    <p className='mt-4'>JavaScript</p>
                </div>

                <div className='w-4/5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-600 '>
                    <img src={Reactlogo} alt="" className='w-[150px] mx-auto' />
                    <p className='mt-4'>ReactJS</p>
                </div>

                <div className='w-4/5 shadow-md hover:scale-105 duration-500 py-1 rounded-lg shadow-green-400'>
                    <img src={NodeLogo} alt="" className='w-[150px] mx-auto' />
                    <p className='mt-4'>NodeJS</p>
                </div>

                <div className='w-4/5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-600'>
                    <img src={ExpressLogo} alt="" className='w-[150px] h-[120px] mx-auto' />
                    <p className='mt-11'>ExpressJS</p>
                </div>

                <div className='w-4/5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500'>
                    <img src={MongoLogo} alt="" className='w-[150px] h-[120px]   mx-auto' />
                    <p className='mt-4'>MongDB</p>
                </div>

                <div className='w-4/5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-300'>
                    <img src={TailwindLogo} alt="" className='w-[150px] h-[120px] mx-auto' />
                    <p className='mt-4'>Tailwind CSS</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Experience