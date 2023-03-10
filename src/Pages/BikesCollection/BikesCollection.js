import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeCard from './BikeCard/BikeCard';
import BikeFilter from './BikesFilter/BikeFilter';
import BookingModal from './BookingModal/BookingModal';

const BikesCollection = () => {
    const [product, setProduct] = useState(null)
    const data = useLoaderData();
    const id = data._id

    const { data: bikes = [] } = useQuery({
        queryKey: ['bikes', id],
        queryFn: async () => {
            const res = await fetch(`https://trade-motors-server-site.vercel.app/bikes?id=${id}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='grid lg:grid-cols-3 xl:gap-10 gap-6 justify-center max-w-[1440px] mx-auto px-5 my-16'>
            <div className='lg:flex hidden'>
            <BikeFilter></BikeFilter>
            </div>
            <div className='col-span-2'>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-10 gap-6'>
                    {
                        bikes.map(bike => <BikeCard
                            key={bike._id}
                            bike={bike}
                            setProduct={setProduct}
                        ></BikeCard>)
                    }
                </div>
            </div>
        </div>
        <BookingModal
                product={product}
                setProduct={setProduct}
            ></BookingModal>
        </div>
    );
};

export default BikesCollection;