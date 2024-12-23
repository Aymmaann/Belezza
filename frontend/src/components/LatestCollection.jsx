import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [ latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  }, [])

  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-sm sm:text-base text-darkbrown mt-3'>
                Discover the perfect blend of style and comfort with our handpicked latest arrivals at Belezza.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                latestProducts.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} subcategory={item.subCategory} rating={item.rating} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection