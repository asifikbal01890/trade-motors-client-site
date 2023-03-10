import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './BlogSectionCard.css';

const BlogSectionCard = ({ blog }) => {
    const { date, _id, Img, pOne, header } = blog;
    return (
        <div className="hero max-w-[1440px] w-[96%] mx-auto p-0">
            <div className="hero-content flex-col lg:flex-row lg:bg-base-200 bg-none mb-16 p-0">
                <div className='bg-no-repeat bg-cover bg-top h-[19rem] xl:h-[17rem] lg:w-[50rem] w-[100%] cursor-pointer' style={{ backgroundImage: `url(${Img})` }}>
                    <div className='flex justify-center items-center h-[100%] font-[Oswald] duration-500 hover:bg-black hover:bg-opacity-60 blog-img'>
                        <div className='w-[100%] h-[100%] side-text duration-1000 translate-y-0 hover:translate-y-24'>
                        <p className='w-[100px] py-5 text-white border text-img'>{date}</p>
                        </div>
                    </div>
                </div>
                <div className='text-start relative'>
                    <div className='bg-white p-5  lg:w-[94%] w-[100%] mx-auto'>
                        <h1 className="text-3xl cursor-pointer font-[Oswald] duration-1000 hover:text-secondary">{header}</h1>
                        <p className="py-6">{pOne.slice(0, 200)}...</p>
                       <Link to={`blog/${_id}`}> <button className="btn btn-outline btn-secondary rounded-none gap-2">Read More <span className='text-lg font-bold'><BsArrowRight></BsArrowRight></span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSectionCard;