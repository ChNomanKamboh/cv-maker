import React, { useState } from 'react';
import { useSignUpMutation } from '../services/authApi';

function SignUp({ onClick }) {
  const [signUp] = useSignUpMutation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/jobseeker');
      const users = await response.json();

    
      const existingUser = users.find(user => user.email === formData.email);

      if (existingUser) {
        alert('User already has an account with this email.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          image: '',
          password: '',
        });
      } else {
        
        await signUp(formData).unwrap();
        alert('User registered successfully!');

        
        setFormData({
          name: '',
          email: '',
          phone: '',
          image: '',
          password: '',
        });
      }
    } catch (error) {
      alert('Failed to register: ' + error.message);
    }
  };

  return (
    <div className='w-full mx-auto mt-5 py-3 flex flex-wrap xl:flex-nowrap xl:overflow-hidden'>
  
  <img 
    src="../img/Ellipse 6 (Stroke).png" 
    className='mt-10 h-32 md:h-36 xl:h-44 mx-auto xl:mx-0 animation-pulse' 
    alt="Ellipse decoration" 
  />


  <div className='pt-10 md:pt-16 xl:pt-[103px] mx-4 text-center xl:text-left'>
    <h1 className='text-3xl md:text-4xl xl:text-6xl leading-tight md:leading-normal xl:leading-[76px] font-extrabold w-full xl:w-[613px]'>
      Find Your <span className='text-[#635EA3]'>Blockchain Dev</span> Job Today
    </h1>
    <p className='text-lg md:text-xl xl:text-2xl w-full xl:w-[519px] mt-4 md:mt-7 text-[#767676]'>
      Discover the leading companies in the blockchain industry and find job opportunities.
    </p>
    <button 
      onClick={onClick} 
      className='text-white btn mt-6 md:mt-8 rounded-xl px-6 md:px-12 xl:px-[148.86px] py-3 text-sm leading-6 capitalize bg-[#635EA3]'
    >
      Login Now
    </button>
  </div>

  <div className='pt-10 md:pt-16 xl:pt-[103px] px-4 md:px-12 xl:px-24 relative pb-6 w-full xl:w-auto '>                                   
    <div 
      style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }} 
      className='bg-white max-h-full md:max-h-[680px] w-full max-w-md md:max-w-[432px] relative z-10 mx-auto xl:mx-0 rounded-xl'
    >
      <div className='flex pt-8 px-6 md:px-12'>
        <h2 className='font-bold text-xl md:text-2xl uppercase mr-8 tracking-wider'>Sign Up</h2>
        <button className='text-sm font-bold border border-[#635AE3] px-3 text-white capitalize bg-[#635AE3] rounded-l-md'>
          Job Seeker
        </button>
        <button className='text-sm font-bold border border-[#635AE3] px-3 rounded-r-md text-[#767676] capitalize'>
          Employer
        </button>
      </div>
      <div className='px-6 md:px-12 py-6 md:py-12'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 relative'>
            <label className='block font-normal text-sm tracking-wide mb-2'>Name<span className='text-red-500'>*</span></label>
            <input
              className='w-full pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
              type="text"
              placeholder='Enter Name'
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className='mb-4 relative'>
            <label className='block font-normal text-sm tracking-wide mb-2'>Email<span className='text-red-500'>*</span></label>
            <input
              className='w-full pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
              type="email"
              placeholder='Enter Email'
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className='mb-4 relative'>
            <label className='block font-normal text-sm tracking-wide mb-2'>Phone No<span className='text-red-500'>*</span></label>
            <input
              className='w-full pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
              type="number"
              placeholder='Enter Phone No'
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </div>
          <div className='mb-4 relative'>
            <label className='block font-normal text-sm tracking-wide mb-2'>Image<span className='text-red-500'>*</span></label>
            <input
              className='w-full pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
              type="text"
              placeholder='Enter Image URL'
              name="image"
              onChange={handleChange}
              value={formData.image}
              required
            />
          </div>
          <div className='mb-4 relative'>
            <label className='block font-normal text-sm tracking-wide mb-2'>Password<span className='text-red-500'>*</span></label>
            <input
              className='w-full pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
              type="password"
              placeholder='Enter Password'
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>
          <div className='flex justify-center flex-col items-center'>
            <button type="submit" className='text-center btn text-white bg-[#635EA3] w-full py-3.5 rounded-xl'>
              Register Now
            </button>
          </div>
        </form>
        <p className='w-full relative text-center my-4 text-xs text-[#767676]'>
          <span className='before:inline-block before:content-[""] before:absolute before:h-0.5 before:w-24 before:left-0 before:top-2 before:bg-[#767676]'></span>
          or sign up with
          <span className='after:inline-block after:content-[""] after:absolute after:h-0.5 after:w-24 after:right-0 after:top-2 after:bg-[#767676]'></span>
        </p>
        <div className='flex justify-center mb-7'>
          <button className='px-6 py-2 border mr-2'>
            <img src="../img/search 1.png" alt="Google" />
          </button>
          <button className='px-6 py-2 border'>
            <img src="../img/facebook 3.png" height={13} width={13} alt="Facebook" />
          </button>
        </div>
      </div>
    </div>
    <img 
      src="../img/Ellipse 2.png" 
      className='w-full max-w-xs md:max-w-md xl:max-w-lg absolute bottom-0 right-0' 
      alt="Ellipse decoration" 
    />
  </div>
</div>

  );
}

export default SignUp;
