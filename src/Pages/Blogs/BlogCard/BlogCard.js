import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const BlogCard = ({ blog }) => {
    const { header, Img, pOne, date } = blog;
    console.log(blog)
    return (
        <div className="hero mb-16">
            <div className="hero-content text-start p-0">
                <div className="">
                    <img src={Img} alt="" className='h-[100%] w-[100%]'/>
                    <h1 className="text-4xl font-bold font-[Oswald] uppercase mt-6">{header}</h1>
                    <small className='flex items-center gap-2 text-slate-400 mt-4'><FaRegCalendarAlt></FaRegCalendarAlt>{date}</small>
                    <p className="py-6">{pOne.slice(0, 200)}...</p>
                    <button className="btn btn-outline btn-secondary rounded-none gap-2">Read More <span className='text-lg font-bold'><BsArrowRight></BsArrowRight></span></button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;