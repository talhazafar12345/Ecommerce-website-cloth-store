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







     
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing
