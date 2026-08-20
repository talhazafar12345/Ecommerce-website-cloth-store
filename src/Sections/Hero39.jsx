



import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Hero1 from "./Hero1"
import Footer from "../Footer/Footer"
import { useContext } from "react"
import { cartContext } from "./Hero30"


function Hero39() {
const {addToCart} = useContext(cartContext)
const {id} = useParams()
const[product,setProduct] = useState(null)
const getProducts= async()=>{
try{
const response = await axios.get(`http://localhost:5000/product-detail/${id}`)
console.log(response)
setProduct(response.data.data)
}
catch(error){
console.log(error)
}
}
useEffect(()=>{
getProducts()
const interval= setInterval(()=>{
getProducts()
},2000)
return ()=>{
clearInterval(interval)
}
},[])
  return (
    <div>
    <Hero1 />
    {
    product && (
   <div className="product-detail">
     <img src={product.image} alt="" />
     <h2>{product.name}</h2>
     <p>New price: $ {product.newPrice}</p>
     {
     product.oldPrice && <p>Old price <span className="old-price">$ {product.oldPrice}</span></p>
     }
     <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
    )
    }
    <div>
        <Footer />
    </div>
    </div>
  )
}
export default Hero39
