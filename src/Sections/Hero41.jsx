




import Hero34 from "./Hero34"
import axios from "axios"
import { useState,useEffect } from "react"

function Hero41() {
const[orders,setOrders] = useState([])

const getOrders= async()=>{

try{
const response = await axios.get("http://localhost:5000/show-orders")
console.log(response)
setOrders(response.data.data)
}
catch(error){
console.log(error)
}
}

useEffect(()=>{
getOrders()
const interval=setInterval(()=>{
getOrders()
},2000)
return ()=>{
clearInterval(interval)
}
},[])


  return (
    <div>
    <Hero34 />


    <div>
        {
        orders.length > 0 && (
       <>
       <div className="my-orders">
         <h1>My Orders</h1>

       </div>

         <div className="category-table">
            <table>

            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Customer Name</th>
                    <th>Order Number</th>
                    <th>Address</th>
                    <th>Products</th>
                    <th>Total Price</th>
                </tr>
            </thead>

            <tbody>
                {
                orders.map((item,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.orderNumber}</td>
                    <td>{item.address}</td>
                    <td>
                        {
                        item.cart?.map((item,index)=>(
                        <div>
                            {item.name} x{item.quantity}
                        </div>
                        ))
                        }
                    </td>

                    <td>Total Price: {item.totalPrice}</td>
                  </tr>
                ))
                }
            </tbody>












            </table>
         </div>
       
       
       </>






        )
        }
    </div>






      
    </div>
  )
}

export default Hero41
