






import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Hero1 from "./Hero1"
import axios from "axios"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import { cartContext } from "./Hero30"
import { useContext } from "react"

function Hero38() {

const {addToWishList} = useContext(cartContext)
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
      products.map((item)=>(
         
           <Link to={`/product-detail/${item._id}`} className="product-card">

            <div className="product-image">
            <img src={item.image} alt="" />
            <div className="wish-btn">
              <button onClick={(e)=>{
                e.preventDefault()
                addToWishList(item)
              }}><i className="fa-solid fa-heart add"></i></button>
            </div>
            </div>

            <h2>{item.name}</h2>
            <p>$ {item.newPrice}</p>
            {
            item.oldPrice && <p className="old-price">$ {item.oldPrice}</p>
            }
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