




import { Link } from "react-router-dom"
import { cartContext } from "./Hero30"
import { useContext } from "react"
function Hero26() {

const {addToWishList} = useContext(cartContext)
const products=[

{
id:61,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
name:"Nike Shoes",
description:"NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
newPrice:50,
},

{
id:62,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
name:"12 Eco-Friendly Clothing Brands",
description:"12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
newPrice:12,
oldPrice:28,
},

{
id:63,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
name:"H&M Global Desi",
description:"Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless",
newPrice:13,
oldPrice:24,
},

{
id:64,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
name:"Short Sleeve Shirts For Men",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:125,
oldPrice:118,
},


{
id:65,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
name:"Regular Fit Crew-neck T-shirt",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:8,
oldPrice:6,
},


{
id:66,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
name:"Scuba Stand Collar Topper Jacket",
description:"Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
newPrice:44,
oldPrice:34,
},

{
id:67,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
name:"Gucci Carlton UK",
description:'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
newPrice:20,
oldPrice:12,
},


{
id:68,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
name:"Zara Shoes Green",
description:"Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
newPrice:10,
oldPrice:3,
},


{
id:69,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
name:"Zara Solly White Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:5,
oldPrice:6,
},


{
id:70,
image:"https://chawkbazar.vercel.app/assets/images/products/p-19-m.png",
name:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:3,
oldPrice:22,
},


{
id:71,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
name:"Women Fitted Neck T-Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:128,
oldPrice:130,

},

{
id:72,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
name:"Regular Fit Flannel Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:120,
}
]

  return (
    <div>


   <div className="product-container">
    {
    products.map((item)=>(

     <Link to={`/watch/detail/${item.id}`} className="product-card">

      <div className="product-image">
      <img src={item.image} alt="" />

      <div className="wish-btn">
        <button onClick={(e)=>{
          e.preventDefault()
          addToWishList(item)
        }}> <i className="fa-solid fa-heart add"></i></button>
      </div>

      </div>
      <h2>{item.name}</h2>
      <p className="price-new"> $ {item.newPrice}</p>
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

export default Hero26
