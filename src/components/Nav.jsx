import React from 'react';

function Nav() {
    return (
        <div className='py-6'>
            <nav className=' px-8 flex lg:justify-between justify-center'>
                <img src="../img/image 1.png" alt="" className='mb-4 lg:mb-0' />
                <div className='flex-row  items-center lg:block hidden'>

                    <button className='border-2 py-2 px-4 lg:py-3 lg:px-6 mb-2 lg:mb-0 capitalize rounded-xl hover:bg-[#635EA3] hover:text-white border-[#635EA3] text-[#635EA3]'>
                        Create Profile
                    </button>

                    <button className='mx-0 lg:mx-4 py-2 lg:py-3.5 rounded-xl bg-[#635EA3] hover:bg-white border-2 hover:text-[#635EA3] hover:border-[#635EA3] capitalize text-white px-4 lg:px-6'>
                        Employer
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Nav;