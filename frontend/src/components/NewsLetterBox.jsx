import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='text-center px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw] pb-16'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Stay updated with Belezza—subscribe to our newsletter for the latest trends and exclusive offers!</p>

        <form className='w-full sm:w-3/4 lg:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-xl' onSubmit={onSubmitHandler}>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button className='bg-darkbrown text-white px-8 py-3 rounded-r-xl' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox