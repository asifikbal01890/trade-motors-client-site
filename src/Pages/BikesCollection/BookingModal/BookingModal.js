import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({product, setProduct}) => {
    const {user} = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            itemName: product?.name,
            price: product?.resalePrice,
            userName,
            phone,
            location,
            email : user?.email,
            paid: false,
            image: product?.picture
        }
        fetch('https://trade-motors-server-site.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    form.reset();
                    toast.success('Booking Confirmed');
                }
                else{
                    toast.error(data.message);
                }
            })
        }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h1 className='text-xl font-semibold text accent'>Booking</h1>
                    <div className='flex justify-between mt-6'>
                        <h2 className='font-[Oswald] uppercase text-xl'>{product?.name}</h2>
                        <p className='font-semibold text-lg flex items-center'>Price:<span className='font-[Oswald] pl-2 text-primary text-2xl'>${product?.resalePrice}</span></p>
                    </div>
                    <p className='text-start'>Your Email: {user?.email}</p>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <input name='userName' type="text" placeholder="Your Name" className="border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary w-full mt-8"/>
                        <input name='phone' type="text" placeholder="Your Phone Number" className="border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary w-full my-6" required />
                        <input name='location' type="text" placeholder="Meet Location" className="border-[1px] p-3 rounded-none focus:outline-0 focus:border-primary w-full" required />
                        <button htmlFor="Book-Modal" className="btn btn-primary w-full my-6">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;