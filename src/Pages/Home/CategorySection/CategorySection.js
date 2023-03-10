import React from 'react';
import Category from './Category';
import './CategorySection.css';

const CategorySection = ({ bikeCategories }) => {
    
    return (
        <div className='bg-category bg-none my-24'>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-[1440px] mx-auto px-5'>
            {
                bikeCategories.map(bikeCategory => <Category
                    key={bikeCategory._id}
                    bikeCategory={bikeCategory}
                ></Category>)
            }
            </div>
        </div>
    );
};

export default CategorySection;