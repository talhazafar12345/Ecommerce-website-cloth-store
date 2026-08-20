import Bags from "../Pages/Bags"
import Home from "../Pages/Home"



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero12 from "../Sections/Hero12"
import Kids from "../Pages/Kids"
import Hero15 from "../Sections/Hero15"
import Shoes from "../Pages/Shoes"
import Hero17 from "../Sections/Hero17"
import Hero21 from "../Sections/Hero21"
import Sports from "../Pages/Sports"
import Hero24 from "../Sections/Hero24"
import Sun from "../Pages/Sun"
import Hero27 from "../Sections/Hero27"
import Watch from "../Pages/Watch"
import Hero28 from "../Sections/Hero28"
import Cart from "../Pages/Cart"
import Checkout from "../Pages/Checkout"
import Admin from "../Pages/Admin"
import Forget from "../Pages/Forget"
import ProductManagement from "../Pages/ProductManagement"
import CategoryManagement from "../Pages/CategoryManagement"
import DashboardF from "../Pages/DashboardF"
import Hero38 from "../Sections/Hero38"
import Hero39 from "../Sections/Hero39"
import Hero41 from "../Sections/Hero41"
function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        

         {
            path: "/bags-page",
            element: <Bags />
        },

          {
            path: "/kids-page",
            element: <Kids />
        },

          {
            path: "/shoes-page",
            element: <Shoes />
        },

           {
            path: "/sports-page",
            element: <Sports />
        },

            {
            path: "/sun-page",
            element: <Sun />
        },

              {
            path: "/watch-page",
            element: <Watch />
        },


             {
            path: "/sun-page",
            element: <Sun />
        },

          {
            path: "/bags/detail/:id",
            element: <Hero12 />
        },

         {
            path: "/kids/detail/:id",
            element: <Hero15 />
        },


          {
            path: "/shoes/detail/:id",
            element: <Hero17 />
        },


        {
            path: "/sports/detail/:id",
            element: <Hero21 />
        },


        {
            path: "/sun/detail/:id",
            element: <Hero24 />
        },


        
        {
            path: "/watch/detail/:id",
            element: <Hero27 />
        },

        {
            path: "/new-arrival/detail/:id",
            element: <Hero28 />
        },

        
        {
            path: "/cart-page",
            element: <Cart />
        },

         {
            path: "/checkout-page",
            element: <Checkout />
        },


        {
            path: "/admin-page",
            element: <Admin />
        },


        
        {
            path: "/forget-page",
            element: <Forget />
        },


        

          {
            path: "/category-management-page",
            element: <CategoryManagement />
        },



          {
            path: "/product-management-page",
            element: <ProductManagement />
        },


         {
            path: "/dashboard-front-page",
            element: <DashboardF />
        },



         {
            path: "/product/:category",
            element: <Hero38 />
        },

           {
            path: "/product-detail/:id",
            element: <Hero39 />
        },


           {
            path: "/orders-page",
            element: <Hero41 />
        },




















     
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing
