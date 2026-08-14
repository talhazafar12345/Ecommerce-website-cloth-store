import { Link } from "react-router-dom"






function Hero11() {


const products=[

{
id:1,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&w=384&q=100",
title:"Blazer And A Neck Scarf",
oldPrice:13,
newPrice:23,
},

{
id:2,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
title:"12 Eco-Friendly Clothing Brands",
newPrice:20,
oldPrice:28,
},

{
id:3,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
title:"H&M Global Desi",
newPrice:30,
oldPrice:40,
},

{
id:4,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
title:"Short Sleeve Shirts For Men",
newPrice:12,
oldPrice:18,
},


{
id:5,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
title:"Regular Fit Crew-neck T-shirt",
newPrice:12,
oldPrice:16,
},


{
id:6,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
title:"Scuba Stand Collar Topper Jacket",
newPrice:12,
oldPrice:32,
},

{
id:7,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
title:"Gucci Carlton UK",
newPrice:14,
oldPrice:20,
},


{
id:8,
image:"https://chawkbazar.vercel.app/assets/images/products/p-1-m.png",
title:"Nike Black",
newPrice:11,
oldPrice:35,
},


{
id:9,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
title:"Zara Solly White Shirt",
newPrice:25,
oldPrice:32,
},


{
id:10,
image:"https://chawkbazar.vercel.app/assets/images/products/p-11-m.png",
title:"Armani Veni Vidi Vici",
newPrice:18,
oldPrice:23,
},


{
id:11,
image:"https://chawkbazar.vercel.app/assets/images/products/p-6-m.png",
title:"Oversized W Sweater",
newPrice:45,
oldPrice:76,

},

{
id:12,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
title:"Regular Fit Flannel Shirt",
newPrice:11,
}



]

  return (
    <div>

   
   <div className="product-container">


    {
    products.map((item,index)=>(

     <Link to={`/bags/detail/${item.id}`} className="product-card">
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

export default Hero11
