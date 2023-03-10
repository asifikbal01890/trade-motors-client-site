import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import Footer from '../../Pages/Shared/Footer/Footer';
import NavBar from '../../Pages/Shared/Navbar/Navbar';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div className=''>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile max-w-[1440px] mx-auto">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-6">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-100 text-base-content font-semibold text-lg ">

                        {
                            isSeller && <>
                                <li><Link to={"/dashboard/addproduct"}>Add A Product</Link></li>
                                <li><Link to={"/dashboard/myproduct"}>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to={"/dashboard/allsellers"}>All Sellers</Link></li>
                                <li><Link to={"/dashboard/allbuyers"}>All Buyers</Link></li>
                                <li><Link to={"/dashboard/reporteditems"}>Reported Items</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li><Link to={"/dashboard/myorder"}>My orders</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;