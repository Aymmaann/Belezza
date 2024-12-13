import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [displayDescription, setDisplayDescription] = useState(true);

  const fetchProductData = async() => {
    products.map(item => {
      if(item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    })
  }

  const clickImage = (clickedImage) => {
    document.querySelectorAll('.activeborder').forEach(image => {
      image.classList.remove('activeborder');
    });
    clickedImage.classList.add('activeborder');
    setImage(clickedImage.src);
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData? (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw] pb-16'>
      <div className='border-t pt-16 transition-opacity ease-in duration-500 opacity-100'> 
        <div className='flex gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 justify-end lg:flex-row md:gap-2 lg:gap-3'>
            {/* Product Images */}
            <div className='flex lg:flex-col overflow-x-auto lg:overflow-y-scroll justify-between lg:justify-normal lg:w-[18.7%] w-full'>
              {
                productData.image.map((img, index) => (
                  <img onClick={(e) => clickImage(e.target)} src={img} key={index} className='w-[24%] lg:w-full lg:mb-3 flex-shrink-0 cursor-pointer' />
                ))
              }
            </div>
            <div className='w-full lg:w-[80%]'>
              <img src={image} className='w-full h-auto' alt="" />
            </div>
          </div>

          {/* Product Info */}
          <div className='flex-1 text-darkbrown '>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

              <div className='flex items-center gap-1 mt-3'>
                <img src={assets.rating_star} alt="" className="w-4" />
                <img src={assets.rating_star} alt="" className="w-4" />
                <img src={assets.rating_star} alt="" className="w-4" />
                <img src={assets.rating_star} alt="" className="w-4" />
                <img src={assets.rating_star} alt="" className="w-4" />
                <p className='font-medium text-[14px] pl-2 pt-[1px]'>{productData.rating} (293)</p>
              </div>

              <p className='mt-5 text-2xl font-semibold'>{currency}{productData.price} 
                <span className='ml-3 text-xl line-through text-gray-400'>{currency}{productData.price + (productData.price/100)*30}</span>
              </p>

              <p className='mt-5 md:w-4/5 text-gray-500'>{productData.description}</p>

              <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2 text-gray-200'>
                    {
                      productData.sizes.map((item,index) => (
                         <button key={index} onClick={() => setSize(item)} className={`py-2 px-4 bg-darkbrown font-medium rounded ${item === size? 'bg-lightpink text-darkbrown' : ''}`}>{item}</button>
                      ))
                    }
                  </div>
              </div>
              <button className='bg-darkbrown text-gray-100 text-sm px-8 py-3 hover:bg-lightpink hover:text-darkbrown rounded transition-all ease-in-out duration-200'>Add to Cart</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original Product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
              </div>
          </div>
        </div>

        {/* Description and Review Section */}
        <div className='mt-14'>
            <div className='flex'>
                <p className={`px-5 py-3 text-sm cursor-pointer ${displayDescription? 'font-bold' : ''}`} onClick={() => setDisplayDescription(true)}>Description</p>
                <p className={`px-5 py-3 text-sm cursor-pointer ${!displayDescription? 'font-bold' : ''}`} onClick={() => setDisplayDescription(false)}>Reviews (293)</p>
            </div>
            <div className='rounded-md flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                {displayDescription? (
                  <div className='text-darkbrown'>
                    <p>At Belezza, we craft high-quality clothing that blends timeless elegance with modern trends. From everyday essentials to standout styles, our collection ensures comfort, durability, and effortless sophistication for every occasion.</p>
                    <p>We are committed to ethical practices, sustainability, and exceptional customer service. By choosing Belezza, you’re embracing quality fashion that respects both you and the environment.</p>
                  </div>
                ) : (
                  <div>
                     <div className='text-darkbrown'>
                      <div className='flex items-center gap-3'>
                        <img src={assets.rev_1} className='w-12 rounded-full' alt="" />
                        <p className='text-[16px] font-semibold'>Sophia Carter</p>
                      </div>
                      <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <p className='font-medium text-[14px] pl-2 pt-[1px]'>4.8</p>
                      </div>
                      <p className='mt-4'>"I absolutely love this product! The quality is exceptional, and the attention to detail is remarkable. It’s clear that a lot of thought went into designing something both stylish and durable. I’ve already recommended it to all my friends—definitely worth every penny!"</p>
                     </div>

                     <hr className='mt-8 '/>

                     <div className='text-darkbrown mt-6'>
                      <div className='flex items-center gap-3'>
                        <img src={assets.rev_2} className='w-12 rounded-full' alt="" />
                        <p className='text-[16px] font-semibold'>Ethan Rodriguez</p>
                      </div>
                      <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <img src={assets.rating_star} alt="" className="w-4" />
                        <p className='font-medium text-[14px] pl-2 pt-[1px]'>4.7</p>
                      </div>
                      <p className='mt-4'>"This is hands down one of the best purchases I’ve made! The material feels premium, and it fits perfectly. The customer service was also fantastic, ensuring a smooth shopping experience. I’m so impressed, I’ll be back for more soon!"</p>
                     </div>
                  </div>
                )}
            </div>
        </div>

        {/* Related Products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product