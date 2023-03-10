import React from 'react';
import { toast } from 'react-hot-toast';
import './BikeCard.css';

const BikeCard = ({ bike, setProduct }) => {
    const { picture, _id, name, resalePrice, originalPrice, sellerName, location, category, condition, description, use, time, mobileNumber } =  bike;


    const handleButtonAds = () =>{
        const bikeAds = {
            id: _id,
            name, 
            picture,
            location, 
            resalePrice,
            originalPrice, 
            condition,
            category, 
            description, 
            use,
            time,
            mobileNumber,
            sellerName, 
        }
        

        fetch('https://trade-motors-server-site.vercel.app/ads', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bikeAds)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('You make ads successfully');
                }
                else{
                    toast.error(data.message);
                }
            })
    }
    return (
        <div>
            <div className="w-full bg-[#f8f8f8] card-shadow">
                <div className='flex justify-between items-start p-8'>
                    <div className='text-start'>
                        <h1 className='font-[Oswald] uppercase text-xl'>{name}</h1>
                        <small className='uppercase'>Posted by {sellerName}</small>
                    </div>
                    <div>
                        <p className='font-[Oswald] text-2xl text-primary'>${resalePrice}</p>
                        <small>
                            <div className="tooltip tooltip-left" data-tip="Create ads on home page">
                                <button onClick={handleButtonAds} className="btn btn-xs btn-outline btn-secondary font-bold normal-case">Ads</button>
                            </div>
                        </small>
                    </div>
                </div>
                <label htmlFor="booking-modal" className='cursor-pointer' onClick={ () => setProduct(bike)}>
                    <figure className='bg-base-200 md:h-80 h-full flex justify-center items-center relative'><img src={picture} alt="Shoes" className='w-[94%] mx-auto' />
                        <div className='flex justify-center absolute items-center h-[100%] w-full font-[Oswald] duration-500 hover:bg-black hover:bg-opacity-60 z-50 blog-img'>
                            <div className='w-[100%] h-[100%] flex justify-center duration-1000 translate-y-0 hover:translate-y-24'>
                                <p className='w-[100px] py-5 text-secondary side-text text-img text-2xl uppercase'>buy now</p>
                            </div>
                        </div>
                    </figure>
                    </label>
                <div className="card-body">
                    <div className='flex justify-between border-b-2 pb-7'>
                        <div>
                            <h3 className='font-[Oswald] uppercase'>location</h3>
                            <p>{location}</p>
                        </div>
                        <div className='border-x-2 px-4'>
                            <h3 className='font-[Oswald] uppercase'>Type</h3>
                            <p>{category}</p>
                        </div>
                        <div>
                            <h3 className='font-[Oswald] uppercase'>Condition</h3>
                            <p>{condition}</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p className='text-start'>{description.slice(0, 250)}</p>
                    </div>
                </div>
            </div>
            {/* <BookingModal
                product={bike}
            ></BookingModal> */}
        </div>
    );
};

export default BikeCard;