



import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"
import Hero1 from "./Hero1"
import { useEffect } from "react"
import { cartContext } from "./Hero30"
import { useContext } from "react"

function Hero21() {

const {addToCart} = useContext(cartContext)

useEffect(()=>{
window.scrollTo(0,0)
},[])

const {id} = useParams()
const products=[
{
id:37,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
name:"Nike Shoes",
description:"NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
newPrice:37,
},

{
id:38,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
name:"12 Eco-Friendly Clothing Brands",
description:"12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
newPrice:25,
oldPrice:30,
},

{
id:39,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
name:"H&M Global Desi",
description:"Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless",
newPrice:30,
oldPrice:40,
},

{
id:40,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
name:"Short Sleeve Shirts For Men",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:12,
oldPrice:20,
},


{
id:41,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
name:"Regular Fit Crew-neck T-shirt",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:12,
oldPrice:16,
},


{
id:42,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
name:"Scuba Stand Collar Topper Jacket",
description:"Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
newPrice:12,
oldPrice:18,
},

{
id:43,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
name:"Gucci Carlton UK",
description:'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
newPrice:14,
oldPrice:23,
},


{
id:44,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
name:"Zara Shoes Green",
description:"Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
newPrice:300,
oldPrice:400,
},


{
id:45,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
name:"Zara Solly White Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:25,
oldPrice:40,
},


{
id:46,
image:"https://chawkbazar.vercel.app/assets/images/products/p-19-m.png",
name:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:500,
oldPrice:600,
},


{
id:47,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
name:"Women Fitted Neck T-Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:44,
oldPrice:70,

},

{
id:48,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
name:"Regular Fit Flannel Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:18,
}
]

const item = products.find((item)=> item.id === Number(id))
  return (
    <div>


    <Hero1 />


     <div className="product-detail">
                <img src={item.image} alt="" />
                <h2> {item.name}</h2>
                <p className="des">{item.description}</p>
                <p>Price: $ {item.newPrice}</p>
                {
                    item.oldPrice && (
                        <p>Price: <span className="old-price">$ {item.oldPrice}</span> </p>
                    )
                }
                <button onClick={()=>addToCart(item)}>Add To Cart</button>
            </div>
            <div className="fti">
                <Footer/>
            </div>
      
    </div>
  )
}

export default Hero21
