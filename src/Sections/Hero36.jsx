




import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Hero36() {
const[category,setCategory] = useState([])
const getCategories= async()=>{
try{
const response = await axios.get("http://localhost:5000/categories")
console.log(response)
setCategory(response.data.data)
}
catch(error){
console.log(error)
}
}

useEffect(()=>{
getCategories()
const interval= setInterval(()=>{
getCategories()
},2000)

return ()=>{
clearInterval(interval)
}
},[])


  return (
    <div>
  
       {
        category.length > 0 &&  (
          <>
          <div className="hero36-content">
        <h1>Shop by Fashion</h1>
        </div>
        <div className="product-container">
            {
            category.map((item,index)=>(
             <Link to={`/product/${item.category}`} key={index} className="product-card">
               <img src={item.image} alt="" />
               <h2>{item.category}</h2>
             </Link>
            ))
            }
        </div>
          </>
        )
       }
        
    </div>
  )
}

export default Hero36
