import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyProduct from './MyProduct';


const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://trade-motors-server-site.vercel.app/bikes/my?email=${user?.email}`;

    const { data: bikes = [], refetch } = useQuery({
        queryKey: ['bikes', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteProduct = id => {
        fetch(`https://trade-motors-server-site.vercel.app/bikes/my/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete successful.')
                refetch();
            })
    }

    return (
        <div className='mt-8'>
            {
                bikes.map(bike=><MyProduct
                    key={bike._id}
                    bike={bike}
                    handleDeleteProduct={handleDeleteProduct}
                    refetch={refetch}
                ></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;