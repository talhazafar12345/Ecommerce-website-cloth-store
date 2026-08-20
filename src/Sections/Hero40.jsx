

import { useState,useEffect } from "react"
import axios from "axios"
function Hero40() {
const [totalOrders,setTotalorders] = useState(null)
const[revenue,setRevenue] = useState(null)
const[sales,setSales] = useState(null)


const getTotalOrders=async()=>{

try{
const response = await axios.get("http://localhost:5000/count-orders")
console.log(response)
setTotalorders(response.data.data)
}
catch(error){
console.log(error)
}
}


const getRevenue= async ()=>{

try{
const response = await axios.get("http://localhost:5000/orders/revenue")
console.log(response)
setRevenue(response.data.data)
}

catch(error){
console.log(error)

}
}

const getSales= async()=>{

try{
const response = await axios.get("http://localhost:5000/sales")
console.log(response)
setSales(response.data.data)
}
catch(error){
console.log(error)
}
}

useEffect(()=>{
getTotalOrders()
getRevenue()
getSales()
const interval= setInterval(()=>{
getTotalOrders()
getRevenue()
getSales()
},2000)
return ()=>{
clearInterval(interval)
}
},[])


  return (









      <div className="dashboard-area">

      <h1>Welcome Admin</h1>
      <div className="dashboard-cards">
        <div className="dash-card blue">
        <p>Total Sales</p>

          <h2>
          {
          sales !==null && sales
          }
          </h2>
        </div>

        <div className="dash-card purple">
         <p>Total Orders</p>

          <h2>
             {
            totalOrders !==null && totalOrders
             }
          </h2> 

        </div>
        <div className="dash-card pink">
      <p>Revenue</p>

          <h2> 
          {
          revenue !==null && `Rs:${revenue}`
          }
          </h2>

        </div>
      </div>
    </div>
  )
}

export default Hero40
