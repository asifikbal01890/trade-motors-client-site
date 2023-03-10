import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogSectionCard from './BlogSectionCard/BlogSectionCard';

const BlogSection = () => {

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://trade-motors-server-site.vercel.app/blogsLimit`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    return (
        <div>
            <div>
                <h1 className='text-4xl font-[Oswald]'>LATEST BLOGS</h1>
                <p className='mt-5 xl:w-[39%] lg:w-[59%] lg:mx-auto mx-5'>The LATEST BLOGS section provides up-to-date articles and insights on motorcycle news, tips, and trends to help inform and guide buyers and sellers in their purchasing and selling decisions.</p>
            </div>
            <div className='my-16'>
                {
                    blogs.map(blog=><BlogSectionCard
                        key={blog._id}
                        blog={blog}
                    ></BlogSectionCard>)
                }
            </div>
        </div>
    );
};

export default BlogSection;