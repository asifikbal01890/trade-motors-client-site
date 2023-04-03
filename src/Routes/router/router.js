import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoard from '../../Layout/DashBoard/DashBoard';
import Main from '../../Layout/Main/Main';
import BikesCollection from '../../Pages/BikesCollection/BikesCollection';
import Blogs from '../../Pages/Blogs/Blogs';
import AddAProduct from '../../Pages/DashBoardPage/AddAProdect/AddAProduct';
import AllBuyers from '../../Pages/DashBoardPage/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/DashBoardPage/AllSellers/AllSellers';
import DashBoardPage from '../../Pages/DashBoardPage/DashBoardPage';
import MyOrders from '../../Pages/DashBoardPage/MyOrder/MyOrders';
import MyProducts from '../../Pages/DashBoardPage/MyProduct/MyProducts';
import Payment from '../../Pages/DashBoardPage/Payment/Payment';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                loader: () => fetch("https://trade-motors-server-site.vercel.app/categories"),
                element: <Home></Home>
            },
            {
               path: "/blog",
               loader: () => fetch("https://trade-motors-server-site.vercel.app/blogs"),
               element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/category/:id",
                loader: ({params}) => fetch(`https://trade-motors-server-site.vercel.app/categories/${params.id}`),
                element:<BikesCollection></BikesCollection>
            }
        ]
    },
    {
    
         path: "/dashboard",
         element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
         children:[
             {
                 path: "/dashboard",
                 element:<DashBoardPage></DashBoardPage>
             },
             {
                 path: "/dashboard/myorder/payment/:id",
                 loader: ({params}) => fetch(`https://trade-motors-server-site.vercel.app/bookings/${params.id}`),
                 element:<Payment></Payment>
             },
             
            {
                path: "/dashboard/addproduct",
                loader: () => fetch("https://trade-motors-server-site.vercel.app/categories"),
                element:<SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproduct",
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/allsellers",
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/allbuyers",
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/myorder",
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
         ]
     },
     {
         path: "*",
         element: <NotFoundPage></NotFoundPage>
     }
])

export default router;
