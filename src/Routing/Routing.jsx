import Home from "../Pages/Home"



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },

     
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing
