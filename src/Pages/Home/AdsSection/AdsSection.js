import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Slider from 'react-slick';
import Ads from './Ads';

const AdsSection = () => {
    const { data: adsInfos = [], refetch } = useQuery({
        queryKey: ['adsInfos'],
        queryFn: async () => {
            const res = await fetch(`https://trade-motors-server-site.vercel.app/ads`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return (
        <div className='mb-28 max-w-[1440px] mx-auto px-5'>
            <div>
                <h1 className='font-[Oswald] uppercase text-4xl'>Best Bikes For You</h1>
                <p className='text-md uppercase'>We recommend these bikes to you</p>
            </div>
            <div className='my-16'>
            <Slider {...settings}>
                {
                    adsInfos.map(adsInfo=> <Ads
                    key={adsInfo._id}
                    adsInfo={adsInfo}
                    ></Ads>)
                }
                </Slider>
            </div>
        </div>
    );
};

export default AdsSection;