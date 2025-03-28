import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ShowProduct from "../pages/Shop/ShowProduct";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/products/:category',
        element: <ShowProduct></ShowProduct>
    },

]);

