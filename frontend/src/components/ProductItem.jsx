import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductItem = ({id, image, name, price, subcategory}) => {
  const { currency } = useContext(ShopContext);
  const rating = (Math.random() * (5 - 3.9) + 3.9).toFixed(1);

  return (
    <Link className='text-darkbrown cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden'>
            <img src={image[0]} className='hover:scale-105 transition ease-in-out' alt="" />
        </div>

        <div className='flex justify-between items-center mt-2'>
            <p className='text-[14px]'>{subcategory}</p>
            <p className='flex items-center justify-center gap-2 text-[14px] font-medium'><img src={assets.rating_star} className='w-4' alt="" />{rating}</p>
        </div>

        <p className='pt-2 pb-1 text-sm font-medium'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem