import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
        setCategory(prev => [...prev, e.target.value])
    }
  } 

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)) {
        setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
        setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search) {
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilteredProducts(productsCopy)
  }

  const sortProducts = () => {
    let productsCopy = filteredProducts.slice();

    switch(sortType) {
        case 'low-high':
            setFilteredProducts(productsCopy.sort((a,b) => (a.price - b.price)));
            break;

        case 'high-low':
            setFilteredProducts(productsCopy.sort((a,b) => (b.price - a.price)));
            break;

        default: 
            applyFilter();
            break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category,subCategory,search,showSearch])

  useEffect(() => {
    sortProducts();
  }, [sortType])
 
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw] pb-16'>
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-8 sm:pt-14 border-t'>
            {/* Filters */}
            <div className='min-w-44 md:min-w-48 lg:min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>FILTERS
                    <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter? 'rotate-90' : ''}`} alt="" />
                </p>
                {/* Categories */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? '' : ' hidden'} sm:block rounded-md`}>
                    <p className='mb-3 text-sm font-medium'>CATEGEORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-darkbrown'>
                        <p className='flex gap-2'>
                            <input type="checkbox"  className='w-3' value={'Men'} onChange={toggleCategory} /> Men
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox"  className='w-3' value={'Women'} onChange={toggleCategory} /> Women
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox"  className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids
                        </p>
                    </div>
                </div>

                {/* Sub Categories */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? '' : ' hidden'} sm:block rounded-md`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-darkbrown'>
                        <p className='flex gap-2'>
                            <input type="checkbox"  className='w-3' value={'Topwear'} onChange={toggleSubCategory} /> Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox"  className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox"  className='w-3' value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
                        </p>
                    </div>
                </div>
            </div>

            {/* All Collections */}
            <div className='flex flex-col mb-16'>
                <div className='pb-8 text-3xl'>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <Title text1={'ALL'} text2={'COLLECTIONS'}/>

                        <select onChange={(e) => setSortType(e.target.value)} className='border-[1px] border-gray-300 text-sm px-2 rounded-md py-2 w-[179px]outline-none'>
                            <option value="relavent">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>

                    {
                        filteredProducts.length > 0? (
                            <p className='w-full lg:w-3/4 text-left text-xs sm:text-sm md:text-base text-darkbrown mt-3'>
                                Explore Belezza's exclusive collections, where timeless elegance meets modern trends.
                            </p>
                        ) : (
                            <p className='w-full lg:w-3/4 text-left text-xs sm:text-sm md:text-base text-darkbrown mt-3'>
                                Sorry, no matching results found. Please try adjusting your search or explore our latest collections!
                            </p>
                        )
                    }
                </div>

                <div className='mt-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filteredProducts.map((item,index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} subcategory={item.subCategory} rating={item.rating} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection