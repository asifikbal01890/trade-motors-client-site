import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ book }) => {

    const { _id, image, itemName, price, paid } = book

    // const handlePayButton = id => {
    //     fetch(`https://trade-motors-server-site.vercel.app/bookings/payment/${id}`, {
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.url);
    //             window.location.replace(data.url);

    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }
    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{itemName}</div>
                        <div className="text-sm opacity-50">Price: {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)} BDT</div>
                    </div>
                </div>
            </td>
            <th>
                {
                    paid ? <>
                        <p className="text-green-500">Paid</p>
                    </>
                        :
                        <>
                           <Link to={`Payment/${_id}`}> <button className="btn btn-primary btn-sm">pay</button></Link>
                        </>
                }
            </th>
        </tr>

    );
};

export default MyOrder;