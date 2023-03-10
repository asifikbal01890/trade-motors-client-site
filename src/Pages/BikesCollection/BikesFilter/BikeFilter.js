import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input/dist/components/RangeSlider';
import "react-range-slider-input/dist/style.css";
import { Link } from 'react-router-dom';
import "./BikesFilter.css";

const BikeFilter = () => {
    const [value, setValue] = useState([1000]);
    const [month, setMonth] = useState([0, 12]);
    return (
        <div className='w-full'>
            <div className='bg-primary text-white text-start p-6 border-b-4 border-black'>
                <h3 className='font-[Oswald] text-2xl'>SEARCH OPTIONS</h3>
                <p>FIND YOUR MOTORCYCLE</p>
            </div>
            <div className='border-[1px]'>
                <select className="border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary mt-12 w-full max-w-xs">
                    <option disabled selected>Select Country</option>
                    <option>Option-1</option>
                    <option>Option-2</option>
                </select>
                <select className="border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary selection:border-primary my-6 w-full max-w-xs">
                    <option disabled selected>Select City</option>
                    <option>Option-1</option>
                    <option>Option-2</option>
                </select>
                <select className="select-bordered border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary w-full max-w-xs">
                    <option disabled selected>Select Model</option>
                    <option>Option-1</option>
                    <option>Option-2</option>
                </select>
                <div className='flex gap-3 px-8 py-6 mb-3'>
                    <select className="select-bordered border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary w-full max-w-xs">
                        <option disabled selected>Min CC</option>
                        <option>Option-1</option>
                        <option>Option-2</option>
                    </select>
                    <select className="select-bordered border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary w-full max-w-xs">
                        <option disabled selected>Max CC</option>
                        <option>Option-1</option>
                        <option>Option-2</option>
                    </select>
                </div>
            </div>
            <div className='border-x-[1px] p-8'>
                <div className='text-start mb-10'>
                    <h3 className='font-[Oswald] text-2xl'>PRICE RANGE</h3>
                    <small>CHOOSE YOUR PRICE</small>
                </div>
                <RangeSlider
                    min={1}
                    max={1000}
                    id="range-slider-yellow"
                    className="single-thumb"
                    defaultValue={[0, 500]}
                    onInput={setValue}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                />
                <div className="text-start mt-6">USD Range Selected: $ <span className='font-bold'>{value}</span></div>
            </div>
            <div className='border-[1px] p-8'>
                <div className='text-start mb-10'>
                    <h3 className='font-[Oswald] text-2xl'>USED RANGE</h3>
                    <small>CHOOSE REQUIRED MONTH</small>
                </div>
                <RangeSlider
                    min={0}
                    max={12}
                    id="range-slider-yellow"
                    className="single-thumb"
                    defaultValue={[0, 50]}
                    onInput={setMonth}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                />
                <div className="text-start mt-6">Month Range Selected: <span className='font-bold'>{month}</span></div>
            </div>
            <div className='border-x-[1px] border-b-[1px] pb-16 '>
                <button className='btn-primary mt-10 uppercase font-[Oswald] px-10 py-3 text-xl'>Apply filter</button>
                <div className='mt-2'>
                <Link className='hover:text-secondary duration-500'>Clear All Filters</Link>
                </div>
            </div>
        </div>
    );
};

export default BikeFilter;