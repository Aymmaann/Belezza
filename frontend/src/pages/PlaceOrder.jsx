import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const navigate = useNavigate(); 

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      <div className='flex flex-col md:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        <div className='flex flex-col gap-4 w-full md:max-w-[480px]'>
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>

          {/* Delivery Address Details */}
          <div className='flex gap-3'>
              <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='First Name' />
              <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='Last Name' />
          </div>

          <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='Email address' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='Street' />

          <div className='flex gap-3'>
              <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='City' />
              <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='State' />
          </div>

          <div className='flex gap-3'>
              <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='Zipcode' />
              <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='Country' />
          </div>

          <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full placeholder:text-[15px]' placeholder='Phone Number' />
        </div>

        {/* Payment Details */}
        <div className='mt-8 flex flex-col sm:flex-row sm:justify-around md:justify-start md:flex-col items-start mb-16'>
          <div className='mt-8 w-full sm:w-[300px] lg:w-[400px] min-w-80'>
            <CartTotal />
          </div>
          <div className='mt-9 md:mt-12'>
            <Title text1={'PAYMENT'} text2={'METHODS'} />
            <div className='flex flex-wrap gap-3 sm:flex-col xl:flex-row'>
              <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-3 px-3 cursor-pointer rounded-md'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe'? 'bg-green-400' : ''}`}></p>
                <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
              </div>

              <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-3 px-2 cursor-pointer rounded-md'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay'? 'bg-green-400' : ''}`}></p>
                <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
              </div>

              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-3 px-3 cursor-pointer rounded-md'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod'? 'bg-green-400' : ''}`}></p>
                <p className='text-darkbrown text-sm font-medium mx-2'>CASH ON DELIVERY</p>
              </div>
            </div>

            <div className='w-full text-start mt-8'>
              <button onClick={() => navigate('/orders')} className='w-full sm:w-[226px] lightShadow bg-darkbrown text-gray-100 font-semibold px-16 py-3 rounded-lg hover:bg-lightpink hover:text-darkbrown transition-all duration-200 ease-in-out'>Place Order</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder