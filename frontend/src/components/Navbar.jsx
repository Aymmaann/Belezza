import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch } = useContext(ShopContext);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
        <div className='flex bg-darkbrown w-full absolute left-0 py-2 sm:py-2.5 justify-center uppercase'>
            <p className='text-lightgray text-[10px] sm:text-[14px] font-medium'>Free Shipping for orders over 200$</p>
        </div>

        <div className='flex justify-between items-center py-5 font-medium pt-[41px] sm:pt-[51px] pb-[10px]'>
            <Link to="/">
                <img src={assets.logo} className='w-28 sm:w-40' alt=""/>
            </Link>

            <ul className='hidden md:flex gap-5 text-sm text-darkbrown'>
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-darkbrown hidden'/>
                </NavLink>

                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-darkbrown hidden'/>
                </NavLink>

                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-darkbrown hidden'/>
                </NavLink>

                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-darkbrown hidden'/>
                </NavLink>
            </ul>

            <div className='flex items-center gap-4 sm:gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-[18px] sm:w-5 cursor-pointer" alt="search" />

                <div className='group relative'>
                    <img src={assets.profile_icon} className="w-[18px] sm:w-5 cursor-pointer" alt="profile" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-lightgray text-darkbrown rounded-lg'>
                            <p className='cursor-pointer hover:text-orange-800 text-[14px]'>My Profile</p>
                            <p className='cursor-pointer hover:text-orange-800 text-[14px]'>Orders</p>
                            <p className='cursor-pointer hover:text-orange-800 text-[14px]'>Log Out</p>
                        </div>
                    </div>
                </div>

                <Link to="/cart" className='relative'>
                    <img src={assets.cart_icon} className='w-[18px] sm:w-5' alt="cart icon"/>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-darkbrown text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 md:hidden cursor-pointer' alt="" />

                {/* Sidebar */}
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
                    <div className='flex flex-col text-darkbrown '>
                        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer text-lightgray bg-darkbrown'>
                            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                            <p>Back</p>
                        </div>

                        <NavLink className="py-2 pl-6" to='/' onClick={() => setVisible(false)}>HOME</NavLink>
                        <NavLink className="py-2 pl-6" to='/collection' onClick={() => setVisible(false)}>COLLECTIONS</NavLink>
                        <NavLink className="py-2 pl-6" to='/about' onClick={() => setVisible(false)}>ABOUT US</NavLink>
                        <NavLink className="py-2 pl-6" to='/contact' onClick={() => setVisible(false)}>CONTACT</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar 