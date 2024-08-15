import React from 'react'

function Explore() {
    return (
        <div className='py-10 sm:py-20 lg:py-28'>
        <div className='relative w-full max-w-7xl mx-auto bg-[#635EA3] rounded-2xl overflow-hidden border'>
          
          {/* Background and Decorative Images */}
          <img src="../img/Ellipse 308.png" className='absolute top-0 left-0 w-20 sm:w-32 lg:w-40' alt="Ellipse 308" />
      
          <div className='relative z-10 px-6 sm:px-12 lg:px-24 pt-16 sm:pt-20 lg:pt-28'>
            
            {/* Heading */}
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 max-w-full lg:max-w-2xl'>
              Explore New Opportunities on the GO!
            </h1>
      
            {/* Button */}
            <button className='px-6 mb-3 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white capitalize rounded-xl font-semibold text-[#2C3131]'>
              Get Started
            </button>
            
          </div>
      
          {/* Bottom Decorative Images */}
          <div className='absolute -bottom-20 sm:-bottom-28 lg:-bottom-64 left-1/2 transform -translate-x-1/2 z-0 h-[200px] sm:h-[300px] lg:h-[430px]'>
            <img src="../img/Ellipse 309.png" className='w-full h-full object-contain' alt="Ellipse 309" />
          </div>
      
          <div className='absolute right-0 bottom-0'>
            <img src="../img/Ellipse 307.png" className='w-20 sm:w-32 lg:w-40' alt="Ellipse 307" />
            <img src="../img/Ellipse 310.png" className='absolute right-0 top-0 w-10 sm:w-16 lg:w-20' alt="Ellipse 310" />
            <img src="../img/Titik-titik.png" className='absolute z-20 inset-x-24 sm:inset-x-32 lg:inset-x-52 bottom-0 w-10 sm:w-16 lg:w-20' alt="Titik-titik" />
          </div>
        </div>
      </div>
      
    )
}

export default Explore