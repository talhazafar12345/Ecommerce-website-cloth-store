



import { useParams } from "react-router-dom"
import Hero1 from "./Hero1"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import Footer from "../Footer/Footer"
import { cartContext } from "./Hero30"
import { useContext } from "react"
function Hero17() {

const {addToCart} = useContext(cartContext)

useEffect(()=>{
window.scrollTo(0,0)
},[])



const {id} = useParams()
const products=[

{
id:25,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
title:"Nike Shoes",
description:"NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
newPrice:40,
},

{
id:26,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
title:"12 Eco-Friendly Clothing Brands",
description:"12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
newPrice:20,
oldPrice:28,
},

{
id:27,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
title:"H&M Global Desi",
description:"Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless",
newPrice:30,
oldPrice:40,
},

{
id:28,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
title:"Short Sleeve Shirts For Men",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:12,
oldPrice:18,
},


{
id:29,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
title:"Regular Fit Crew-neck T-shirt",
description:"Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
newPrice:12,
oldPrice:16,
},


{
id:30,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
title:"Scuba Stand Collar Topper Jacket",
description:'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
newPrice:12,
oldPrice:23,
},

{
id:31,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
title:"Gucci Carlton UK",
description:"Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
newPrice:12,
oldPrice:22,
},


{
id:32,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
title:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:300,
oldPrice:400,
},


{
id:33,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
title:"Zara Solly White Shirt",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:25,
oldPrice:32,
},


{
id:34,
image:"https://chawkbazar.vercel.app/assets/images/products/p-19-m.png",
title:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:234,
oldPrice:200,
},


{
id:35,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
title:"Women Fitted Neck T-Shirt",
description:"For a chic and smart look, don this white shirt from Solly by Allen Solly. Crafted from a cotton-nylon blend with a hint of stretch, this design features a dotted pattern. Wear this 3/4th sleeves shirt with trousers and wedges to a client meeting.",
newPrice:28,
oldPrice:30,

},

{
id:36,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
title:"Regular Fit Flannel Shirt",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:8,
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
                <p>New Price: $ {item.newPrice}</p>
                {
                    item.oldPrice && (
                        <p>Old Price <span className="old-price">$ {item.oldPrice}</span> </p>
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

export default Hero17
