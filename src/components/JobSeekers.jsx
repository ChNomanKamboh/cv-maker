import React from 'react'

function JobSeekers() {
    return (
        <div className='relative flex flex-col xl:flex-row py-10 px-4 xl:py-[155px] xl:pl-16 xl:gap-52'>
  {/* First Image Section */}
  <div className='flex justify-center xl:justify-start mb-8 xl:mb-0'>
    <img src="../img/Frame.png" alt="frame" className='w-full max-w-xs md:max-w-sm xl:max-w-none' />
  </div>

  {/* Text and List Section */}
  <div className='flex flex-col items-center xl:items-start text-center xl:text-left'>
    <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[#373737] mb-8 xl:mb-14'>
      Job Seekers
    </h2>
    <ul className='space-y-6 xl:space-y-9'>
      <li className='text-sm md:text-base'>
        <span className='inline-block border-t-2 border-[#635AE3]'>Apply</span> for a job with one click after completing your profile
      </li>
      <li className='text-sm md:text-base'>
        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> CV templates - Many to choose from
      </li>
      <li className='text-sm md:text-base'>
        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> exports to pdf
      </li>
      <li className='text-sm md:text-base'>
        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> profile and access to jobs
      </li>
    </ul>
  </div>

  {/* Decorative Image Section */}
  <div className='absolute inset-x-0 bottom-0 xl:right-0 xl:top-auto xl:left-auto xl:inset-0 flex justify-center xl:justify-end z-0'>
    <img 
      src="../img/Group 237838.png" 
      className='w-full max-w-xs md:max-w-sm xl:max-w-none opacity-50 xl:opacity-100' 
      alt="decorative background" 
    />
  </div>
</div>

    )
}

export default JobSeekers