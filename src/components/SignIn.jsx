import React, { useState } from 'react';
import { useGetUserQuery } from '../services/authApi';

function SignIn({ onClick }) {
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const { isLoading, isError, isSuccess, data: users } = useGetUserQuery();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const findedUser = users.find((ele) => ele.email === formData.loginEmail);

    if (findedUser) {
      const checkPassword = findedUser.password === formData.loginPassword;
      if (checkPassword) {
        
        alert('User login successful!');
        setFormData({
          loginEmail: '',
          loginPassword: '',
        });
        setErrors({
          email: '',
          password: '',
        });
      } else {
        setErrors({
          ...errors,
          password: 'Password is incorrect',
        });
        setFormData({ ...formData, loginPassword: '' });
      }
    } else {
      setErrors({
        email: 'User not found',
        password: '',
      });
      setFormData({ loginEmail: '', loginPassword: '' });
    }
  };

  return (
    <div className='mt-5 py-3 flex flex-wrap xl:flex-nowrap xl:overflow-hidden'>
      
      <img 
        src="../img/Ellipse 6 (Stroke).png" 
        className='mt-10 h-44 mx-auto xl:mx-0 xl:mt-0 xl:h-44 sm:h-32 animate-pulse' 
        alt="" 
      />
    
      
      <div className='pt-10 md:pt-16 xl:pt-[103px] mx-4 text-center xl:text-left'>
        <h1 className='text-3xl md:text-5xl xl:text-6xl leading-[1.2] font-extrabold w-full xl:w-[613px]'>
          Find Your <span className='text-[#635EA3]'>Blockchain Dev</span> Job Today
        </h1>
        <p className='text-lg md:text-xl xl:text-2xl w-full xl:w-[519px] mt-5 md:mt-7 text-[#767676]'>
          Discover the leading companies in the blockchain industry and find job opportunities.
        </p>
        <button 
          className='text-white bg-[#635EA3] btn mt-6 md:mt-8 rounded-xl px-8 md:px-12 xl:px-[148.86px] py-3 text-sm md:text-base xl:text-sm leading-6 capitalize'
          onClick={onClick}
        >
          Sign Up Now
        </button>
      </div>
    
      
      <div className='pt-10 md:pt-16 xl:pt-[103px] px-4 md:px-12 xl:px-24 relative pb-6 w-full xl:w-auto'>
        <div 
          style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }} 
          className='bg-white max-h-full md:max-h-[598px] w-full max-w-md md:max-w-[432px] relative z-10 mx-auto xl:mx-0 rounded-xl'
        >
          <div className='flex pt-8 px-6 md:px-12'>
            <h2 className='font-extrabold text-xl md:text-2xl uppercase mr-8 tracking-wider'>Login</h2>
            <button className='text-sm font-bold border border-[#635AE3] px-3 text-white capitalize bg-[#635AE3] rounded-l-md'>
              Job Seeker
            </button>
            <button className='text-sm font-bold border border-[#635AE3] px-3 rounded-r-md text-[#767676] capitalize'>
              Employer
            </button>
          </div>
          <div className='px-6 md:px-12 py-6 md:py-12'>
            <form onSubmit={handleSubmit}>
              <div className='mb-6 relative'>
                <label className='block font-normal text-sm tracking-wide mb-2'>Email<span className='text-red-500'>*</span></label>
                <input
                  placeholder='Enter your email'
                  type="email"
                  name='loginEmail'
                  value={formData.loginEmail}
                  onChange={handleChange}
                  className={`pl-5 w-full h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border ${errors.email ? 'border-red-500' : ''}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className='mb-6 relative'>
                <label className='block font-normal text-sm tracking-wide mb-2'>Password<span className='text-red-500'>*</span></label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  name='loginPassword'
                  value={formData.loginPassword}
                  onChange={handleChange}
                  className={`pl-5 w-full h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border ${errors.password ? 'border-red-500' : ''}`}
                  required
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div className='flex justify-center flex-col items-center'>
                <button 
                  type="submit" 
                  className='text-center btn text-white bg-[#635EA3] w-full py-3.5 rounded-xl'
                >
                  Login Now
                </button>
              </div>
            </form>
            <p className='w-full relative text-center my-4 text-xs text-[#767676]'>
              <span className='before:inline-block before:content-[""] before:absolute before:h-0.5 before:w-24 before:left-0 before:top-2 before:bg-[#767676]'></span>
              or sign in with
              <span className='after:inline-block after:content-[""] after:absolute after:h-0.5 after:w-24 after:right-0 after:top-2 after:bg-[#767676]'></span>
            </p>
            <div className='flex justify-center mb-7'>
              <button className='px-6 py-2 border mr-2'>
                <img src="../img/search 1.png" alt="1" />
              </button>
              <button className='px-6 py-2 border'>
                <img src="../img/facebook 3.png" height={13} width={13} alt="2" />
              </button>
            </div>
          </div>
        </div>
        <img 
          src="../img/Ellipse 2.png" 
          className='w-full max-w-xs md:max-w-md xl:max-w-lg absolute bottom-0 right-0``' 
          alt="" 
        />
      </div>
    </div>
  );
}

export default SignIn;
