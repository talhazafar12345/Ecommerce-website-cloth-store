import { Link } from "react-router-dom"

import { cartContext } from "./Hero30"
import { useContext } from "react"


function Hero5() {

const {addToWishList} = useContext(cartContext)
const products=[
{
id:75,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F1.jpg&w=384&q=100",
name:"Roadster Women Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice: 18,
},

{
id:76,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F2.jpg&w=384&q=100",
name:"Roadster Men Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:20
},

{
id:77,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F3.jpg&w=384&q=100",
name:"Roadster Men Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:22,
},


{
id:78,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F4.jpg&w=384&q=100",
name:"Roadster Women Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:33,
}
]


  return (
    <div className="new-arr">

      <h1>New Arrivals</h1>
    <div className="product-container">
      {
      products.map((item,index)=>(
      <Link key={index} to={`/new-arrival/detail/${item.id}`} className="product-card">

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
       <p>Price: $ {item.newPrice}</p>
      </Link>
      ))
      }
    </div>
    </div>
  )
}

export default Hero5
