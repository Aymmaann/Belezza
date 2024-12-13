import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({category, subCategory}) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if(products.length > 0) {
        let filteredProducts = products.slice();
        filteredProducts = filteredProducts.filter(product => product.category === category)
        filteredProducts = filteredProducts.filter(product => product.subCategory === subCategory).slice(0,5)
        setRelatedProducts(filteredProducts);
    }
  }, [products])

  return (
    <div className='mt-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>   
            <p className='w-3/4 m-auto text-sm sm:text-base text-darkbrown mt-3'>
                Discover more styles you’ll love with our handpicked related products.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                relatedProducts.map((product,index) => (
                    <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} subcategory={product.subCategory} rating={product.rating} />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts