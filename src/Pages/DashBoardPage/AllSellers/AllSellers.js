import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch("https://trade-motors-server-site.vercel.app/users/seller");
            const data = await res.json();
            return data;
        }
    })

    const handleVerify = id => {
        fetch(`https://trade-motors-server-site.vercel.app/users/seller/${id}`, {
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

    const handleDeleteSeller = id => {
        fetch(`https://motorbike-buy-sell-server-site.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete successful.')
                refetch();
            })
    }
    return (
        <div className='mt-12'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>
                                        {
                                            seller.verify ?
                                                <>
                                                <p className='text-success font-semibold'>{seller.verify}</p>
                                                </>
                                                :
                                                <>
                                                    <button onClick={() => handleVerify(seller._id)} className='btn btn-circle btn-outline btn-primary'>
                                                        <FaCheck className='h-5 w-5'></FaCheck>
                                                    </button>
                                                </>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteSeller(seller._id)} className="btn btn-circle btn-outline btn-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;