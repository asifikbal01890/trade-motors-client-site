import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyOrder from './MyOrder';


const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://trade-motors-server-site.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-8'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            bookings.map(book => <MyOrder
                                key={book._id}
                                book={book}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;