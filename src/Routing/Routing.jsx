import Bags from "../Pages/Bags"
import Home from "../Pages/Home"



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero12 from "../Sections/Hero12"
import Kids from "../Pages/Kids"
import Hero15 from "../Sections/Hero15"
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
            path: "/bags/detail/:id",
            element: <Hero12 />
        },

         {
            path: "/kids/detail/:id",
            element: <Hero15 />
        },


,


     
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing
