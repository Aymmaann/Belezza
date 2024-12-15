import React, { useState } from 'react'
import Title from '../components/Title';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async(e) => {
    e.preventDefault();
  }

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw] pb-14'>
      <div className='border-t pt-14'>
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[100%] sm:max-w-[425px] m-auto gap-4 text-darkbrown bg-white py-12 px-10 rounded-xl lightShadow'>
          <div className='inline-flex items-center gap-2 mb-2 text-3xl font-medium'>
              <Title text1={currentState} text2={''} />
          </div>
          {currentState === 'Sign Up'? (
            <div className='w-full'>
              <p className='text-left text-[15px] font-medium'>Full Name</p>
              <input type='text' className=' mt-1 w-full px-3 py-2 border border-darkbrown rounded-md' placeholder='John Doe' required /> 
            </div>
          ): ''}
          <div className='w-full'>
            <p className='text-left text-[15px] font-medium'>Email Address</p>
            <input type="email" className=' mt-1 w-full px-3 py-2 border border-darkbrown rounded-md' placeholder='johndoe@gmail.com' required />
          </div>
          
          <div className="w-full">
            <p className='text-left text-[15px] font-medium'>Password</p>
            <input type="password" className='mt-1 w-full px-3 py-2 border border-darkbrown rounded-md' placeholder='johndoe@123' required />
          </div>
          <div className='w-full flex justify-between text-sm mt-[-3px]'>
            <p className='cursor-pointer font-semibold mt-3'>Forgot your password?</p>
            {
              currentState === 'Sign Up'? 
              <p onClick={() => setCurrentState('Login')} className='cursor-pointer font-semibold mt-3'>Login Here</p> 
              : <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer font-semibold mt-3'>Create Account</p>
            }
          </div>
          <button className='bg-darkbrown w-full text-gray-100 font-medium px-16 py-3 hover:bg-lightpink hover:text-darkbrown rounded-lg transition-all ease-in-out duration-200'>{currentState === "Sign Up"? 'Sign Up' : 'Login'}</button>
        </form>
      </div>
    </div>
  )
}

export default Login