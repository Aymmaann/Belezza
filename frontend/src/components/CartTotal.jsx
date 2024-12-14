import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

  return (
    <div className='w-full rounded-xl p-6 bg-white lightShadow text-darkbrown'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'} />
        </div>

        <div className='flex flex-col gap-2 mt-2 '>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {getCartAmount() === 0? 0 : delivery_fee}.00</p> 
            </div>
            <hr />
            <div className='flex justify-between font-semibold'>
                <p>Total</p>
                <p>{currency} {getCartAmount() === 0? 0 : getCartAmount()+delivery_fee}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal