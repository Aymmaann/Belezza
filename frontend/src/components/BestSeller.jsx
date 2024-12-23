import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller)
    setBestSeller(bestProducts.slice(0,5))
  }, [])

  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
        <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-sm sm:text-base text-darkbrown mt-3'>
                Shop our best sellers, loved for their unmatched style and quality.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                bestSeller.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} subcategory={item.subCategory} rating={item.rating} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller