import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-accent'>
            <div className="footer p-10 text-white max-w-[1440px] mx-auto px-5">
            <div>
                <Link to="/" className="normal-case text-xl font-bold text-white"><span className='text-primary uppercase'>Trade</span>Motors</Link>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">More from Motorcycle</span>
                <Link className="link link-hover">Sell Fast</Link>
                <Link className="link link-hover">Membership</Link>
                <Link className="link link-hover">Banner Ads</Link>
                <Link className="link link-hover">Ad Promotions</Link>
                <Link className="link link-hover">BikesGuide</Link>
            </div>
            <div>
                <span className="footer-title">Help & Support</span>
                <Link className="link link-hover">FAQ</Link>
                <Link className="link link-hover">Stay safe</Link>
                <Link className="link link-hover">Contact Us</Link>
            </div>
            <div>
                <span className="footer-title">About Motorcycle</span>
                <Link className="link link-hover">About Us</Link>
                <Link className="link link-hover">Careers</Link>
                <Link className="link link-hover">Terms and Conditions</Link>
                <Link className="link link-hover">Privacy policy</Link>
            </div>
        </div>
            <div className="footer items-center justify-center p-4 bg-accent text-white">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;