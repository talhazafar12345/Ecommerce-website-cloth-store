import { Link } from "react-router-dom"

import { cartContext } from "./Hero30"
import { useContext } from "react"
function Hero16() {

const {addToWishList} = useContext(cartContext)
const products=[

{
id:25,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
name:"Nike Shoes",
description:"NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
newPrice:40,
},

{
id:26,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
name:"12 Eco-Friendly Clothing Brands",
description:"12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
newPrice:20,
oldPrice:28,
},

{
id:27,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
name:"H&M Global Desi",
description:"Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless",
newPrice:30,
oldPrice:40,
},

{
id:28,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
name:"Short Sleeve Shirts For Men",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:12,
oldPrice:18,
},


{
id:29,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
name:"Regular Fit Crew-neck T-shirt",
description:"Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
newPrice:12,
oldPrice:16,
},


{
id:30,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
name:"Scuba Stand Collar Topper Jacket",
description:'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
newPrice:12,
oldPrice:23,
},

{
id:31,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
name:"Gucci Carlton UK",
description:"Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
newPrice:14,
oldPrice:22,
},


{
id:32,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
name:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:300,
oldPrice:400,
},


{
id:33,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
name:"Zara Solly White Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:25,
oldPrice:32,
},


{
id:34,
image:"https://chawkbazar.vercel.app/assets/images/products/p-19-m.png",
name:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:234,
oldPrice:200,
},


{
id:35,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
name:"Women Fitted Neck T-Shirt",
description:"For a chic and smart look, don this white shirt from Solly by Allen Solly. Crafted from a cotton-nylon blend with a hint of stretch, this design features a dotted pattern. Wear this 3/4th sleeves shirt with trousers and wedges to a client meeting.",
newPrice:28,
oldPrice:30,

},

{
id:36,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
name:"Regular Fit Flannel Shirt",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:8,
}
]

  return (
    <div>


   <div className="product-container">
    {
    products.map((item)=>(

     <Link to={`/shoes/detail/${item.id}`} className="product-card">
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
      <p className="price-new">$ {item.newPrice}</p>
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

export default Hero16
