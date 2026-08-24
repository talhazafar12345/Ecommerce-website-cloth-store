import { Link } from "react-router-dom"


import { cartContext } from "./Hero30"
import { useContext } from "react"



function Hero11() {

const {addToWishList} = useContext(cartContext)

const products=[

{
id:1,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&w=384&q=100",
name:"Blazer And A Neck Scarf",
oldPrice:13,
newPrice:23,
},

{
id:2,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
name:"12 Eco-Friendly Clothing Brands",
newPrice:20,
oldPrice:28,
},

{
id:3,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
name:"H&M Global Desi",
newPrice:30,
oldPrice:40,
},

{
id:4,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
name:"Short Sleeve Shirts For Men",
newPrice:12,
oldPrice:18,
},


{
id:5,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
name:"Regular Fit Crew-neck T-shirt",
newPrice:12,
oldPrice:16,
},


{
id:6,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
name:"Scuba Stand Collar Topper Jacket",
newPrice:12,
oldPrice:32,
},

{
id:7,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
name:"Gucci Carlton UK",
newPrice:14,
oldPrice:20,
},


{
id:8,
image:"https://chawkbazar.vercel.app/assets/images/products/p-1-m.png",
name:"Nike Black",
newPrice:11,
oldPrice:35,
},


{
id:9,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
name:"Zara Solly White Shirt",
newPrice:25,
oldPrice:32,
},


{
id:10,
image:"https://chawkbazar.vercel.app/assets/images/products/p-11-m.png",
name:"Armani Veni Vidi Vici",
newPrice:18,
oldPrice:23,
},


{
id:11,
image:"https://chawkbazar.vercel.app/assets/images/products/p-6-m.png",
name:"Oversized W Sweater",
newPrice:45,
oldPrice:76,

},

{
id:12,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
name:"Regular Fit Flannel Shirt",
newPrice:11,
}



]

  return (
    <div>

   
   <div className="product-container">


    {
    products.map((item)=>(
     <Link to={`/bags/detail/${item.id}`} className="product-card">
      <div className="product-image">
      <img src={item.image} alt="" />
      <div className="wish-btn">
        <button onClick={(e)=>{
          e.preventDefault()
          addToWishList(item)

        }}>  <i className="fa-solid fa-heart add"></i></button>
      </div>
      </div>
      <h2>{item.name}</h2>
      <p>$ {item.newPrice}</p>
      {
      item.oldPrice && (
      <p><span className="old-price">$ {item.oldPrice}</span> </p>
     )
    }
     </Link>

    ))
    }













   </div>

    


    </div>
  )
}

export default Hero11
