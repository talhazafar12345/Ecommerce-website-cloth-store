import { Link } from "react-router-dom"




function Hero5() {
const products=[
{
id:75,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F1.jpg&w=384&q=100",
title:"Roadster Women Round Neck",
newPrice: 18,
},

{
id:76,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F2.jpg&w=384&q=100",
title:"Roadster Men Round Neck",
newPrice:20
},

{
id:77,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F3.jpg&w=384&q=100",
title:"Roadster Men Round Neck",
newPrice:22,
},


{
id:78,
image:"https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F4.jpg&w=384&q=100",
title:"Roadster Women Round Neck",
newPrice:33,
}
]


  return (
    <div className="new-arr">

      <h1>New Arrivals</h1>
    <div className="product-container">
      {
      products.map((item,index)=>(
      <Link key={index} to={`/new-arrival/detail/${item.id}`} className="product-card">
       <img src={item.image} alt="" />
       <h2>{item.title}</h2>
       <p>Price: $ {item.newPrice}</p>
      </Link>
      ))
      }
    </div>
    </div>
  )
}

export default Hero5
