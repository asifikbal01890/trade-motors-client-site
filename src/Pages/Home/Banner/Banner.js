import React from 'react';
import bannerImgOne from '../../../img/banner/img-home-slideshow.jpg';
import bannerImgTwo from '../../../img/banner/img-home-slideshow-2.jpg';
import bannerImgThree from '../../../img/banner/img-home-slideshow-3.jpg';
import Slider from 'react-slick';
import './Banner.css';


const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };
    
    return (
        <div className='relative'>
            <Slider {...settings}>
                <div>
                    <div className='relative banner banner-footer z-10'>
                        <img src={bannerImgOne} alt="Banner 1" className='md:h-[100%] h-[500px]'/>
                    </div>
                    <div className='absolute bottom-[32%] left-[14%] z-10 text-start text-white'>
                        <h4 className='font-medium xl:text-xl text-lg uppercase'>Welcome To <span className='text-primary uppercase'>Trade</span>Motors</h4>
                        <h1 className='font-bold lg:text-7xl text-4xl xl:pb-6 py-3 font-[Oswald] uppercase'>Sell Your Old Bike</h1>
                        <h1 className='font-bold lg:text-7xl text-4xl font-[Oswald] uppercase'>Buy Your Dream Bike</h1>
                        <p className='py-6 hidden lg:block lg:w-[79%] xl:w-[52%]'>
                            <span>Trade Motors</span> is a global online marketplace where you can buy and sell your bikes online. Use this marketplace and sell your old model motorcycle and buy your dream motorcycle.
                        </p>
                        <p className='lg:hidden block py-3 md:w-[52%] w-[82%]'><span>Trade Motors</span> is a global online marketplace where you can buy and sell your bikes online. </p>
                        <div className='flex item-center gap-6'>
                        <button className='btn btn-primary rounded-none mt-4'>Shop Now</button>
                        <button className='btn btn-secondary rounded-none mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='relative banner-2 banner-footer'>
                        <img src={bannerImgTwo} alt="Banner 2" className='md:h-[100%] h-[500px]'/>
                    </div>
                    <div className='absolute bottom-[32%] xl:left-[48%] md:left-[48%] lg:left-[14%] left-[14%] z-10 text-start text-white'>
                        <h4 className='font-medium xl:text-xl text-lg uppercase'>Welcome To <span className='text-primary'>Trade</span>Motors</h4>
                        <h1 className='font-bold lg:text-7xl text-4xl xl:pb-6 py-3 font-[Oswald] uppercase'>Shop Our Top-Rated</h1>
                        <h1 className='font-bold lg:text-7xl text-4xl font-[Oswald] uppercase'>Motorcycles Now!</h1>
                        <p className='py-6 hidden lg:block lg:w-[79%] xl:w-[72%]'>
                            <span>Trade Motors</span> is a global online marketplace where you can buy and sell your bikes online. Use this marketplace and sell your old model motorcycle and buy your dream motorcycle.
                        </p>
                        <p className='lg:hidden block py-3 md:w-[52%] w-[82%]'><span>Trade Motors</span> is a global online marketplace where you can buy and sell your bikes online.</p>
                        <div className='flex item-center gap-6'>
                        <button className='btn btn-primary rounded-none mt-4'>Shop Now</button>
                        <button className='btn btn-secondary rounded-none mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='relative banner banner-footer'>
                        <img src={bannerImgThree} alt="Banner 3" className='md:h-[100%] h-[500px]'/>
                    </div>
                    <div className='absolute bottom-[32%] left-[14%] z-10 text-start text-white'>
                        <h4 className='font-medium xl:text-xl text-lg uppercase'>Welcome To <span className='text-primary'>Trade</span>Motors</h4>
                        <h1 className='font-bold lg:text-7xl text-4xl xl:pb-6 py-3 font-[Oswald] uppercase'>Explore Our Collection</h1>
                        <h1 className='font-bold lg:text-7xl text-4xl font-[Oswald] uppercase'>of Motorcycles Today!</h1>
                        <p className='py-6 hidden lg:block lg:w-[79%] xl:w-[52%]'>
                            <span>Trade Motors</span>discover the ultimate riding experience with our premium selection of motorcycles. From sporty rides to touring machines, we have something for every rider. Browse our collection today and start your next adventure on two wheels!
                        </p>
                        <p className='lg:hidden block py-3 md:w-[52%] w-[82%]'><span>Trade Motors</span>discover the ultimate riding experience with our premium selection of motorcycles. </p>
                        <div className='flex item-center gap-6'>
                        <button className='btn btn-primary rounded-none mt-4'>Shop Now</button>
                        <button className='btn btn-secondary rounded-none mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className='absolute top-[10%] z-10 banner-footer text-white'>
            </div>
        </div>
    );
};

export default Banner;