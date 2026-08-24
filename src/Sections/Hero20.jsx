import { Link } from "react-router-dom"



import { cartContext } from "./Hero30"
import { useContext } from "react"



function Hero20() {

const {addToWishList} = useContext(cartContext)

const products=[

{
id:37,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
title:"Nike Shoes",
newPrice:55,
},

{
id:38,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
title:"12 Eco-Friendly Clothing Brands",
newPrice:25,
oldPrice:30,
},

{
id:39,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
title:"H&M Global Desi",
newPrice:30,
oldPrice:40,
},

{
id:40,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
title:"Short Sleeve Shirts For Men",
newPrice:12,
oldPrice:20,
},


{
id:41,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
title:"Regular Fit Crew-neck T-shirt",
newPrice:12,
oldPrice:16,
},


{
id:42,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
title:"Scuba Stand Collar Topper Jacket",
newPrice:12,
oldPrice:18,
},

{
id:43,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
title:"Gucci Carlton UK",
newPrice:14,
oldPrice:23,
},


{
id:44,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
title:"Zara Shoes Green",
newPrice:300,
oldPrice:400,
},


{
id:45,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
title:"Zara Solly White Shirt",
newPrice:25,
oldPrice:40,
},


{
id:46,
image:"https://chawkbazar.vercel.app/assets/images/products/p-19-m.png",
title:"Zara Shoes Green",
newPrice:500,
oldPrice:600,
},


{
id:47,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
title:"Women Fitted Neck T-Shirt",
newPrice:44,
oldPrice:70,

},

{
id:48,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
title:"Regular Fit Flannel Shirt",
newPrice:18,
}
]

  return (
    <div>


   <div className="product-container">
    {
    products.map((item)=>(

     <Link to={`/sports/detail/${item.id}`} className="product-card">

      <div className="product-image">
      <img src={item.image} alt="" />

      <div className="wish-btn">
        <button onClick={(e)=>{
          e.preventDefault()
          addToWishList(item)
        }}><i className="fa-solid fa-heart add"></i></button>
      </div>

      </div>
      <h2>{item.title}</h2>
      <p>$ {item.newPrice}</p>
      <p className="old-price">$ {item.oldPrice}</p>
     </Link>

    ))
    }
   </div>



    


    </div>
  )
}

export default Hero20
