




import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"
import Hero1 from "./Hero1"
import { useEffect } from "react"
import { cartContext } from "./Hero30"
import { useContext } from "react"


function Hero15() {

const {addToCart} = useContext(cartContext)

const {id} = useParams()

useEffect(()=>{
window.scrollTo(0,0)
},[])

const products=[

{
id:13,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
name:"Nike Shoes",
description:"NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
newPrice:40,
},

{
id:14,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
name:"12 Eco-Friendly Clothing Brands",
description:"12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
newPrice:20,
oldPrice:28,
},

{
id:15,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
name:"H&M Global Desi",
description:"Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless",
newPrice:30,
oldPrice:40,
},

{
id:16,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
name:"Short Sleeve Shirts For Men",
description:"From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
newPrice:12,
oldPrice:18,
},


{
id:17,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
name:"Regular Fit Crew-neck T-shirt",
description:"Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
newPrice:12,
oldPrice:16,
},


{
id:18,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
name:"Scuba Stand Collar Topper Jacket",
description:'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
newPrice:12,
oldPrice:17,
},

{
id:19,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
name:"Gucci Carlton UK",
description:"Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
newPrice:14,
oldPrice:21,
},


{
id:20,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
name:"Zara Shoes Green",
description:"Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
newPrice:250,
oldPrice:300,
},


{
id:21,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
name:"Zara Solly White Shirt",
description:"For a chic and smart look, don this white shirt from Solly by Allen Solly. Crafted from a cotton-nylon blend with a hint of stretch, this design features a dotted pattern. Wear this 3/4th sleeves shirt with trousers and wedges to a client meeting.",
newPrice:25,
oldPrice:32,
},


{
id:22,
image:"https://chawkbazar.vercel.app/assets/images/products/p-11-m.png",
name:"Armani Veni Vidi Vici",
description:"Fendi began life in 1925 as a fur and leather speciality store in Rome.",
newPrice:18,
oldPrice:20,
},


{
id:23,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
name:"Women Fitted Neck T-Shirt",
description:"All about the crisp cut and exceptional quality of the cotton, the Women Fitted V Neck Rib L/S T-Shirt won’t be one you’ll be tossing away ever.",
newPrice:20,
oldPrice:30,

},

{
id:24,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
name:"Regular Fit Flannel Shirt",
description:"Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.",
newPrice:8,
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

export default Hero15
