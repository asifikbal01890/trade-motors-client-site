import React from 'react';
import { FaRegHandshake, FaRegStar, FaUserShield } from 'react-icons/fa';
import { RiShieldKeyholeLine } from "react-icons/ri";
import leftImg from '../../../img/about/img-about.jpg';
import imgBottomOne from '../../../img/about/about-gallery-1.jpg';
import imgBottomTwo from '../../../img/about/about-gallery-2.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-20">
                <div className="hero-content items-start relative gap-24 flex-col lg:flex-row">
                    <img src={leftImg} alt='' className='w-full h-auto hidden lg:flex'/>
                    <div className='text-start'>
                        <h1 className="text-5xl font-[Oswald] uppercase">Trusted Website</h1>
                        <h1 className="text-5xl font-[Oswald] uppercase">THAT MATTERS IN FUTURE</h1>
                        <p className="py-6">Trusted resale websites provide a safe and secure platform for buying and selling secondhand goods. These websites often have measures in place to ensure that transactions are legitimate and that both buyers and sellers are protected. They may offer features such as escrow services, user verification, and dispute resolution to make the process smoother.</p>
                        <div className='md:flex block gap-16'>
                            <div>
                                <div className='flex items-start gap-4'>
                                    <p className='text-5xl'><FaUserShield></FaUserShield></p>
                                    <div>
                                        <h4 className='text-xl font-[Oswald] uppercase'>User verification</h4>
                                        <p>Users are required to verify their identities to prevent fraudulent activity.</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4 mt-10'>
                                    <p className='text-5xl'><RiShieldKeyholeLine></RiShieldKeyholeLine></p>
                                    <div>
                                        <h4 className='text-xl font-[Oswald] uppercase'>Secure payment options</h4>
                                        <p>Websites offer secure payment options to protect buyers and sellers from scams.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10 md:mt-0'>
                                <div className='flex items-start gap-4'>
                                    <p className='text-5xl'><FaRegStar></FaRegStar></p>
                                    <div>
                                        <h4 className='text-xl font-[Oswald] uppercase'>Ratings and reviews</h4>
                                        <p>The website has a rating and review system for users to build trust and make informed decisions.</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4 mt-10'>
                                    <p className='text-5xl'><FaRegHandshake></FaRegHandshake></p>
                                    <div>
                                        <h4 className='text-xl font-[Oswald] uppercase'>Dispute resolution</h4>
                                        <p>A process is in place to mediate and resolve disputes between buyers and sellers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className='md:flex gap-4 lg:w-auto w-full lg:absolute xl:bottom-[-60px] lg:bottom-[-110px] left-80 border-white border-l-[20px] border-t-[20px]'>
                        <img src={imgBottomOne} alt="" className='w-full'/>
                        <img src={imgBottomTwo} alt="" className='w-full md:mt-0 mt-6'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;