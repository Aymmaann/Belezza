import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-14 md:py-20 text-sm sm:text-base text-darkbrown '>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold text-black'>Easy Exchange Policy</p>
                <p className='text-gray-400 text-[13px] md:text-[15px]'>We offer hassle free exchange policy</p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold text-black'>7 Days Return Policy</p>
                <p className='text-gray-400 text-[13px] md:text-[15px]'>We provide 7 days free return policy</p>
            </div>

            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold text-black'>Best Customer Support</p>
                <p className='text-gray-400 text-[13px] md:text-[15px]'>We provide 24/7 customer support</p>
            </div>
        </div>
    </div>
  )
}

export default Policy