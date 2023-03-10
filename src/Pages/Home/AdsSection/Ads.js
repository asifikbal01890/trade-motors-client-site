import React from 'react';
import { FaClipboardList, FaMotorcycle, FaRegClock, FaUser } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Ads = ({ adsInfo }) => {
    const {
        id,
        picture,
        description,
        name,
        sellerName,
        resalePrice,
        originalPrice,
        category,
        location,
        use,
        time,
        mobileNumber,
        condition
    } = adsInfo;
    return (
        <div>
            <div className="hero">
                <div className="hero-content h-full flex-col gap-16 lg:flex-row-reverse">
                    <div className='lg:w-[60%] h-full bg-base-200'>
                    <figure className='h-full flex justify-center items-center relative'><img src={picture} alt="Shoes" className='w-[90%]' />
                        <div className='flex justify-center absolute items-center h-[100%] w-full font-[Oswald] duration-500 hover:bg-black hover:bg-opacity-60 z-50 blog-img'>
                            <div className='w-[100%] h-[100%] flex justify-center duration-1000 translate-y-0 hover:translate-y-24'>
                            <Link to={`/bikes/${id}`}><p className='w-[100px] py-5 text-secondary side-text text-img text-2xl uppercase'>buy now</p></Link>
                            </div>
                        </div>
                    </figure>
                        {/* <img src={picture} className="rounded-lg w-[90%]" alt='' /> */}
                    </div>
                    <div className='lg:w-[40%]'>
                        <div className='flex justify-between items-start'>
                            <div className='text-start'>
                                <h1 className='font-[Oswald] uppercase text-xl'>{name}</h1>
                                <small className='uppercase'>Posted by {sellerName}</small>
                            </div>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" checked />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-4'>
                            <p className='font-[Oswald] text-lg flex items-center'>New Price: <span className='text-primary text-2xl ml-2'>${originalPrice}</span></p>
                            <p className='font-[Oswald] text-lg flex items-center'>Resale Price: <span className='text-primary text-2xl ml-2'>${resalePrice}</span></p>
                        </div>
                        <p className="pb-6 pt-2 text-start">{description.slice(0, 230)}...</p>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='flex items-start gap-1'>
                                        <p className='text-2xl'><MdLocationOn></MdLocationOn></p>
                                        <div className='text-start'>
                                            <p className='font-[Heebo] uppercase text-lg'>Location</p>
                                            <p>{location}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-2 my-4'>
                                        <p className='text-xl'><FaRegClock></FaRegClock></p>
                                        <div className='text-start'>
                                            <p className='font-[Heebo] uppercase text-lg'>Post Time</p>
                                            <p>{time}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-2'>
                                        <p className='text-xl'><IoCall></IoCall></p>
                                        <div className='text-start'>
                                            <p className='font-[Heebo] uppercase text-lg'>Contact</p>
                                            <p>{mobileNumber}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-start gap-2'>
                                        <p className='text-2xl'><FaMotorcycle></FaMotorcycle></p>
                                        <div className='text-start'>
                                            <p className='font-[Heebo] uppercase text-lg'>Category</p>
                                            <p>{category}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-2 my-4 pl-1'>
                                        <p className='text-xl'><FaUser></FaUser></p>
                                        <div className='text-start'>
                                            <p className='font-[Heebo] uppercase text-lg'>Used</p>
                                            <p>{use}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-2 pl-1'>
                                        <p className='text-xl'><FaClipboardList></FaClipboardList></p>
                                        <div className='text-start'>
                                            <p className='font-[Heebo] uppercase text-lg'>Condition</p>
                                            <p>{condition}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ads;