import React from 'react'

const About = () => {
  return (
    <div name="about" className='bg-gradient-to-b from-gray-700 to-black text-white w-full h-[800px] md:h-screen pt-5 md:pt-0'>
        <div className='max-w-screen-lg  pl-3
        mx-auto flex flex-col justify-center w-full h-full '>
            <div pb-8>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className=' text-xl mt-20'>
            I'm a passionate and highly skilled full-stack developer, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). My journey into web development started with a strong desire to make a difference through technology. Over the years, I've acquired a wealth of experience and knowledge, allowing me to build impressive websites and applications.


</p>
            <br />

            <p text-xl>
            As a full-stack developer with a solid grasp of Data Structures and Algorithms, I have honed my skills through extensive practice, solving over 1000+ problems on platforms like Leetcode. My expertise in this area empowers me to design efficient and optimized solutions for complex coding challenges. I bring this strong foundation to every project, ensuring that my web applications are not only user-friendly but also built with performance and scalability in mind. Let's leverage my problem-solving abilities and technical expertise to create exceptional digital experiences together.

            </p>
        </div>
    </div>
  )
}

export default About