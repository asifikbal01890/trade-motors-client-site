import React from 'react';
import toast from 'react-hot-toast';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MyProduct = ({bike, handleDeleteProduct, refetch}) => {
    const {_id, picture, name, resalePrice, location, time} = bike
    
    const handleAvailable = id => {
        fetch(`https://trade-motors-server-site.vercel.app/bikes/ads/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('verified successful.')
                    refetch();
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center w-48">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={picture} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className='flex items-center'>
                                        <p className='text-primary'><FaMapMarkerAlt></FaMapMarkerAlt></p>
                                        <div className="text-sm ml-2">{location}</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Price: {resalePrice} BDT
                                <br />
                                <span className="badge badge-ghost badge-sm">Post at {time}</span>
                            </td>
                            <th>
                                {
                                    bike.ads ?
                                    <>
                                    <p className='font-semibold text-primary'>Advertised</p>
                                    </>
                                    :
                                    <>
                                    <button onClick={() => handleAvailable(_id)} className="btn btn-primary btn-sm">available</button>
                                    </>
                                }
                            </th>
                            <th>
                                <button onClick={() => handleDeleteProduct(_id)} className="btn btn-secondary btn-sm">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;