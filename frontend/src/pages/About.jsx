import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      <div>
        <div className='text-2xl tetx-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col lg:flex-row gap-16'>
          <img src={assets.about_img} className='w-full max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 lg:w-2/4 text-darkbrown'>
            <p>Welcome to Belezza, where fashion meets individuality. We believe clothing is more than fabric—it's self-expression. Our collections blend timeless elegance with modern trends, offering pieces that make you feel confident and effortlessly chic..</p>
            <p>Born from a passion for style and quality, Belezza celebrates your unique essence. With diverse designs, sustainable practices, and a focus on customer satisfaction, we aim to inspire confidence and creativity in every outfit. Thank you for making Belezza a part of your journey!</p>
            <strong className='text-darkbrown'>Our Mission</strong>
            <p>At Belezza, our mission is to empower individuals through fashion. We strive to provide high-quality, stylish, and sustainable clothing that celebrates diversity and inspires confidence. By blending innovation with timeless design, we aim to create a positive impact on both our customers and the planet.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20 gap-6'>
          <div className='px-7 md:px-5 py-8 sm:py-8 flex flex-col gap-5 bg-darkbrown rounded-xl items-center justify-start lightShadow'>
            <strong className='text-white text-lg text-center'>Quality Assurance:</strong>
            <p className='text-gray-200 text-center'>We are committed to delivering exceptional quality, ensuring every Belezza piece is crafted with care and precision.</p>
          </div>

          <div className='px-7 md:px-5 py-8 sm:py-8 flex flex-col gap-5 bg-darkbrown rounded-xl items-center justify-start lightShadow'>
            <strong className='text-white text-lg text-center'>Convenience:</strong>
            <p className='text-gray-200 text-center'>Belezza offers effortless shopping with stylish, comfortable clothing delivered right to your doorstep.</p>
          </div>

          <div className='px-3 md:px-5 py-8 sm:py-8 flex flex-col gap-5 bg-darkbrown rounded-xl items-center justify-start lightShadow'>
            <strong className='text-white text-lg text-center'>Customer Service:</strong>
            <p className='text-gray-200 text-center'>We’re here to ensure your shopping experience is seamless, enjoyable, and tailored to your needs.</p>
          </div>
        </div>

        <NewsLetterBox />
      </div>
    </div>
  )
}

export default About