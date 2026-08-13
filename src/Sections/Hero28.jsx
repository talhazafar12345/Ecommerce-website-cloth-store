



import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"
import { useEffect } from "react"
import Hero1 from "./Hero1"
import { cartContext } from "./Hero30"
import { useContext } from "react"

function Hero28() {

const {addToCart} = useContext(cartContext)

useEffect((item)=>{
window.scrollTo(0,0)
},[])


const {id} = useParams()
const products=[
{
id:75,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F1.jpg&w=384&q=100",
title:"Roadster Women Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:18,
},

{
id:76,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F2.jpg&w=384&q=100",
title:"Roadster Men Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:20,
},

{
id:77,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F3.jpg&w=384&q=100",
title:"Roadster Men Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:22,
},


{
id:78,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F4.jpg&w=384&q=100",
title:"Roadster Women Round Neck",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:33,
}
]

const item = products.find((item)=> item.id === Number(id))

  return (
    <div>

    <Hero1 />
      <div className="product-detail">
                <img src={item.image} alt="" />
                <h2> {item.title}</h2>
                 <p className="des">{item.description}</p>
                <p>Price: $ {item.newPrice}</p>
                <button onClick={()=>addToCart(item)}>Add To Cart</button>
            </div>


            <div className="fti">
                <Footer />
            </div>

    </div>
  )
}

export default Hero28
