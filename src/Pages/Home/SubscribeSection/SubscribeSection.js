import React from 'react';
import './SbscribeSection.css';

const SubscribeSection = () => {
    return (
        <div className='bg-subscribe'>
           <div className='absolute z-10 w-full'>
             <div className='lg:flex inline-block justify-center items-center gap-6'>
             <h1 className='font-[Oswald] text-white md:text-5xl text-4xl'>SUBSCRIBE FOR UPDATED</h1>
             <div className='flex justify-center items-center md:w-[500px] w-[400px] h-[50px] mt-6 lg:mt-0'>
             <input type="email" placeholder="Email Address" className="w-full h-full input-subscribe text-black rounded-l-md" />
             <button className='font-[Oswald] btn-primary h-full px-7 rounded-r-md'>SUBSCRIBE</button>
             </div>
             </div>

           </div>
        </div>
    );
};

export default SubscribeSection;