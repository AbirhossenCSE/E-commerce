import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ShowProduct from "../pages/Shop/ShowProduct";
import AccountMain from "../pages/Account/AccountMain";
import AccountInfo from "../pages/Account/AccountInfo";
import UpdateProfile from "../pages/Account/UpdateProfile";
import MyOrders from "../pages/Account/MyOrders";
import ReturnOrders from "../pages/Account/ReturnOrders";
import Address from "../pages/Account/Address";
import PasswordChange from "../pages/Account/PasswordChange";
import Wishlist from "../pages/WishList/Wishlist";
import Compare from "../pages/Compare/Compare";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: 'products',
        element: <ShowProduct></ShowProduct>
    },
    {
        path: '/products/:category',
        element: <ShowProduct></ShowProduct>
    },
    {
        path: '/product-details',
        element: <ProductDetails></ProductDetails>
    },
    {
        path: '/wishlist',
        element: <Wishlist></Wishlist>
    },
    {
        path: '/compare',
        element: <Compare></Compare>
    },
    {
        path: '/account',
        element: <AccountMain></AccountMain>,
        children: [
            {
                path: '/account/info',
                element: <AccountInfo></AccountInfo>
            },
            {
                path: '/account/update-profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/account/my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/account/return-orders',
                element: <ReturnOrders></ReturnOrders>
            },
            {
                path: '/account/address',
                element: <Address></Address>
            },
            {
                path: '/account/password-change',
                element: <PasswordChange></PasswordChange>
            },
        ]
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
    {
        path: '/signin',
        element: <SignIn></SignIn>,
    },

]);

