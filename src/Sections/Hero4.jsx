


import { Link } from "react-router-dom"
function Hero4() {
  return (



    
    <div className="hero4-heading">

    <h1>Shop by category</h1>

    <div  className="hero4-flex">

    
    <div className="hero4-para">

    <Link className="hero4-image">
     <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fbags.jpg&w=384&q=100" alt="" />
    </Link>
     <p>Bags</p>

    </div>

    <div className="hero4-para">
        <Link className="hero4-image">
          <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fkid.jpg&w=256&q=100" alt="" />
        </Link>
       <p>Kids</p>
    </div>

    <div className="hero4-para">
        <Link className="hero4-image">
         <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fsneakers.jpg&w=256&q=100" alt="" />
        </Link>
        <p>Shoes</p>
    </div>


     <div className="hero4-para">
        <Link className="hero4-image">
         <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fsports.jpg&w=256&q=100" alt="" />
        </Link>
        <p>Sports</p>
    </div>


        <div className="hero4-para">
        <Link className="hero4-image">
         <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fsunglass.jpg&w=384&q=100" alt="" />
        </Link>
        <p>Sun Glasses</p>
    </div>



    
        <div className="hero4-para">
        <Link className="hero4-image">
         <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fwatch.jpg&w=384&q=100" alt="" />
        </Link>
        <p>Watch</p>
    </div>


    
      
    </div>
     </div>
  )
}

export default Hero4
