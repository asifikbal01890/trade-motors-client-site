import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';
import RecentPost from './RecentPost/RecentPost';
import { IoCall } from "react-icons/io5";
import { MdArrowForwardIos, MdEmail } from "react-icons/md";
import './Blog.css';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div>

            </div>
            <div className='lg:flex block gap-12 items-start max-w-[1440px] mx-auto px-5 mt-16'>
                <section className=''>
                    {
                        blogs.map(blog => <BlogCard
                            key={blog._id}
                            blog={blog}
                        ></BlogCard>)
                    }
                </section>
                <section className='w-[40%]'>
                    <div className='bg-black pt-10 pb-4'>
                        <h3 className='text-4xl font-bold text-secondary text-start ml-8'>Recent Post</h3>
                        <div className='text-white'>
                            {
                                blogs.map(blog => <RecentPost
                                    key={blog._id}
                                    blog={blog}
                                ></RecentPost>)
                            }
                        </div>
                    </div>
                    <div className='mt-8 text-start'>
                        <div className="hero bg-question">
                            <div className="hero-overlay bg-black bg-opacity-80"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div>
                                    <h1 className="text-4xl font-bold text-secondary text-start ml-3 mt-7 pl-1">Have Any Question?</h1>
                                    <p className="mb-5 text-start text-white mx-3 my-3 pl-1">If you have any questions related to your website, please let me know. I'll do my best to assist you with any queries you may have.</p>
                                    <p className='text-secondary flex justify-start items-center mx-3 mt-3 pl-1 gap-3'><IoCall></IoCall><span className='text-white'>(+880)1749151102</span></p>
                                    <p className='text-secondary flex justify-start items-center mx-3 mt-3 pl-1 gap-3 mb-7'><MdEmail></MdEmail><span className='text-white'>asifikbal01890@gmail.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black mt-8 py-10 text-start pl-8'>
                        <h3 className='text-4xl font-bold text-secondary'>Categories</h3>
                        <p className='my-4 flex items-center gap-2 text-secondary'><MdArrowForwardIos></MdArrowForwardIos><span className='text-white'>Trends</span></p>
                        <p className='flex items-center gap-2 text-secondary'><MdArrowForwardIos></MdArrowForwardIos><span className='text-white'>Tips & Trick</span></p>
                        <p className='mt-4 flex items-center gap-2 text-secondary'><MdArrowForwardIos></MdArrowForwardIos><span className='text-white'>Inside</span></p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;