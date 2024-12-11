import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-lightpink'>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-darkbrown '>
                <div className='items-center px-4 py-1 rounded-full bg-lightgray text-darkbrown w-auto inline-block mb-5'>
                    <span className='text-[14px] sm:text-[16px]'>
                        <span><img src={assets.sale_icon} className='w-5 rounded-full float-left mr-2 mt-[2px]' alt="" /></span>
                        <span className='font-bold'>30% OFF</span> Summer Super Sale
                    </span>
                </div>

                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-darkbrown'></p>
                    <p className='font-medium text-lg md:text-xl'>OUR BESTSELLERS</p>
                </div>

                <h1 className='text-[40px] sm:text-4xl md:text-[44px] py-1.5 lg:text-6xl lg:py-3 leading-relaxed'>Latest Arrivals</h1>

                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-darkbrown'></p>
                </div>
            </div>
        </div>

        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>  
  )
}

export default Hero