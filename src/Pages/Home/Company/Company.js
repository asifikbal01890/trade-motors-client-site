import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const Company = () => {

    const sellersInfo = [
        {
            name: "Asif Ikbal",
            photo: "https://scontent.fdac90-1.fna.fbcdn.net/v/t1.6435-9/83395741_886245168457756_379503181425541120_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=mUOpPHnUHmQAX9Pn_pX&_nc_ht=scontent.fdac90-1.fna&oh=00_AfC7Bf2axmXC81q9hV4dnwr7lwINCaWpTuV2Rqzcw4Hc6w&oe=64B38A05",
            describe: "This selling website has garnered glowing reviews from its users, who praise its user-friendly interface, wide range of products, and seamless transaction experience.",
            location: "Rajshahi, Bangladesh"
        },
        {
            name: "Ringku Ahammed",
            photo: "https://www.muscleandfitness.com/wp-content/uploads/2015/08/what_makes_a_man_more_manly_main0.jpg?quality=86&strip=all",
            describe: "Customers rave about this selling website, applauding its trustworthy platform, prompt customer support, and secure payment system.",
            location: "Kettleman City, CA 93239"
        },
        {
            name: "Rakib Hassan",
            photo: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
            describe: "This selling website is a game-changer, with sellers praising its robust marketing tools, extensive customer reach, and increased sales potential.",
            location: "Mumbai, Maharashtra"
        }
    ]


    return (
        <div className=' my-16 lg:my-0 lg:mt-32 max-w-[1290px] mx-auto px-5'>
            <h1 className='text-4xl font-[Oswald] uppercase'>Our Top Seller</h1>
            <p className='mt-5 max-w-[700px] mx-auto px-5'>Discover our top-selling motorcycles, where speed meets style and exhilaration roars on two wheels. Unleash your inner rider with our handpicked selection that guarantees unmatched performance and unrivaled thrills</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-start'>
                {
                    sellersInfo.map(info =>
                        <div className='flex gap-5 bg-slate-100 p-4'>
                            <img className='w-20 rounded-full' src={info.photo} alt="" />
                            <div className='w-full'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-xl font-semibold'>{info.name}</h3>
                                    <div className="tooltip" data-tip={info.location}>
                                    <button className='text-[#e63419c1] hover:scale-125 duration-300'><FaLocationArrow></FaLocationArrow></button>
                                    </div>  
                                </div>
                                <p className='text-sm'>{info.describe}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Company;