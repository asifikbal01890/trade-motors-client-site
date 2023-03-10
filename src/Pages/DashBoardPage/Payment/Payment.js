import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const book = useLoaderData();
    const stripePromise = loadStripe('pk_test_51MKIjmIaxPm6ehs242KIksmXE530ZCBocGPKI9zfQ5zVvnMgn2QrKn0eWRmOaviLoAPLv9nJMSZtkQuxDTDIHhXQ006ZQdegE0');

    return (
        <div className='mt-8 text-start ml-6'>
            <h1 className='font-[Oswald] text-4xl'>Payment For <span>{book.itemName}</span></h1>
            <p className='mt-2 text-lg font-[Heebo]'>{book.itemName} price is <span className='text-xl text-primary font-[Oswald]'>${book.price}</span></p>
            <div className='my-4 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    book={book}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;