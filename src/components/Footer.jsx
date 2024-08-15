import React from 'react'

function Footer() {
    return (
        <footer className='pt-40 px-16'>
           <div className='flex xl:flex-nowrap md:flex-wrap sm:flex-wrap '>
           <div className='flex w-full justify-around'>
                <ul>
                    <li className='leading-7 font-semibold mb-4'>Services</li>
                    <li className='mb-2.5'>Web Development</li>
                    <li className='mb-2.5'>App Development</li>
                    <li className='mb-2.5'>Game Development</li>
                    <li className='mb-2.5'>Graphic Designing</li>
                    <li className='mb-2.5'>UI/Ux Design</li>
                    <li className='mb-2.5'>Domain & Hosting</li>
                </ul>
                <ul>
                    <li className='leading-7 font-semibold mb-4'>Company</li>
                    <li className='mb-2.5'>Vvork cloud tech</li>
                    <li className='mb-2.5'>Web Soul</li>
                    <li className='mb-2.5'>Web Devers</li>
                </ul>
                <ul>
                    <li className='leading-7 font-semibold mb-4'>About</li>
                    <li className='mb-2.5'>Company repo</li>
                    <li className='mb-2.5'>Projects</li>
                    <li className='mb-2.5'>Enviornment</li>
                    <li className='mb-2.5'>Servises</li>
                </ul>
                <ul>
                    <li className='leading-7 font-semibold mb-4'>Links</li>
                    <li className='mb-2.5'>LinkedIn</li>
                    <li className='mb-2.5'>Whatsapp</li>
                    <li className='mb-2.5'>Instagram</li>
                    <li className='mb-2.5'>Twiter</li>
                </ul>

            </div>
            <div className='ml-4 p-8 subscribe'>
                <h2 className='fint-semibold '>Subscribe</h2>
                <button className='relative text-xs text-white py-5 btnLinear overflow-hidden mt-4'>
                 Email address
                 <i className="fa-solid fa-arrow-right py-3 px-4 bg-white text-black text-lg absolute top-0 right-0"></i>
                </button>
                <p className='text-xs text-gray-600 leading-5 mt-5'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
            </div>
           </div>
            <hr />
            <div className='py-3.5 flex items-center justify-between px-20'>
                <img src="../img/image 1.png" alt="logo" />
                <ul className='flex gap-5'>
                    <li className='text-xs text-[#635EA3]'>Terms</li>
                    <li className='text-xs text-[#635EA3]'>Privacy</li>
                    <li className='text-xs text-[#635EA3]'>Cookies</li>
                </ul>
                <div>
                <i className="fa-brands fa-linkedin-in rounded-full py-3.5 px-4 border border-[#635EA3] text-[#635EA3]"></i>
                <i className="fa-brands fa-facebook-f rounded-full py-3.5 px-4 border border-[#635EA3] text-[#635EA3]"></i>
                <i className="fa-brands fa-twitter rounded-full py-3.5 px-3.5 border border-[#635EA3] text-[#635EA3]"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer