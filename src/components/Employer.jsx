import React from 'react'

function Employer() {
    return (
        <div className='relative flex flex-col xl:flex-row py-10 px-4 xl:pt-[155px] xl:pl-16 xl:gap-32'>
  {/* Decorative Image Section */}
  <div className='absolute inset-x-0 top-0 xl:left-0 xl:inset-0 flex justify-center xl:justify-start z-0'>
    <img 
      src="../img/Group 237845.png" 
      className='w-full max-w-xs md:max-w-sm xl:max-w-none opacity-50 xl:opacity-100' 
      alt="decorative background" 
    />
  </div>

  {/* Text and List Section */}
  <div className='relative flex flex-col items-center xl:items-start text-center xl:text-left z-10 pl-0 xl:pl-72'>
    <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[#373737] mb-8 xl:mb-14'>
      Employers
    </h2>
    <ul className='space-y-6 xl:space-y-9 w-[417px]'>
      <li className='text-sm md:text-base'>
        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> job posting
      </li>
      <li className='text-sm md:text-base'>
        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> View candidates before deciding which are a good fit
      </li>
      <li className='text-sm md:text-base'>
        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> One format for profile/resume makes it easier to see all the key points for evaluating a candidate within seconds
      </li>
    </ul>
  </div>

  {/* Frame Image Section */}
  <div className='relative flex justify-center xl:justify-end z-10'>
    <img 
      src="../img/Frame (1).png" 
      alt="frame" 
      className='w-full max-w-xs md:max-w-sm xl:max-w-none'
    />
  </div>
</div>

    )
}

export default Employer