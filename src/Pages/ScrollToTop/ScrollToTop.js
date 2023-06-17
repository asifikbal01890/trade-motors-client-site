import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import {RxDoubleArrowUp} from 'react-icons/rx';

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className={`${showButton? "fixed" : "hidden"} bottom-5 lg:bottom-16 right-16`}>
            <button onClick={handleScrollToTop} className='bg-[#e63619] text-white rounded-full p-2 shadow-xl text-2xl'> <FiArrowUp></FiArrowUp></button>
        </div>
    );
};

export default ScrollToTop;