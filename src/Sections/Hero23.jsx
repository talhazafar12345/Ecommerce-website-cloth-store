




import { Link } from "react-router-dom"
function Hero23() {
const products=[

{
id:49,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
title:"Nike Shoes",
newPrice:20,
},

{
id:50,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
title:"12 Eco-Friendly Clothing Brands",
newPrice:120,
oldPrice:228,
},

{
id:51,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
title:"H&M Global Desi",
newPrice:130,
oldPrice:240,
},

{
id:52,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
title:"Short Sleeve Shirts For Men",
newPrice:112,
oldPrice:188,
},


{
id:53,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
title:"Regular Fit Crew-neck T-shirt",
newPrice:88,
oldPrice:65,
},


{
id:54,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
title:"Scuba Stand Collar Topper Jacket",
newPrice:78,
oldPrice:45,
},

{
id:55,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
title:"Gucci Carlton UK",
newPrice:13,
oldPrice:78,
},


{
id:56,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
title:"Zara Shoes Green",
newPrice:50,
oldPrice:30,
},


{
id:57,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
title:"Zara Solly White Shirt",
newPrice:56,
oldPrice:76,
},


{
id:58,
image:"https://chawkbazar.vercel.app/assets/images/products/p-19-m.png",
title:"Zara Shoes Green",
newPrice:23,
oldPrice:112,
},


{
id:59,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
title:"Women Fitted Neck T-Shirt",
newPrice:28,
oldPrice:30,

},

{
id:60,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
title:"Regular Fit Flannel Shirt",
newPrice:12,
}
]

  return (
    <div>


   <div className="product-container">
    {
    products.map((item)=>(

     <Link to={`/sun/detail/${item.id}`} className="product-card">
      <img src={item.image} alt="" />
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

export default Hero23
