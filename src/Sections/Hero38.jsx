






import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Hero1 from "./Hero1"
import axios from "axios"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"

function Hero38() {


const {category} = useParams()
const[products,setProducts] = useState([])

const getProducts= async()=>{

try{
const response = await axios.get(`http://localhost:5000/products/${category}`)
console.log(response)
setProducts(response.data.data)
}
catch(error){
console.log(error)
}

}

useEffect(()=>{
getProducts()
const interval=setInterval(()=>{
getProducts()
},2000)
return ()=>{
clearInterval(interval)
}
},[])


  return (
    <div>
    <Hero1 />

    <div className="product-container">

      {
      products.map((item,index)=>(
         
           <Link className="product-card">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
           </Link>
      ))
      }

    </div>

    <div>
      <Footer />
    </div>
      
    </div>
  )
}

export default Hero38
