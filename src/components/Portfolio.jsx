import React from 'react'
import FoodFiesta from '../Assets/foodfiesta.png'
import Netflix_clone from '../Assets/Netflixclone.png'
import iNotebook from '../Assets/iNotebook.png'
import textUtil from '../Assets/textUtil.png'
import NewsHunt from '../Assets/Newshunt.png'




const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b  from-black to-gray-800 w-full h-screen text-white md:h-screen pb-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check Out some of my amazing projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={FoodFiesta} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex flex-row justify-between mx-3 my-3'>
              <a href="https://food-fiesta.vercel.app/" target='_blank'><button>Live</button></a>
              <a href="https://github.com/imsaurabh08/FoodFiesta" target='_blank'><button>Github</button></a>

            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={Netflix_clone} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex flex-row justify-between mx-3 my-3'>
              <a href="https://netflix-clone-7ff94.web.app/" target='_blank'><button>Live</button></a>
              <a href="https://github.com/imsaurabh08/Netflix-clone-app" target='_blank'><button>Github</button></a>

            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={iNotebook} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex flex-row justify-center mx-3 my-3'>
              <a href="https://github.com/imsaurabh08/FoodFiesta" target='_blank'><button>Github</button></a>

            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={textUtil} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex flex-row justify-center mx-3 my-3'>
              <a href="https://github.com/imsaurabh08/FoodFiesta" target='_blank'><button>Github</button></a>

            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={NewsHunt} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex flex-row justify-center mx-3 my-3'>
              <a href="https://github.com/imsaurabh08/FoodFiesta" target='_blank'><button>Github</button></a>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Portfolio