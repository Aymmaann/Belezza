import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      <div>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mg-28'>
          <img src={assets.contact_img} className='w-full md:max-w-[360px] lg:max-w-[480px]' alt="" />
          <div className='flex flex-col justify-center items-start gap-6 text-darkbrown'>
            <p className='font-semibold text-xl'>Our Store</p>
            <p>54709 Wills Station <br /> Suite 350, Birmingham, UK</p>
            <p>Tel: (415) 555-0132 <br /> Email: belezza@gmail.com</p>
            <p className='font-semibold text-xl'>Careers at Belezza</p>
            <p>Learn more about our teams and job openings.</p>
            <button className='bg-darkbrown text-gray-100 font-medium px-10 py-3 hover:bg-lightpink hover:text-darkbrown rounded-lg transition-all ease-in-out duration-200 text-sm'>Explore Jobs</button>
          </div>
        </div>

        <div className='pt-8'>
          <NewsLetterBox />
        </div>
      </div>
    </div>
  )
}

export default Contact