import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ book }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [cardError, setCardError] = useState('');
    const { price, userName, email, _id } = book;
    console.log(price)

    useEffect(() => {
        fetch("https://trade-motors-server-site.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('')
            //   console.log('[PaymentMethod]', paymentMethod);
        }
        setSuccess("");
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const paymentInfo = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }

            fetch("https://trade-motors-server-site.vercel.app/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(paymentInfo),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                });
        }
        setProcessing(false);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-primary mt-4 px-6' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <div>
                <p className='text-red-600'>{cardError}</p>
                {
                    success && <div className='mt-4'>
                        <p className=' text-green-600'>{success}</p>
                        <p>Your Transaction number is <span className='text-primary text-lg font-[Heebo]'>{transactionId}</span></p>
                    </div>
                }
            </div>
        </div>
    );
};

export default CheckoutForm;