import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from "react-icons/fa";

const RecentPost = ({blog}) => {
    const {header, date, _id} = blog
    return (
        <div className='text-start m-8'>
            <Link to={`blog/${_id}`}>
                <h4 className='font-bold text-xl hover:text-secondary duration-500'>{header}</h4>
            </Link>
                <p className='flex items-center gap-2 text-slate-400 mt-1'><FaRegCalendarAlt></FaRegCalendarAlt><small>{date}</small></p>
        </div>
    );
};

export default RecentPost;