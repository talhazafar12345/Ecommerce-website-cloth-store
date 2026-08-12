import { Link } from "react-router-dom"






function Hero14() {


const products=[

{
id:13,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100",
title:"Nike Shoes",
newPrice:"$40",
},

{
id:14,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
title:"12 Eco-Friendly Clothing Brands",
newPrice:"$20",
oldPrice:"$28",
},

{
id:15,
image:"https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
title:"H&M Global Desi",
newPrice:"$30",
oldPrice:"$40",
},

{
id:16,
image:"https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
title:"Short Sleeve Shirts For Men",
newPrice:"$12",
oldPrice:"$18",
},


{
id:17,
image:"https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
title:"Regular Fit Crew-neck T-shirt",
newPrice:"$12",
oldPrice:"$16",
},


{
id:18,
image:"https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
title:"Scuba Stand Collar Topper Jacket",
newPrice:"$12",
oldPrice:"$16",
},

{
id:19,
image:"https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
title:"Gucci Carlton UK",
newPrice:"$14",
oldPrice:"19.99",
},


{
id:20,
image:"https://chawkbazar.vercel.app/assets/images/products/p-3-m.png",
title:"Zara Shoes Green",
newPrice:"$250",
oldPrice:"$300",
},


{
id:21,
image:"https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
title:"Zara Solly White Shirt",
newPrice:"$25",
oldPrice:"$32",
},


{
id:22,
image:"https://chawkbazar.vercel.app/assets/images/products/p-11-m.png",
title:"Armani Veni Vidi Vici",
newPrice:"$17.99",
oldPrice:"$20",
},


{
id:23,
image:"https://chawkbazar.vercel.app/assets/images/products/p-9-m.png",
title:"Women Fitted Neck T-Shirt",
newPrice:"$28",
oldPrice:"$30",

},

{
id:24,
image:"https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
title:"Regular Fit Flannel Shirt",
newPrice:"$8",
}



]

  return (
    <div>


   
   <div className="product-container">


    {
    products.map((item,index)=>(

     <Link to={`/kids/detail/${item.id}`} className="product-card">
      <img src={item.image} alt="" />
      <h2>{item.title}</h2>
      <p>{item.newPrice}</p>
      <p className="old-price">{item.oldPrice}</p>
     </Link>

    ))
    }













   </div>



    


    </div>
  )
}

export default Hero14
