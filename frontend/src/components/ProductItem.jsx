import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductItem = ({id, image, name, price, subcategory, rating}) => {
  const { currency } = useContext(ShopContext);
  const oldPrice = price + (price/100)*30;

  return (
    <Link className='text-darkbrown cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden rounded'>
            <img src={image[0]} className='hover:scale-105 transition ease-in-out' alt="" />
        </div>

        <div className='flex justify-between items-center mt-2'>
            <p className='text-[14px] text-gray-500'>{subcategory}</p>
            <p className='flex items-center justify-center gap-2 text-[14px] font-medium'><img src={assets.rating_star} className='w-4' alt="" />{rating}</p>
        </div>

        <p className='pt-2 pb-1 text-sm font-medium'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price} <span className='ml-1 line-through text-gray-400'>{currency}{oldPrice}</span></p>
    </Link>
  )
}

export default ProductItem;