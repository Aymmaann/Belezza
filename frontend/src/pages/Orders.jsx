import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw] pb-16'>
        <div className='border-t pt-16'>
          <div className='text-2xl'>
            <Title text1={'MY'} text2={'ORDERS'} />
          </div>

          <div className='mt-2'>
            {
              products.slice(0,4).map((item,index) => (
                <div key={index} className='lightShadow p-4 mb-4 bg-lightgray rounded-xl text-darkbrown flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div className='flex items-start gap-6 text-xs'>
                    <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                    <div>
                      <p className='font-medium text-base'>{item.name}</p>
                      <div className='flex items-center gap-3 mt-2 text-sm'>
                        <p className='text-lg'>{currency}{item.price}</p>
                        <p>Quantity: 1</p>
                        <p>Size: M</p>
                      </div>
                      <p className='mt-4'>Date: <span className='text-gray-600'>25 July 2024</span></p>
                    </div>
                  </div>

                  <div className='md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                      <p className='min-w-3 h-3 rounded-full bg-green-500'></p>
                      <p className='text-sm md:text-base font-medium'>Ready to Ship</p>
                    </div>
                    <button className='bg-darkbrown text-gray-100 px-4 py-2 text-sm font-medium rounded-lg hover:bg-lightpink hover:text-darkbrown transition-all ease-in-out duration-200'>Track Order</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Orders