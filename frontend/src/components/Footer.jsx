import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-darkbrown py-1 mt-2'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
            <div className='flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-16 text-sm'>
                <div>
                    <img src={assets.logo_dark} className='mb-5 w-40' alt="" />
                    <p className='w-full lg:w-2/3 text-gray-200'>
                    At Belezza, we blend elegance and contemporary fashion to bring you timeless collections crafted with care. Our mission is to celebrate individuality and empower you to express your unique style with confidence. Experience quality, comfort, and sophistication in every piece.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 text-white'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-200'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-200'>
                        <li>+1-890-791-2255</li>
                        <li>belezza@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div >
                <hr className='border-gray-200'/>
                <p className='py-5 text-sm text-center text-white'>Copyright 2024@ Belezza.com - All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer