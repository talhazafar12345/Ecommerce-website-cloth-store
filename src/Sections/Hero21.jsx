



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
title:"Nike Shoes",
description:"NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
newPrice:"$42",
},

{
id:38,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
title:"12 Eco-Friendly Clothing Brands",
description:"12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
newPrice:"$208",
oldPrice:"$281",
},

{
id:39,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
title:"H&M Global Desi",
description:"Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless",
newPrice:"$70",
oldPrice:"50",
},

{
id:40,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
title:"Short Sleeve Shirts For Men",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:"$120",
oldPrice:"$180",
},


{
id:41,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
title:"Regular Fit Crew-neck T-shirt",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:"$123",
oldPrice:"$162",
},


{
id:42,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
title:"Scuba Stand Collar Topper Jacket",
description:"Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
newPrice:"$122",
oldPrice:"$169",
},

{
id:43,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
title:"Gucci Carlton UK",
description:'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
newPrice:"$78",
oldPrice:"65",
},


{
id:44,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
title:"Zara Shoes Green",
description:"Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
newPrice:"$150",
oldPrice:"$100",
},


{
id:45,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
title:"Zara Solly White Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:"$250",
oldPrice:"$321",
},


{
id:46,
image:"https://chawkbazar.vercel.app/assets/images/products/p-19-m.png",
title:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:"$23",
oldPrice:"$201",
},


{
id:47,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
title:"Women Fitted Neck T-Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:"$28",
oldPrice:"$34",

},

{
id:48,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
title:"Regular Fit Flannel Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:"$18",
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
                <p>Price: {item.newPrice}</p>
                {
                    item.oldPrice && (
                        <p>Old Price <span className="old-price">{item.oldPrice}</span> </p>
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
