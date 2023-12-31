import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full   '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gary-500'>Contact Me</p>
            <p className='py-6' >Submit the form below to get in touch with me</p>
        </div>

        <div className='flex items-center justify-center '>
            <form action="https://getform.io/f/7f75074d-e18a-4e70-966d-8f2201c68297" method='POST' className='flex flex-col gap-2 w-full md:w-1/2'>
             <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

             <input type="email" name='email' placeholder='Enter your Email' className='p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none' />

            <textarea  name='message' rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>

            <button className='p-2 bg-gradient-to-r from-cyan-500 to-blue-400 px-6 py--2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white '>Connect with me</button>

            </form>
        </div>

    </div>
    </div>
  )
}

export default Contact
