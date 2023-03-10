import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch("https://trade-motors-server-site.vercel.app/users/buyer");
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBuyer = id => {
        fetch(`https://trade-motors-server-site.vercel.app/users/${id}`, {
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>
                                        <button onClick={()=>handleDeleteBuyer(buyer._id)} className="btn btn-circle btn-outline btn-secondary">
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

export default AllBuyers;