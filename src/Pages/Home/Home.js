import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from './About/About';
import AdsSection from './AdsSection/AdsSection';
import Banner from './Banner/Banner';
import BlogSection from './BlogSection/BlogSection';
import CategorySection from './CategorySection/CategorySection';
import OurAim from './OurAim/OurAim';
import SubscribeSection from './SubscribeSection/SubscribeSection';


const Home = () => {
    const bikeCategories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <OurAim></OurAim>
            <CategorySection
                bikeCategories={bikeCategories}
            ></CategorySection>
            <AdsSection></AdsSection>
            <About></About>
            <BlogSection></BlogSection>
            <SubscribeSection>
            </SubscribeSection>
        </div>
    );
};

export default Home;