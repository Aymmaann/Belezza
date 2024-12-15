import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]) {
        if(cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return cartData.length > 0? (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw] pb-16'>
      <div className='border-t pt-14 flex-col'>
        <div className='text-2xl mb-3'>
          <Title text1={'YOUR'} text2={'CART'} />
        </div>
        <div className='lg:flex md:gap-6 justify-between'>
          <div>
            {
              cartData.map((item, index) => {
                const productData = products.find(product => product._id === item._id)
                return (
                  <div key={index} className='lightShadow p-4 mb-4 bg-lightgray rounded-xl text-darkbrown grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                    <div className='flex items-start gap-6'>
                      <img src={productData.image[0]} className='w-16 sm:w-20 ' alt="" />
                      <div>
                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                        <div className='flex items-center gap-5 mt-2'>
                            <p className='text-[18px]'>{currency}{productData.price}</p>
                            <p className='px-2 sm:px-3 sm:py-1 bg-darkbrown text-gray-100 rounded'>{item.size}</p>
                        </div>
                      </div>
                    </div>
                    <input onChange={(e) => e.target.value === '' || e.target.value === '0'? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded font-medium' type="number" min={1} defaultValue={item.quantity} />
                    <div onClick={() => updateQuantity(item._id, item.size, 0)} className='p-3 rounded-full hover:bg-lightpink transition-all ease-in-out duration-100'>
                      <img src={assets.bin_icon} className='w-4 sm:w-5 cursor-pointer' alt="" />
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='flex justify-center my-12 lg:my-0 rounded-lg '>
            <div className='w-full sm:w-[450px] lg:w-[400px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button onClick={() => navigate('/place-order')} className='lightShadow bg-darkbrown w-full text-gray-100 font-semibold mt-8 px-8 py-3 rounded-lg hover:bg-lightpink hover:text-darkbrown transition-all duration-200 ease-in-out'>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw] pb-16'>
      <div className='border-t pt-14 flex-col'>
        <div className='text-2xl mb-3'>
          <Title text1={'YOUR'} text2={'CART'} />
        </div>
        <div className='lg:flex md:gap-6 justify-between'>
          <div className='w-full lg:w-[500px] flex flex-col items-center text-darkbrown py-10 px-14 rounded-xl lg:lightShadow'>
            <img src={assets.emptyCart} className='w-[300px]' alt="" />
            <p className='font-medium text-center text-[24px] mt-5'>Your cart is empty</p>
            <p className='text-center mt-3'>Looks like you have not added anything to your cart yet. Go ahead and explore our top collections.</p>
          </div>

          <div className='flex justify-center my-12 lg:my-0 rounded-lg '>
            <div className='w-full sm:w-[450px] lg:w-[400px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button onClick={() => navigate('/place-order')} className='lightShadow bg-darkbrown w-full text-gray-100 font-semibold mt-8 px-8 py-3 rounded-lg hover:bg-lightpink hover:text-darkbrown transition-all duration-200 ease-in-out'>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart