import React from 'react';
import aimImg from '../../../img/aim section.jpg';
import aimImgTwo from '../../../img/aim section img 2.jpg'

const OurAim = () => {
    return (
        <div className="hero my-16">
            <div className="grid lg:grid-cols-2 justify-center flex-col gap-16 max-w-[1240px] mx-auto px-5">
                <div className='relative'>
                    <img src={aimImg} className="w-[100%]" alt='' />
                    <img className="absolute bottom-[-9%] left-[52%] w-[55%] border-l-[16px] border-t-[16px] border-white " src={aimImgTwo} alt="" />
                </div>
                <div className='text-start items-start md:mt-11'>
                    <h1 className="text-5xl font-bold font-[Oswald] uppercase">Our Aim is to provide great deal</h1>
                    <p className="py-10">Our bike resale website is committed to providing great deals to both buyers and sellers. We understand the importance of a good bike and strive to ensure that our buyers find their dream ride at an affordable price. For sellers, our platform makes the process of selling a bike simple and straightforward. We provide pricing guidance to ensure that you get the best deal possible. With our aim to provide great deals, we are the perfect platform for bike enthusiasts looking to buy or sell their ride.</p>
                    <button className="btn btn-primary">visit us</button>
                </div>
            </div>
        </div>
    );
};

export default OurAim;